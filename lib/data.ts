import type { Service, Testimonial, SiteSettings } from "./types";

export const SITE_SETTINGS: SiteSettings = {
  phone: "07369 255360",
  email: "Chesterfieldcleaningfairies@gmail.com",
  instagramUrl: "https://www.instagram.com/chesterfieldcleaningfairies/",
  facebookUrl:
    "https://www.facebook.com/people/Chesterfield-cleaning-fairies/61556004656005/",
  footerBlurb:
    "A local, family-run cleaning team bringing a little sparkle to homes and businesses across Chesterfield & Derbyshire.",
  areas: [
    "Chesterfield",
    "Brampton",
    "Walton",
    "Hasland",
    "Brimington",
    "Old Whittington",
    "Newbold",
    "Wingerworth",
    "Dronfield",
    "Holymoorside",
    "Staveley",
    "Clay Cross",
    "Ashgate",
    "Calow",
  ],
  areasIntro:
    "Proudly based in Chesterfield and covering the surrounding Derbyshire towns and villages. Not sure if we reach you? Just ask — we're always happy to help.",
};

export const SERVICES: Service[] = [
  {
    title: "Regular domestic cleaning",
    slug: "regular-domestic-cleaning",
    shortBlurb:
      "Reliable weekly or fortnightly visits that keep your home effortlessly fresh and welcoming.",
    priceType: "from",
    priceLabel: "£15/hr",
    eyebrow: "Domestic cleaning",
    heroDescription:
      "Reliable, friendly visits — weekly or fortnightly — that keep your home effortlessly fresh, so you can spend your time on the things that matter.",
    included: [
      "Dusting all surfaces, shelves & skirting",
      "Vacuuming & mopping all floors",
      "Kitchen worktops, hob & exterior of appliances",
      "Bathrooms cleaned, sanitised & shined",
      "Beds made & linens changed (on request)",
      "Mirrors & glass left streak-free",
      "Bins emptied & fresh liners",
      "Tidy, finishing touches throughout",
    ],
    forWho: [
      {
        title: "Busy households",
        body: "Families and professionals who'd rather come home to calm than chores.",
      },
      {
        title: "A helping hand",
        body: "Anyone who simply appreciates a reliable, friendly hand around the home.",
      },
      {
        title: "Move-in ready",
        body: "Fresh starts that deserve a spotless, welcoming space from day one.",
      },
    ],
    photoLabel: "sparkling-clean living room",
    tileBg: "var(--primary-soft)",
    tileFg: "var(--primary)",
    displayOrder: 1,
  },
  {
    title: "One-off & deep cleans",
    slug: "one-off-deep-cleans",
    shortBlurb:
      "A thorough top-to-bottom reset for spring cleans, move-ins or those special occasions.",
    priceType: "from",
    priceLabel: "£18/hr",
    eyebrow: "Deep cleaning",
    heroDescription:
      "A thorough top-to-bottom reset — for spring cleans, move-ins or special occasions when your home deserves the full treatment.",
    included: [
      "Everything in our regular clean, plus:",
      "Inside oven & hob deep clean",
      "Inside fridge & freezer cleaned",
      "Inside kitchen cupboards wiped down",
      "Limescale removal from taps & showerheads",
      "Skirting boards & door frames scrubbed",
      "Window sills & ledges deep cleaned",
      "Light switches, plug sockets & radiators",
    ],
    forWho: [
      {
        title: "Spring cleaning",
        body: "That satisfying annual reset that gets every corner gleaming.",
      },
      {
        title: "New home move-in",
        body: "Starting fresh in a new property deserves a thorough clean first.",
      },
      {
        title: "Pre / post event",
        body: "Getting your home ready for (or back to normal after) a special occasion.",
      },
    ],
    photoLabel: "sparkling-clean kitchen after deep clean",
    tileBg: "var(--secondary-soft)",
    tileFg: "var(--secondary)",
    displayOrder: 2,
  },
  {
    title: "End-of-tenancy cleaning",
    slug: "end-of-tenancy-cleaning",
    shortBlurb:
      "A meticulous, landlord-ready clean designed to help secure your full deposit back.",
    priceType: "from",
    priceLabel: "£140",
    eyebrow: "End of tenancy",
    heroDescription:
      "A meticulous, landlord-ready clean designed to help you secure your full deposit back — every item on the inventory, done right.",
    included: [
      "Full kitchen deep clean including oven & hob",
      "All white goods cleaned inside and out",
      "Bathrooms & en-suites fully sanitised",
      "All floors vacuumed and mopped",
      "All windows cleaned (interior)",
      "Carpets vacuumed and spot-treated",
      "Skirting boards, doors & frames cleaned",
      "Inside all cupboards and drawers",
      "Walls spot-cleaned where necessary",
      "Rubbish removed",
    ],
    forWho: [
      {
        title: "Outgoing tenants",
        body: "Maximise your chances of getting your full deposit back, hassle-free.",
      },
      {
        title: "Landlords & letting agents",
        body: "A professionally cleaned property attracts better tenants faster.",
      },
      {
        title: "Property investors",
        body: "Maintain your asset and keep turnarounds smooth between tenancies.",
      },
    ],
    photoLabel: "spotless empty rental property",
    tileBg: "var(--gold-soft)",
    tileFg: "var(--gold-deep)",
    displayOrder: 3,
  },
  {
    title: "Commercial & office cleaning",
    slug: "commercial-office-cleaning",
    shortBlurb:
      "Spotless workspaces that make the right impression, scheduled neatly around your business.",
    priceType: "quote",
    priceLabel: "Tailored quote",
    eyebrow: "Commercial cleaning",
    heroDescription:
      "Spotless workspaces that make the right impression on clients and staff alike — scheduled around your business so we're never in the way.",
    included: [
      "Desks, workstations & office equipment wiped down",
      "Hard floors swept, vacuumed & mopped",
      "Carpets vacuumed throughout",
      "Reception & communal areas maintained",
      "Kitchens & staff rooms cleaned and restocked",
      "Bathrooms & toilets fully sanitised",
      "Bins emptied & liners replaced",
      "Touch points sanitised (handles, switches, phones)",
      "Glass, partitions & windows cleaned",
      "Bespoke checklist tailored to your business",
    ],
    forWho: [
      {
        title: "Offices & co-working",
        body: "A clean, hygienic workspace your team and clients will appreciate.",
      },
      {
        title: "Retail & showrooms",
        body: "Pristine presentation that reflects the quality of your brand.",
      },
      {
        title: "Hospitality & clinics",
        body: "Thorough, regular cleans that meet the demands of high-footfall environments.",
      },
    ],
    photoLabel: "clean modern office space",
    tileBg: "var(--primary-soft)",
    tileFg: "var(--primary)",
    displayOrder: 4,
  },
  {
    title: "Airbnb & holiday-let changeovers",
    slug: "airbnb-holiday-let-changeovers",
    shortBlurb:
      "Quick, dependable turnarounds with fresh linen and a five-star finish, every time.",
    priceType: "from",
    priceLabel: "£35",
    eyebrow: "Holiday let cleaning",
    heroDescription:
      "Quick, dependable turnarounds between guests — fresh linen, a five-star finish and everything restocked, every time.",
    included: [
      "Full property clean to hotel standard",
      "Fresh bed linen made up & towels laid out",
      "Kitchen fully cleaned, dishes washed & put away",
      "Bathrooms sanitised & restocked",
      "All surfaces dusted & wiped",
      "Floors vacuumed & mopped throughout",
      "Rubbish removed & bins relined",
      "Welcome touches arranged (on request)",
      "Key collection & handover arranged",
      "Damage & maintenance checks reported",
    ],
    forWho: [
      {
        title: "Airbnb hosts",
        body: "Consistent five-star turnarounds that keep your rating — and reviews — glowing.",
      },
      {
        title: "Holiday let owners",
        body: "Reliable changeovers you can trust, even when you're not nearby.",
      },
      {
        title: "Property managers",
        body: "Scale across multiple properties with a team you can rely on.",
      },
    ],
    photoLabel: "immaculate holiday cottage bedroom",
    tileBg: "var(--secondary-soft)",
    tileFg: "var(--secondary)",
    displayOrder: 5,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "The girls left my home absolutely gleaming — it honestly felt magical walking back in. Reliable, friendly and worth every penny.",
    name: "Sarah M.",
    place: "Walton",
    displayOrder: 1,
  },
  {
    quote:
      "We use them for our office and the difference is night and day. Professional, trustworthy and always thorough.",
    name: "James T.",
    place: "Chesterfield",
    displayOrder: 2,
  },
  {
    quote:
      "Brilliant end-of-tenancy clean — got my full deposit back without a quibble. Couldn't recommend them more.",
    name: "Hannah L.",
    place: "Hasland",
    displayOrder: 3,
  },
  {
    quote:
      "Our Airbnb turnarounds are seamless now. Guests always comment on how spotless and fresh everything is.",
    name: "Priya K.",
    place: "Brimington",
    displayOrder: 4,
  },
];
