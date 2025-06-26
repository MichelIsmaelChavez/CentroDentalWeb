"use client";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaTiktok } from "react-icons/fa";

export default function Contacto() {
  return (
    <main className="min-h-screen pt-10 pb-16 px-6 bg-gradient-to-b from-[#d1fae5] via-[#93c5fd] to-[#60a5fa] text-gray-800">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center text-[#1e3a8a] mb-12"
      >
        Contáctanos
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        {/* Mapa de Google */}
        <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg border-2 border-[#4a90e2]">
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

        {/* Información de contacto */}
        <div className="flex flex-col justify-center space-y-6 text-lg text-[#475569]">
          <p>📍 <strong>Dirección:</strong> Av. Velarde #325, Santa Cruz de la Sierra, Bolivia</p>
          <p>📞 <strong>Teléfono:</strong> <a href="tel:+59169084318" className="text-[#2563eb] underline hover:text-[#1d4ed8]">+591 69084318</a></p>
          <p>💬 <strong>WhatsApp:</strong> <a href="https://wa.me/59169084318" target="_blank" rel="noopener noreferrer" className="text-[#2563eb] underline hover:text-[#1d4ed8]">Enviar mensaje</a></p>
          <p>✉️ <strong>Email:</strong> <a href="mailto:contacto@dental-suarez.com" className="text-[#2563eb] underline hover:text-[#1d4ed8]">contacto@dental-suarez.com</a></p>
          <p>⏰ <strong>Horarios de Atención:</strong><br />Lunes a Viernes: 08:00 - 12:30 | 14:30 - 19:00<br />Sábados: 08:00 - 13:00<br />Domingos y Feriados: <span className="text-red-500 font-semibold">Cerrado</span></p>

          {/* Redes Sociales alineadas a la izquierda */}
          <div className="mt-8">
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
      </motion.div>

      <footer className="text-center text-sm text-gray-500 mt-30">
        &copy; 2025 Centro Dental Suarez. All rights reserved
      </footer>
    </main>
  );
}
