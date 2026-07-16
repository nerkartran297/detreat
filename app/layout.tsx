import type { Metadata } from "next";
import { Prata, Archivo, Manrope } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/i18n";
import BackToTop from "@/components/BackToTop";

const prata = Prata({
  weight: "400",
  subsets: ["latin", "vietnamese"],
  variable: "--font-prata",
  display: "swap",
});

const archivo = Archivo({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "vietnamese"],
  variable: "--font-archivo",
  display: "swap",
});

const manrope = Manrope({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin", "vietnamese"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "De-treat — Your Sound Solution",
  description:
    "Acoustic treatment for recording studios, podcast rooms, listening rooms and commercial spaces. Measured before and after — never guesswork.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${prata.variable} ${archivo.variable} ${manrope.variable}`}
    >
      <body>
        <LangProvider>
          {children}
          <BackToTop />
        </LangProvider>
      </body>
    </html>
  );
}
