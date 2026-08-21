import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  Copy,
  Share2,
  X,
  Tag,
} from "lucide-react";
import { useState } from "react";
import blogImg from "../assets/blogs-reading.png";
import { blogPosts } from "../data/blogPosts";

function BlogPost({ post }) {
  return (
    <main className="flex-grow">
      <article className="w-full lg:w-[80%] max-w-none mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-16">
        <a
          href="/blogs"
          className="inline-flex items-center gap-2 font-space font-bold text-sm mb-6 hover:underline"
        >
          <ArrowLeft size={18} /> Back to blogs
        </a>

        <div
          className={`${post.accent} h-3 border-2 border-black dark:border-white mb-6`}
        />
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 font-space text-xs font-bold uppercase tracking-wide text-zinc-600 dark:text-zinc-400">
          <span className="inline-flex items-center gap-1.5">
            <Tag size={14} /> {post.category}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays size={14} /> {post.date}
          </span>
        </div>
        <h1 className="font-space font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight mb-4">
          {post.title}
        </h1>
        <p className="font-outfit text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed border-b-2 border-zinc-200 dark:border-zinc-700 pb-6">
          {post.excerpt}
        </p>

        <div className="mt-8 space-y-8">
          {post.sections.map((section) => (
            <section key={section.heading} className="space-y-3">
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
  const postsPerPage = 10;
  const [sharePost, setSharePost] = useState(null);
  const [copied, setCopied] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const blogSlug = window.location.pathname.split("/").filter(Boolean)[1];
  const selectedPost = blogPosts.find((post) => post.slug === blogSlug);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const visiblePosts = blogPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage,
  );

  const handleShare = async (post) => {
    const shareUrl = `${window.location.origin}/blogs/${post.slug}`;
    const shareData = {
      title: post.title,
      url: shareUrl,
    };

    let canUseNativeShare =
      typeof navigator !== "undefined" && typeof navigator.share === "function";

    if (canUseNativeShare && typeof navigator.canShare === "function") {
      try {
        canUseNativeShare = navigator.canShare({ url: shareUrl });
      } catch {
        canUseNativeShare = false;
      }
    }

    if (canUseNativeShare) {
      try {
        await navigator.share(shareData);
        return;
      } catch (error) {
        if (error.name === "AbortError") return;
      }
    }

    setCopied(false);
    setSharePost({ ...post, shareUrl });
  };

  const copyShareUrl = async () => {
    if (!sharePost) return;

    try {
      if (typeof navigator.clipboard?.writeText === "function") {
        await navigator.clipboard.writeText(sharePost.shareUrl);
      } else {
        const input = document.createElement("textarea");
        input.value = sharePost.shareUrl;
        input.setAttribute("readonly", "true");
        input.style.position = "fixed";
        input.style.opacity = "0";
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        input.remove();
      }

      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  if (selectedPost) {
    return <BlogPost post={selectedPost} />;
  }

  return (
    <main className="flex-grow">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-16 border-b-2 border-black dark:border-white">
        <a
          href="/"
          className="inline-flex items-center gap-2 font-space font-bold text-sm mb-6 hover:underline"
        >
          <ArrowLeft size={18} /> Back to portfolio
        </a>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
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
          {visiblePosts.map((post) => (
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

        {totalPages > 1 && (
          <nav
            className="flex flex-wrap items-center justify-center gap-2 mt-10"
            aria-label="Blog pagination"
          >
            <button
              type="button"
              onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
              disabled={currentPage === 1}
              className="inline-flex items-center gap-2 border-2 border-black dark:border-white px-3 py-2 font-space font-bold text-sm neo-btn disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none disabled:transform-none"
            >
              <ArrowLeft size={16} /> Previous
            </button>

            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  aria-label={`Go to page ${page}`}
                  aria-current={currentPage === page ? "page" : undefined}
                  className={`min-w-10 border-2 border-black dark:border-white px-3 py-2 font-space font-bold text-sm neo-btn ${
                    currentPage === page
                      ? "bg-black text-white dark:bg-white dark:text-black"
                      : "bg-white dark:bg-zinc-900"
                  }`}
                >
                  {page}
                </button>
              ),
            )}

            <button
              type="button"
              onClick={() =>
                setCurrentPage((page) => Math.min(page + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="inline-flex items-center gap-2 border-2 border-black dark:border-white px-3 py-2 font-space font-bold text-sm neo-btn disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none disabled:transform-none"
            >
              Next <ArrowRight size={16} />
            </button>
          </nav>
        )}

        <div className="mt-16 w-full border-2 border-black dark:border-white p-6 sm:p-8 neo-shadow">
          <h2 className="font-space font-extrabold text-2xl mb-2">
            More posts coming soon.
          </h2>
          <p className="font-outfit text-zinc-600 dark:text-zinc-400 leading-relaxed">
            New tutorials, project breakdowns, and practical notes on modern web
            development are on the way. Check back soon for fresh ideas and
            lessons from building real-world digital experiences.
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
              Native sharing is unavailable in this browser. Copy the public
              link instead.
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
          </div>
        </div>
      )}
    </main>
  );
}
