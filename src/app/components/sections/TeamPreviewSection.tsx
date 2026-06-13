// src/app/components/sections/TeamPreviewSection.tsx

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, GraduationCap, ShieldCheck } from "lucide-react";
import { teamMembers } from "../../data/team";
import { siteConfig } from "../../data/site";
import SectionHeader from "../ui/SectionHeader";

// CAMBIO: Unificamos colores con la paleta oficial.
// CAMBIO: Mantenemos diseño mobile-first para que se vea bien en celulares.

export default function TeamPreviewSection() {
  return (
    <section className="relative overflow-hidden bg-brand-soft px-4 py-16 sm:px-6 md:px-10 md:py-24">
      <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-white blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-brand-soft-2 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Nuestro equipo"
          title="Profesionales que cuidan tu sonrisa con experiencia"
          description="Un equipo odontológico con formación especializada, trato cercano y compromiso con la salud bucal de cada paciente."
        />

        {/* Bloque introductorio */}
        <div className="mb-8 rounded-[1.75rem] border border-brand-soft bg-white p-5 shadow-xl sm:p-6 md:mb-10 md:p-8">
          <div className="grid gap-6 md:grid-cols-[1fr_1.2fr] md:items-center">
            <div>
              <p className="inline-flex rounded-full bg-brand-soft px-4 py-2 text-sm font-bold text-brand">
                Atención odontológica integral
              </p>

              <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                Cada tratamiento comienza con una valoración profesional.
              </h3>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-brand-soft p-4">
                <ShieldCheck className="mb-3 h-6 w-6 text-brand" />
                <p className="text-sm font-bold text-slate-900">Confianza</p>
                <p className="mt-1 text-sm text-brand-muted">
                  Atención clara y responsable.
                </p>
              </div>

              <div className="rounded-2xl bg-brand-soft p-4">
                <GraduationCap className="mb-3 h-6 w-6 text-brand" />
                <p className="text-sm font-bold text-slate-900">Formación</p>
                <p className="mt-1 text-sm text-brand-muted">
                  Profesionales especializados.
                </p>
              </div>

              <div className="rounded-2xl bg-brand-soft p-4">
                <Award className="mb-3 h-6 w-6 text-brand" />
                <p className="text-sm font-bold text-slate-900">Experiencia</p>
                <p className="mt-1 text-sm text-brand-muted">
                  Más de 35 años de servicio.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Profesionales */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <article
              key={member.href}
              className="group overflow-hidden rounded-[1.75rem] border border-brand-soft bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <Link href={member.href} className="block">
                <div className="relative h-64 overflow-hidden bg-brand-soft sm:h-72 lg:h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={500}
                    height={600}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/80 to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm font-semibold text-cyan-100">
                      {member.role}
                    </p>
                    <h3 className="mt-1 text-xl font-bold leading-tight text-white">
                      {member.name}
                    </h3>
                  </div>
                </div>
              </Link>

              <div className="p-5 sm:p-6">
                <p className="text-sm font-bold uppercase tracking-wide text-brand">
                  {member.specialty}
                </p>

                <p className="mt-3 leading-7 text-brand-muted">
                  {member.description}
                </p>

                <div className="mt-5 space-y-2">
                  {member.highlights.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-secondary)]" />
                      <p className="text-sm leading-6 text-brand-muted">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <Link
                  href={member.href}
                  className="mt-6 inline-flex items-center gap-2 font-bold text-brand transition hover:text-brand-secondary"
                >
                  Ver perfil
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="brand-gradient mt-10 rounded-[1.75rem] p-6 text-center text-white shadow-xl sm:p-8">
          <h3 className="text-2xl font-bold">¿Quieres agendar una atención?</h3>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-sky-50">
            Puedes escribirnos directamente por WhatsApp para consultar
            disponibilidad y coordinar tu visita.
          </p>

          <a
            href={siteConfig.contact.whatsappMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-7 py-3 font-bold text-brand shadow-md transition hover:-translate-y-0.5 hover:bg-brand-soft"
          >
            Agendar atención
          </a>
        </div>
      </div>
    </section>
  );
}