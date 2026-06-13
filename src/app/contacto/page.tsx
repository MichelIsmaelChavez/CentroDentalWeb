// src/app/contacto/page.tsx

import type { Metadata } from "next";
import {
  CalendarCheck,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { siteConfig } from "../data/site";
import SectionHeader from "../components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Contacto | Centro Dental Suárez",
  description:
    "Contáctate con Centro Dental Suárez en Santa Cruz de la Sierra. Agenda tu cita por WhatsApp, teléfono o visita nuestra ubicación.",
};

export default function ContactoPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden brand-gradient px-4 py-16 text-white sm:px-6 md:px-10 md:py-24">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-cyan-100 sm:text-sm">
              Contacto
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Agenda tu atención en Centro Dental Suárez.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-sky-50 sm:text-lg">
              Escríbenos por WhatsApp, llámanos o visítanos en nuestra clínica
              para recibir orientación y coordinar tu cita.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={siteConfig.contact.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-3 font-bold text-brand shadow-md transition hover:-translate-y-0.5 hover:bg-brand-soft"
              >
                <FaWhatsapp className="text-xl text-green-500" />
                Escribir por WhatsApp
              </a>

              <a
                href={siteConfig.contact.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3 font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
              >
                <Phone className="h-4 w-4" />
                Llamar ahora
              </a>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-md sm:p-7">
            <div className="rounded-[1.5rem] bg-white p-5 text-slate-900 shadow-xl sm:p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                <CalendarCheck className="h-6 w-6" />
              </div>

              <h2 className="mt-5 text-2xl font-bold">
                Atención con cita previa
              </h2>

              <p className="mt-3 leading-7 text-brand-muted">
                Te recomendamos escribirnos para consultar disponibilidad antes
                de visitar la clínica.
              </p>

              <div className="mt-5 space-y-3">
                {siteConfig.schedule.map((item) => (
                  <div
                    key={item.day}
                    className="flex flex-col gap-1 rounded-2xl bg-brand-soft p-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span className="font-bold text-slate-900">{item.day}</span>
                    <span
                      className={
                        item.time === "Cerrado"
                          ? "font-bold text-red-500"
                          : "font-semibold text-brand-muted"
                      }
                    >
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Canales de contacto */}
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-brand-soft blur-3xl" />
        <div className="absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-brand-soft-2 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Canales oficiales"
            title="Comunícate con nosotros"
            description="Elige el canal que prefieras para consultar disponibilidad, tratamientos o ubicación."
          />

          <div className="grid gap-5 md:grid-cols-3">
            <a
              href={siteConfig.contact.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[1.75rem] border border-brand-soft bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-600">
                <FaWhatsapp className="text-3xl" />
              </div>

              <h2 className="mt-5 text-2xl font-bold text-slate-900">
                WhatsApp
              </h2>

              <p className="mt-3 leading-7 text-brand-muted">
                Agenda tu cita o consulta disponibilidad directamente por
                WhatsApp.
              </p>

              <p className="mt-5 font-bold text-green-600">
                Enviar mensaje →
              </p>
            </a>

            <a
              href={siteConfig.contact.phoneHref}
              className="group rounded-[1.75rem] border border-brand-soft bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                <Phone className="h-7 w-7" />
              </div>

              <h2 className="mt-5 text-2xl font-bold text-slate-900">
                Teléfono
              </h2>

              <p className="mt-3 leading-7 text-brand-muted">
                Llámanos para recibir información sobre horarios y atención.
              </p>

              <p className="mt-5 font-bold text-brand">
                {siteConfig.contact.phone}
              </p>
            </a>

            <a
              href={siteConfig.contact.emailHref}
              className="group rounded-[1.75rem] border border-brand-soft bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                <Mail className="h-7 w-7" />
              </div>

              <h2 className="mt-5 text-2xl font-bold text-slate-900">
                Correo
              </h2>

              <p className="mt-3 leading-7 text-brand-muted">
                Escríbenos por correo para consultas o información adicional.
              </p>

              <p className="mt-5 break-all font-bold text-brand">
                {siteConfig.contact.email}
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Mapa + datos */}
      <section className="bg-brand-soft px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
          <div className="overflow-hidden rounded-[1.75rem] border border-brand-soft bg-white shadow-xl">
            <div className="h-[340px] sm:h-[430px] lg:h-full">
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

          <div className="rounded-[1.75rem] bg-white p-5 shadow-xl sm:p-7">
            <div className="brand-gradient rounded-[1.5rem] p-5 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-100">
                Ubicación
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                Visítanos en Santa Cruz de la Sierra
              </h2>

              <p className="mt-3 leading-7 text-sky-50">
                Estamos ubicados en una zona accesible para que puedas coordinar
                tu atención de forma sencilla.
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
                  <Clock className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-bold text-slate-900">Horario principal</p>
                  <p className="mt-1 leading-6 text-brand-muted">
                    Lunes a Viernes: 08:00 - 12:30 | 14:30 - 19:00
                  </p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/dir//Av.+Velarde+#325,+Santa+Cruz+de+la+Sierra"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full brand-button px-7 py-3 font-bold shadow-md transition hover:-translate-y-0.5"
              >
                Abrir ruta en Google Maps
                <MapPin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Redes */}
      <section className="bg-white px-4 py-16 sm:px-6 md:px-10">
        <div className="mx-auto max-w-5xl rounded-[1.75rem] border border-brand-soft bg-white p-6 text-center shadow-xl sm:p-8 md:p-10">
          <MessageCircle className="mx-auto h-10 w-10 text-brand" />

          <h2 className="mt-4 text-3xl font-bold text-slate-900">
            También puedes seguirnos en redes
          </h2>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-brand-muted">
            Encuentra novedades, contenido informativo y actualizaciones del
            centro en nuestros canales oficiales.
          </p>

          <div className="mt-7 grid grid-cols-4 gap-3 text-2xl sm:mx-auto sm:max-w-md">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 items-center justify-center rounded-2xl bg-brand-soft text-brand transition hover:bg-brand-soft-2"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 items-center justify-center rounded-2xl bg-brand-soft text-brand transition hover:bg-brand-soft-2"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href={siteConfig.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 items-center justify-center rounded-2xl bg-brand-soft text-brand transition hover:bg-brand-soft-2"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>

            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 items-center justify-center rounded-2xl bg-brand-soft text-brand transition hover:bg-brand-soft-2"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}