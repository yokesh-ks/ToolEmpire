import globby from "globby";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = await globby([
    "pages/*.tsx",
    "pages/*/*.tsx",
    "!pages/api",
    "!pages/404.tsx",
    "!pages/sitemap.ts",
    "!pages/_app.tsx",
    "!pages/_document.tsx",
    "!pages/pdf-to-word.tsx",
    "!pages/color-magic.tsx",
  ]);
  const urls: MetadataRoute.Sitemap = [];
  pages.map((page) => {
    const path = page
      .replace("pages", "")
      .replace("data", "")
      .replace(".tsx", "")
      .replace(".mdx", "");

    const excludedPaths = [/^\/[^/]*\/index$/]; // Regular expressions to match paths like /blogs/index, /category/index, etc.

    const isExcluded = excludedPaths.some((regex) => regex.test(path));

    let route = path;

    if (path === "/index") {
      route = "";
    } else if (isExcluded) {
      route = path.replace(/\/index$/, "");
    } else {
      route = path;
    }

    urls.push({
      url: `https://topological-materials.vercel.app${route}`,
      lastModified: new Date(),
    });
    return;
  });

  return urls;
}
