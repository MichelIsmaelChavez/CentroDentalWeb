// src/app/components/sections/ContactSection.tsx

import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "../../data/site";
import SectionHeader from "../ui/SectionHeader";

// CAMBIO: Rediseñamos contacto con la paleta oficial.
// En móvil el mapa queda arriba y los datos se leen como tarjetas claras.

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 md:px-10 md:py-24">
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-soft blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-brand-soft-2 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Contacto"
          title="Encuéntranos y agenda tu atención"
          description="Estamos ubicados en Santa Cruz de la Sierra. Puedes visitarnos o escribirnos directamente por nuestros canales oficiales."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
          {/* Mapa */}
          <div className="overflow-hidden rounded-[1.75rem] border border-brand-soft bg-white shadow-xl">
            <div className="h-[340px] sm:h-[420px] lg:h-full">
              <iframe
                title="Mapa de Centro Dental Suárez"
                src={siteConfig.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Datos */}
          <div className="rounded-[1.75rem] border border-brand-soft bg-white p-5 shadow-xl sm:p-7">
            <div className="brand-gradient rounded-[1.5rem] p-5 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-100">
                Información de contacto
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Estamos listos para atenderte.
              </h3>

              <p className="mt-3 leading-7 text-sky-50">
                Comunícate con el centro para resolver dudas, consultar horarios
                o agendar una valoración.
              </p>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex gap-4 rounded-2xl bg-brand-soft p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-brand shadow-sm">
                  <MapPin className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-bold text-slate-900">Dirección</p>
                  <p className="mt-1 leading-6 text-brand-muted">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl bg-brand-soft p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-brand shadow-sm">
                  <Phone className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-bold text-slate-900">Teléfono</p>
                  <a
                    href={siteConfig.contact.phoneHref}
                    className="mt-1 inline-flex font-semibold brand-link"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl bg-brand-soft p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-brand shadow-sm">
                  <Mail className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-bold text-slate-900">Email</p>
                  <a
                    href={siteConfig.contact.emailHref}
                    className="mt-1 inline-flex break-all font-semibold brand-link"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
            </div>

            <a
              href={siteConfig.contact.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-green-500 px-7 py-4 font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-green-600"
            >
              <FaWhatsapp className="text-2xl" />
              Escribir por WhatsApp
            </a>

            <div className="mt-7 border-t border-slate-100 pt-6">
              <p className="mb-4 font-bold text-slate-900">
                Síguenos en redes sociales
              </p>

              <div className="grid grid-cols-4 gap-3 text-xl">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 items-center justify-center rounded-2xl bg-brand-soft text-brand transition hover:bg-brand-soft-2"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>

                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 items-center justify-center rounded-2xl bg-brand-soft text-brand transition hover:bg-brand-soft-2"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>

                <a
                  href={siteConfig.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 items-center justify-center rounded-2xl bg-brand-soft text-brand transition hover:bg-brand-soft-2"
                  aria-label="TikTok"
                >
                  <FaTiktok />
                </a>

                <a
                  href={siteConfig.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 items-center justify-center rounded-2xl bg-brand-soft text-brand transition hover:bg-brand-soft-2"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}