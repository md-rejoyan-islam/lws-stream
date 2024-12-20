import Header from "@/components/shared/header";
import "./globals.css";

import { Exo_2, Play } from "next/font/google";

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const play = Play({
  variable: "--font-play",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Home",
  description: "Generated by create next app",
};

export default function RootLayout({ children, params: { lang = "en" } }) {
  return (
    <html lang={lang}>
      <body
        className={`${exo2.variable} ${play.variable}  antialiased bg-color-bg text-white font-exo container mx-auto px-4 py-4`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
