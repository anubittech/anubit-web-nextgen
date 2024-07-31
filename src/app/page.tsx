"use client";
import HeroSection from "@/components/section/HeroSection";
import AboutSection from "@/components/section/AboutSection";
import ContactSection from "@/components/section/ContactSection";
import ServiceSection from "@/components/section/ServiceSection";
import WorkSection from "@/components/section/WorkSection";
import FAQ from "@/components/section/FAQ";
import Preloader from "@/components/ui/preloader";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
// import ScrollTop from '@/components/ui/ScrollTop'
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [isLoading]);
  return (
    <main className="flex MainContent min-h-full w-full flex-col items-center justify-center">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <WorkSection/>
      <FAQ />
      <ContactSection />
    </main>
  );
}
