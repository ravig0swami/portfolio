import { Mail } from "lucide-react";
import heroImg from "../assets/hero-hii.png";

const GithubIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.47 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export default function Hero() {
  const socials = [
    {
      icon: <GithubIcon />,
      url: "https://github.com/ravig0swami",
      label: "GitHub",
    },
    {
      icon: <LinkedinIcon />,
      url: "https://www.linkedin.com/in/ravig0swami",
      label: "LinkedIn",
    },
    {
      icon: <Mail size={20} />,
      url: "mailto:ravikantkumarpuri98@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b-2 border-black dark:border-white text-black dark:text-white transition-colors duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Text Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-4 sm:space-y-5">
          <div className="inline-block px-3 py-1 font-space font-bold text-xs uppercase tracking-widest bg-zinc-100 dark:bg-zinc-800 border-2 border-black dark:border-white">
            Available For Freelance &amp; Roles
          </div>

          <h1 className="font-space font-extrabold text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
            Hello, I'm{" "}
            <span className="underline decoration-4 decoration-zinc-400">
              Ravi Goswami
            </span>
            <span className="text-zinc-600 dark:text-zinc-400">
              . Full Stack Developer Based In India
            </span>
          </h1>

          <p className="font-outfit text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            I'm a full-stack developer currently pursuing a BCA. I specialize in
            designing beautiful, interactive frontend interfaces and building
            scalable, secure backend systems with Node.js, Express, and MongoDB.
          </p>

          {/* Social Icons */}
          <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 items-center">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2.5 sm:p-3 bg-white dark:bg-zinc-900 text-black dark:text-white neo-btn"
              >
                {social.icon}
              </a>
            ))}
            <a
              href="/Ravi_Web-Dev_Resume.pdf"
              download
              className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium transition-colors duration-300 bg-black text-white border-2 border-black dark:bg-white dark:text-black dark:border-white neo-btn"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative p-3 sm:p-4 bg-white dark:bg-zinc-900 border-4 border-black dark:border-white neo-shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md">
            <img
              src={heroImg}
              alt="Minimalist developer illustration"
              className="w-full h-auto object-contain mono-illustration animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
