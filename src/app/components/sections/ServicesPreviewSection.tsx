// src/app/components/sections/ServicesPreviewSection.tsx

import Link from "next/link";
import {
  FaSmile,
  FaTeethOpen,
  FaXRay,
  FaUserMd,
  FaTooth,
} from "react-icons/fa";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services, type ServiceIcon } from "../../data/services";
import { siteConfig } from "../../data/site";
import SectionHeader from "../ui/SectionHeader";

// CAMBIO: Mapeamos los nombres de íconos definidos en data/services.ts
// con componentes reales de react-icons.
const serviceIcons: Record<ServiceIcon, React.ElementType> = {
  smile: FaSmile,
  teeth: FaTeethOpen,
  doctor: FaUserMd,
  xray: FaXRay,
  tooth: FaTooth,
};

export default function ServicesPreviewSection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 md:px-10 md:py-24">
      {/* CAMBIO: Decoración suave de fondo para dar profundidad sin recargar. */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-sky-100 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-100 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Servicios odontológicos"
          title="Tratamientos diseñados para cuidar y mejorar tu sonrisa"
          description="Atención integral para prevenir, tratar y recuperar tu salud bucal con un enfoque profesional y personalizado."
        />

        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.4fr] lg:gap-6">
          {/* Tarjeta destacada */}
          <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-sky-700 via-sky-600 to-cyan-500 p-6 text-white shadow-xl sm:p-8">
            {/* CAMBIO: Elementos decorativos internos para que la tarjeta se vea más moderna. */}
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/15" />
            <div className="absolute -bottom-20 left-10 h-52 w-52 rounded-full bg-white/10" />

            <div className="relative">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-white text-sky-700 shadow-lg">
                <FaTooth className="text-4xl" />
              </div>

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-100">
                Atención integral
              </p>

              <h3 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                Todo lo que necesitas para cuidar tu salud bucal.
              </h3>

              <p className="mt-5 leading-8 text-sky-50">
                Desde estética dental hasta tratamientos especializados, nuestro
                equipo te orienta según tus necesidades y objetivos.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-100" />
                  <p className="text-sky-50">
                    Evaluación profesional antes de iniciar cada tratamiento.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-100" />
                  <p className="text-sky-50">
                    Planes personalizados según el caso de cada paciente.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-100" />
                  <p className="text-sky-50">
                    Atención cercana en un ambiente cómodo y confiable.
                  </p>
                </div>
              </div>

              <a
                href={siteConfig.contact.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center justify-center rounded-full bg-white px-7 py-3 font-bold text-sky-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-sky-50"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </div>

          {/* Grid de servicios */}
          <div className="grid gap-5 sm:grid-cols-2">
            {services.map((service) => {
              const Icon = serviceIcons[service.icon];

              return (
                <Link
                  key={service.id}
                  href={service.href}
                  className="group rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl sm:p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 transition group-hover:bg-sky-600 group-hover:text-white">
                      <Icon className="text-3xl" />
                    </div>

                    {service.tag && (
                      <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-cyan-700">
                        {service.tag}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600 sm:min-h-[84px]">
                    {service.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.benefits.map((benefit) => (
                      <span
                        key={benefit}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-2 font-bold text-sky-700">
                    Ver tratamiento
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* CTA inferior */}
        <div className="mt-12 rounded-[2rem] border border-sky-100 bg-sky-50 p-6 text-center md:p-8">
          <h3 className="text-2xl font-bold text-slate-900">
            ¿No sabes qué tratamiento necesitas?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600">
            Escríbenos y te orientamos para agendar una valoración según tu caso.
          </p>

          <a
            href={siteConfig.contact.whatsappMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-7 py-3 font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-sky-500"
          >
            Quiero una valoración
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}