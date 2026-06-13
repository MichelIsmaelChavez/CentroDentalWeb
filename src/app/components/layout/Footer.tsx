// src/app/components/layout/Footer.tsx

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "../../data/site";

// CAMBIO: Footer más completo y alineado con la paleta oficial.
// CAMBIO: En móvil se ve en columnas simples y ordenadas.

export default function Footer() {
  return (
    <footer className="brand-gradient px-4 py-10 text-white sm:px-6 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <p className="text-xl font-bold">{siteConfig.name}</p>
          <p className="mt-3 max-w-md leading-7 text-sky-50">
            Atención odontológica integral con experiencia, calidez y compromiso
            con la salud bucal de cada paciente.
          </p>
        </div>

        <div>
          <p className="font-bold">Menú</p>

          <div className="mt-4 grid gap-2 text-sky-50">
            <Link href="/" className="transition hover:text-white">
              Inicio
            </Link>
            <Link href="/servicios" className="transition hover:text-white">
              Servicios
            </Link>
            <Link href="/nosotros" className="transition hover:text-white">
              Nosotros
            </Link>
            <Link href="/contacto" className="transition hover:text-white">
              Contacto
            </Link>
          </div>
        </div>

        <div>
          <p className="font-bold">Contacto</p>

          <div className="mt-4 space-y-3 text-sky-50">
            <p className="flex gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0" />
              <span>{siteConfig.contact.address}</span>
            </p>

            <a
              href={siteConfig.contact.phoneHref}
              className="flex gap-3 transition hover:text-white"
            >
              <Phone className="mt-1 h-5 w-5 shrink-0" />
              <span>{siteConfig.contact.phone}</span>
            </a>

            <a
              href={siteConfig.contact.emailHref}
              className="flex gap-3 break-all transition hover:text-white"
            >
              <Mail className="mt-1 h-5 w-5 shrink-0" />
              <span>{siteConfig.contact.email}</span>
            </a>
          </div>

          <div className="mt-5 flex gap-3 text-xl">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 transition hover:bg-white/25"
            >
              <FaInstagram />
            </a>

            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 transition hover:bg-white/25"
            >
              <FaFacebookF />
            </a>

            <a
              href={siteConfig.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 transition hover:bg-white/25"
            >
              <FaTiktok />
            </a>

            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 transition hover:bg-white/25"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-white/15 pt-5 text-center text-sm text-sky-50">
        © 2026 {siteConfig.name}. Todos los derechos reservados.
      </div>
    </footer>
  );
}