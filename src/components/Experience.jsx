import { memo } from "react";
import { BookOpen, Calendar, Code2, Globe2, MapPin } from "lucide-react";

const experiences = [
  {
    role: "MERN Stack Developer Intern",
    company: "Alfido Tech",
    location: "India (Remote)",
    duration: "July 2026 – Present",
    description: [
      "Built scalable MERN applications using MongoDB, Express.js, React.js, and Node.js to deliver responsive client solutions.",
      "Implemented RESTful APIs, schema design, and frontend components for seamless data-driven interactions.",
      "Maintained application performance, code quality, and deployments while collaborating with development stakeholders.",
    ],
    tag: "Development",
    icon: Code2,
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Independent Client Engagements",
    location: "Remote",
    duration: "Jan 2025 – Present",
    description: [
      "Built full-stack MERN web applications for independent clients, delivering responsive interfaces and dynamic backend services.",
      "Implemented RESTful APIs with Express and Node.js, while integrating MongoDB for efficient data handling and storage.",
      "Collaborated closely with clients to define project requirements, set milestones, and ship polished production-ready websites.",
    ],
    tag: "Freelance",
    icon: Globe2,
  },
  {
    role: "BCA Scholar (Full Stack Development)",
    company: "MDU University",
    location: "Gurugram India",
    duration: "Aug 2024 – Present",
    description: [
      "Pursuing BCA with a specialization in full-stack development, focusing on frontend, backend, UI/UX, and web application architecture.",
      "Learning MERN Stack alongside programming languages including C, C++, Java, Python, and studying Data Structures and Algorithms.",
      "Working on academic and team projects that combine responsive interfaces with database-backed server logic.",
    ],
    tag: "Academic",
    icon: BookOpen,
  },
];

const Experience = memo(function Experience() {
  return (
    <section
      id="experience"
      className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b-2 border-black dark:border-white text-black dark:text-white transition-colors duration-300"
    >
      <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-8 sm:mb-10">
        <h2 className="font-space font-extrabold text-3xl sm:text-4xl md:text-5xl">
          My Experience &amp; Journey
        </h2>
        <div className="h-1 w-16 sm:w-20 bg-black dark:bg-white mx-auto"></div>
        <p className="font-outfit text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
          A timeline of my professional growth, academic foundations, and
          projects I have worked on along the way.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-0 top-0 h-full w-16">
          <div className="timeline-line"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="grid grid-cols-[0_1fr] lg:grid-cols-[4rem_1fr] gap-x-0 lg:gap-x-8 items-start"
            >
              <div className="relative flex justify-center">
                <span className="timeline-dot" />
              </div>
              <div className="bg-white dark:bg-zinc-900 border-2 border-black dark:border-white neo-shadow-lg neo-transition hover:-translate-y-0.5 hover:shadow-[10px_10px_0px_#000000] dark:hover:shadow-[10px_10px_0px_#ffffff] rounded-none p-6 sm:p-7">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 mb-4">
                  <div className="flex sm:flex-col items-center sm:items-start gap-3 shrink-0">
                    <div className="p-2.5 sm:p-3 bg-zinc-100 dark:bg-zinc-800 border-2 border-black dark:border-zinc-700">
                      <exp.icon size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <span className="px-2.5 py-1 text-xs font-space font-bold border border-black dark:border-white bg-zinc-50 dark:bg-zinc-800 whitespace-nowrap">
                      {exp.tag}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 border-b-2 border-zinc-100 dark:border-zinc-800 pb-3">
                      <div className="min-w-0">
                        <h3 className="font-space font-extrabold text-lg sm:text-xl md:text-2xl leading-snug">
                          {exp.role}
                        </h3>
                        <p className="font-space font-semibold text-sm sm:text-base text-zinc-500 dark:text-zinc-400 mt-0.5">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-row sm:flex-col items-center sm:items-end gap-x-4 gap-y-1 font-outfit text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 shrink-0">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={13} />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin size={13} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="list-none space-y-2 sm:space-y-2.5 font-outfit text-zinc-600 dark:text-zinc-400 mt-4">
                      {exp.description.map((bullet, bulletIdx) => (
                        <li
                          key={bulletIdx}
                          className="flex items-start gap-2 text-sm sm:text-base leading-relaxed"
                        >
                          <span className="text-black dark:text-white font-bold shrink-0 mt-1.5 select-none">
                            •
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Experience;
