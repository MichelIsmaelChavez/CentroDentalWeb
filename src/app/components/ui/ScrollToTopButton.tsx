// src/app/components/ui/ScrollToTopButton.tsx

"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

// CAMBIO: Este sí necesita "use client" porque escucha el scroll del navegador.

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-sky-600 text-white shadow-xl transition hover:scale-105 hover:bg-sky-500 md:h-16 md:w-16"
      aria-label="Volver arriba"
    >
      <ArrowUp className="h-7 w-7" />
    </button>
  );
}