import { memo } from "react";
import { FaGithub, FaGitAlt, FaNodeJs, FaReact } from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiDocker,
  SiExpress,
  SiGithubactions,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiRedis,
  SiRender,
  SiSocketdotio,
  SiSupabase,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { TbApi, TbKey, TbSql } from "react-icons/tb";

const skills = [
  { name: "TypeScript", icon: SiTypescript, featured: true },
  { name: "JavaScript", icon: RiJavascriptFill, featured: true },
  { name: "React.js", icon: FaReact, featured: true },
  { name: "Next.js", icon: SiNextdotjs, featured: true },
  { name: "Node.js", icon: FaNodeJs, featured: true },
  { name: "Express.js", icon: SiExpress, featured: true },
  { name: "PostgreSQL", icon: SiPostgresql, featured: true },
  { name: "REST APIs", icon: TbApi, featured: true },
  { name: "Tailwind CSS", icon: RiTailwindCssFill, featured: true },
  { name: "SQL", icon: TbSql, featured: true },
  { name: "MongoDB", icon: SiMongodb, featured: true },
  { name: "Git", icon: FaGitAlt, featured: true },
  { name: "Authentication", icon: TbKey },
  { name: "Docker", icon: SiDocker },
  { name: "Prisma", icon: SiPrisma },
  { name: "Redis", icon: SiRedis },
  { name: "WebSockets", icon: SiSocketdotio },
  { name: "Supabase", icon: SiSupabase },
  { name: "GitHub", icon: FaGithub },
  { name: "GitHub Actions", icon: SiGithubactions },
  { name: "Vite", icon: SiVite },
  { name: "Postman", icon: SiPostman },
  { name: "Vercel", icon: SiVercel },
  { name: "Render", icon: SiRender },
];

const SkillCard = memo(function SkillCard({ skill }) {
  const Icon = skill.icon;

  return (
    <article
      aria-label={`${skill.name}${skill.featured ? ", core skill" : ""}`}
      className={`skill-card ${skill.featured ? "skill-card-featured" : ""}`}
    >
      <Icon aria-hidden="true" className="skill-card-icon" />
      <div className="min-w-0">
        <h4 className="font-space font-bold text-sm sm:text-base leading-tight">
          {skill.name}
        </h4>
        {skill.featured && (
          <span className="mt-2 inline-block font-space text-[0.65rem] font-bold uppercase tracking-[0.16em]">
            CORE SKILL
          </span>
        )}
      </div>
    </article>
  );
});

const Skills = memo(function Skills() {
  return (
    <section
      id="skills"
      className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b-2 border-black dark:border-white text-black dark:text-white transition-colors duration-300"
    >
      <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-12 md:mb-14">
        <h2 className="font-space font-extrabold text-3xl sm:text-4xl md:text-5xl">
          My Skills &amp; Tech Stack
        </h2>
        <div className="h-1 w-16 sm:w-20 bg-black dark:bg-white mx-auto" />
        <p className="font-outfit text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
          The tools and technologies I use to build, ship, and maintain modern
          web experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
});

export default Skills;
