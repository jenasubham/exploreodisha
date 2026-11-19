import { gems } from "@/content/gems";
import { site } from "@/content/site";
import DestinationPhoto from "./DestinationPhoto";

export function Why() {
  return (
    <section className="sec why" id="about">
      <div className="wrap">
        <h2>{site.whyTitle}</h2>
        <p className="sub">{site.whyIntro}</p>
        <div className="grid">
          {site.whyReasons.map((r) => (
            <article className="card dcard" key={r.title}>
              <div className="dphoto">
                <DestinationPhoto place={{ ...r, name: r.title }} />
              </div>
              <div className="b">
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Gems() {
  return (
    <section className="sec" id="gems">
      <div className="wrap">
        <h2>{site.gemsTitle}</h2>
        <p className="sub">{site.gemsIntro}</p>
        <div className="grid">
          {gems.map((g) => (
            <article className="card dcard" key={g.name}>
              <div className="dphoto">
                <DestinationPhoto place={g} />
              </div>
              <div className="b">
                <h3>{g.name}</h3>
                <p>{g.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer id="contact">
      <div className="wrap">
        <div className="cols">
          <div>
            <h3>{site.name}</h3>
            <p>{site.tagline}</p>
          </div>
          <div>
            <h3>{site.ui.footerContactTitle}</h3>
            <p>
              {site.address}
              <br />
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <br />
              <a
                href={`https://wa.me/${site.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {site.ui.footerWhatsApp}
              </a>
            </p>
          </div>
          <div>
            <h3>{site.ui.footerLinksTitle}</h3>
            <p>
              {site.navLinks.filter((l) => l.footer).map((l, i) => (
                <span key={l.href}>
                  {i > 0 && <br />}
                  <a href={l.href}>{l.label}</a>
                </span>
              ))}
            </p>
          </div>
        </div>
        <p style={{ marginTop: 28, opacity: 0.8 }}>{site.copyright}</p>
      </div>
    </footer>
  );
}
