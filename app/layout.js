import "./globals.css";
import { BookingProvider } from "@/components/BookingDialog";
import MusicPlayer from "@/components/MusicPlayer";

export const metadata = {
  title: "Explore Odisha",
  description: "Odisha travel packages and tours",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BookingProvider>{children}</BookingProvider>
        <MusicPlayer />
      </body>
    </html>
  );
}