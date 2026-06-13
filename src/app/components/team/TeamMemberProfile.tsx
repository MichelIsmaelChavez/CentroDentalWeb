// src/app/components/team/TeamMemberProfile.tsx

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  CheckCircle2,
  GraduationCap,
  HeartPulse,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "../../data/site";
import { teamMembers, type TeamMember } from "../../data/team";

// CAMBIO: Componente reutilizable para todos los perfiles del equipo.
// Así cada page.tsx del profesional queda pequeño, rápido y ordenado.

type TeamMemberProfileProps = {
  member: TeamMember;
};

export default function TeamMemberProfile({ member }: TeamMemberProfileProps) {
  const otherMembers = teamMembers.filter((item) => item.slug !== member.slug);

  return (
    <main className="overflow-hidden bg-white">
      {/* Hero del profesional */}
      <section className="relative overflow-hidden brand-gradient px-4 py-16 text-white sm:px-6 md:px-10 md:py-24">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          {/* Foto */}
          <div className="order-2 lg:order-1">
            <div className="relative mx-auto max-w-md overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-md">
              <div className="relative overflow-hidden rounded-[1.6rem] bg-brand-soft">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={700}
                  height={850}
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="h-[430px] w-full object-cover sm:h-[540px]"
                />

                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/75 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-sm font-semibold text-cyan-100">
                    {member.role}
                  </p>
                  <h1 className="mt-1 text-3xl font-bold leading-tight text-white">
                    {member.name}
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* Información principal */}
          <div className="order-1 lg:order-2">
            <Link
              href="/#profesionales"
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver al equipo
            </Link>

            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-cyan-100 sm:text-sm">
              Perfil profesional
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {member.name}
            </h2>

            <p className="mt-4 text-xl font-semibold text-sky-50">
              {member.specialty}
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-sky-50 sm:text-lg">
              {member.fullBio}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={siteConfig.contact.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-3 font-bold text-brand shadow-md transition hover:-translate-y-0.5 hover:bg-brand-soft"
              >
                <FaWhatsapp className="text-xl text-green-500" />
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

            {/* Highlights */}
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {member.highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.25rem] border border-white/15 bg-white/10 p-4 backdrop-blur-md"
                >
                  <ShieldCheck className="mb-3 h-5 w-5 text-cyan-100" />
                  <p className="text-sm font-semibold leading-6 text-white">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Formación y áreas */}
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-brand-soft blur-3xl" />
        <div className="absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-brand-soft-2 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Formación */}
          <div className="rounded-[1.75rem] border border-brand-soft bg-white p-5 shadow-xl sm:p-7 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                <GraduationCap className="h-7 w-7" />
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">
                  Formación académica
                </p>
                <h2 className="mt-1 text-3xl font-bold text-slate-900">
                  Estudios y especializaciones
                </h2>
              </div>
            </div>

            <div className="mt-7 space-y-4">
              {member.education.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-brand-soft p-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand" />
                  <p className="leading-7 text-brand-muted">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Áreas */}
          <div className="space-y-6">
            <div className="rounded-[1.75rem] brand-gradient p-6 text-white shadow-xl sm:p-7">
              <Award className="h-9 w-9 text-cyan-100" />

              <h2 className="mt-5 text-3xl font-bold">
                Áreas de atención
              </h2>

              <p className="mt-3 leading-7 text-sky-50">
                Tratamientos y áreas relacionadas con su formación profesional.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {member.areas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white ring-1 ring-white/15"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-brand-soft bg-white p-6 shadow-xl sm:p-7">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                <HeartPulse className="h-7 w-7" />
              </div>

              <h2 className="mt-5 text-2xl font-bold text-slate-900">
                Atención con enfoque humano
              </h2>

              <p className="mt-3 leading-7 text-brand-muted">
                Nuestro equipo busca que cada paciente reciba orientación clara,
                trato cercano y una valoración profesional antes de iniciar un
                tratamiento.
              </p>

              <a
                href={siteConfig.contact.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-green-500 px-7 py-3 font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-green-600"
              >
                <FaWhatsapp className="text-xl" />
                Consultar disponibilidad
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Otros profesionales */}
      <section className="bg-brand-soft px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-brand sm:text-sm">
              Equipo
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Conoce también a otros profesionales
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherMembers.map((item) => (
              <Link
                key={item.slug}
                href={item.href}
                className="group overflow-hidden rounded-[1.75rem] border border-brand-soft bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-60 bg-brand-soft">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={500}
                    height={500}
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/75 to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm font-semibold text-cyan-100">
                      {item.role}
                    </p>
                    <h3 className="mt-1 text-xl font-bold text-white">
                      {item.name}
                    </h3>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-sm font-bold uppercase tracking-wide text-brand">
                    {item.specialty}
                  </p>

                  <p className="mt-3 line-clamp-3 leading-7 text-brand-muted">
                    {item.description}
                  </p>

                  <p className="mt-5 inline-flex items-center gap-2 font-bold text-brand">
                    Ver perfil
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-white px-4 py-16 sm:px-6 md:px-10">
        <div className="mx-auto max-w-5xl rounded-[1.75rem] brand-gradient p-6 text-center text-white shadow-xl sm:p-8 md:p-10">
          <Sparkles className="mx-auto h-10 w-10 text-cyan-100" />

          <h2 className="mt-4 text-3xl font-bold">
            ¿Quieres agendar una valoración?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-sky-50">
            Escríbenos y te ayudamos a coordinar una atención en Centro Dental
            Suárez.
          </p>

          <a
            href={siteConfig.contact.whatsappMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-3 font-bold text-brand shadow-md transition hover:-translate-y-0.5 hover:bg-brand-soft"
          >
            <FaWhatsapp className="text-xl text-green-500" />
            Agendar por WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}