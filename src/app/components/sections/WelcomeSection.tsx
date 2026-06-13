// src/app/components/sections/WelcomeSection.tsx

import Link from "next/link";
import { ArrowRight, HeartPulse, ShieldCheck } from "lucide-react";
import { siteConfig } from "../../data/site";

// CAMBIO: Unificamos colores con la paleta oficial.
// También mejoramos la vista móvil para que no se vea cargada.

export default function WelcomeSection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 md:px-10 md:py-24">
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-soft blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-brand-soft-2 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-8 rounded-[1.75rem] border border-brand-soft bg-white p-5 shadow-xl sm:p-7 md:grid-cols-[1.1fr_0.9fr] md:p-10 lg:p-12">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-brand sm:text-sm">
              Bienvenidos
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Atención dental profesional con trato humano.
            </h2>

            <p className="mt-5 text-base leading-8 text-brand-muted sm:text-lg">
              En{" "}
              <span className="font-semibold text-brand">
                {siteConfig.name}
              </span>
              , combinamos experiencia, tecnología y atención personalizada para
              cuidar tu salud bucal con confianza.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/nosotros"
                className="inline-flex items-center justify-center gap-2 rounded-full brand-button px-7 py-3 font-bold shadow-md transition hover:-translate-y-0.5"
              >
                Conócenos
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href={siteConfig.contact.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-brand-soft bg-white px-7 py-3 font-bold text-brand transition hover:-translate-y-0.5 hover:bg-brand-soft"
              >
                Reservar por WhatsApp
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-brand-soft bg-brand-soft p-5">
                <ShieldCheck className="mb-3 h-6 w-6 text-brand" />
                <p className="font-bold text-slate-900">Confianza</p>
                <p className="mt-2 text-sm leading-6 text-brand-muted">
                  Valoración clara antes de iniciar.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-brand-soft bg-brand-soft p-5">
                <HeartPulse className="mb-3 h-6 w-6 text-brand" />
                <p className="font-bold text-slate-900">Cuidado integral</p>
                <p className="mt-2 text-sm leading-6 text-brand-muted">
                  Salud, estética y prevención.
                </p>
              </div>


              
            </div>
            

          </div>
        </div>
      </div>
    </section>
  );
}