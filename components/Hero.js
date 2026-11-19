"use client";

import { site } from "@/content/site";
import { useBooking } from "./BookingDialog";

const spokes = Array.from({ length: 24 }, (_, i) => i * 15);

// Konark-style wheel: 24 spokes, ornamented rim, carved hub.
function KonarkWheel() {
  return (
    <svg
      className="wheel"
      viewBox="-100 -100 200 200"
      aria-hidden="true"
      fill="none"
      stroke="#fff"
      strokeWidth="1.6"
    >
      <circle r="96" strokeWidth="5" />
      <circle r="88" strokeWidth="2" />
      <circle r="78" />
      {spokes.map((a) => (
        <g key={a} transform={`rotate(${a})`}>
          <line x1="0" y1="-22" x2="0" y2="-78" strokeWidth="2.2" />
          <circle cx="0" cy="-92" r="3" fill="#fff" stroke="none" />
        </g>
      ))}
      {spokes.map((a) => (
        <circle
          key={`m${a}`}
          cx="0"
          cy="-56"
          r="3.5"
          fill="#fff"
          stroke="none"
          transform={`rotate(${a + 7.5})`}
        />
      ))}
      <circle r="22" strokeWidth="2.4" />
      <circle r="14" />
      <circle r="6" fill="#fff" stroke="none" />
    </svg>
  );
}

export default function Hero() {
  const { open } = useBooking();
  const image = site.hero.image;

  return (
    <div
      className={`hero${image ? " hero-photo" : ""}`}
      style={
        image
          ? {
              background: `linear-gradient(90deg, #140c06e6 0%, #140c06a0 50%, #140c0640 100%), center / cover no-repeat url(${image})`,
            }
          : undefined
      }
    >
      {!image && <KonarkWheel />}

      {!image && (
      <svg
        className="temples"
        viewBox="0 -20 1200 170"
        preserveAspectRatio="xMidYMax slice"
        aria-hidden="true"
      >
        <defs>
          <g id="temple">
            <path d="M10 150V120H18V100H26Q30 50 50 8Q70 50 74 100H82V120H90V150Z" />
            <circle cx="50" cy="5" r="4" />
            <path d="M90 150V125L110 108 130 125V150Z" />
          </g>
        </defs>
        <use href="#temple" transform="translate(60 0)" />
        <use href="#temple" transform="translate(430 30) scale(.8)" />
        <use href="#temple" transform="translate(840 -15) scale(1.1)" />
      </svg>
      )}

      <div className="wrap">
        <h1>{site.hero.title}</h1>
        <p>{site.hero.text}</p>
        <div className="cta">
          <a className="btn" href="#destinations">
            {site.ui.heroPrimaryButton}
          </a>
          <button className="btn alt" onClick={() => open()}>
            {site.ui.heroSecondaryButton}
          </button>
        </div>
      </div>
    </div>
  );
}
