// src/app/servicios/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FaSmile,
  FaTeethOpen,
  FaXRay,
  FaUserMd,
  FaTooth,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services, type ServiceIcon } from "../data/services";
import { siteConfig } from "../data/site";
import SectionHeader from "../components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Servicios | Centro Dental Suárez",
  description:
    "Conoce los tratamientos odontológicos de Centro Dental Suárez: estética dental, ortodoncia, implantes, periodoncia y endodoncia.",
};

const serviceIcons: Record<ServiceIcon, IconType> = {
  smile: FaSmile,
  teeth: FaTeethOpen,
  doctor: FaUserMd,
  xray: FaXRay,
  tooth: FaTooth,
};

export default function ServiciosPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* Hero de página */}
      <section className="relative overflow-hidden brand-gradient px-4 py-16 text-white sm:px-6 md:px-10 md:py-24">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-cyan-100 sm:text-sm">
              Servicios odontológicos
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Tratamientos para cuidar y mejorar tu sonrisa.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-sky-50 sm:text-lg">
              Conoce nuestras áreas de atención odontológica. Cada tratamiento
              inicia con una valoración profesional según tu caso.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={siteConfig.contact.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 font-bold text-brand shadow-md transition hover:-translate-y-0.5 hover:bg-brand-soft"
              >
                Consultar por WhatsApp
              </a>

              <a
                href="#lista-servicios"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3 font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
              >
                Ver servicios
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Índice rápido */}
      <section className="bg-brand-soft px-4 py-8 sm:px-6 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {services.map((service) => {
              const Icon = serviceIcons[service.icon];

              return (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="flex shrink-0 items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-bold text-brand shadow-sm ring-1 ring-brand-soft transition hover:bg-brand-soft-2"
                >
                  <Icon className="text-lg" />
                  {service.shortTitle}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lista de servicios */}
      <section
        id="lista-servicios"
        className="relative overflow-hidden px-4 py-16 sm:px-6 md:px-10 md:py-24"
      >
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-brand-soft blur-3xl" />
        <div className="absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-brand-soft-2 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Tratamientos"
            title="Elige el servicio que necesitas conocer"
            description="Revisa las opciones disponibles y comunícate con nosotros para recibir orientación personalizada."
          />

          <div className="space-y-10 md:space-y-14">
            {services.map((service, index) => {
              const Icon = serviceIcons[service.icon];
              const reversed = index % 2 !== 0;

              return (
                <article
                  id={service.id}
                  key={service.id}
                  className="scroll-mt-28 overflow-hidden rounded-[1.75rem] border border-brand-soft bg-white shadow-xl"
                >
                  <div
                    className={`grid gap-0 lg:grid-cols-2 ${
                      reversed ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    {/* Imagen */}
                    <div className="relative min-h-[260px] overflow-hidden bg-brand-soft sm:min-h-[360px] lg:min-h-full">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={900}
                        height={650}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="h-full w-full object-cover"
                        priority={index === 0}
                      />

                      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/70 to-transparent" />

                      <div className="absolute bottom-5 left-5 right-5">
                        <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white backdrop-blur-md ring-1 ring-white/20">
                          {service.tag ?? "Tratamiento dental"}
                        </span>
                      </div>
                    </div>

                    {/* Contenido */}
                    <div className="p-5 sm:p-7 lg:p-10">
                      <div className="flex items-start gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                          <Icon className="text-3xl" />
                        </div>

                        <div>
                          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">
                            Servicio
                          </p>
                          <h2 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
                            {service.title}
                          </h2>
                        </div>
                      </div>

                      <p className="mt-5 text-base leading-8 text-brand-muted sm:text-lg">
                        {service.fullDescription}
                      </p>

                      <div className="mt-7">
                        <h3 className="font-bold text-slate-900">
                          Características principales
                        </h3>

                        <div className="mt-4 grid gap-3">
                          {service.details.map((detail) => (
                            <div key={detail} className="flex gap-3">
                              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand" />
                              <p className="leading-7 text-brand-muted">
                                {detail}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-7 rounded-[1.5rem] bg-brand-soft p-5">
                        <h3 className="font-bold text-slate-900">Beneficios</h3>
                        <p className="mt-2 leading-7 text-brand-muted">
                          {service.benefitSummary}
                        </p>
                      </div>

                      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                        <a
                          href={siteConfig.contact.whatsappMessage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-full brand-button px-7 py-3 font-bold shadow-md transition hover:-translate-y-0.5"
                        >
                          Consultar este servicio
                        </a>

                        <Link
                          href="/contacto"
                          className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-soft bg-white px-7 py-3 font-bold text-brand transition hover:-translate-y-0.5 hover:bg-brand-soft"
                        >
                          Ver contacto
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-brand-soft px-4 py-16 sm:px-6 md:px-10">
        <div className="mx-auto max-w-5xl rounded-[1.75rem] brand-gradient p-6 text-center text-white shadow-xl sm:p-8 md:p-10">
          <h2 className="text-3xl font-bold">
            ¿Necesitas orientación antes de elegir un tratamiento?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-sky-50">
            Escríbenos y te ayudamos a coordinar una valoración profesional en
            Centro Dental Suárez.
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