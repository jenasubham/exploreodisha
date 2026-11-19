"use client";

import { useMemo, useState } from "react";
import { destinations } from "@/content/destinations";
import { site } from "@/content/site";
import { useBooking } from "./BookingDialog";
import DestinationPhoto from "./DestinationPhoto";
import { fill } from "@/lib/text";

const ui = site.ui;

const categories = [...new Set(destinations.map((d) => d.category))];
const locations = [...new Set(destinations.map((d) => d.location))].sort();

// Moves the page back to the destinations section after switching views.
function scrollToSection() {
  requestAnimationFrame(() => {
    document
      .getElementById("destinations")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

export default function Destinations() {
  const { open } = useBooking();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [selectedName, setSelectedName] = useState(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return destinations.filter(
      (d) =>
        (!q || (d.name + " " + d.location).toLowerCase().includes(q)) &&
        (!category || d.category === category) &&
        (!location || d.location === location)
    );
  }, [query, category, location]);

  const selected = destinations.find((d) => d.name === selectedName);

  function showAbout(name) {
    setSelectedName(name);
    scrollToSection();
  }

  function showList() {
    setSelectedName(null);
    scrollToSection();
  }

  // About page: replaces the card list.
  if (selected) {
    return (
      <section className="sec" id="destinations">
        <div className="wrap">
          <article className="dest-detail">
            <button className="btn line back" onClick={showList}>
              {ui.backButton}
            </button>
            <DestinationPhoto place={selected} large />
            <h2>{selected.name}</h2>
            <p className="meta">
              {selected.category} · {selected.location}
            </p>
            <p className="about">{selected.about}</p>
            <ul>
              {selected.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <button
              className="btn"
              onClick={() => open({ destination: selected.name })}
            >
              {fill(ui.enquireButton, { name: selected.name })}
            </button>
          </article>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="sec" id="destinations">
        <div className="wrap">
          <h2>{site.destinationsTitle}</h2>
          <p className="sub">{site.destinationsIntro}</p>

          <form className="search" role="search" onSubmit={(e) => e.preventDefault()}>
            <input
              type="search"
              placeholder={ui.searchPlaceholder}
              aria-label={ui.searchLabel}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <select
              aria-label="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">{ui.allCategories}</option>
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
            <select
              aria-label="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">{ui.allLocations}</option>
              {locations.map((l) => (
                <option key={l}>{l}</option>
              ))}
            </select>
          </form>

          <div className="grid" aria-live="polite">
            {results.length ? (
              results.map((d) => (
                <article className="card dcard" key={d.name}>
                  <div className="dphoto">
                    <DestinationPhoto place={d} />
                    <span className="chip">{d.category}</span>
                  </div>
                  <div className="b">
                    <h3>{d.name}</h3>
                    <p className="loc">{d.location}</p>
                    <p>{d.description}</p>
                    <button className="btn line more" onClick={() => showAbout(d.name)}>
                      {fill(ui.aboutButton, { name: d.name })}
                      <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </article>
              ))
            ) : (
              <div className="empty">
                {ui.noResults}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
