// src/app/equipo/elianapantoja/page.tsx

import type { Metadata } from "next";
import TeamMemberProfile from "../../components/team/TeamMemberProfile";
import { getTeamMemberBySlug } from "../../data/team";

const member = getTeamMemberBySlug("elianapantoja")!;

export const metadata: Metadata = {
  title: `${member.name} | Centro Dental Suárez`,
  description: member.description,
};

export default function ElianaPantojaPage() {
  return <TeamMemberProfile member={member} />;
}