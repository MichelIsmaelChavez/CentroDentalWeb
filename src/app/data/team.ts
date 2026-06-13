// src/app/data/team.ts

// CAMBIO: Centralizamos toda la información del equipo.
// Así las páginas de cada profesional usan una sola plantilla y no repetimos código.

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  specialty: string;
  image: string;
  href: string;
  description: string;
  fullBio: string;
  highlights: string[];
  education: string[];
  areas: string[];
};

export const teamMembers: TeamMember[] = [
  {
    slug: "juansuarez",
    name: "Dr. Juan Suárez Castellanos",
    role: "Odontólogo",
    specialty: "Ortodoncia, Periodoncia e Implantología",
    image: "/profesionales/doc1.jpg",
    href: "/equipo/juansuarez",
    description:
      "Cirujano dentista con amplia formación en periodoncia, implantes, ortodoncia, educación superior y ciencias de la salud.",
    fullBio:
      "Profesional con amplia trayectoria en odontología, especializado en áreas como periodoncia, implantología y ortodoncia. Su formación académica y experiencia clínica respaldan una atención integral, responsable y enfocada en la salud bucal de cada paciente.",
    highlights: [
      "Más de 35 años de experiencia institucional",
      "Formación en ortodoncia, periodoncia e implantes",
      "Enfoque integral en salud bucal",
    ],
    education: [
      "Cirujano Dentista UMSA La Paz",
      "Diplomado en Periodoncia, Universidad Ciencias Médicas de La Habana - Cuba",
      "Diplomado en Implantes, Universidad Ciencias Médicas de La Habana - Cuba",
      "Especialidad en Ortodoncia, Universidad Ciencias Médicas de La Habana - Cuba",
      "Maestría en Educación Superior, U.C.U.",
      "Doctorado en Ciencias de la Salud Humana, mención Odontología UAGRM",
    ],
    areas: [
      "Ortodoncia",
      "Periodoncia",
      "Implantología",
      "Rehabilitación oral",
      "Valoración odontológica integral",
    ],
  },
  {
    slug: "joelsuarez",
    name: "Dr. Joel Suárez De Los Ríos",
    role: "Odontólogo",
    specialty: "Ortodoncia y Rehabilitación Oral",
    image: "/profesionales/doc1.jpg",
    href: "/equipo/joelsuarez",
    description:
      "Profesional especializado en ortodoncia, educación superior en salud y rehabilitación oral.",
    fullBio:
      "Odontólogo con formación en ortodoncia y rehabilitación oral, orientado a brindar atención profesional, clara y personalizada según las necesidades de cada paciente.",
    highlights: [
      "Especialidad en Ortodoncia",
      "Maestría en Rehabilitación Oral",
      "Atención enfocada en estética y función dental",
    ],
    education: [
      "Licenciado en Odontología, Universidad Católica Boliviana San Pablo",
      "Especialidad en Ortodoncia, Universidad Católica Boliviana San Pablo",
      "Especialidad en Educación Superior en Salud, Universidad Gabriel René Moreno",
      "Maestría en Rehabilitación Oral, Universidad Católica Boliviana San Pablo",
    ],
    areas: [
      "Ortodoncia",
      "Rehabilitación oral",
      "Valoración de mordida",
      "Estética dental funcional",
      "Seguimiento de tratamiento",
    ],
  },
  {
    slug: "jonathansuarez",
    name: "Dr. Jonathan Suárez De Los Ríos",
    role: "Odontólogo",
    specialty: "Implantología, Rehabilitación Oral y Ortodoncia",
    image: "/profesionales/doc1.jpg",
    href: "/equipo/jonathansuarez",
    description:
      "Odontólogo con formación en implantología, rehabilitación oral, educación superior y ortodoncia.",
    fullBio:
      "Profesional con formación complementaria en implantología, rehabilitación oral y ortodoncia, orientado a tratamientos que buscan recuperar salud, función y estética dental.",
    highlights: [
      "Formación en Implantología",
      "Diplomado en Rehabilitación Oral",
      "Especialidad en Ortodoncia",
    ],
    education: [
      "Licenciado en Odontología, Universidad Católica Boliviana San Pablo",
      "Diplomado en Implantología CEPODO",
      "Diplomado en Rehabilitación Oral UNT Perú",
      "Diplomado en Educación Superior EMI",
      "Especialidad en Ortodoncia, Universidad Católica Boliviana San Pablo",
    ],
    areas: [
      "Implantología",
      "Rehabilitación oral",
      "Ortodoncia",
      "Estética dental",
      "Valoración integral",
    ],
  },
  {
    slug: "elianapantoja",
    name: "Dra. Eliana Pantoja Barranco",
    role: "Odontóloga",
    specialty: "Odontopediatría y Endodoncia",
    image: "/profesionales/doc2.jpg",
    href: "/equipo/elianapantoja",
    description:
      "Profesional enfocada en odontopediatría, educación superior y tratamientos de endodoncia.",
    fullBio:
      "Odontóloga con formación en odontopediatría y endodoncia, orientada al cuidado dental con trato cercano, paciencia y responsabilidad profesional.",
    highlights: [
      "Especialidad en Endodoncia",
      "Diplomado en Odontopediatría",
      "Atención cercana y cuidadosa",
    ],
    education: [
      "Licenciada en Odontología, Universidad Católica Boliviana San Pablo",
      "Diplomado en Odontopediatría CEPODO",
      "Diplomado en Educación Superior EMI",
      "Especialidad en Endodoncia, Universidad Gabriel René Moreno",
    ],
    areas: [
      "Endodoncia",
      "Odontopediatría",
      "Atención preventiva",
      "Cuidado dental familiar",
      "Valoración odontológica",
    ],
  },
];

export function getTeamMemberBySlug(slug: string) {
  return teamMembers.find((member) => member.slug === slug);
}