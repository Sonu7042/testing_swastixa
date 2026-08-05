import { Helmet } from "react-helmet-async";
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

  return (
    <Helmet>
      <title>{finalTitle}</title>

      <meta name="description" content={finalDescription} />

      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Swastixa Digital" />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={finalImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta
        name="twitter:description"
        content={finalDescription}
      />
      <meta name="twitter:image" content={finalImage} />
    </Helmet>
  );
};

export default SEO;