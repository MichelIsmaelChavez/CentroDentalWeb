"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full py-7 px-6 md:px-18 bg-gradient-to-br from-[#2563eb] via-[#0ea5e9] to-[#38bdf8] text-white">

      <div className="max-w-9xl mx-auto px-17 py-4 text-white">
        {/* Parte superior: Logo + nav + contacto */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-4">
          {/* Logo */}
          <div className="flex items-center justify-center md:justify-between w-full md:w-auto">

            <Link href="/">
              <Image
                src="/logo.png"
                alt="Centro Dental Suárez"
                width={140}
                height={70}
                className="cursor-pointer"
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
          <nav className="hidden md:flex gap-15 text-xl md:text-1xl font-semibold tracking-wide items-center">
            {[
              { href: "/", label: "Inicio" },
              { href: "/servicios", label: "Servicios" },
              { href: "/nosotros", label: "Nosotros" },
              { href: "/contacto", label: "Contacto" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative group px-10"
              >
                <span className="text-white group-hover:text-cyan-300 transition-colors duration-200">
                  {item.label}
                </span>
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-cyan-300 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Info de contacto visible siempre */}
          <div className="text-sm text-right">
            <p>ventas@centrodentalsuarez.com</p>
            <p>Av. Velarde #325, Santa Cruz de la Sierra, Bolivia 591</p>
          </div>
        </div>

        {/* Menú para móviles */}
        {isOpen && (
          <nav className="flex flex-col items-center gap-4 mt-4 md:hidden text-xl font-semibold tracking-wide">
            {[
              { href: "/", label: "Inicio" },
              { href: "/servicios", label: "Servicios" },
              { href: "/nosotros", label: "Nosotros" },
              { href: "/contacto", label: "Contacto" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative group px-2"
              >
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