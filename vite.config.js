import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { join } from "node:path";
import { cwd, env } from "node:process";
import { blogPosts } from "./src/data/blogPosts.js";

const siteOrigin = env.VITE_SITE_URL || "https://ravig0swami.vercel.app";

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function socialMetadata(post, imageUrl) {
  const title = escapeHtml(post.title);
  const description = escapeHtml(post.excerpt);
  const url = `${siteOrigin}/blogs/${post.slug}`;
  const image = `${siteOrigin}${imageUrl}`;

  return `
    <title>${title} | Ravi Goswami</title>
    <meta name="description" content="${description}" />
    <link rel="canonical" href="${url}" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="800" />
    <meta property="og:image:alt" content="Developer reading a technology book" />
    <meta property="og:site_name" content="Ravi Goswami" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${image}" />
  `;
}

function blogMetadataPlugin() {
  return {
    name: "generate-blog-metadata",
    closeBundle() {
      const distDirectory = join(cwd(), "dist");
      const assetsDirectory = join(distDirectory, "assets");
      const shellPath = join(distDirectory, "index.html");

      if (!existsSync(shellPath) || !existsSync(assetsDirectory)) return;

      const previewAsset = readdirSync(assetsDirectory).find((fileName) =>
        fileName.startsWith("blogs-reading-"),
      );

      if (!previewAsset) {
        throw new Error("Could not find the built blog preview image.");
      }

      const shell = readFileSync(shellPath, "utf8");
      const imageUrl = `/assets/${previewAsset}`;

      blogPosts.forEach((post) => {
        const postDirectory = join(distDirectory, "blogs", post.slug);
        mkdirSync(postDirectory, { recursive: true });

        const metadata = socialMetadata(post, imageUrl);
        const postShell = shell
          .replace(/<title>[\s\S]*?<\/title>/i, "")
          .replace(/\s*<meta name="description"[^>]*>/i, "")
          .replace("</head>", `${metadata}\n  </head>`);

        writeFileSync(join(postDirectory, "index.html"), postShell);
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), blogMetadataPlugin()],
});
