// src/app/data/services.ts

export type ServiceIcon =
  | "smile"
  | "teeth"
  | "doctor"
  | "xray"
  | "tooth";

export type Service = {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  fullDescription: string;
  image: string;
  benefits: string[];
  details: string[];
  benefitSummary: string;
  icon: ServiceIcon;
  href: string;
  tag?: string;
};

export const services: Service[] = [
  {
    id: "estetica-dental",
    title: "Estética Dental",
    shortTitle: "Estética",
    description:
      "Tratamientos enfocados en mejorar la armonía, color y apariencia de tu sonrisa.",
    fullDescription:
      "Blanqueamiento, carillas y diseño de sonrisa para mejorar la estética dental de forma natural, personalizada y acorde al rostro de cada paciente.",
    image: "/servicios/estetica.jpg",
    benefits: ["Blanqueamiento", "Carillas", "Diseño de sonrisa"],
    details: [
      "Blanqueamiento dental profesional",
      "Carillas estéticas",
      "Diseño de sonrisa personalizado",
      "Correcciones estéticas menores",
      "Armonización de color y forma dental",
    ],
    benefitSummary:
      "Mejora la apariencia de tu sonrisa de forma natural, ayudando a fortalecer la confianza al sonreír.",
    icon: "smile",
    href: "/servicios#estetica-dental",
    tag: "Sonrisa",
  },
  {
    id: "ortodoncia",
    title: "Ortodoncia",
    shortTitle: "Ortodoncia",
    description:
      "Corrección de la posición dental para mejorar estética, mordida y salud bucal.",
    fullDescription:
      "Tratamientos de ortodoncia para alinear los dientes, mejorar la mordida y favorecer una sonrisa más funcional y estética.",
    image: "/servicios/ortodoncia.jpg",
    benefits: ["Brackets", "Alineación dental", "Control de mordida"],
    details: [
      "Brackets metálicos",
      "Brackets estéticos",
      "Evaluación de mordida",
      "Seguimiento del progreso",
      "Plan de tratamiento personalizado",
    ],
    benefitSummary:
      "Ayuda a corregir la posición dental, mejorar la función masticatoria y prevenir problemas futuros.",
    icon: "teeth",
    href: "/servicios#ortodoncia",
  },
  {
    id: "ortodoncia-invisible",
    title: "Ortodoncia Invisible",
    shortTitle: "Invisible",
    description:
      "Alineadores transparentes para corregir tu sonrisa de forma cómoda y discreta.",
    fullDescription:
      "Alternativa estética con alineadores transparentes removibles, pensada para corregir la posición dental con mayor comodidad y discreción.",
    image: "/servicios/aligners.jpg",
    benefits: ["Alineadores", "Tratamiento discreto", "Mayor comodidad"],
    details: [
      "Alineadores transparentes",
      "Tratamiento removible",
      "Planificación personalizada",
      "Mayor comodidad durante el tratamiento",
      "Alternativa estética frente a brackets",
    ],
    benefitSummary:
      "Permite corregir la sonrisa de manera más discreta y cómoda, adaptándose mejor al día a día del paciente.",
    icon: "smile",
    href: "/servicios#ortodoncia-invisible",
    tag: "Estético",
  },
  {
    id: "implantes-dentales",
    title: "Implantes Dentales",
    shortTitle: "Implantes",
    description:
      "Soluciones para reemplazar piezas dentales perdidas con estabilidad y naturalidad.",
    fullDescription:
      "Tratamientos orientados a reemplazar piezas dentales perdidas, recuperando estética, función y comodidad al momento de sonreír y masticar.",
    image: "/servicios/implantes.jpg",
    benefits: ["Reemplazo dental", "Funcionalidad", "Resultado natural"],
    details: [
      "Evaluación para implantes",
      "Reemplazo de piezas dentales",
      "Rehabilitación funcional",
      "Mejora estética de la sonrisa",
      "Planificación según el caso del paciente",
    ],
    benefitSummary:
      "Ayuda a recuperar la función masticatoria y la estética de manera estable y natural.",
    icon: "doctor",
    href: "/servicios#implantes-dentales",
  },
  {
    id: "cirugia-periodontal",
    title: "Cirugía Periodontal",
    shortTitle: "Periodoncia",
    description:
      "Tratamientos especializados para el cuidado de encías y tejidos de soporte dental.",
    fullDescription:
      "Atención especializada para problemas de encías y tejidos que sostienen los dientes, buscando conservar la salud bucal y prevenir complicaciones.",
    image: "/servicios/periodontal.jpg",
    benefits: ["Encías", "Soporte dental", "Tratamiento avanzado"],
    details: [
      "Evaluación periodontal",
      "Tratamiento de encías",
      "Cuidado de tejidos de soporte",
      "Prevención de pérdida dental",
      "Procedimientos según diagnóstico",
    ],
    benefitSummary:
      "Favorece la salud de las encías y ayuda a proteger las piezas dentales a largo plazo.",
    icon: "xray",
    href: "/servicios#cirugia-periodontal",
  },
  {
    id: "endodoncia",
    title: "Endodoncia",
    shortTitle: "Endodoncia",
    description:
      "Tratamiento de conducto para conservar piezas dentales afectadas y aliviar molestias.",
    fullDescription:
      "Tratamiento orientado a conservar piezas dentales afectadas por daño interno, evitando extracciones cuando el caso lo permite.",
    image: "/servicios/endodoncia.jpg",
    benefits: ["Conductos", "Conservación dental", "Dolor dental"],
    details: [
      "Tratamiento de conducto",
      "Conservación de piezas dentales",
      "Atención de molestias dentales",
      "Evaluación con criterio profesional",
      "Seguimiento del caso",
    ],
    benefitSummary:
      "Permite conservar dientes que podrían perderse, manteniendo la estructura dental natural.",
    icon: "tooth",
    href: "/servicios#endodoncia",
  },
];