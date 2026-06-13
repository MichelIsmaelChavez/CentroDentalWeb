// src/app/components/sections/ScheduleSection.tsx

import { Clock, CalendarCheck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "../../data/site";
import SectionHeader from "../ui/SectionHeader";

// CAMBIO: Rediseñamos horarios usando la paleta oficial.
// También mejoramos la vista móvil para que sea clara y cómoda.

export default function ScheduleSection() {
  return (
    <section className="brand-gradient relative overflow-hidden px-4 py-16 text-white sm:px-6 md:px-10 md:py-24">
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Horarios"
          title="Agenda tu atención en nuestros horarios disponibles"
          description="Comunícate con nosotros para consultar disponibilidad y coordinar tu cita."
          light
        />

        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1fr_0.85fr]">
          {/* Horarios */}
          <div className="rounded-[1.75rem] border border-white/20 bg-white/10 p-5 shadow-xl backdrop-blur-md sm:p-7">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand">
                <Clock className="h-6 w-6" />
              </div>

              <div>
                <h3 className="text-xl font-bold">Horarios de atención</h3>
                <p className="text-sm text-sky-50">
                  Atención presencial en clínica.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {siteConfig.schedule.map((item) => (
                <div
                  key={item.day}
                  className="rounded-2xl border border-white/15 bg-white/10 p-4"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <span className="font-bold text-white">{item.day}</span>

                    <span
                      className={
                        item.time === "Cerrado"
                          ? "font-bold text-red-100"
                          : "font-semibold text-sky-50"
                      }
                    >
                      {item.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-[1.75rem] bg-white p-5 text-slate-900 shadow-xl sm:p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand">
              <CalendarCheck className="h-6 w-6" />
            </div>

            <h3 className="mt-5 text-2xl font-bold">
              ¿Quieres reservar una cita?
            </h3>

            <p className="mt-3 leading-7 text-brand-muted">
              Escríbenos por WhatsApp para consultar disponibilidad, horarios y
              orientación inicial según tu tratamiento.
            </p>

            <a
              href={siteConfig.contact.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-green-500 px-7 py-4 font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-green-600"
            >
              <FaWhatsapp className="text-2xl" />
              Agendar por WhatsApp
            </a>

            <p className="mt-4 text-center text-sm text-slate-500">
              Respuesta directa por el canal oficial del centro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}