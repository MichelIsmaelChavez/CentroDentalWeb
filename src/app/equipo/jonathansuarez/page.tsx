// src/app/equipo/jonathansuarez/page.tsx

import type { Metadata } from "next";
import TeamMemberProfile from "../../components/team/TeamMemberProfile";
import { getTeamMemberBySlug } from "../../data/team";

const member = getTeamMemberBySlug("jonathansuarez")!;

export const metadata: Metadata = {
  title: `${member.name} | Centro Dental Suárez`,
  description: member.description,
};

export default function JonathanSuarezPage() {
  return <TeamMemberProfile member={member} />;
}