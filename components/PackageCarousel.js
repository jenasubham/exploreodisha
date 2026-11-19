"use client";

import { useEffect, useRef, useState } from "react";
import { packages } from "@/content/packages";
import { destinations } from "@/content/destinations";
import { site } from "@/content/site";
import { fill } from "@/lib/text";
import { useBooking } from "./BookingDialog";

const ui = site.ui;
const N = packages.length;
const ANGLE = 52; // degrees between neighbouring cards, so the sides stay visible

export default function PackageCarousel() {
  const { open } = useBooking();
  const ringRef = useRef(null);
  // `turn` keeps counting up or down. The front package is turn mod N.
  const [turn, setTurn] = useState(0);
  const [radius, setRadius] = useState(260);
  const active = ((turn % N) + N) % N;

  // Ring radius depends on the card width so cards sit side by side.
  useEffect(() => {
    const ring = ringRef.current;
    if (!ring) return;
    function measure() {
      const card = ring.firstElementChild;
      if (!card) return;
      const gap = 24;
      setRadius((card.offsetWidth + gap) / 2 / Math.tan((ANGLE / 2) * (Math.PI / 180)));
    }
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(ring);
    return () => ro.disconnect();
  }, []);

  const go = (by) => setTurn((t) => t + by);

  function goToIndex(i) {
    // Shortest way round from the current card to card i.
    let diff = i - active;
    if (diff > N / 2) diff -= N;
    if (diff < -N / 2) diff += N;
    go(diff);
  }

  // Swipe or drag left/right to rotate.
  const drag = useRef({ down: false, x: 0, moved: false });

  function onPointerDown(e) {
    drag.current = { down: true, x: e.clientX, moved: false };
  }
  function onPointerUp(e) {
    const d = drag.current;
    if (!d.down) return;
    d.down = false;
    const dx = e.clientX - d.x;
    if (Math.abs(dx) > 50) {
      d.moved = true;
      go(dx < 0 ? 1 : -1);
    }
  }
  function onClickCapture(e) {
    // A swipe should not trigger a button underneath it.
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  }
  function onKeyDown(e) {
    if (e.key === "ArrowRight") go(1);
    if (e.key === "ArrowLeft") go(-1);
  }

  return (
    <>
      <div
        className="stage"
        tabIndex={0}
        role="region"
        aria-label={ui.carouselLabel}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (drag.current.down = false)}
        onClickCapture={onClickCapture}
      >
        <div className="scene">
          <div
            className="ring"
            ref={ringRef}
            style={{
              transform: `translateZ(${-radius}px)`,
            }}
          >
            {packages.map((p, i) => {
              const dest = destinations.find((d) => d.name === p.locations[0]);
              const colors = dest ? dest.colors : ["#1b6f8a", "#1f4a3a"];

              // Distance from the front card, wrapped to the shortest way round.
              let diff = i - active;
              if (diff > N / 2) diff -= N;
              if (diff < -N / 2) diff += N;
              const front = diff === 0;
              const near = Math.abs(diff) === 1;
              const far = Math.abs(diff) >= 2;

              // Each card sits on the ring at an angle set by its distance from
              // the front. Cards two or more steps away are hidden, so wrapping
              // round the ring never shows a card flying across.
              const slot = diff * ANGLE;

              return (
                <article
                  className={`card pkg${front ? " front" : ""}`}
                  key={p.name}
                  style={{
                    transform: `rotateY(${slot}deg) translateZ(${radius}px)`,
                    opacity: front ? 1 : near ? 0.6 : 0,
                    pointerEvents: front ? "auto" : "none",
                    visibility: far ? "hidden" : "visible",
                  }}
                  aria-hidden={!front}
                  inert={!front}
                >
                  <div
                    className="ph"
                    style={
                      p.image
                        ? { background: `linear-gradient(transparent 40%, #000a), center / cover url(${p.image})` }
                        : { background: `linear-gradient(160deg,${colors.join(",")})` }
                    }
                  >
                    {fill(ui.packageDays, { days: p.days, category: p.category })}
                  </div>

                  <div className="b">
                    <h3>{p.name}</h3>
                    <p>{p.area}</p>
                    <div className="price">
                      <small>{ui.packageFrom} </small>₹{p.price.toLocaleString("en-IN")}
                      <small> {ui.packagePerPerson}</small>
                    </div>
                    <ul className="hl">
                      {p.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                    <details>
                      <summary>{ui.itineraryTitle}</summary>
                      <ol>
                        {p.itinerary.map((step, j) => (
                          <li key={j}>{step}</li>
                        ))}
                      </ol>
                    </details>
                    <div className="row">
                      <button
                        className="btn"
                        onClick={() => open({ destination: p.locations[0], pkg: p.name })}
                      >
                        {ui.bookNowButton}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      <div className="ctl">
        <button className="arr" onClick={() => go(-1)} aria-label={ui.previousPackage}>
          &lsaquo;
        </button>
        <div className="dots">
          {packages.map((p, i) => (
            <button
              key={p.name}
              className={`dot${i === active ? " on" : ""}`}
              aria-label={fill(ui.showPackage, { number: i + 1 })}
              onClick={() => goToIndex(i)}
            />
          ))}
        </div>
        <button className="arr" onClick={() => go(1)} aria-label={ui.nextPackage}>
          &rsaquo;
        </button>
      </div>
    </>
  );
}
