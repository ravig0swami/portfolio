import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Blogs from "./components/Blogs";

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

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkTheme) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkTheme]);

  // The app uses the pathname as a lightweight route switch for the portfolio and blog.
  const isBlogRoute = window.location.pathname.startsWith("/blogs");

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-black dark:text-white transition-colors duration-300 flex flex-col font-outfit overflow-x-hidden">
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />

      {isBlogRoute ? (
        <Blogs />
      ) : (
        <main className="grow">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
      )}

      <Footer />
    </div>
  );
}
