"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import centro from "../../../public/centro.jpg";

export default function Nosotros() {
  return (
    <div className="relative min-h-screen pt-10 bg-gradient-to-b from-[#f8fafc] via-[#ecfdf5] to-[#d1fae5] text-gray-800 px-6 md:px-16 overflow-hidden">
      {/* Elemento decorativo borroso */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#93c5fd] rounded-full opacity-20 blur-3xl z-0" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#a5f3fc] rounded-full opacity-20 blur-3xl z-0" />

      {/* Título principal */}
      <motion.h1
        className="text-5xl font-extrabold text-center text-[#1e3a8a] drop-shadow-xl mb-16 relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Sobre Nosotros
      </motion.h1>

      {/* Imagen + descripción */}
      <div className="flex flex-col lg:flex-row gap-12 items-center justify-center max-w-6xl mx-auto mb-24 relative z-10">
        <motion.div
          className="w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-500"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src={centro}
            alt="Centro Dental Suárez"
            className="object-cover w-full h-auto"
            priority
          />
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 text-lg leading-relaxed text-gray-700 space-y-4"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p>
            En <span className="text-[#0ea5e9] font-semibold">Centro Dental Suárez</span> contamos con más de <strong>35 años de experiencia</strong> ofreciendo atención odontológica de calidad y tecnología de vanguardia.
          </p>
          <p>
            Nuestro equipo está compuesto por profesionales comprometidos con tu salud bucal, brindando un servicio humano, cálido y altamente profesional.
          </p>
        </motion.div>
      </div>

      {/* Línea decorativa */}
      <motion.div
        className="w-64 h-1 mx-auto bg-gradient-to-r from-[#2563eb] via-[#0ea5e9] to-[#2563eb] rounded-full mb-12"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        style={{ transformOrigin: "left" }}
      />

      {/* Misión, Visión y Valores */}
      <motion.div
        className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-24 relative z-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.6,
            },
          },
        }}
      >
        {[
          {
            title: "Nuestra Misión",
            content:
              "Brindar atención dental integral con calidez humana, priorizando la salud, bienestar y satisfacción de nuestros pacientes.",
          },
          {
            title: "Nuestra Visión",
            content:
              "Ser reconocidos como el centro odontológico líder en Santa Cruz por nuestra excelencia, innovación y compromiso humano.",
          },
          {
            title: "Nuestros Valores",
            content: (
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Ética y profesionalismo</li>
                <li>Responsabilidad</li>
                <li>Compromiso con la calidad</li>
                <li>Empatía y trato humano</li>
                <li>Innovación tecnológica</li>
              </ul>
            ),
          },
        ].map((section, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg p-8 rounded-2xl border border-[#bae6fd] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-3">{section.title}</h2>
            <div className="text-gray-600">{section.content}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Frase inspiradora decorada */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 1 }}
      >
        <div className="bg-gradient-to-br from-white via-[#ecfeff] to-[#e0f2fe] p-8 rounded-3xl shadow-xl border border-[#cbd5e1]">
          <p className="text-2xl font-semibold text-[#0f172a] italic">
            “Tu sonrisa es nuestro mayor compromiso. Cada tratamiento está pensado para devolverle salud y confianza a tu vida.”
          </p>
        </div>
      </motion.div>
      

      {/* Espacio al final */}
      <div className="h-32" />
      
      <footer className="text-center text-sm text-gray-500 mt-10">
  &copy; 2025 Centro Dental Suarez. All rights reserved
</footer>
    </div>
    
  );
  
}
