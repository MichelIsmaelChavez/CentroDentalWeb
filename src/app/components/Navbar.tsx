"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#0c3fa3]/90 backdrop-blur-lg shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 text-white">
        {/* Parte superior: Logo + info contacto */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
          <div className="flex items-center justify-between">
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
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Info de contacto visible siempre */}
          <div className="text-sm mt-4 md:mt-0 md:text-right">
            <p>ventas@centrodentalsuarez.com</p>
            <p>Av. Velarde #325, Santa Cruz de la Sierra, Bolivia 591</p>
          </div>
        </div>

        {/* Menú de navegación */}
        <nav
  className={`flex flex-col md:flex-row items-center md:justify-center gap-4 md:gap-20 text-xl md:text-2xl font-semibold tracking-wide overflow-hidden transition-all duration-500 ease-in-out ${
    isOpen ? "flex mt-4" : "hidden md:flex"
  }`}
>
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
      <span className="text-white group-hover:text-cyan-300 transition-colors duration-200">
        {item.label}
      </span>
      <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-cyan-300 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  ))}
</nav>

      </div>
    </header>
  );
}
