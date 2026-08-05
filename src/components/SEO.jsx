import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { seoData } from "../data/seoData";

const DEFAULT_SEO = {
  title: "Swastixa | Digital Marketing & Web Development Agency",
  description:
    "Swastixa Digital is a full-service digital company that blends strategy, design, and technology to deliver 360° creative and digital marketing solutions, including video production, social media, and website development.",
};

const SEO = ({ title, description, image }) => {
  const location = useLocation();

  const currentPath =
    location.pathname !== "/" && location.pathname.endsWith("/")
      ? location.pathname.slice(0, -1)
      : location.pathname;

  const pageSEO = seoData[currentPath] || DEFAULT_SEO;

  const finalTitle = title || pageSEO.title;
  const finalDescription = description || pageSEO.description;

  const canonicalUrl = `https://swastixa.com${currentPath === "/" ? "/" : currentPath}`;

  const finalImage =
    image || "https://swastixa.com/swastixa_192X192.png";

  useEffect(() => {
    document.title = finalTitle;

    const setMeta = (attribute, key, content) => {
      let element = document.head.querySelector(
        `meta[${attribute}="${key}"]`,
      );

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
      element.removeAttribute("data-rh");
    };
   
    setMeta("name", "description", finalDescription);
    setMeta("name", "robots", "index, follow");
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", "Swastixa Digital");
    setMeta("property", "og:title", finalTitle);
    setMeta("property", "og:description", finalDescription);   
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:image", finalImage);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", finalTitle);
    setMeta("name", "twitter:description", finalDescription);
    setMeta("name", "twitter:image", finalImage);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);
  }, [canonicalUrl, finalDescription, finalImage, finalTitle]);

  return null;
};

export default SEO;
