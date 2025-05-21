// src/app/page.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ImageCarousel from "./components/ImageCarousel";
import centro from "../../public/centro.jpg";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaTiktok } from "react-icons/fa";
import Link from "next/link";
import { FaTooth, FaSmile, FaTeethOpen, FaXRay, FaUserMd } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  return (
    <>
      <main className="pt-1 min-h-screen bg-gradient-to-b from-white to-[#f0f9ff] text-[#1e293b]">
      <div className="w-full h-1 bg-gradient-to-r from-[#2563eb] via-[#0ea5e9] to-[#38bdf8]"></div>

        {/* Hero - Carousel pantalla completa */}
<motion.section
  id="inicio"
  className="w-full h-[70vh] relative overflow-hidden"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInUp}
>
  <div className="absolute inset-0">
    <ImageCarousel />
  </div>
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 z-10"></div>
</motion.section>

<motion.section
  id="bienvenida"
  className="w-full py-16 px-6 md:px-20 bg-gradient-to-br from-[#4a90e2] to-[#357abd] text-white text-center relative"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInUp}
>
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-lg">Bienvenidos a Centro Dental Suárez</h2>
    <p className="text-lg md:text-xl font-medium leading-relaxed text-white/90">
      Más de 35 años ofreciendo cuidado bucal profesional, humano y con tecnología de vanguardia.
      Nuestra pasión es tu sonrisa.
    </p>

    <div className="mt-10">
      <a
        href="/nosotros"
        className="inline-block bg-white text-[#4a90e2] font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-[#f0f9ff] transition duration-300 transform hover:scale-105"
      >
        Conócenos
      </a>
    </div>
  </div>
</motion.section>

{/* Nosotros */}
<motion.section
  id="nosotros"
  className="flex flex-col lg:flex-row justify-center items-center gap-10 px-6 md:px-20 py-20 max-w-full mx-auto bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0]"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInUp}
>
  <div className="w-full lg:w-1/2 shadow-2xl rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-500">
    <Image
      src={centro}
      alt="Centro Dental"
      width={800}
      height={500}
      className="object-cover w-full h-auto"
    />
  </div>
  <div className="w-full lg:w-1/2 text-left p-6">
    <h2 className="text-5xl font-bold mb-10 bg-gradient-to-r from-[#4a90e2] to-[#357abd] text-transparent bg-clip-text">Nosotros</h2>
    <p className="text-[#334155] text-lg leading-relaxed">
      En <span className="font-semibold text-[#4a90e2]">Centro Dental Suárez</span>, brindamos atención odontológica integral con profesionalismo, calidez y tecnología moderna.
    </p>
    <p className="mt-4 text-[#475569] text-lg leading-relaxed">
      Nuestro compromiso es cuidar tu salud bucal con los más altos estándares de calidad en cada tratamiento.
    </p>
  </div>
</motion.section>

{/* Seccion de servicios */}
<motion.section
  id="servicios"
  className="w-full py-20 px-6 md:px-20 bg-gradient-to-br from-[#2563eb] via-[#0ea5e9] to-[#38bdf8] text-white"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInUp}
>
  <h2 className="text-4xl font-bold text-center mb-12 text-white drop-shadow-lg">Nuestros Servicios</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    

    {/* Servicio 2 */}
    <Link href="/servicios?id=estetica-dental" className="block">
      <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center cursor-pointer border border-white/20">
        <FaSmile className="text-5xl mx-auto text-white mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-white">Estética Dental</h3>
        <p className="text-white/80">Blanqueamiento, carillas y diseño de sonrisa personalizado.</p>
      </div>
    </Link>

    {/* Servicio 3 */}
    <Link href="/servicios?id=ortodoncia" className="block">
      <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center cursor-pointer border border-white/20">
        <FaTeethOpen className="text-5xl mx-auto text-white mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-white">Ortodoncia</h3>
        <p className="text-white/80">Alineación dental con brackets tradicionales y estéticos.</p>
      </div>
    </Link>

    {/* Servicio 4 */}
    <Link href="/servicios?id=ortodoncia-invisible" className="block">
      <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center cursor-pointer border border-white/20">
        <FaSmile className="text-5xl mx-auto text-white mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-white">Ortodoncia Invisible</h3>
        <p className="text-white/80">Alineadores invisibles cómodos, estéticos y efectivos.</p>
      </div>
    </Link>

    {/* Servicio 5 */}
    <Link href="/servicios?id=implantes-dentales" className="block">
      <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center cursor-pointer border border-white/20">
        <FaUserMd className="text-5xl mx-auto text-white mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-white">Implantes Dentales</h3>
        <p className="text-white/80">Solución permanente para reemplazo de piezas dentales.</p>
      </div>
    </Link>

    {/* Servicio 6 */}
    <Link href="/servicios?id=cirugia-periodontal" className="block">
      <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center cursor-pointer border border-white/20">
        <FaXRay className="text-5xl mx-auto text-white mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-white">Cirugía Periodontal</h3>
        <p className="text-white/80">Tratamientos avanzados para encías y tejidos dentales.</p>
      </div>
    </Link>

    {/* Servicio 7 */}
    <Link href="/servicios?id=endodoncia" className="block">
      <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center cursor-pointer border border-white/20">
        <FaTooth className="text-5xl mx-auto text-white mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-white">Endodoncia</h3>
        <p className="text-white/80">Tratamiento de conducto para conservar piezas dentales.</p>
      </div>
    </Link>
  </div>
</motion.section>

{/* Profesionales */}
<motion.section
  id="profesionales"
  className="w-full py-20 px-6 md:px-20 bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0]"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInUp}
>
  <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#4a90e2] to-[#357abd] text-transparent bg-clip-text">Nuestro Equipo</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 max-w-7xl mx-auto">
    {/* Profesional 1 */}
    <div className="text-center group relative">
      <div className="relative overflow-hidden rounded-full w-40 h-40 mx-auto mb-4 shadow-lg ring-4 ring-[#4a90e2]/20">
        <img
          src="/profesionales/doc1.jpg"
          alt="Dra. María Pérez"
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <h3 className="text-lg font-semibold cursor-pointer text-[#334155]">Dra. María Pérez</h3>
      <p className="text-[#4a90e2] text-sm font-medium">Odontología General</p>
      <div className="absolute left-1/2 -translate-x-1/2 mt-4 bg-white text-sm text-gray-700 p-4 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-64 z-10 border border-[#4a90e2]/20">
        Con más de 10 años de experiencia, ofrece atención integral en prevención, diagnósticos y tratamientos dentales para toda la familia.
      </div>
    </div>

    {/* Profesional 2 */}
    <div className="text-center group relative">
      <div className="relative overflow-hidden rounded-full w-40 h-40 mx-auto mb-4 shadow-lg ring-4 ring-[#4a90e2]/20">
        <img
          src="/profesionales/doc2.jpg"
          alt="Dr. Juan López"
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <h3 className="text-lg font-semibold cursor-pointer text-[#334155]">Dr. Juan López</h3>
      <p className="text-[#4a90e2] text-sm font-medium">Ortodoncia</p>
      <div className="absolute left-1/2 -translate-x-1/2 mt-4 bg-white text-sm text-gray-700 p-4 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-64 z-10 border border-[#4a90e2]/20">
        Especialista en corrección de maloclusiones y tratamientos con brackets tradicionales, estéticos e invisibles.
      </div>
    </div>

    {/* Profesional 3 */}
    <div className="text-center group relative">
      <div className="relative overflow-hidden rounded-full w-40 h-40 mx-auto mb-4 shadow-lg ring-4 ring-[#4a90e2]/20">
        <img
          src="/profesionales/doc3.jpg"
          alt="Dra. Sofía Rojas"
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <h3 className="text-lg font-semibold cursor-pointer text-[#334155]">Dra. Sofía Rojas</h3>
      <p className="text-[#4a90e2] text-sm font-medium">Estética Dental</p>
      <div className="absolute left-1/2 -translate-x-1/2 mt-4 bg-white text-sm text-gray-700 p-4 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-64 z-10 border border-[#4a90e2]/20">
        Experta en blanqueamientos, carillas y diseño de sonrisa. Ayuda a los pacientes a lograr una sonrisa estética y natural.
      </div>
    </div>

    {/* Profesional 4 */}
    <div className="text-center group relative">
      <div className="relative overflow-hidden rounded-full w-40 h-40 mx-auto mb-4 shadow-lg ring-4 ring-[#4a90e2]/20">
        <img
          src="/profesionales/doc4.jpg"
          alt="Dr. Carlos Gutiérrez"
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <h3 className="text-lg font-semibold cursor-pointer text-[#334155]">Dr. Carlos Gutiérrez</h3>
      <p className="text-[#4a90e2] text-sm font-medium">Cirugía Oral</p>
      <div className="absolute left-1/2 -translate-x-1/2 mt-4 bg-white text-sm text-gray-700 p-4 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-64 z-10 border border-[#4a90e2]/20">
        Cirujano dental con enfoque en extracciones complejas, implantes y tratamientos quirúrgicos de encías.
      </div>
    </div>

    {/* Profesional 5 */}
    <div className="text-center group relative">
      <div className="relative overflow-hidden rounded-full w-40 h-40 mx-auto mb-4 shadow-lg ring-4 ring-[#4a90e2]/20">
        <img
          src="/profesionales/doc5.jpg"
          alt="Dra. Ana Fernández"
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <h3 className="text-lg font-semibold cursor-pointer text-[#334155]">Dra. Ana Fernández</h3>
      <p className="text-[#4a90e2] text-sm font-medium">Rehabilitación Oral</p>
      <div className="absolute left-1/2 -translate-x-1/2 mt-4 bg-white text-sm text-gray-700 p-4 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-64 z-10 border border-[#4a90e2]/20">
        Se dedica a la restauración funcional y estética de piezas dentales mediante prótesis fijas y removibles.
      </div>
    </div>
  </div>
</motion.section>

{/* Horarios */}
<motion.section
  className="w-full py-16 px-6 md:px-20 bg-gradient-to-br from-[#2563eb] to-[#0ea5e9] text-white"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInUp}
>
  <h2 className="text-3xl font-bold text-center mb-10 text-white drop-shadow-lg">Horarios de Atención</h2>
  <div className="max-w-3xl mx-auto rounded-2xl shadow-xl bg-white/10 backdrop-blur-sm p-8 border border-white/20">
    <ul className="space-y-4 text-lg font-medium text-white">
      <li className="flex justify-between border-b border-white/20 pb-2">
        <span>Lunes a Viernes</span>
        <span>08:00 - 12:30 | 14:30 - 19:00</span>
      </li>
      <li className="flex justify-between border-b border-white/20 pb-2">
        <span>Sábados</span>
        <span>08:00 - 13:00</span>
      </li>
      <li className="flex justify-between">
        <span>Domingos y Feriados</span>
        <span className="text-red-300">Cerrado</span>
      </li>
    </ul>
  </div>
  <div className="text-center mt-16">
    <h2 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">AGENDA TU CITA</h2>
    <a
      href="https://wa.me/59169084318?text=Hola%2C%20me%20gustaría%20agendar%20una%20cita%20en%20el%20Centro%20Dental%20Suárez."
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-white text-[#2563eb] text-lg font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-[#f0f9ff] transition duration-300 transform hover:scale-105"
    >
      <FaWhatsapp className="text-2xl" />
      Escríbenos por WhatsApp
    </a>
  </div>
</motion.section>

{/* Mapa + Contacto */}
<motion.section
  className="w-full bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] py-16 px-4 md:px-16 text-[#334155]"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInUp}
>
  <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-[#4a90e2] to-[#357abd] text-transparent bg-clip-text">Encuéntranos y Contáctanos</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-xl ring-4 ring-[#4a90e2]/20">
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

    <div className="flex flex-col justify-center items-start space-y-6 text-lg text-[#334155]">
      <p>
        📍 <strong>Dirección:</strong> Av. Velarde #325, Santa Cruz de la Sierra, Bolivia 591
      </p>
      <p>
        📞 <strong>Teléfono:</strong>{" "}
        <a href="tel:+59169084318" className="text-[#4a90e2] hover:text-[#357abd] transition-colors">
          +591 69084318
        </a>
      </p>
      <p>
        💬 <strong>WhatsApp:</strong>{" "}
        <a
          href="https://wa.me/59169084318"
          className="text-[#4a90e2] hover:text-[#357abd] transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Enviar mensaje
        </a>
      </p>
      <p>
        ✉️ <strong>Email:</strong>{" "}
        <a
          href="mailto:ventas@centrodentalsuarez.com"
          className="text-[#4a90e2] hover:text-[#357abd] transition-colors"
        >
          ventas@centrodentalsuarez.com
        </a>
      </p>

      <div className="mt-4">
        <p className="text-lg md:text-xl mb-4 text-[#334155]">Síguenos en nuestras redes:</p>
        <div className="flex space-x-8 text-3xl">
          <a href="https://www.instagram.com/centrodentalsuarez/" target="_blank" rel="noopener noreferrer" className="text-[#4a90e2] hover:text-[#357abd] transition-colors">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/centrodentalsuarezodte/" target="_blank" rel="noopener noreferrer" className="text-[#4a90e2] hover:text-[#357abd] transition-colors">
            <FaFacebookF />
          </a>
          <a href="https://www.tiktok.com/@centrodentalsuarez?_t=ZM-8vdzmwdIYxK&_r=1" target="_blank" rel="noopener noreferrer" className="text-[#4a90e2] hover:text-[#357abd] transition-colors">
            <FaTiktok />
          </a>
          <a href="https://wa.me/59169084318" target="_blank" rel="noopener noreferrer" className="text-[#4a90e2] hover:text-[#357abd] transition-colors">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  </div>
</motion.section>

{/* Botón scroll */}
<ScrollToTopButton />

<footer className="text-center text-white mt-10 py-4 bg-gradient-to-r from-[#4a90e2] to-[#357abd]">
  &copy; 2025 Centro Dental Suárez. Todos los derechos reservados.
</footer>
      </main>
    </>
  );
}
