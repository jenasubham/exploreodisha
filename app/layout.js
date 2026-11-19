
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";
import MusicPlayer from "../components/MusicPlayer";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata = {
  title: `${site.name} – ${site.tagline.replace(/\.$/, "")}`,
  description: site.description,
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${hanken.variable}`}>
      <body>
        {children}
        <MusicPlayer />
      </body>
    </html>
  );
}
