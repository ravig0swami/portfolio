import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer Trainee",
      company: "Self-Directed Bootcamps & Projects",
      location: "India (Remote)",
      duration: "Dec 2025 – Present",
      description: [
        "Architecting MERN stack web applications by building responsive user interfaces with React and Tailwind CSS.",
        "Developing RESTful web APIs using Node.js and Express, implementing clean route handling, and managing data modeling via MongoDB and Mongoose.",
        "Version controlling all projects using Git/GitHub and executing deployments on modern cloud providers.",
      ],
      tag: "Development",
    },
    {
      role: "BCA Scholar (Full Stack Focus)",
      company: "Academic Studies",
      location: "India",
      duration: "Aug 2024 – Present",
      description: [
        "Studying core computer science theory including Object-Oriented Programming (Java/C++), Data Structures, Algorithms, and Database Management Systems.",
        "Participated in local university coding challenges, writing optimization scripts in Python and solving algorithm problems.",
        "Collaborated with peers on team projects, integrating basic frontends with relational SQL backends.",
      ],
      tag: "Academic",
    },
    {
      role: "Freelance Frontend & CMS Developer",
      company: "Independent Client Engagements",
      location: "Remote",
      duration: "Jan 2024 – Dec 2024",
      description: [
        "Designed and customized commercial web portals using WordPress, tailoring PHP templates and configuring SEO configurations.",
        "Crafted mobile-responsive pages using HTML5, CSS3, JavaScript, and Bootstrap, improving page load speeds by 25%.",
        "Interfaced directly with clients to define product specifications, set milestones, and deliver functional landing pages.",
      ],
      tag: "Freelance",
    },
  ];

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

      <div className="space-y-5 sm:space-y-6 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="p-4 sm:p-5 md:p-6 bg-white dark:bg-zinc-900 border-2 border-black dark:border-white neo-shadow-lg neo-transition hover:-translate-y-0.5 hover:shadow-[10px_10px_0px_#000000] dark:hover:shadow-[10px_10px_0px_#ffffff] rounded-none"
          >
            {/* Card Header: icon + tag + meta — stacked on mobile, row on md+ */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 mb-4">
              {/* Icon + Tag */}
              <div className="flex sm:flex-col items-center sm:items-start gap-3 shrink-0">
                <div className="p-2.5 sm:p-3 bg-zinc-100 dark:bg-zinc-800 border-2 border-black dark:border-zinc-700">
                  <Briefcase size={20} className="sm:w-6 sm:h-6" />
                </div>
                <span className="px-2.5 py-1 text-xs font-space font-bold border border-black dark:border-white bg-zinc-50 dark:bg-zinc-800 whitespace-nowrap">
                  {exp.tag}
                </span>
              </div>

              {/* Role + Company + Meta */}
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
        ))}
      </div>
    </section>
  );
}
