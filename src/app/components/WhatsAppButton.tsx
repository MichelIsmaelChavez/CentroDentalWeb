// src/app/components/WhatsAppButton.tsx
"use client";

import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/59169084318"  // Reemplaza con tu número de WhatsApp
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-36 right-6 z-50 p-3 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-all duration-300"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp size={45} />
    </a>
  );
};

export default WhatsAppButton;
