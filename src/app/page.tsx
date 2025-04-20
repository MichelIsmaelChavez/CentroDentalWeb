// src/app/page.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ImageCarousel from "./components/ImageCarousel";
import centro from "../../public/centro.jpg";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaTiktok } from "react-icons/fa";

// Variantes para animación
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  return (
    <>
      <main className="pt-2 min-h-screen bg-gradient-to-b from-white via-[#f2fdfa] to-[#d9f5ec] text-gray-800">
        {/* Hero + Carrusel */}
        <motion.section
          id="inicio"
          className="flex flex-col items-center justify-center text-center px-4 py-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="w-full max-w-5xl">
            <ImageCarousel />
          </div>
          <motion.h1 className="text-5xl font-extrabold mt-10 text-sky-700 drop-shadow-sm">
            Bienvenidos al Centro Dental Suárez
          </motion.h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-700 leading-relaxed">
            Donde tu sonrisa es nuestra prioridad. Contamos con un equipo de
            profesionales altamente capacitados y tecnología de vanguardia para
            ofrecerte el mejor cuidado dental.
          </p>
        </motion.section>

        {/* Nosotros + Imagen */}
        <motion.section
          className="flex flex-col lg:flex-row justify-center items-center gap-12 px-6 py-16 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="w-full lg:w-1/2 shadow-xl rounded-xl overflow-hidden hover:scale-105 transition-transform duration-500">
  <Image
    src={centro}
    alt="Centro Dental"
    width={800}
    height={500}
    className="object-cover w-full h-auto"
  />
</div>
          <div className="w-full lg:w-1/2 text-left">
            <h2 className="text-4xl font-bold mb-4 text-[#2563eb]">Nosotros</h2>
            <p className="text-[#475569] text-lg leading-relaxed">
              En <span className="font-semibold text-[#3b82f6]">Centro Dental Suárez</span>,
              nos dedicamos a brindar atención odontológica integral de calidad,
              con un enfoque humano y profesional.
            </p>
            <p className="mt-4 text-[#475569] text-lg leading-relaxed">
              Nos enorgullece ofrecer servicios desde limpiezas y ortodoncia hasta
              rehabilitación oral, siempre con calidez y responsabilidad.
            </p>
          </div>
        </motion.section>

        {/* Horarios */}
        <motion.section
          className="bg-white py-16 px-6 md:px-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-center text-[#2563eb] mb-10">
            Horarios de Atención
          </h2>
          <div className="max-w-3xl mx-auto rounded-xl shadow-lg bg-[#f0f9ff] p-8 border border-[#cbd5e1]">
            <ul className="space-y-4 text-lg text-[#1e3a8a] font-medium">
              <li className="flex justify-between border-b pb-2">
                <span>Lunes a Viernes</span>
                <span>08:00 - 12:30 | 14:30 - 19:00</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span>Sábados</span>
                <span>08:00 - 13:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingos y Feriados</span>
                <span className="text-[#ef4444]">Cerrado</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Mapa + contacto */}
        <motion.section
          className="w-full bg-[#e0f2fe] py-16 px-4 md:px-16 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-center text-[#2563eb] mb-10">
            Encuéntranos y Contáctanos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3798.893655261768!2d-63.181!3d-17.7966944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDQ3JzQ4LjEiUyA2M8KwMTAnNTEuNiJX!5e0!3m2!1ses-419!2sbo!4v1744574033876!5m2!1ses-419!2sbo"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="flex flex-col justify-center items-start space-y-6">
              <p className="text-lg text-[#475569]">
                📍 <strong>Dirección:</strong> Av. Velarde #325, Santa Cruz de la Sierra, Bolivia 591
              </p>
              <p className="text-lg text-[#475569]">
                📞 <strong>Teléfono:</strong>{" "}
                <a href="tel:+59169084318" className="text-[#2563eb] underline">
                  +591 69084318
                </a>
              </p>
              <p className="text-lg text-[#475569]">
                💬 <strong>WhatsApp:</strong>{" "}
                <a
                  href="https://wa.me/59169084318"
                  className="text-[#2563eb] underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enviar mensaje
                </a>
              </p>
              <p className="text-lg text-[#475569]">
                ✉️ <strong>Email:</strong>{" "}
                <a
                  href="mailto:ventas@centrodentalsuarez.com"
                  className="text-[#2563eb] underline"
                >
                  ventas@centrodentalsuarez.com
                </a>
              </p>
              {/* Redes Sociales alineadas a la izquierda */}
          <div className="mt-4">
            <p className="text-lg md:text-xl text-gray-700 mb-4">Síguenos o escríbenos por nuestras redes:</p>
            <div className="flex space-x-8 text-3xl text-[#0c3fa3]">
              <a href="https://www.instagram.com/centrodentalsuarez/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:text-pink-500 transition duration-200" />
              </a>
              <a href="https://www.facebook.com/centrodentalsuarezodte/" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="hover:text-blue-500 transition duration-200" />
              </a>
              <a href="https://www.tiktok.com/@centrodentalsuarez?_t=ZM-8vdzmwdIYxK&_r=1" target="_blank" rel="noopener noreferrer">
                <FaTiktok className="hover:text-black transition duration-200" />
              </a>
              <a href="https://wa.me/59169084318" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="hover:text-green-500 transition duration-200" />
              </a>
            </div>
          </div>
            </div>
          </div>
        </motion.section>

        {/* Scroll Up */}
        <ScrollToTopButton />
        <footer className="text-center text-sm text-gray-500 mt-10">
  &copy; 2025 Centro Dental Suarez. All rights reserved
</footer>
      </main>
    </>
  );
}

