import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  Copy,
  Mail,
  Share2,
  X,
  Tag,
} from "lucide-react";
import { useState } from "react";
import blogImg from "../assets/blogs-reading.png";

const blogPosts = [
  {
    slug: "faster-react-app-modern-performance",
    title: "Building a Faster React App with Modern Performance Patterns",
    excerpt:
      "A practical guide to reducing unnecessary work in React, from route-level code splitting to deferred rendering and smaller component boundaries.",
    date: "July 24, 2026",
    category: "React Tutorial",
    accent: "bg-lime-300",
    sections: [
      {
        heading: "Start with the expensive work",
        paragraphs: [
          "Performance work is most useful when it starts with evidence. Use the browser performance panel and React DevTools Profiler to find the components that render too often or do too much work during an interaction.",
          "Once you know where the cost is, keep the fix narrow. A smaller component boundary, a less expensive calculation, or a better data-loading boundary usually beats adding optimization everywhere.",
        ],
      },
      {
        heading: "Load less code up front",
        paragraphs: [
          "Route-level code splitting keeps the first screen focused. Move rarely visited pages and heavy widgets behind dynamic imports so the browser only downloads them when a visitor needs them.",
          "The same principle applies to images and data. Give media stable dimensions, lazy-load content below the fold, and request only the fields needed for the current view.",
        ],
      },
      {
        heading: "Keep interactions responsive",
        paragraphs: [
          "Not every state update has the same urgency. Keep typing and direct feedback immediate, then defer non-urgent filtering, rendering, or navigation work so the interface stays responsive.",
          "Finally, measure again after the change. A faster feeling app is the goal, but a before-and-after measurement tells you whether the improvement is real and worth keeping.",
        ],
      },
    ],
  },
  {
    slug: "ai-native-development-full-stack-teams",
    title: "What AI-Native Development Means for Full-Stack Teams",
    excerpt:
      "AI is changing how products are researched, built, and maintained. Here are the engineering habits that keep speed from becoming technical debt.",
    date: "July 10, 2026",
    category: "Technology",
    accent: "bg-orange-300",
    sections: [
      {
        heading: "AI changes the feedback loop",
        paragraphs: [
          "AI tools are becoming part of the everyday development loop: exploring an unfamiliar codebase, drafting a test, comparing implementation options, and turning a rough idea into a working prototype.",
          "The biggest benefit is not replacing engineering judgment. It is shortening the distance between a question and a concrete experiment that the team can review.",
        ],
      },
      {
        heading: "Keep context and boundaries clear",
        paragraphs: [
          "Good results depend on good context. Give an AI tool the relevant interfaces, constraints, and existing patterns, then ask it to make a small, verifiable change rather than guessing across the whole product.",
          "Teams also need clear boundaries around secrets, customer data, and generated code. Review dependencies, licenses, security behavior, and failure cases just as you would for any other contribution.",
        ],
      },
      {
        heading: "Ship with a human feedback loop",
        paragraphs: [
          "The durable workflow is collaborative: generate possibilities quickly, test them against real requirements, and keep the parts that make the product better. Automated checks and small pull requests make this loop safer and faster.",
          "AI-native development is therefore less about a single tool and more about building a team habit of turning ambiguity into reviewed, measurable progress.",
        ],
      },
    ],
  },
];

function BlogPost({ post }) {
  return (
    <main className="flex-grow">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
        <a
          href="/blogs"
          className="inline-flex items-center gap-2 font-space font-bold text-sm mb-10 hover:underline"
        >
          <ArrowLeft size={18} /> Back to blogs
        </a>

        <div
          className={`${post.accent} h-3 border-2 border-black dark:border-white mb-8`}
        />
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6 font-space text-xs font-bold uppercase tracking-wide text-zinc-600 dark:text-zinc-400">
          <span className="inline-flex items-center gap-1.5">
            <Tag size={14} /> {post.category}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays size={14} /> {post.date}
          </span>
        </div>
        <h1 className="font-space font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight mb-6">
          {post.title}
        </h1>
        <p className="font-outfit text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed border-b-2 border-zinc-200 dark:border-zinc-700 pb-8">
          {post.excerpt}
        </p>

        <div className="mt-10 space-y-10">
          {post.sections.map((section) => (
            <section key={section.heading} className="space-y-4">
              <h2 className="font-space font-extrabold text-2xl sm:text-3xl">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="font-outfit text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}

export default function Blogs() {
  const [sharePost, setSharePost] = useState(null);
  const [copied, setCopied] = useState(false);
  const blogSlug = window.location.pathname.split("/").filter(Boolean)[1];
  const selectedPost = blogPosts.find((post) => post.slug === blogSlug);

  const handleShare = async (post) => {
    const shareUrl = `${window.location.origin}/blogs/${post.slug}`;

    if (
      navigator.share &&
      /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
    ) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: shareUrl,
        });
      } catch {
        // Sharing can be cancelled by the visitor.
      }
      return;
    }

    setCopied(false);
    setSharePost({ ...post, shareUrl });
  };

  const copyShareUrl = async () => {
    if (!sharePost) return;

    await navigator.clipboard.writeText(sharePost.shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (selectedPost) {
    return <BlogPost post={selectedPost} />;
  }

  return (
    <main className="flex-grow">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 border-b-2 border-black dark:border-white">
        <a
          href="/"
          className="inline-flex items-center gap-2 font-space font-bold text-sm mb-10 hover:underline"
        >
          <ArrowLeft size={18} /> Back to portfolio
        </a>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7 space-y-5">
            <p className="font-space font-bold text-sm uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              Ravi&apos;s notebook
            </p>
            <h1 className="font-space font-extrabold text-5xl sm:text-6xl md:text-8xl leading-[0.95]">
              Ideas worth
              <span className="block text-zinc-500 dark:text-zinc-400">
                shipping.
              </span>
            </h1>
            <p className="max-w-2xl font-outfit text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Tutorials, experiments, and notes from building useful products
              with React, Node.js, and the technologies shaping the web.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative p-3 sm:p-4 bg-white dark:bg-zinc-900 border-4 border-black dark:border-white neo-shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md">
              <img
                src={blogImg}
                alt="Developer reading and writing about technology"
                className="w-full h-auto object-contain mono-illustration animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="flex flex-col bg-white dark:bg-zinc-900 border-2 border-black dark:border-white neo-shadow-lg"
            >
              <div className={`${post.accent} h-3 border-b-2 border-black`} />
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6 font-space text-xs font-bold uppercase tracking-wide text-zinc-600 dark:text-zinc-400">
                  <span className="inline-flex items-center gap-1.5">
                    <Tag size={14} /> {post.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays size={14} /> {post.date}
                  </span>
                </div>
                <h2 className="font-space font-extrabold text-2xl sm:text-3xl leading-tight mb-4">
                  {post.title}
                </h2>
                <p className="font-outfit text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between gap-4 mt-8 pt-5 border-t-2 border-zinc-200 dark:border-zinc-700">
                  <a
                    href={`/blogs/${post.slug}`}
                    className="inline-flex items-center gap-2 font-space font-bold text-sm hover:underline"
                  >
                    Read More <ArrowRight size={17} />
                  </a>
                  <button
                    type="button"
                    onClick={() => handleShare(post)}
                    className="inline-flex cursor-pointer items-center gap-2 font-space font-bold text-sm hover:underline"
                    aria-label={`Share ${post.title}`}
                  >
                    <Share2 size={17} />
                    Share
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 w-full border-2 border-black dark:border-white p-6 sm:p-8 neo-shadow">
          <h2 className="font-space font-extrabold text-2xl mb-2">
            More posts soon.
          </h2>
          <p className="font-outfit text-zinc-600 dark:text-zinc-400 leading-relaxed">
            This is where new tutorials, project breakdowns, and technology
            notes will live. Add another post to the blog list in Blogs.jsx when
            it is ready to publish.
          </p>
        </div>
      </section>

      {sharePost && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 px-4"
          role="presentation"
          onClick={() => setSharePost(null)}
        >
          <div
            className="w-full max-w-xl bg-zinc-100 dark:bg-zinc-900 border-2 border-black dark:border-white p-5 sm:p-7 neo-shadow-lg"
            role="dialog"
            aria-modal="true"
            aria-labelledby="share-dialog-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 mb-5">
              <h2
                id="share-dialog-title"
                className="font-space font-bold text-xl sm:text-2xl"
              >
                Share public link
              </h2>
              <button
                type="button"
                onClick={() => setSharePost(null)}
                className="cursor-pointer p-1 hover:bg-zinc-200 dark:hover:bg-zinc-800"
                aria-label="Close share dialog"
              >
                <X size={22} />
              </button>
            </div>

            <p className="font-outfit text-sm text-zinc-600 dark:text-zinc-400 mb-4">
              Share this article with your network or copy its public link.
            </p>

            <div className="flex items-center gap-3 border-2 border-zinc-300 dark:border-zinc-700 rounded-full pl-4 pr-1.5 py-1.5 mb-6">
              <span className="font-outfit text-sm truncate flex-grow">
                {sharePost.shareUrl}
              </span>
              <button
                type="button"
                onClick={copyShareUrl}
                className="cursor-pointer shrink-0 inline-flex items-center gap-2 rounded-full bg-zinc-200 dark:bg-zinc-800 px-4 py-2 font-space font-bold text-sm hover:bg-zinc-300 dark:hover:bg-zinc-700"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? "Copied" : "Copy link"}
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <a
                href={`mailto:?subject=${encodeURIComponent(sharePost.title)}&body=${encodeURIComponent(sharePost.shareUrl)}`}
                className="cursor-pointer flex flex-col items-center gap-2 p-3 rounded-full bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700"
              >
                <Mail size={24} />
                <span className="font-space font-bold text-xs">Email</span>
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(sharePost.shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer flex flex-col items-center gap-2 p-3 rounded-full bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700"
              >
                <span className="font-space font-extrabold text-xl">f</span>
                <span className="font-space font-bold text-xs">Facebook</span>
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(sharePost.title)}&url=${encodeURIComponent(sharePost.shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer flex flex-col items-center gap-2 p-3 rounded-full bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700"
              >
                <span className="font-space font-extrabold text-xl">X</span>
                <span className="font-space font-bold text-xs">X</span>
              </a>
              <a
                href={`https://www.reddit.com/submit?url=${encodeURIComponent(sharePost.shareUrl)}&title=${encodeURIComponent(sharePost.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer flex flex-col items-center gap-2 p-3 rounded-full bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700"
              >
                <span className="font-space font-extrabold text-xl">r/</span>
                <span className="font-space font-bold text-xs">Reddit</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
