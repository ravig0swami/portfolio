import { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Header({ darkTheme, setDarkTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "About Me", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact Me", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-zinc-950 border-b-2 border-black dark:border-white text-black dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-space font-bold text-xl sm:text-2xl tracking-tight hover:-translate-y-0.5 transition-transform shrink-0"
        >
          RG
          <span className="text-zinc-500 dark:text-zinc-400 font-normal">
            .dev
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative font-space font-medium text-sm xl:text-base text-black dark:text-white transition-colors duration-200 whitespace-nowrap after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-current after:w-0 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Right Actions */}
        <div className="hidden lg:flex items-center space-x-3">
          <button
            onClick={() => setDarkTheme(!darkTheme)}
            className="p-2 neo-btn bg-white dark:bg-zinc-900 rounded-none text-black dark:text-white"
            aria-label="Toggle theme"
          >
            {darkTheme ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="#contact"
            className="px-4 py-2 font-space font-bold text-sm bg-black dark:bg-white text-white dark:text-black neo-btn whitespace-nowrap"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile / Tablet Actions */}
        <div className="flex items-center space-x-2 sm:space-x-3 lg:hidden">
          <button
            onClick={() => setDarkTheme(!darkTheme)}
            className="p-2 neo-btn bg-white dark:bg-zinc-900 rounded-none text-black dark:text-white"
            aria-label="Toggle theme"
          >
            {darkTheme ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border-2 border-black dark:border-white hover:bg-neutral-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t-2 border-black dark:border-white bg-white dark:bg-zinc-950 px-4 py-6 space-y-4">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="relative font-space font-bold text-lg py-3 border-b border-zinc-100 dark:border-zinc-800 text-black dark:text-white after:absolute after:bottom-2 after:left-0 after:h-0.5 after:bg-current after:w-0 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center px-4 py-3 font-space font-bold bg-black dark:bg-white text-white dark:text-black neo-btn"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
