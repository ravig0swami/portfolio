import { useEffect, useRef, useState } from "react";
import {
  FaBootstrap,
  FaCode,
  FaCss3Alt,
  FaGithub,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaNpm,
  FaReact,
} from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiPostman,
  SiRender,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { TbApi, TbKey } from "react-icons/tb";

const skills = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React.js", icon: FaReact, featured: true },
      { name: "JavaScript", icon: RiJavascriptFill, featured: true },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: RiTailwindCssFill, featured: true },
      { name: "Bootstrap", icon: FaBootstrap },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", icon: FaNodeJs, featured: true },
      { name: "Express.js", icon: SiExpress, featured: true },
      { name: "REST APIs", icon: TbApi, featured: true },
      { name: "JWT Authentication", icon: TbKey },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb, featured: true },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    category: "Tools & Workflow",
    skills: [
      { name: "Git", icon: FaGitAlt, featured: true },
      { name: "GitHub", icon: FaGithub, featured: true },
      { name: "VS Code", icon: FaCode },
      { name: "Postman", icon: SiPostman },
      { name: "npm", icon: FaNpm },
      { name: "Vite", icon: SiVite },
    ],
  },
  {
    category: "Deployment",
    skills: [
      { name: "Vercel", icon: SiVercel },
      { name: "Netlify", icon: SiNetlify },
      { name: "Render", icon: SiRender },
    ],
  },
];

function SkillCard({ skill }) {
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
            Core Skill
          </span>
        )}
      </div>
    </article>
  );
}

function SkillCategory({ category, skills: categorySkills, index }) {
  const categoryRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = categoryRef.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={categoryRef}
      aria-labelledby={`skills-category-${index}`}
      className={`skills-category skills-reveal ${isVisible ? "skills-reveal-visible" : ""}`}
      style={{ "--reveal-delay": `${index * 70}ms` }}
    >
      <div className="flex items-center justify-between gap-3 border-b-2 border-black dark:border-white pb-3 mb-4">
        <h3
          id={`skills-category-${index}`}
          className="font-space font-extrabold text-lg sm:text-xl"
        >
          {category}
        </h3>
        <span className="font-space text-xs font-bold text-zinc-500 dark:text-zinc-400">
          {String(categorySkills.length).padStart(2, "0")}
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
        {categorySkills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
}

export default function Skills() {
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 xl:gap-8 items-start">
        {skills.map((skillGroup, index) => {
          if (skillGroup.category === "Deployment") return null;

          if (skillGroup.category === "Databases") {
            const deploymentGroup = skills.find(
              (group) => group.category === "Deployment",
            );

            return (
              <div key="databases-and-deployment" className="space-y-4">
                <SkillCategory
                  category={skillGroup.category}
                  skills={skillGroup.skills}
                  index={index}
                />
                <SkillCategory
                  category={deploymentGroup.category}
                  skills={deploymentGroup.skills}
                  index={skills.indexOf(deploymentGroup)}
                />
              </div>
            );
          }

          return (
            <SkillCategory
              key={skillGroup.category}
              category={skillGroup.category}
              skills={skillGroup.skills}
              index={index}
            />
          );
        })}
      </div>
    </section>
  );
}
