// src/app/nosotros/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { aboutHighlights, aboutStats, missionVision } from "../data/about";
import { siteConfig } from "../data/site";
import SectionHeader from "../components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Nosotros | Centro Dental Suárez",
  description:
    "Conoce la historia, misión, visión y valores de Centro Dental Suárez en Santa Cruz de la Sierra.",
};

const icons = {
  target: Target,
  eye: Eye,
  heart: HeartPulse,
};

export default function NosotrosPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden brand-gradient px-4 py-16 text-white sm:px-6 md:px-10 md:py-24">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-cyan-100 sm:text-sm">
              Sobre nosotros
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Una clínica dental con experiencia, calidez y compromiso.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-sky-50 sm:text-lg">
              En {siteConfig.name}, cuidamos la salud bucal de nuestros
              pacientes con atención profesional, trato humano y orientación
              clara en cada tratamiento.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={siteConfig.contact.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 font-bold text-brand shadow-md transition hover:-translate-y-0.5 hover:bg-brand-soft"
              >
                Agendar valoración
              </a>

              <Link
                href="/servicios"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3 font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
              >
                Ver servicios
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[1.35rem] bg-slate-950/20 p-2">
  <Image
    src="/centro.jpg"
    alt="Instalaciones de Centro Dental Suárez"
    width={903}
    height={436}
    priority
    sizes="(max-width: 1024px) 100vw, 45vw"
    className="h-auto w-full rounded-[1rem] object-contain"
  />
</div>

            <div className="absolute -bottom-6 left-4 right-4 rounded-[1.5rem] bg-white p-5 text-slate-900 shadow-xl sm:left-8 sm:right-8">
              <div className="flex items-start gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                  <ShieldCheck className="h-6 w-6" />
                </div>

                <div>
                  <p className="font-bold">Más de 35 años de experiencia</p>
                  <p className="mt-1 text-sm leading-6 text-brand-muted">
                    Trayectoria dedicada al cuidado odontológico en Santa Cruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="bg-white px-4 pb-10 pt-16 sm:px-6 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-3">
          {aboutStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[1.5rem] border border-brand-soft bg-brand-soft p-6 text-center"
            >
              <p className="text-4xl font-bold text-brand">{stat.value}</p>
              <p className="mt-2 font-semibold text-brand-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Historia */}
      <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-brand-soft blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-brand-soft-2 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-[1.75rem] shadow-xl">
              <Image
    src="/carousel1.jpg"
    alt="Atención odontológica en Centro Dental Suárez"
    width={1920}
    height={1080}
    sizes="(max-width: 1024px) 100vw, 45vw"
    className="h-auto w-full rounded-[1.35rem] object-contain"
  />

              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/75 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-white/15 bg-white/15 p-5 text-white backdrop-blur-md">
                <p className="text-sm font-semibold text-cyan-100">
                  Atención profesional
                </p>
                <p className="mt-1 text-2xl font-bold">
                  Cuidamos cada detalle de tu sonrisa.
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-brand sm:text-sm">
              Nuestra historia
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Experiencia odontológica con atención cercana.
            </h2>

            <p className="mt-6 text-base leading-8 text-brand-muted sm:text-lg">
              Centro Dental Suárez nace con el compromiso de brindar una atención
              odontológica integral, responsable y humana. Durante más de tres
              décadas, hemos acompañado a nuestros pacientes en el cuidado de su
              salud bucal.
            </p>

            <p className="mt-4 text-base leading-8 text-brand-muted sm:text-lg">
              Nuestro enfoque combina experiencia, formación profesional y
              tecnología para ofrecer tratamientos adecuados a las necesidades de
              cada persona.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-brand-soft bg-brand-soft p-5">
                <Sparkles className="mb-3 h-6 w-6 text-brand" />
                <p className="font-bold text-slate-900">Atención integral</p>
                <p className="mt-2 text-sm leading-6 text-brand-muted">
                  Estética, prevención, ortodoncia, implantes y más.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-brand-soft bg-brand-soft p-5">
                <Users className="mb-3 h-6 w-6 text-brand" />
                <p className="font-bold text-slate-900">Trato cercano</p>
                <p className="mt-2 text-sm leading-6 text-brand-muted">
                  Comunicación clara y acompañamiento profesional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión, visión, valores */}
      <section className="bg-brand-soft px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Identidad"
            title="Lo que guía nuestra atención"
            description="Trabajamos con una visión clara: cuidar la salud bucal de cada paciente con responsabilidad, calidad y calidez."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {missionVision.map((item) => {
              const Icon = icons[item.icon as keyof typeof icons];

              return (
                <article
                  key={item.title}
                  className="rounded-[1.75rem] border border-brand-soft bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-5 text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-brand-muted">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Diferenciales */}
      <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-brand-soft blur-3xl" />
        <div className="absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-brand-soft-2 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-brand sm:text-sm">
              Nuestro compromiso
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Tratamientos pensados para cuidar tu salud y confianza.
            </h2>

            <p className="mt-5 text-base leading-8 text-brand-muted sm:text-lg">
              Cada paciente recibe orientación según su caso. Buscamos que cada
              tratamiento sea claro, responsable y enfocado en resultados
              saludables.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={siteConfig.contact.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full brand-button px-7 py-3 font-bold shadow-md transition hover:-translate-y-0.5"
              >
                Agendar por WhatsApp
              </a>

              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-soft bg-white px-7 py-3 font-bold text-brand transition hover:-translate-y-0.5 hover:bg-brand-soft"
              >
                Ver ubicación
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-brand-soft bg-white p-5 shadow-xl sm:p-7">
            <div className="space-y-4">
              {aboutHighlights.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-brand-soft p-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand" />
                  <p className="leading-7 text-brand-muted">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-brand-soft px-4 py-16 sm:px-6 md:px-10">
        <div className="mx-auto max-w-5xl rounded-[1.75rem] brand-gradient p-6 text-center text-white shadow-xl sm:p-8 md:p-10">
          <h2 className="text-3xl font-bold">
            Tu sonrisa merece una atención profesional.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-sky-50">
            Escríbenos para consultar disponibilidad y coordinar una valoración
            en Centro Dental Suárez.
          </p>

          <a
            href={siteConfig.contact.whatsappMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center justify-center rounded-full bg-white px-7 py-3 font-bold text-brand shadow-md transition hover:-translate-y-0.5 hover:bg-brand-soft"
          >
            Agendar valoración
          </a>
        </div>
      </section>
    </main>
  );
}