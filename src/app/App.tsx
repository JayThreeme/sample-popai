import React from "react";
import { Navigation } from "@/app/components/Navigation";
import { HeroSection } from "@/app/components/HeroSection";
import { Section1 } from "@/app/components/Section1";
import { Section2 } from "@/app/components/Section2";
import { Section3 } from "@/app/components/Section3";
import { Section4 } from "@/app/components/Section4";
import { Section5 } from "@/app/components/Section5";
import { Section6 } from "@/app/components/Section6";
import { Section7 } from "@/app/components/Section7";
import { Footer } from "@/app/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-inter text-gray-900">
      <Navigation />
      <main>
        <HeroSection />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
      </main>
      <Footer />
    </div>
  );
}
