"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { FaCheckCircle, FaTooth, FaSmile, FaTeethOpen, FaUserMd, FaXRay } from "react-icons/fa";
import { Suspense } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Convertimos nombres en slugs para los IDs
const servicios = [
  {
    id: "estetica-dental",
    nombre: "Estética Dental",
    descripcion:
      "Blanqueamiento, carillas de porcelana y diseño de sonrisa. Realzamos la estética de tu sonrisa de forma natural y personalizada.",
    imagen: "/servicios/estetica.jpg",
    detalles: [
      "Blanqueamiento dental profesional con tecnología LED",
      "Carillas de porcelana ultra finas y resistentes",
      "Diseño de sonrisa digital personalizado",
      "Bonding dental para correcciones estéticas menores",
      "Contorneado gingival para mejorar la simetría"
    ],
    beneficios: "Mejora la apariencia de tu sonrisa de forma natural y duradera, aumentando tu confianza y autoestima.",
    icono: <FaSmile className="text-4xl text-[#2563eb]" />
  },
  {
    id: "ortodoncia",
    nombre: "Ortodoncia",
    descripcion:
      "Tratamientos con brackets tradicionales y estéticos para alinear dientes y mejorar la función masticatoria.",
    imagen: "/servicios/ortodoncia.jpg",
    detalles: [
      "Brackets metálicos de alta calidad",
      "Brackets estéticos de cerámica",
      "Brackets autoligables para tratamientos más rápidos",
      "Arcos de última generación",
      "Seguimiento digital del progreso"
    ],
    beneficios: "Corrige la posición dental, mejora la masticación y previene problemas futuros de salud bucal.",
    icono: <FaTeethOpen className="text-4xl text-[#2563eb]" />
  },
  {
    id: "ortodoncia-invisible",
    nombre: "Ortodoncia Invisible (Alineadores)",
    descripcion:
      "Alineadores transparentes removibles como Invisalign®, una alternativa estética, cómoda y efectiva para corregir la posición dental.",
    imagen: "/servicios/aligners.jpg",
    detalles: [
      "Alineadores Invisalign® certificados",
      "Plan de tratamiento 3D personalizado",
      "Alineadores extraíbles para mayor comodidad",
      "Cambio de alineadores cada 2 semanas",
      "Aplicación móvil para seguimiento"
    ],
    beneficios: "Tratamiento discreto y cómodo que se adapta a tu estilo de vida, manteniendo la estética durante todo el proceso.",
    icono: <FaSmile className="text-4xl text-[#2563eb]" />
  },
  {
    id: "implantes-dentales",
    nombre: "Implantes Dentales",
    descripcion:
      "Soluciones permanentes para piezas dentales perdidas. Utilizamos tecnología de vanguardia para rehabilitar tu sonrisa.",
    imagen: "/servicios/implantes.jpg",
    detalles: [
      "Implantes de titanio de alta calidad",
      "Cirugía guiada por computadora",
      "Prótesis fijas sobre implantes",
      "Rehabilitación inmediata",
      "Garantía extendida en implantes"
    ],
    beneficios: "Restaura la función masticatoria y la estética de forma permanente, mejorando la calidad de vida del paciente.",
    icono: <FaUserMd className="text-4xl text-[#2563eb]" />
  },
  {
    id: "cirugia-periodontal",
    nombre: "Cirugía Periodontal",
    descripcion:
      "Tratamientos quirúrgicos para enfermedades de las encías como gingivitis y periodontitis. Salud y estética en equilibrio.",
    imagen: "/servicios/periodontal.jpg",
    detalles: [
      "Tratamiento de gingivitis avanzada",
      "Cirugía de encías estética",
      "Regeneración ósea guiada",
      "Alargamiento de corona clínica",
      "Técnicas mínimamente invasivas"
    ],
    beneficios: "Previene la pérdida dental y mejora la salud de las encías, fundamentales para una sonrisa saludable.",
    icono: <FaXRay className="text-4xl text-[#2563eb]" />
  },
  {
    id: "endodoncia",
    nombre: "Endodoncia",
    descripcion:
      "Tratamiento de conductos (canales) para salvar dientes dañados por caries profundas o infecciones. Indoloro y eficaz.",
    imagen: "/servicios/endodoncia.jpg",
    detalles: [
      "Localización digital de conductos",
      "Instrumentación rotatoria",
      "Obturación termoplástica",
      "Radiografía digital",
      "Anestesia tópica y local"
    ],
    beneficios: "Salva dientes que de otra forma tendrían que ser extraídos, manteniendo la estructura dental natural.",
    icono: <FaTooth className="text-4xl text-[#2563eb]" />
  },
];

function ServiciosContent() {
  const searchParams = useSearchParams();
  const servicioId = searchParams.get("id");

  useEffect(() => {
    if (servicioId) {
      const element = document.getElementById(servicioId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [servicioId]);

  return (
    <main className="pt-28 px-6 md:px-20 bg-gradient-to-b from-[#f0f9ff] to-white text-[#0f172a]">
      <h1 className="text-5xl font-bold text-center text-[#1e40af] mb-16 drop-shadow">
        Nuestros Servicios
      </h1>

      <div className="space-y-32">
        {servicios.map((servicio, index) => (
          <motion.section
            id={servicio.id}
            key={servicio.nombre}
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-16`}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <div className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <Image
                src={servicio.imagen}
                alt={servicio.nombre}
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-xl hover:scale-105 transition-transform duration-500"
                priority={index < 2}
              />
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
              <div className="flex items-center justify-center lg:justify-start gap-4">
                {servicio.icono}
                <h2 className="text-3xl md:text-4xl font-bold text-[#2563eb]">
                  {servicio.nombre}
                </h2>
              </div>
              <p className="text-lg text-[#334155] leading-relaxed">
                {servicio.descripcion}
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#1e40af]">Características principales:</h3>
                <ul className="space-y-3">
                  {servicio.detalles.map((detalle, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FaCheckCircle className="text-[#2563eb] mt-1 flex-shrink-0" />
                      <span className="text-[#334155]">{detalle}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#f0f9ff] p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-[#1e40af] mb-3">Beneficios:</h3>
                <p className="text-[#334155]">{servicio.beneficios}</p>
              </div>
            </div>
          </motion.section>
        ))}
      </div>

      <footer className="text-center text-sm text-gray-500 mt-20 mb-10">
        &copy; 2025 Centro Dental Suárez. Todos los derechos reservados.
      </footer>
    </main>
  );
}

export default function Servicios() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#2563eb]"></div>
    </div>}>
      <ServiciosContent />
    </Suspense>
  );
}
