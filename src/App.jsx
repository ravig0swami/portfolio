import { useState, useEffect, useCallback } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  // Initialize the theme once, preferring the saved choice over system settings.
  const [darkTheme, setDarkTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        return savedTheme === "dark";
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  const toggleDarkTheme = useCallback(() => {
    setDarkTheme((current) => !current);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const root = window.document.documentElement;
    if (darkTheme) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkTheme]);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-black dark:text-white transition-colors duration-300 flex flex-col font-outfit overflow-x-hidden">
      <Header darkTheme={darkTheme} setDarkTheme={toggleDarkTheme} />

      <main className="grow">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
