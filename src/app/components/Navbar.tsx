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
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-4 w-full">
          {/* Logo */}
          <div className="flex items-center justify-center md:justify-start w-full md:w-auto relative">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Centro Dental Suárez"
                width={140}
                height={100}
                className="cursor-pointer mx-auto md:mx-0"
                priority
                style={{ width: "auto", height: "auto" }}
              />
            </Link>
            <button
              className="md:hidden text-white absolute right-0 top-1/2 -translate-y-1/2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Menú visible en escritorio */}
          <nav className="hidden md:flex gap-6 text-xl md:text-lg font-semibold tracking-wide items-center flex-1 justify-center">
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

          {/* Contenedor derecho: Ubicación y Redes sociales */}
          <div className="flex flex-col items-center md:items-end gap-3 md:gap-4">
            {/* Ubicación - Alineada a la derecha */}
            <div className="flex flex-col items-center md:items-end">
              <a
                href="https://www.google.com/maps/dir//Av.+Velarde+#325,+Santa+Cruz+de+la+Sierra"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:opacity-80 transition-opacity"
              >
                <FaMapMarkerAlt size={20} className="text-white hover:text-cyan-300 mt-1 flex-shrink-0" />
                <div className="flex flex-col text-center md:text-right leading-relaxed">
                  <span className="text-white block">Av. Velarde #325</span>
                  <span className="text-white block">Santa Cruz de la Sierra,</span>
                  <span className="text-white block">Bolivia</span>
                </div>
              </a>
            </div>

            {/* Redes sociales - Debajo de la ubicación, alineadas a la derecha */}
            <div className="flex justify-center md:justify-end gap-4">
              <a href="https://wa.me/59169084318" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-300 transition-colors">
                <FaWhatsapp size={25} />
              </a>
              <a href="https://www.facebook.com/centrodentalsuarezodte/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-300 transition-colors">
                <FaFacebookF size={25} />
              </a>
              <a href="https://www.instagram.com/centrodentalsuarez/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-300 transition-colors">
                <FaInstagram size={25} />
              </a>
              <a href="https://www.tiktok.com/@centrodentalsuarez?_t=ZM-8vdzmwdIYxK&_r=1" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-300 transition-colors">
                <FaTiktok size={25} />
              </a>
            </div>
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
