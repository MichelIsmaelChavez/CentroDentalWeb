// src/app/page.tsx

import HeroSection from "./components/sections/HeroSection";
import WelcomeSection from "./components/sections/WelcomeSection";
import ServicesPreviewSection from "./components/sections/ServicesPreviewSection";
import TeamPreviewSection from "./components/sections/TeamPreviewSection";
import AboutPreviewSection from "./components/sections/AboutPreviewSection";
import ScheduleSection from "./components/sections/ScheduleSection";
import ContactSection from "./components/sections/ContactSection";
import FloatingWhatsAppButton from "./components/ui/FloatingWhatsAppButton";
import ScrollToTopButton from "./components/ui/ScrollToTopButton";

// CAMBIO PRINCIPAL:
// Quitamos "use client" de la página principal.
// Ahora la Home es más ligera y cada sección está separada.

export default function Home() {
  return (
    <>
      <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-800">
        <HeroSection />
        <WelcomeSection />
        <ServicesPreviewSection />
        <TeamPreviewSection />
        <AboutPreviewSection />
        <ScheduleSection />
        <ContactSection />
      </main>


      <FloatingWhatsAppButton />
      <ScrollToTopButton />
    </>
  );
}