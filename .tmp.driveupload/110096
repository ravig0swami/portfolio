import { ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-white dark:bg-zinc-950 border-t-2 border-black dark:border-white text-black dark:text-white transition-colors duration-300 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo and Copyright */}
        <div className="text-center sm:text-left space-y-1.5">
          <a
            href="#"
            className="font-space font-bold text-lg sm:text-xl tracking-tight"
          >
            RG
            <span className="text-zinc-500 dark:text-zinc-400 font-normal">
              .dev
            </span>
          </a>
          <p className="font-outfit text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
            &copy; {new Date().getFullYear()} Ravi Goswami. Handcrafted in
            India.
          </p>
        </div>

        {/* Footer Nav Links */}
        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-x-6 text-xs sm:text-sm font-space font-medium">
          <a
            href="#about"
            className="relative text-black dark:text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-current after:w-0 after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </a>
          <a
            href="#skills"
            className="relative text-black dark:text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-current after:w-0 after:transition-all after:duration-300 hover:after:w-full"
          >
            Skills
          </a>
          <a
            href="#experience"
            className="relative text-black dark:text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-current after:w-0 after:transition-all after:duration-300 hover:after:w-full"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="relative text-black dark:text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-current after:w-0 after:transition-all after:duration-300 hover:after:w-full"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="relative text-black dark:text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-current after:w-0 after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </a>
        </nav>

        {/* Back to Top */}
        <button
          onClick={handleScrollToTop}
          className="hidden sm:block p-2.5 sm:p-3 bg-white dark:bg-zinc-900 border-2 border-black dark:border-white neo-btn shrink-0"
          aria-label="Scroll to top"
        >
          <ArrowUp size={16} className="sm:w-4.5 sm:h-4.5" />
        </button>
      </div>
    </footer>
  );
}
