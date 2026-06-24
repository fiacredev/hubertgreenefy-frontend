import LazySection from "./components/shared/ui/LazySection";
import Header from "./components/shared/Header";
import Hero from "./components/shared/ui/Hero";
import About from "./components/shared/About";
import Services from "./components/shared/Services";
import FQAs from "./components/shared/FAQs";
import FacilitiesWeClean from "./components/shared/Places";
import Promotion from "./components/shared/Promotion";
import Contact from "./components/shared/Contact";
import Footer from "./components/shared/Footer";
import GoToPromo from "./components/shared/GoToPromo";
import BackToTop from "./components/shared/BackToTop";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css"

export const metadata: Metadata = {
  title: "Professional Cleaning & Snow Removal Services | HubertGreenefy",
  description:
    "Professional cleaning services for homes, offices, and commercial facilities.",
};

export default function Home() {
  
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "HubertGreenefy",
  url: "https://hubertgreenefy-frontend.vercel.app",
  description:
    "Professional residential and commercial cleaning services",
  telephone: "+0000000000",
  address: {
    "@type": "PostalAddress",
    addressCountry: "RW",
  },
  areaServed: "Kigali",
  sameAs: [],
};

  return (
    <div className="min-h-screen bg-gray-50 text-foreground">

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <Header />
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <GoToPromo />

          
          <LazySection>
            <About />
          </LazySection>

          <LazySection>
            <Services />
          </LazySection>

          <LazySection>
            <FacilitiesWeClean />
          </LazySection>

          <LazySection>
            <Promotion />
          </LazySection>

          <LazySection>
            <FQAs />
          </LazySection>

          <LazySection>
            <Contact />
          </LazySection>
          
          <BackToTop />
          <Footer />
          {/* just come back at top */}

      </div>
      {/* Final CTA Section of air flow*/}
      {/* <Footer />
      <BackToTop /> */}
    </div>
  );
}