import { AnnouncementBar } from "@/components/AnnouncementBar";
import { BookSection } from "@/components/BookSection";
import { Care } from "@/components/Care";
import { Clinician } from "@/components/Clinician";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Journey } from "@/components/Journey";
import { Location } from "@/components/Location";
import { Marquee } from "@/components/Marquee";
import { RevealInit } from "@/components/RevealInit";
import { StickyActions } from "@/components/StickyActions";

export default function HomePage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-ivory focus:px-4 focus:py-2 focus:text-forest"
      >
        Skip to content
      </a>
      <AnnouncementBar />
      <Header />
      <main id="main">
        <Hero />
        <Marquee />
        <Care />
        <Journey />
        <Gallery />
        <Clinician />
        <BookSection />
        <Location />
        <FAQ />
      </main>
      <Footer />
      <StickyActions />
      <RevealInit />
    </>
  );
}
