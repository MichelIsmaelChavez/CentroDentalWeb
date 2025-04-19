"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-[#0c3fa3]/90 backdrop-blur-lg shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-white">
        {/* Logo */}
        <div className="flex items-center justify-between w-full md:w-auto mb-4 md:mb-0">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Centro Dental Suárez"
              width={140}
              height={70}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Menú principal */}
        <nav className="flex space-x-12 font-semibold text-white text-lg md:text-xl tracking-wide">
          <Link href="/" className="hover:text-cyan-300 transition-colors duration-200">
            Inicio
          </Link>
          <Link href="/servicios" className="hover:text-cyan-300 transition-colors duration-200">
            Servicios
          </Link>
          <Link href="/nosotros" className="hover:text-cyan-300 transition-colors duration-200">
            Nosotros
          </Link>
          <Link href="/contacto" className="hover:text-cyan-300 transition-colors duration-200">
            Contacto
          </Link>
        </nav>

        {/* Info de contacto */}
        <div className="hidden md:flex flex-col text-sm text-white text-right leading-snug">
          <span>info@centrodentalsuarez.com.bo</span>
          <span>
            Dirección: Av. Velarde #325, Santa Cruz de la Sierra, Bolivia 591
          </span>
        </div>
      </div>
    </header>
  );
}
