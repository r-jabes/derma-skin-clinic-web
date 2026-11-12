import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const display = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#f7f5f0",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dermaskinclinicrwanda.com"),
  title: {
    default: "Derma Skin Clinic Rwanda | Dermatologist in Kigali",
    template: "%s | Derma Skin Clinic Rwanda",
  },
  description:
    "Dermatologist-led medical and cosmetic dermatology in Gishushu, Kigali. Consultations from 20,000 RWF. Partners include Eden Care, SONARWA and RSSB.",
  keywords: [
    "dermatology clinic Kigali",
    "dermatologist Kigali",
    "skin clinic Rwanda",
    "medical dermatology Kigali",
    "cosmetic dermatology Kigali",
    "Derma Skin Clinic Rwanda",
    "acne treatment Kigali",
    "laser hair removal Kigali",
  ],
  openGraph: {
    title: "Derma Skin Clinic Rwanda | Dermatologist in Kigali",
    description:
      "Your journey to clear skin — medical and aesthetic dermatology at Lemigo Hotel, Gishushu.",
    type: "website",
    locale: "en_RW",
    siteName: "Derma Skin Clinic Rwanda",
    url: "https://www.dermaskinclinicrwanda.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Derma Skin Clinic Rwanda",
    description:
      "Dermatologist-led skin care in Kigali. Book a consultation via WhatsApp.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable} antialiased`}>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
