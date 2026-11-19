"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { destinations } from "@/content/destinations";
import { packages } from "@/content/packages";
import { site } from "@/content/site";
import { buildWhatsAppUrl, clampTravellers, todayLocal, validateEnquiry } from "@/lib/booking";
import { fill } from "@/lib/text";

const BookingContext = createContext(null);
const t = site.booking;

const emptyForm = {
  name: "",
  phone: "",
  email: "",
  destination: "",
  pkg: "",
  date: "",
  travellers: "2",
  requirements: "",
};

const emptyPassenger = { name: "", age: "" };

export function BookingProvider({ children }) {
  const dialogRef = useRef(null);
  const [form, setForm] = useState(emptyForm);
  const [passengers, setPassengers] = useState([emptyPassenger, emptyPassenger]);
  const [errors, setErrors] = useState({});
  const [waUrl, setWaUrl] = useState("");
  const [minDate, setMinDate] = useState("");

  // Set on the client only, to avoid server/client date mismatches.
  useEffect(() => {
    setMinDate(todayLocal());
  }, []);

  function open({ destination = "", pkg = "" } = {}) {
    setForm((f) => ({ ...f, destination, pkg }));
    setErrors({});
    setWaUrl("");
    dialogRef.current?.showModal();
  }

  function close() {
    dialogRef.current?.close();
  }

  function setField(key) {
    return (e) => setForm((f) => ({ ...f, [key]: e.target.value }));
  }

  function changeTravellers(e) {
    const count = clampTravellers(e.target.value);
    setForm((f) => ({ ...f, travellers: e.target.value }));
    setPassengers((list) =>
      Array.from({ length: count }, (_, i) => list[i] ?? emptyPassenger)
    );
  }

  function setPassenger(index, key, value) {
    setPassengers((list) =>
      list.map((p, i) => (i === index ? { ...p, [key]: value } : p))
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    const found = validateEnquiry(form, passengers);
    setErrors(found);
    if (Object.keys(found).length) return;

    const url = buildWhatsAppUrl(site.whatsappNumber, form, passengers);
    setWaUrl(url);
    window.open(url, "_blank", "noopener");
  }

  return (
    <BookingContext.Provider value={{ open }}>
      {children}

      <dialog
        ref={dialogRef}
        className="dlg"
        onClick={(e) => {
          // A click on the backdrop lands on the dialog itself.
          if (e.target === dialogRef.current) close();
        }}
      >
        <form className="f" onSubmit={handleSubmit} noValidate>
          <h2 className="dlg-title">{t.title}</h2>
          <p className="muted-note">{t.note}</p>

          <label>
            {t.nameLabel}
            <input
              value={form.name}
              onChange={setField("name")}
              autoComplete="name"
            />
            <span className="err">{errors.name}</span>
          </label>

          <div className="two">
            <label>
              {t.phoneLabel}
              <input
                type="tel"
                value={form.phone}
                onChange={setField("phone")}
                autoComplete="tel"
              />
              <span className="err">{errors.phone}</span>
            </label>
            <label>
              {t.emailLabel}
              <input
                type="email"
                value={form.email}
                onChange={setField("email")}
                autoComplete="email"
              />
              <span className="err">{errors.email}</span>
            </label>
          </div>

          <div className="two">
            <label>
              {t.destinationLabel}
              <select value={form.destination} onChange={setField("destination")}>
                <option value="">{t.destinationNone}</option>
                {destinations.map((d) => (
                  <option key={d.name}>{d.name}</option>
                ))}
              </select>
            </label>
            <label>
              {t.packageLabel}
              <select value={form.pkg} onChange={setField("pkg")}>
                <option value="">{t.packageNone}</option>
                {packages.map((p) => (
                  <option key={p.name}>{p.name}</option>
                ))}
              </select>
            </label>
          </div>

          <div className="two">
            <label>
              {t.dateLabel}
              <input
                type="date"
                min={minDate}
                value={form.date}
                onChange={setField("date")}
              />
            </label>
            <label>
              {t.travellersLabel}
              <input
                type="number"
                min="1"
                max={t.maxTravellers}
                value={form.travellers}
                onChange={changeTravellers}
              />
            </label>
          </div>

          <div className="pax">
            {passengers.map((p, i) => (
              <div className="two" key={i}>
                <label>
                  {fill(t.passengerName, { number: i + 1 })}
                  <input
                    value={p.name}
                    onChange={(e) => setPassenger(i, "name", e.target.value)}
                  />
                </label>
                <label>
                  {t.passengerAge}
                  <input
                    type="number"
                    min="0"
                    max="120"
                    value={p.age}
                    onChange={(e) => setPassenger(i, "age", e.target.value)}
                  />
                </label>
              </div>
            ))}
            <span className="err">{errors.passengers}</span>
          </div>

          <label>
            {t.requirementsLabel}
            <textarea
              rows={3}
              value={form.requirements}
              onChange={setField("requirements")}
            />
          </label>

          <div className="row">
            <button type="submit" className="btn">
              {t.submitButton}
            </button>
            <button type="button" className="btn line" onClick={close}>
              {t.closeButton}
            </button>
          </div>

          {waUrl && (
            <div className="ok">
              {t.readyText}{" "}
              <a href={waUrl} target="_blank" rel="noopener noreferrer">
                {t.openLink}
              </a>
              {t.afterLink}
            </div>
          )}
        </form>
      </dialog>
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used inside BookingProvider");
  return ctx;
}
