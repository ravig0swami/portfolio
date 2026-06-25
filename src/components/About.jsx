import aboutImg from "../assets/about-laptop.png";
import { BookOpen, Code, Compass } from "lucide-react";

export default function About() {
  const points = [
    {
      icon: <BookOpen className="text-zinc-600 dark:text-zinc-400" size={22} />,
      title: "Education",
      desc: "Pursuing a Bachelor of Computer Applications (BCA) specializing in Full Stack Development, which provides a strong foundation in computer science and programming methodologies.",
    },
    {
      icon: <Code className="text-zinc-600 dark:text-zinc-400" size={22} />,
      title: "Current Stack Focus",
      desc: "Already proficient in frontend design and technologies. Currently leveling up backend systems using Node.js, Express, and MongoDB (MERN Stack) to construct full-scale applications.",
    },
    {
      icon: <Compass className="text-zinc-600 dark:text-zinc-400" size={22} />,
      title: "Hobby & Exploration",
      desc: "In my free time, I love to build new side projects, experiment with experimental frameworks, solve coding puzzles, and explore modern deployment workflows.",
    },
  ];

  return (
    <section
      id="about"
      className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b-2 border-black dark:border-white text-black dark:text-white transition-colors duration-300"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Column: Portrait Illustration — shows below text on mobile */}
        <div className="lg:col-span-5 flex justify-center items-center order-last lg:order-first">
          <div className="relative pt-4 pb-8 px-4 bg-white dark:bg-zinc-900 border-4 border-black dark:border-white neo-shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md">
            <div className="aspect-square bg-zinc-50 dark:bg-zinc-800 border-2 border-dashed border-zinc-400 dark:border-zinc-600 overflow-hidden">
              <img
                src={aboutImg}
                alt="Ravi Goswami Portrait Outline"
                className="w-full h-full object-cover mono-illustration animate-subtle-rotate"
              />
            </div>
            {/* Badge — positioned inside wrapper to avoid clip */}
            <div className="absolute bottom-2 right-2 sm:-bottom-3 sm:-right-3 bg-black dark:bg-white text-white dark:text-black py-1.5 px-3 font-space font-bold text-sm border-2 border-black dark:border-white">
              Full Stack Developer
            </div>
          </div>
        </div>

        {/* Right Column: About Details */}
        <div className="lg:col-span-7 flex flex-col text-left space-y-5 sm:space-y-6">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="font-space font-extrabold text-3xl sm:text-4xl md:text-5xl">
              About Me
            </h2>
            <div className="h-1 w-16 sm:w-20 bg-black dark:bg-white"></div>
            <p className="font-outfit text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed pt-1">
              Hello! My name is <strong>Ravi Goswami</strong>. I am a highly
              motivated software developer based in India, pursuing my BCA in
              Full Stack Development. I love translating complex ideas into
              clean, functional, and visually striking web platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            {points.map((point, index) => (
              <div
                key={index}
                className="p-4 sm:p-5 bg-zinc-50 dark:bg-zinc-900 border-2 border-black dark:border-zinc-800 flex flex-row gap-3 sm:gap-4 items-start neo-transition hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#000000] dark:hover:shadow-[3px_3px_0px_#ffffff]"
              >
                <div className="p-2.5 sm:p-3 bg-white dark:bg-zinc-800 border-2 border-black dark:border-zinc-700 shrink-0">
                  {point.icon}
                </div>
                <div className="space-y-1 min-w-0">
                  <h3 className="font-space font-bold text-base sm:text-lg">
                    {point.title}
                  </h3>
                  <p className="font-outfit text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
