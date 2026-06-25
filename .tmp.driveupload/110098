import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setIsSent(false), 3000);
    }, 1200);
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b-2 border-black dark:border-white text-black dark:text-white transition-colors duration-300"
    >
      <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-8 sm:mb-10">
        <h2 className="font-space font-extrabold text-3xl sm:text-4xl md:text-5xl">
          Get In Touch
        </h2>
        <div className="h-1 w-16 sm:w-20 bg-black dark:bg-white mx-auto"></div>
        <p className="font-outfit text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
          Have an exciting project in mind, a freelance opportunity, or just
          want to connect? Hit me up!
        </p>
      </div>

      {/* On mobile: form first, info cards below. On lg: info left, form right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 max-w-5xl mx-auto">
        {/* Contact Form — order-1 on mobile so it shows first */}
        <div className="lg:col-span-7 order-1 lg:order-2 bg-white dark:bg-zinc-900 border-2 border-black dark:border-white p-5 sm:p-6 md:p-8 neo-shadow-lg text-left">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            {/* Name & Email side-by-side on sm+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block font-space font-bold text-sm sm:text-base"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  placeholder="Ravi Goswami"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-black dark:border-zinc-700 bg-white dark:bg-zinc-950 font-outfit text-sm sm:text-base text-black dark:text-white placeholder-zinc-400 focus:outline-none focus:border-zinc-500 dark:focus:border-zinc-400 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block font-space font-bold text-sm sm:text-base"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  placeholder="ravikantkumarpuri98@gmail.com"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-black dark:border-zinc-700 bg-white dark:bg-zinc-950 font-outfit text-sm sm:text-base text-black dark:text-white placeholder-zinc-400 focus:outline-none focus:border-zinc-500 dark:focus:border-zinc-400 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block font-space font-bold text-sm sm:text-base"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Hi Ravi, let's talk about building a new web application!"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-black dark:border-zinc-700 bg-white dark:bg-zinc-950 font-outfit text-sm sm:text-base text-black dark:text-white placeholder-zinc-400 focus:outline-none focus:border-zinc-500 dark:focus:border-zinc-400 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || isSent}
              className={`w-full py-3 sm:py-3.5 font-space font-extrabold text-sm sm:text-base border-2 border-black dark:border-white neo-btn flex items-center justify-center gap-2 ${
                isSent
                  ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 cursor-default"
                  : "bg-black dark:bg-white text-white dark:text-black"
              }`}
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></span>
                  <span>Sending Message...</span>
                </>
              ) : isSent ? (
                <>
                  <CheckCircle size={16} />
                  <span>Message Sent Successfully!</span>
                </>
              ) : (
                <>
                  <Send size={16} />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Contact Info Cards — order-2 on mobile (below form) */}
        <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-start space-y-4 sm:space-y-6 text-left">
          <div className="p-4 sm:p-6 bg-white dark:bg-zinc-900 border-2 border-black dark:border-white neo-shadow neo-transition hover:-translate-y-0.5">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2.5 sm:p-3 bg-zinc-50 dark:bg-zinc-800 border-2 border-black dark:border-zinc-700 text-black dark:text-white shrink-0">
                <Mail size={20} />
              </div>
              <div className="min-w-0">
                <h3 className="font-space font-bold text-base sm:text-lg">
                  Email Me
                </h3>
                <a
                  href="mailto:ravikantkumarpuri98@gmail.com"
                  className="font-outfit text-sm sm:text-base text-zinc-600 dark:text-zinc-400 hover:underline break-all"
                >
                  ravikantkumarpuri98@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-6 bg-white dark:bg-zinc-900 border-2 border-black dark:border-white neo-shadow neo-transition hover:-translate-y-0.5">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2.5 sm:p-3 bg-zinc-50 dark:bg-zinc-800 border-2 border-black dark:border-zinc-700 text-black dark:text-white shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-space font-bold text-base sm:text-lg">
                  Location
                </h3>
                <p className="font-outfit text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
                  Gurugram Haryana India
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-6 bg-zinc-100 dark:bg-zinc-900 border-2 border-black dark:border-zinc-700">
            <h4 className="font-space font-bold text-xs sm:text-sm uppercase tracking-widest mb-2">
              Response Rate
            </h4>
            <p className="font-outfit text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              I am highly active online and usually reply to emails and
              inquiries within 24 hours. Let's build something awesome together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
