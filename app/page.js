import { BookingProvider } from "@/components/BookingDialog";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import PackageCarousel from "@/components/PackageCarousel";
import { Why, Gems, Footer } from "@/components/StaticSections";
import { site } from "@/content/site";

// Builds the background from content/site.js → background.
function backgroundValue(path) {
  if (!path) return "none";
  return site.background.fit === "cover"
    ? `linear-gradient(var(--wash), var(--wash)), url(${path})`
    : `url(${path})`;
}
const tradBackground = {
  "--pattern-light": backgroundValue(site.background.light),
  "--pattern-dark": backgroundValue(site.background.dark),
};

export default function Home() {
  return (
    <BookingProvider>
      <Header />
      <div className="band" aria-hidden="true" />

      <main id="top">
        <Hero />

        {/* Traditional Odisha backdrop behind destinations and packages */}
        <div className={`trad${site.background.fit === "cover" ? " bg-cover" : ""}`} style={tradBackground}>
          <Destinations />

          <section className="sec" id="packages" style={{ paddingTop: 0 }}>
            <div className="wrap">
              <h2>{site.packagesTitle}</h2>
              <p className="sub">{site.packagesIntro}</p>
              <PackageCarousel />
            </div>
          </section>
        </div>

        <Why />
        <Gems />
      </main>

      <div className="band" aria-hidden="true" />
      <Footer />
    </BookingProvider>
  );
}
