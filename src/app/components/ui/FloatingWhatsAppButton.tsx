// src/app/components/ui/FloatingWhatsAppButton.tsx

import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "../../data/site";

// CAMBIO: Este botón no necesita "use client" porque solo es un enlace.
// Menos JavaScript para el navegador.

export default function FloatingWhatsAppButton() {
  return (
    <a
      href={siteConfig.contact.whatsappMessage}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition hover:scale-105 hover:bg-green-600 md:h-16 md:w-16"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="text-3xl md:text-4xl" />
    </a>
  );
}