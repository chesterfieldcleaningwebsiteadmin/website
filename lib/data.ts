import type { Service, Testimonial, SiteSettings, Faq } from "./types";

const COMMON_FAQS: Faq[] = [
  {
    question: "Do you bring your own cleaning products and equipment?",
    answer: "Yes — we bring everything we need to get the job done. If you'd prefer us to use specific products (for example, fragrance-free or eco-friendly alternatives), just let us know.",
  },
  {
    question: "Are you fully insured and DBS-checked?",
    answer: "Absolutely. We are fully insured and every member of our team holds a current DBS check, so you can have complete peace of mind.",
  },
  {
    question: "How do I pay?",
    answer: "We accept bank transfer and most major payment methods. We'll confirm the payment details when we arrange your booking.",
  },
  {
    question: "Do I need to be at home when you clean?",
    answer: "Not at all — many of our clients give us a key or provide an access code. We're fully insured and DBS-checked, so you can trust us with your space.",
  },
  {
    question: "What if I'm not happy with the result?",
    answer: "We always aim to get it right first time, but if something isn't up to standard, just let us know and we'll come back to put it right.",
  },
];

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
    displayOrder: 1,
    faqs: [
      ...COMMON_FAQS,
      {
        question: "Will I get the same cleaner each visit?",
        answer: "Where possible, yes. We know how important familiarity and trust are, and we'll always aim to send someone you know.",
      },
      {
        question: "How do I set up a regular clean?",
        answer: "Just get in touch for a free quote. We'll agree a schedule that suits you — weekly, fortnightly or whatever works best.",
      },
    ],
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
    displayOrder: 2,
    faqs: [
      ...COMMON_FAQS,
      {
        question: "How long does a deep clean take?",
        answer: "It depends on the size of your home and how long it's been since the last thorough clean. A typical 3-bedroom house takes between 4–6 hours. We'll give you a more accurate estimate when you enquire.",
      },
      {
        question: "Can I book a one-off clean without committing to a regular service?",
        answer: "Absolutely — we're happy to do a one-off clean with no obligation to continue. Many clients start with a deep clean and then switch to a regular schedule.",
      },
    ],
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
    displayOrder: 3,
    faqs: [
      ...COMMON_FAQS,
      {
        question: "Will the clean guarantee I get my deposit back?",
        answer: "We clean to the highest standard to give you the best possible chance. While we can't guarantee a landlord's decision, our thorough approach speaks for itself — many of our clients have their full deposit returned.",
      },
      {
        question: "Do you work with landlords and letting agents directly?",
        answer: "Yes — we're happy to liaise directly with landlords or agents. Just let us know the access arrangements and any inventory requirements.",
      },
    ],
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
    displayOrder: 4,
    faqs: [
      ...COMMON_FAQS,
      {
        question: "Can you clean outside of business hours?",
        answer: "Yes — we can schedule cleans early morning, evenings or weekends to avoid disrupting your team or clients.",
      },
      {
        question: "Do you provide a cleaning schedule or checklist?",
        answer: "Yes — we create a bespoke checklist tailored to your business. You'll always know exactly what's been done on every visit.",
      },
    ],
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
    displayOrder: 5,
    faqs: [
      ...COMMON_FAQS,
      {
        question: "Can you handle key collection and handover between guests?",
        answer: "Yes — we can arrange key collection and handover to make the changeover completely hands-off for you.",
      },
      {
        question: "What happens if you find damage during the changeover?",
        answer: "We'll photograph it and let you know straight away, so you can act before the next guest checks in.",
      },
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Tash and Lou work as a team and do such a thorough job. They take extra special care in the bathroom and kitchen, with extra touches thrown in for good measure. Thank you both — and for making us laugh too!",
    name: "J.R.",
    place: "Chesterfield",
    displayOrder: 1,
  },
  {
    quote:
      "I've been using Chesterfield Cleaning Fairies for a while now and they've been fantastic. The team goes above and beyond — even letting my dogs out while they're here, which is so thoughtful. They leave the house sparkling every time. Highly recommend!",
    name: "Rachel A.",
    place: "Chesterfield",
    displayOrder: 2,
  },
  {
    quote:
      "Very professional and polite — they leave the house spotless every time. Consistently reliable and thorough, and as well as being hardworking and efficient, they're also friendly and helpful. Highly recommend!",
    name: "Alice L.",
    place: "Chesterfield",
    displayOrder: 3,
  },
  {
    quote:
      "WOW — their service is incredibly professional and thorough. Our home looks like a hotel after they've been, thanks to their amazing attention to detail. The team is so friendly, and if anything isn't quite right, they sort it straight away.",
    name: "Samantha Y.",
    place: "Chesterfield",
    displayOrder: 4,
  },
  {
    quote:
      "We've had our house cleaned by Chesterfield Cleaning Fairies for about a year now, and I always look forward to coming home when they've been. They clean to a high standard, show great attention to detail, and go above and beyond every time.",
    name: "Gabriella W.",
    place: "Chesterfield",
    displayOrder: 5,
  },
];
