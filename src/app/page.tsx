import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { ExperienceSection } from "@/components/experience-section";
import { Hero } from "@/components/hero";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { projects } from "@/data/projects";
import {
  aboutHighlights,
  contacts,
  education,
  experiences,
  personalStats,
  profile,
  skillGroups,
  skills
} from "@/data/site";

export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-10 sm:gap-28 sm:py-16">
      <Hero {...profile} />
      <SkillsSection groups={skillGroups} allSkills={skills} />
      <AboutSection highlights={aboutHighlights} stats={personalStats} />
      <ProjectsSection projects={projects.slice(0, 4)} />
      <ExperienceSection experiences={experiences} education={education} />
      <ContactSection contacts={contacts} />
    </div>
  );
}
