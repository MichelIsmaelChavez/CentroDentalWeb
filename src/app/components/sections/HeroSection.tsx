// src/app/components/sections/HeroSection.tsx

import Link from "next/link";
import { ArrowRight, CalendarCheck, ShieldCheck, Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "../../data/site";

// CAMBIO: Mantenemos el MP4 solicitado.
// CAMBIO: El Hero usa la paleta oficial y mejora la presentación móvil.
// CAMBIO: El video queda como fondo institucional con overlays más elegantes.

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-slate-950"
    >
      {/* Video principal */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/carousel4.mp4"
        poster="/carousel1.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Video institucional de Centro Dental Suárez"
      />

      {/* Capas visuales */}
      <div className="absolute inset-0 bg-slate-950/55" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/55 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />

      {/* Decoración con paleta oficial */}
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute -right-24 bottom-24 h-80 w-80 rounded-full bg-sky-600/25 blur-3xl" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:px-10 md:py-20 lg:grid-cols-[1fr_0.9fr]">
        {/* Texto principal */}
        <div className="max-w-3xl pt-4 md:pt-0">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-sky-50 backdrop-blur-md sm:text-sm">
            <Sparkles className="h-4 w-4 text-cyan-200" />
            Atención odontológica integral
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Cuidamos tu sonrisa con experiencia y tecnología.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-100 sm:text-lg md:text-xl">
            En{" "}
            <span className="font-semibold text-white">{siteConfig.name}</span>
            , brindamos atención dental profesional, cercana y personalizada
            para cuidar tu salud bucal.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={siteConfig.contact.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-green-500 px-7 py-4 text-base font-bold text-white shadow-xl shadow-green-950/30 transition hover:-translate-y-0.5 hover:bg-green-600"
            >
              <FaWhatsapp className="text-2xl" />
              Agendar por WhatsApp
            </a>

            <Link
              href="/servicios"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/20"
            >
              Ver tratamientos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Mini indicadores */}
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/15 bg-white/10 p-4 text-white backdrop-blur-md">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-cyan-200" />
                <div>
                  <p className="font-bold">35+ años de experiencia</p>
                  <p className="mt-1 text-sm leading-6 text-slate-200">
                    Trayectoria al servicio de la salud bucal.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/10 p-4 text-white backdrop-blur-md">
              <div className="flex items-start gap-3">
                <CalendarCheck className="mt-1 h-5 w-5 shrink-0 text-cyan-200" />
                <div>
                  <p className="font-bold">Atención con cita</p>
                  <p className="mt-1 text-sm leading-6 text-slate-200">
                    Agenda directamente por WhatsApp.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tarjeta lateral de video */}
        <div className="hidden lg:block">
          <div className="ml-auto max-w-md rounded-[2rem] border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
            <div className="overflow-hidden rounded-[1.5rem] bg-slate-900">
              <video
                className="h-72 w-full object-cover"
                src="/carousel4.mp4"
                poster="/carousel1.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Vista del Centro Dental Suárez"
              />
            </div>

            <div className="p-5 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-100">
                Centro Dental Suárez
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                Atención profesional en un ambiente cómodo.
              </h2>

              <p className="mt-3 leading-7 text-slate-200">
                Escríbenos para consultar disponibilidad y recibir orientación
                inicial sobre tu tratamiento.
              </p>

              <a
                href={siteConfig.contact.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-4 font-bold text-brand transition hover:bg-brand-soft"
              >
                <FaWhatsapp className="text-xl text-green-500" />
                Consultar disponibilidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}