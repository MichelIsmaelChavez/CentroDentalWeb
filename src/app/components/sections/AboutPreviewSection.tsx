// src/app/components/sections/AboutPreviewSection.tsx

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartPulse, ShieldCheck, Sparkles } from "lucide-react";
import { siteConfig } from "../../data/site";

// CAMBIO: Unificamos colores con la paleta oficial.
// CAMBIO: Mantenemos el bloque responsive para celular y escritorio.

export default function AboutPreviewSection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 md:px-10 md:py-24">
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-brand-soft blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-brand-soft-2 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        {/* Imagen */}
        <div className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-[1.75rem] shadow-2xl sm:rounded-[2rem]">
            <Image
              src="/centro.jpg"
              alt="Instalaciones de Centro Dental Suárez"
              width={900}
              height={650}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-[340px] w-full object-cover sm:h-[440px] lg:h-[560px]"
            />

            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/75 to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/15 bg-white/15 p-5 text-white backdrop-blur-md">
              <p className="text-sm font-semibold text-cyan-100">
                Centro Dental Suárez
              </p>
              <p className="mt-1 text-2xl font-bold">
                Más de 35 años cuidando sonrisas.
              </p>
            </div>
          </div>

          {/* Tarjeta flotante escritorio */}
          <div className="hidden lg:absolute lg:-right-8 lg:top-10 lg:block lg:w-56">
            <div className="rounded-[1.5rem] bg-white p-5 shadow-xl ring-1 ring-brand-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                <ShieldCheck className="h-6 w-6" />
              </div>

              <p className="mt-4 text-sm font-bold text-slate-900">
                Atención confiable
              </p>

              <p className="mt-2 text-sm leading-6 text-brand-muted">
                Orientación clara antes de iniciar cada tratamiento.
              </p>
            </div>
          </div>
        </div>

        {/* Contenido */}
        <div className="order-1 lg:order-2">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-brand sm:text-sm">
            Nosotros
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Una clínica dental con experiencia, calidez y atención profesional.
          </h2>

          <p className="mt-6 text-base leading-8 text-brand-muted sm:text-lg">
            En{" "}
            <span className="font-semibold text-brand">{siteConfig.name}</span>,
            brindamos atención odontológica integral con un enfoque humano,
            responsable y personalizado.
          </p>

          <p className="mt-4 text-base leading-8 text-brand-muted sm:text-lg">
            Nuestro compromiso es acompañar a cada paciente con información
            clara, tratamientos adecuados y un ambiente cómodo para cuidar su
            salud bucal.
          </p>

          {/* Valores */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-brand-soft bg-brand-soft p-5">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-brand shadow-sm">
                <HeartPulse className="h-6 w-6" />
              </div>

              <p className="font-bold text-slate-900">Trato humano</p>
              <p className="mt-2 text-sm leading-6 text-brand-muted">
                Atención cercana y respetuosa.
              </p>
            </div>

            <div className="rounded-3xl border border-brand-soft bg-brand-soft p-5">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-brand shadow-sm">
                <Sparkles className="h-6 w-6" />
              </div>

              <p className="font-bold text-slate-900">Sonrisa saludable</p>
              <p className="mt-2 text-sm leading-6 text-brand-muted">
                Tratamientos para estética y salud.
              </p>
            </div>

            <div className="rounded-3xl border border-brand-soft bg-brand-soft p-5">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-brand shadow-sm">
                <ShieldCheck className="h-6 w-6" />
              </div>

              <p className="font-bold text-slate-900">Confianza</p>
              <p className="mt-2 text-sm leading-6 text-brand-muted">
                Valoración profesional del caso.
              </p>
            </div>
          </div>

          {/* Bloque experiencia */}
          <div className="brand-gradient mt-8 rounded-[1.75rem] p-6 text-white shadow-xl sm:p-7">
            <div className="grid gap-5 sm:grid-cols-[0.7fr_1.3fr] sm:items-center">
              <div>
                <p className="text-4xl font-bold text-white">35+</p>
                <p className="mt-1 text-sm font-semibold text-sky-50">
                  años de trayectoria
                </p>
              </div>

              <p className="leading-7 text-sky-50">
                Una atención dental enfocada en la confianza, la prevención y
                el cuidado integral de cada paciente.
              </p>
            </div>
          </div>

          {/* Botones */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/nosotros"
              className="inline-flex items-center justify-center gap-2 rounded-full brand-button px-7 py-3 font-bold shadow-md transition hover:-translate-y-0.5"
            >
              Conocer más
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href={siteConfig.contact.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-brand-soft bg-white px-7 py-3 font-bold text-brand transition hover:-translate-y-0.5 hover:bg-brand-soft"
            >
              Agendar valoración
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}