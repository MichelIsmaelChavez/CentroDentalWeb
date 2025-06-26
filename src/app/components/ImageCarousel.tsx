"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Imágenes y video en el carrusel
const media = [
  
  "/carousel4.mp4",  // El video en el carrusel
];

const ImageCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 w-full h-full"
        >
          {current === media.length - 1 ? (
            <video
              src={media[current]}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={media[current]}
              alt={`Slide ${current + 1}`}
              className="w-full h-full object-cover"
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Botones de navegación 
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-3 rounded-full hover:bg-white transition-all duration-300 z-20 shadow-lg hover:shadow-xl"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-6 h-6 text-[#2563eb]" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-3 rounded-full hover:bg-white transition-all duration-300 z-20 shadow-lg hover:shadow-xl"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-6 h-6 text-[#2563eb]" />
      </button>*/}
    </div>
  );
};

export default ImageCarousel;
