import React, { useState, useEffect, useMemo } from "react";
const ICONS = [
  {
    url: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixadigital/swastixa-clients-logos/dlf-logo.png",
    alt: "dlf-logo",
  },
  {
    url: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixadigital/swastixa-clients-logos/emaar-logo.png",
    alt: "Munchon",
  },
  {
    url: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixadigital/swastixa-clients-logos/mthreem-logo.png",
    alt: "Munchon",
  },
  // m3m

  {
    url: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixadigital/swastixa-clients-logos/mrg-logo.png",
    alt: "Munchon",
  },
  {
    url: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixadigital/swastixa-clients-logos/signature-global-logo.png",
    alt: "Signature Global",
    // link: "https://signatureglobal.in" 
  },
  {
    url: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixadigital/swastixa-clients-logos/ganga-logo.png",
    alt: "Munchon",
  },
  {
    url: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixadigital/swastixa-clients-logos/aarize-logo.png",
    alt: "Mahagun",
    // link: "https://mahagunindia.com"
  },
  {
    url: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixadigital/swastixa-clients-logos/iris-logo.png",
    alt: "Munchon",
  },

  {
    url: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixadigital/swastixa-clients-logos/tirasya-logo.png",
    alt: "Munchon",
  },
  {
    url: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixadigital/swastixa-clients-logos/bestmate-logo.png",
    alt: "Paramount",
    // link: "https://paramountgroup.co.in"
  },
  {
    url: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixadigital/swastixa-clients-logos/smart-world-logo.png",
    alt: "Munchon",
  },
  {
    url: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixadigital/swastixa-clients-logos/sare-logo.png",
    alt: "Munchon",
  },

  {
    url: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixadigital/swastixa-clients-logos/panasonic-logo.png",
    alt: "Munchon",
  },

  {
    url: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixadigital/swastixa-clients-logos/paramount-logo.png",
    alt: "Munchon",
  },
  {
    url: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixadigital/swastixa-clients-logos/rki-logo.png",
    alt: "Munchon",
  },

  {
    url: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixadigital/swastixa-clients-logos/egrowthindia-logo.png",
    alt: "Munchon",
  },
  {
    url: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixadigital/swastixa-clients-logos/bexex-logo.png",
    alt: "Ministry of Information and Broadcasting",
  },

  {
    url: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixadigital/swastixa-clients-logos/kevvali-logo.png",
    alt: "Munchon",
  },
  {
    url: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixadigital/swastixa-clients-logos/grace-aesthetic-logo.png",
    alt: "Munchon",
  },
  {
    url: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixadigital/swastixa-clients-logos/ishaadrii-logo.png",
    alt: "Munchon",
  },
  {
    url: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixadigital/swastixa-clients-logos/swadeshi-logo.png",
    alt: "Munchon",
  },
  {
    url: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixadigital/swastixa-clients-logos/washguys-logo.png",
    alt: "Munchon",
  },
  {
    url: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixadigital/swastixa-clients-logos/kloy-logo.png",
    alt: "Munchon",
  },
  {
    url: "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixadigital/swastixa-clients-logos/one-group-logo.png",
    alt: "Munchon",
  },


];


// constants (adjust if needed)
const ICONS_PER_PAGE_DEFAULT = 8;
const MOBILE_BREAKPOINT = 430;
const ICONS_PER_PAGE_MOBILE = 6;

// assume ICONS array is imported/defined above

export default function LogoCarousel() {
  const [page, setPage] = useState(0);
  const [iconsPerPage, setIconsPerPage] = useState(ICONS_PER_PAGE_DEFAULT);

  // 1) handle resize -> set iconsPerPage
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= MOBILE_BREAKPOINT) {
        setIconsPerPage(ICONS_PER_PAGE_MOBILE);
      } else {
        setIconsPerPage(ICONS_PER_PAGE_DEFAULT);
      }
    }

    handleResize(); // initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 2) compute total pages from ICONS length and iconsPerPage
  const totalPages = useMemo(() => {
    const totalIcons = ICONS.length;
    return Math.max(1, Math.ceil(totalIcons / iconsPerPage));
  }, [iconsPerPage]);

  // 3) clamp page when iconsPerPage or totalPages changes
  useEffect(() => {
    setPage((prev) => {
      // ensure page is within [0, totalPages-1]
      if (prev >= totalPages) return 0;
      return prev;
    });
  }, [totalPages]);

  // 4) single auto-slide effect (works for mobile & desktop)
  useEffect(() => {
    // if only one page, no need to start interval
    if (totalPages <= 1) return;

    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 4000); // 4s — change if you want faster/slower

    return () => clearInterval(interval);
  }, [totalPages]);

  // 5) slice current icons (memoized)
  const currentIcons = useMemo(() => {
    const start = page * iconsPerPage;
    return ICONS.slice(start, start + iconsPerPage);
  }, [page, iconsPerPage]);

  // 6) grid columns string — keep mobile 3 columns when iconsPerPage === 6
  const gridClasses =
    iconsPerPage === ICONS_PER_PAGE_MOBILE
      ? "grid grid-cols-3 gap-6 sm:gap-10 md:gap-14 lg:gap-20"
      : "grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-10 md:gap-14 lg:gap-20";

  return (
    <div className="min-h-1/2 sm:min-h-screen w-full flex items-center justify-center py-10">
      <div className="w-full max-w-[1250px] px-4">
        <div className={gridClasses}>
          {currentIcons.map((icon, idx) => (
            <a
              key={`${icon.url}_${idx}_${page}`}
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-end justify-center group transition-transform duration-300 hover:scale-110"
            >
              <img
                src={icon.url}
                alt={icon.alt || `logo-${idx}`}
                loading="lazy"
                className="
                  h-28 w-28 
                  sm:h-32 sm:w-32 
                  md:h-40 md:w-40 
                  lg:h-48 lg:w-52 
                  object-contain  
                  grayscale 
                  group-hover:grayscale-0 
                  transition
                "
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}