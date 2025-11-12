"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTiktok, FaMapMarkerAlt } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full py-7 px-6 md:px-5 bg-gradient-to-br from-[#2563eb] via-[#0ea5e9] to-[#38bdf8] text-white overflow-x-hidden max-w-full">
      <div className="max-w-full mx-auto px-6 py-4 text-white overflow-x-hidden">
        {/* Parte superior: Logo + nav + contacto */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-4 w-full text-center md:text-left">
          {/* Logo */}
          <div className="flex items-center justify-center md:justify-between w-full md:w-auto">
            <Link href="/">
              <Image
  src="/logo.png"
  alt="Centro Dental Suárez"
  width={140}  // Asegúrate de mantener esto
  height={100}  // Asegúrate de mantener esto
  className="cursor-pointer mx-auto md:mx-0"
  priority
  style={{ width: "auto", height: "auto" }}  // Para mantener la relación de aspecto si estás cambiando el tamaño en CSS
/>

            </Link>
            <button
              className="md:hidden text-white absolute right-5 top-6"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Menú visible en escritorio */}
          <nav className="hidden md:flex gap-6 text-xl md:text-lg font-semibold tracking-wide items-center">
            {[{ href: "/", label: "Inicio" },
              { href: "/servicios", label: "Servicios" },
              { href: "/nosotros", label: "Nosotros" },
              { href: "/contacto", label: "Contacto" }].map((item) => (
                <Link key={item.href} href={item.href} className="relative group px-10">
                  <span className="text-white group-hover:text-cyan-300 transition-colors duration-200">
                    {item.label}
                  </span>
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-cyan-300 transition-all duration-300 group-hover:w-full"></span>
                </Link>
            ))}
          </nav>

          {/* Botón de ubicación */}
          <div className="flex flex-col items-center md:items-start gap-2 mt-2 md:mt-0">
            <a
              href="https://www.google.com/maps/dir//Av.+Velarde+#325,+Santa+Cruz+de+la+Sierra"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center md:flex-row md:items-start gap-1"
            >
              <FaMapMarkerAlt size={20} className="text-white hover:text-cyan-300" />
              <div className="flex flex-col text-center md:text-left">
                <span className="text-white">Av. Velarde #325</span>
                <span className="text-white">Santa Cruz de la Sierra</span>
                <span className="text-white">Bolivia</span>
              </div>
            </a>
          </div>

          {/* Redes sociales */}
          <div className="flex justify-center md:justify-start gap-4 mt-2 text-xs md:text-lg">
            <a href="https://wa.me/59169084318" target="_blank" className="text-white hover:text-cyan-300">
              <FaWhatsapp size={25} />
            </a>
            <a href="https://www.facebook.com/centrodentalsuarezodte/" target="_blank" className="text-white hover:text-cyan-300">
              <FaFacebookF size={25} />
            </a>
            <a href="https://www.instagram.com/centrodentalsuarez/" target="_blank" className="text-white hover:text-cyan-300">
              <FaInstagram size={25} />
            </a>
            <a href="https://www.tiktok.com/@centrodentalsuarez?_t=ZM-8vdzmwdIYxK&_r=1" target="_blank" className="text-white hover:text-cyan-300">
              <FaTiktok size={25} />
            </a>
          </div>
        </div>

        {/* Menú para móviles */}
        {isOpen && (
          <nav className="flex flex-col items-center gap-4 mt-4 md:hidden text-xl font-semibold tracking-wide">
            {[{ href: "/", label: "Inicio" },
              { href: "/servicios", label: "Servicios" },
              { href: "/nosotros", label: "Nosotros" },
              { href: "/contacto", label: "Contacto" }].map((item) => (
                <Link key={item.href} href={item.href} className="relative group px-2">
                  <span className="text-white group-hover:text-cyan-300 transition-colors duration-900">
                    {item.label}
                  </span>
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-cyan-300 transition-all duration-300 group-hover:w-full"></span>
                </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
