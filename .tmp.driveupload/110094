import { ExternalLink, Folder } from "lucide-react";

const GithubIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.47 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
  </svg>
);

export default function Projects() {
  const projectsList = [
    {
      title: "Personal Portfolio Website",
      description:
        "Designed and developed a responsive portfolio website to showcase skills, projects, and contact details using HTML, CSS, and JavaScript.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/ravig0swami",
      live: "https://ravig0swami.netlify.app/",
      category: "Frontend",
    },
    {
      title: "Age Calculator Web App",
      description:
        "Built a responsive age calculator with date validation and expressive UI, deployed to Netlify for easy access.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/ravig0swami/age-calculator",
      live: "https://age-calculator-by-ravi.netlify.app/",
      category: "Frontend",
    },
    {
      title: "GST Calculator Pro",
      description:
        "Features GST-inclusive and exclusive calculations, dark mode support, and a responsive design for seamless tax computation.",
      tech: ["React.js", "Tailwind CSS"],
      github: "https://github.com/ravig0swami/gst-calculator-pro",
      live: "https://gst-calculator-pro-lyart.vercel.app/",
      category: "Frontend",
    },
    {
      title: "Random Joke Generator",
      description:
        "Created a fun web app using React and Tailwind CSS that fetches jokes from a public API and displays them in a clean, responsive interface.",
      tech: ["React.js", "Tailwind CSS", "Fetch API"],
      github: "https://github.com/ravig0swami/random-jokes",
      live: "https://jokes-by-ravi.netlify.app/",
      category: "Frontend",
    },
  ];

  return (
    <section
      id="projects"
      className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b-2 border-black dark:border-white text-black dark:text-white transition-colors duration-300"
    >
      <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-8 sm:mb-10">
        <h2 className="font-space font-extrabold text-3xl sm:text-4xl md:text-5xl">
          My Projects
        </h2>
        <div className="h-1 w-16 sm:w-20 bg-black dark:bg-white mx-auto"></div>
        <p className="font-outfit text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
          A showcase of application environments I have built, ranging from
          backend API designs to fluid frontend interfaces.
        </p>
      </div>

      {/* 1 col on mobile, 2 cols on md+ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 max-w-5xl mx-auto">
        {projectsList.map((project, index) => (
          <div
            key={index}
            className="flex flex-col bg-white dark:bg-zinc-900 border-2 border-black dark:border-white p-4 sm:p-5 neo-shadow neo-transition hover:-translate-y-1 hover:shadow-[8px_8px_0px_#000000] dark:hover:shadow-[8px_8px_0px_#ffffff] rounded-none justify-between text-left"
          >
            <div className="space-y-3 sm:space-y-4">
              {/* Card Header */}
              <div className="flex justify-between items-center">
                <div className="p-2 sm:p-2.5 bg-zinc-50 dark:bg-zinc-800 border-2 border-black dark:border-zinc-700">
                  <Folder size={18} className="text-black dark:text-white" />
                </div>
                <span className="text-xs font-space font-bold uppercase tracking-widest border border-black dark:border-white px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800">
                  {project.category}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="font-space font-extrabold text-xl sm:text-2xl tracking-tight">
                  {project.title}
                </h3>
                <p className="font-outfit text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                {project.tech.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs font-space border border-zinc-300 dark:border-zinc-700 px-2 py-0.5 sm:py-1 bg-zinc-50 dark:bg-zinc-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-3 sm:gap-4 pt-5 sm:pt-6 border-t border-zinc-100 dark:border-zinc-800 mt-5 sm:mt-6">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-space font-bold border-2 border-black dark:border-white px-2.5 sm:px-3 py-1.5 bg-white dark:bg-zinc-900 neo-btn text-black dark:text-white"
              >
                <GithubIcon />
                <span>Code</span>
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-space font-bold border-2 border-black dark:border-white px-2.5 sm:px-3 py-1.5 bg-black dark:bg-white text-white dark:text-black neo-btn"
              >
                <ExternalLink size={14} />
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
