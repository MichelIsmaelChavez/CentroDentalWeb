// src/app/equipo/juansuarez/page.tsx

import type { Metadata } from "next";
import TeamMemberProfile from "../../components/team/TeamMemberProfile";
import { getTeamMemberBySlug } from "../../data/team";

const member = getTeamMemberBySlug("juansuarez")!;

export const metadata: Metadata = {
  title: `${member.name} | Centro Dental Suárez`,
  description: member.description,
};

export default function JuanSuarezPage() {
  return <TeamMemberProfile member={member} />;
}