"use client";

import { site } from "@/content/site";
import { useBooking } from "./BookingDialog";

export default function Header() {
  const { open } = useBooking();

  return (
    <header className="site-header">
      <div className="wrap">
        <nav className="nav" aria-label="Main">
          <a className="logo" href="#top">
            {site.name}
          </a>
          {site.navLinks.map((link) => (
            <a key={link.href} className="l" href={link.href}>
              {link.label}
            </a>
          ))}
          <button className="btn" onClick={() => open()}>
            {site.ui.headerButton}
          </button>
        </nav>
      </div>
    </header>
  );
}
