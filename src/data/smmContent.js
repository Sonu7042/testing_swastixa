// List of raw URLs for social media post images
const rawUrls = [
    // Eazzy Posts
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/mthreem-legacy-edm.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/eazzy-justchill-static.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/eazzy-tvrepair-static.jpg",
    // MThreeM Posts
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/mthreem-avenue-edm.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/mthreem-globalicon-edm.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/mthreem-cullinan-edm.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/mthreem-delhi-edm.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/mthreem-distinction-edm.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/mthreem-everthing-edm.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/mthreem-future-edm.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/mthreem-global-edm.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/mthreem-jacobco-edm.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/mthreem-jawelcrest-edm.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/mthreem-jewelcreest-edm.jpg",
    
// new add post
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/eassy-spa.jpeg",
"https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/eassy-washing-machine.jpeg",
"https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/eazzy-justchill.jpeg",
"https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/kevvali-pasta.jpeg",
"https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/kevvali-mogito.jpeg",
"https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/bestmate-need-swastixa.jpeg",

    //mrg
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/mrg-antichild-edm.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/mrg-carnival.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/mrg-crown-edm.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/mrg-kids-edm.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/mrg-meditation-edm.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/mrg-ownership-edm.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/mrg-pool-edm.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/mrg-sale-edm.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/mrg-skating-edm.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/mrg-spa-Salon.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/mrg-summar-carnival-edm.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/mrg-summer-edm.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/mthreem-residence-edm.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/mrg-table-tennis.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/mrg-yoga-edm.jpg",

    // m3m 
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/mthreem-clubhouse-edm.jpg",
    // "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/mthreem-line-avenue.jpeg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/mthreem-thecity-edm.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/mthreem-line-suite.jpeg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/mthreem-luxury-edm.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/mthreem-noida-edm.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/tirasya-everyday-edm.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/mthreem-precision-edm.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/tirasya-effortless-static.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/mthreem-sip-edm.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/tirasya-holiday-edm.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/mthreem-skyline-edm.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/mthreem-suite-edm.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/mthreem-theline-edm.jpg",
    // Tirasya Posts
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/tirasya-beautynature-edm.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/tirasya-calmclass-edm.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/tirasya-comingsoon-edm-one.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/tirasya-lapofnature-edm.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/tirasya-lifestyle-edm.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/tirasya-luxury-static.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/tirasya-nature-edm.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/tirasya-sunshine-edm.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/tirasya-vacation-edm.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/tirasya-vibe-edm.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/tirasya-wakeup-edm.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/tirasya-withnature-edm.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/tirasya.jpeg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/triasya-luxuryhouse-edm.jpg",

    // Bestmate Posts
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/bestmate-onejourney-static.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/bestmate-whatif-static.jpg",



    // Ishaadrii Posts
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/ishaadrii-home-static.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/ishaadrii-detox-static.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/ishaadrii-indulgence-static.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/ishaadrii-livepure-static.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/ishaadrii-whispers-static.jpg",
    // "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/ishhaadrii-coming-soon.jpeg",

    // Kevvali Posts
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/kevvali-coldcoffee-static.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/kevvali-greenapple-static.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/kevvali-kittyparty-static.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/kevvali-lucky-roll.jpeg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/kevvali-masala-static.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/kevvali-momo-static.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/kevvali-music.jpeg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/kevvali-vegburger-static.jpg",

    // Kloy Posts
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/kloy-comb-static.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/kloy-cool-static.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/kloy-happywomensday-static.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/kloy-mothersday-static.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/kloy.jpeg",

    // Rajgriham Posts
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/rajgriham.jpeg",

    // Rki Posts
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/rki-location-static.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/rki-research-static.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/rki-tips-static.jpg",

    // Ross Posts
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/ross-bristles-static.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/ross-experience-static.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/ross-fatherday-static.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/ross-hairbrush-static.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/ross-heels-static.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/ross-loofah-static.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/ross-makeupremoverpad-static.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/ross-womensday-static.jpg",



    // Washguys Posts
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/washguys-bangalore-static.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/washguys-earthday-static.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/washguys-holi-static.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/washguys-ironservice-static.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/washguys-laundry-static.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/washguys-navratri-static.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/washguys-ramnavamii-static.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/washguys-supermart-static.jpg",

    // Asva Posts
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/asva-alkaline-static.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/asva-fivedays-static.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/asva-justpurewater-static.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/asva-lifestyle-static.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/asva-pure-static.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/asva-purewater-static.jpg",
    // "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/asva-soon-static.jpg",
    "https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixawork/social-media-image-reels/all-posts-swastixa/asva-yourwater-static.jpg",

];

// Map client sub-keys to clean display categories
const clientDisplayNames = {
    mthreem: "M3M",
    mrg: "MRG",
    asva: "Asva",
    bestmate: "Bestmate",
    eazzy: "Eazzy",
    ishaadrii: "Ishaadrii",
    ishhaadrii: "Ishaadrii",
    kevvali: "Kevvali",
    kloy: "Kloy",
    rajgriham: "Rajgriham",
    rki: "RKI",
    ross: "Ross",
    tirasya: "Tirasya",
    triasya: "Tirasya",
    washguys: "Washguys"
};

const getClientInfo = (url) => {
    const filename = url.split('/').pop();
    const nameWithoutExt = filename.replace(/\.[^/.]+$/, "");
    const parts = nameWithoutExt.split('-');
    let clientKey = parts[0].toLowerCase();
    
    // Normalize variant spellings
    if (clientKey === "ishhaadrii") clientKey = "ishaadrii";
    if (clientKey === "triasya") clientKey = "tirasya";

    const category = clientDisplayNames[clientKey] || (clientKey.charAt(0).toUpperCase() + clientKey.slice(1));
    
    // Format title nicely (e.g., "M3M Avenue Edm")
    const title = parts
        .map((p, idx) => {
            if (idx === 0) return category;
            return p.charAt(0).toUpperCase() + p.slice(1);
        })
        .join(' ');

    return { clientKey,  title };
};

// Group items by client to prep for alternating sequence
const clientGroups = {};
rawUrls.forEach(url => {
    const { clientKey, category, title } = getClientInfo(url);
    if (!clientGroups[clientKey]) {
        clientGroups[clientKey] = [];
    }
    clientGroups[clientKey].push({
        title,
        category,
        image: url
    });
});

// Simple seeded pseudo-random number generator for deterministic shuffling
const seededRandom = (seed) => {
    let s = seed;
    return () => {
        s = (s * 9301 + 49297) % 233280;
        return s / 233280;
    };
};

// Shuffle function using a seeded PRNG
const shuffleDeterministic = (array, seed) => {
    const random = seededRandom(seed);
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

// Shuffle each client group's internal order deterministically to maximize variety
const shuffledGroups = {};
Object.keys(clientGroups).forEach((key, idx) => {
    const seed = key.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) + idx;
    shuffledGroups[key] = shuffleDeterministic(clientGroups[key], seed);
});

// Arrange in alternating sequence using round-robin distribution with dynamic shuffling
const smmContent = [];
const clientKeys = Object.keys(shuffledGroups);

// Track current pointer index for each client group
const pointers = {};
clientKeys.forEach(key => {
    pointers[key] = 0;
});

let round = 0;
let lastPushedKey = null;

while (true) {
    const activeMthreemRemaining = (shuffledGroups["mthreem"] ? shuffledGroups["mthreem"].length : 0) - pointers["mthreem"];
    const activeMrgRemaining = (shuffledGroups["mrg"] ? shuffledGroups["mrg"].length : 0) - pointers["mrg"];
    
    const otherKeys = clientKeys.filter(key => key !== "mthreem" && key !== "mrg");
    const activeOtherKeys = otherKeys.filter(key => shuffledGroups[key].length > pointers[key]);
    
    // Stop if all items are fully consumed
    if (activeMthreemRemaining <= 0 && activeMrgRemaining <= 0 && activeOtherKeys.length === 0) {
        break;
    }
    
    // Allow M3M and MRG to appear twice per round in the first 6 rounds to focus them near the top
    const prioritize = round < 6;
    
    // Mix up the order of the other clients for this round
    const shuffledOthers = shuffleDeterministic(activeOtherKeys, round * 77 + 99);
    const halfLimit = Math.ceil(shuffledOthers.length / 2);
    const firstHalfOthers = shuffledOthers.slice(0, halfLimit);
    const secondHalfOthers = shuffledOthers.slice(halfLimit);
    
    const pushItem = (key) => {
        if (shuffledGroups[key] && shuffledGroups[key].length > pointers[key]) {
            smmContent.push(shuffledGroups[key][pointers[key]]);
            pointers[key]++;
            lastPushedKey = key;
            return true;
        }
        return false;
    };
    
    // 1. First set of M3M and MRG
    const sec1Keys = [];
    if (activeMthreemRemaining > 0) sec1Keys.push("mthreem");
    if (activeMrgRemaining > 0) sec1Keys.push("mrg");
    
    let shuffledSec1 = shuffleDeterministic(sec1Keys, round * 13 + 1);
    if (lastPushedKey && shuffledSec1[0] === lastPushedKey && shuffledSec1.length > 1) {
        [shuffledSec1[0], shuffledSec1[1]] = [shuffledSec1[1], shuffledSec1[0]];
    }
    shuffledSec1.forEach(k => pushItem(k));
    
    // 2. First half of other clients
    firstHalfOthers.forEach(k => pushItem(k));
    
    // 3. Second set of M3M and MRG (if prioritized and items left)
    const sec3Keys = [];
    const currentMthreemLeft = (shuffledGroups["mthreem"] ? shuffledGroups["mthreem"].length : 0) - pointers["mthreem"];
    const currentMrgLeft = (shuffledGroups["mrg"] ? shuffledGroups["mrg"].length : 0) - pointers["mrg"];
    
    if (prioritize && currentMthreemLeft > 0) sec3Keys.push("mthreem");
    if (prioritize && currentMrgLeft > 0) sec3Keys.push("mrg");
    
    let shuffledSec3 = shuffleDeterministic(sec3Keys, round * 13 + 2);
    if (lastPushedKey && shuffledSec3[0] === lastPushedKey && shuffledSec3.length > 1) {
        [shuffledSec3[0], shuffledSec3[1]] = [shuffledSec3[1], shuffledSec3[0]];
    }
    shuffledSec3.forEach(k => pushItem(k));
    
    // 4. Second half of other clients
    secondHalfOthers.forEach(k => pushItem(k));
    
    // 5. Fallback/Remainder handling when other clients are exhausted
    if (activeOtherKeys.length === 0) {
        const remainingM3M = (shuffledGroups["mthreem"] ? shuffledGroups["mthreem"].length : 0) - pointers["mthreem"];
        const remainingMRG = (shuffledGroups["mrg"] ? shuffledGroups["mrg"].length : 0) - pointers["mrg"];
        
        if (remainingM3M > 0 && lastPushedKey !== "mthreem") {
            pushItem("mthreem");
        }
        if (remainingMRG > 0 && lastPushedKey !== "mrg") {
            pushItem("mrg");
        }
        if (remainingM3M > 0 && remainingMRG === 0 && lastPushedKey === "mthreem") {
            pushItem("mthreem");
        }
        if (remainingMRG > 0 && remainingM3M === 0 && lastPushedKey === "mrg") {
            pushItem("mrg");
        }
    }
    
    round++;
}

// Attach unique index-based IDs to each item in the sorted alternating list
smmContent.forEach((item, index) => {
    item.id = index + 1;
});

export default smmContent;