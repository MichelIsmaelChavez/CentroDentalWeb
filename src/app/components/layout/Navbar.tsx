// src/app/components/layout/Navbar.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "../../data/site";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/15 brand-gradient shadow-lg shadow-sky-950/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          {/* Marca */}
          <Link
  href="/"
  onClick={() => setIsOpen(false)}
  className="group flex min-w-0 items-center gap-3"
>
  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-950/20 shadow-md ring-1 ring-white/20 backdrop-blur-sm transition group-hover:scale-105">
    <Image
      src="/logo.png"
      alt="Logo Centro Dental Suárez"
      width={46}
      height={46}
      priority
      className="h-10 w-10 object-contain"
    />
  </div>

  <div className="min-w-0 leading-tight">
    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-100/90">
      Centro Dental
    </p>

    <p className="text-lg font-extrabold tracking-tight text-white sm:text-xl">
      Suárez
    </p>
  </div>
</Link>

          {/* Menú escritorio */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((item) => {
              const active = isActiveLink(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                    active
                      ? "bg-white text-brand shadow-sm"
                      : "text-white/90 hover:bg-white/15 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Acciones escritorio */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={siteConfig.contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex max-w-[230px] items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-sm ring-1 ring-white/15 transition hover:bg-white/20"
            >
              <MapPin className="h-4 w-4 shrink-0" />
              <span className="truncate">Av. Velarde #325</span>
            </a>

            <a
              href={siteConfig.contact.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-brand shadow-sm transition hover:-translate-y-0.5 hover:bg-brand-soft"
            >
              <FaWhatsapp className="text-lg text-green-500" />
              Agendar
            </a>
          </div>

          {/* Botón móvil */}
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/20 transition hover:bg-white/25 lg:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="border-t border-white/15 bg-white px-4 py-5 shadow-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((item) => {
              const active = isActiveLink(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-base font-bold transition ${
                    active
                      ? "brand-gradient text-white"
                      : "text-slate-700 hover:bg-brand-soft hover:text-brand"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mx-auto mt-5 max-w-7xl rounded-3xl bg-brand-soft p-4">
            <a
              href={siteConfig.contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-sm font-semibold text-slate-700"
            >
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              <span>{siteConfig.contact.address}</span>
            </a>

            <a
              href={siteConfig.contact.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-green-500 px-5 py-3 font-bold text-white transition hover:bg-green-600"
            >
              <FaWhatsapp className="text-xl" />
              Agendar por WhatsApp
            </a>

            <div className="mt-4 grid grid-cols-4 gap-3 text-xl text-brand">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-12 items-center justify-center rounded-2xl bg-white transition hover:bg-brand-soft-2"
              >
                <FaInstagram />
              </a>

              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-12 items-center justify-center rounded-2xl bg-white transition hover:bg-brand-soft-2"
              >
                <FaFacebookF />
              </a>

              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-12 items-center justify-center rounded-2xl bg-white transition hover:bg-brand-soft-2"
              >
                <FaTiktok />
              </a>

              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-12 items-center justify-center rounded-2xl bg-white transition hover:bg-brand-soft-2"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}