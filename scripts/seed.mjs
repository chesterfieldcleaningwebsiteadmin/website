/**
 * Pushes all site content into Sanity in one go.
 * Run with: node scripts/seed.mjs
 *
 * If the script says "Permission denied", follow the instructions it prints
 * to create a write token in sanity.io/manage and add it to .env.local.
 */

import { createClient } from '@sanity/client'
import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

// Load .env.local without needing dotenv installed
const __dir = dirname(fileURLToPath(import.meta.url))
try {
  const env = readFileSync(resolve(__dir, '../.env.local'), 'utf8')
  for (const line of env.split('\n')) {
    const [key, ...rest] = line.split('=')
    if (key?.trim() && rest.length) process.env[key.trim()] = rest.join('=').trim()
  }
} catch { /* rely on process.env */ }

const token = process.env.SANITY_WRITE_TOKEN || process.env.SANITY_API_READ_TOKEN
if (!token) { console.error('No Sanity token found in .env.local'); process.exit(1) }

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'uoci4hci',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token,
})

// Add _key to every object in an array (required by Sanity for array items)
const withKey = (arr) => arr.map((item, i) => ({
  ...item,
  _key: (item.title || item.question || String(i)).replace(/[^a-z0-9]/gi, '').slice(0, 20) || String(i),
}))

// ─── Site Settings ──────────────────────────────────────────────────────────
const siteSettings = {
  _id: 'siteSettings',
  _type: 'siteSettings',
  businessName: 'Chesterfield Cleaning Fairies',
  phone: '07369 255360',
  email: 'Chesterfieldcleaningfairies@gmail.com',
  instagramUrl: 'https://www.instagram.com/chesterfieldcleaningfairies/',
  facebookUrl: 'https://www.facebook.com/people/Chesterfield-cleaning-fairies/61556004656005/',
  footerBlurb: 'A local, family-run cleaning team bringing a little sparkle to homes and businesses across Chesterfield & Derbyshire.',
  areasIntro: "Proudly based in Chesterfield and covering the surrounding Derbyshire towns and villages. Not sure if we reach you? Just ask — we're always happy to help.",
  areas: ['Chesterfield','Brampton','Walton','Hasland','Brimington','Old Whittington','Newbold','Wingerworth','Dronfield','Holymoorside','Staveley','Clay Cross','Ashgate','Calow'],
}

// ─── Home Page ──────────────────────────────────────────────────────────────
const homePage = {
  _id: 'homePage',
  _type: 'homePage',
  heroBadge: 'Local · family-run · fully insured',
  heroHeading: 'A little sparkle,\na spotless home.',
  heroSubheading: "Trusted, insured cleaning for homes and businesses across Chesterfield & Derbyshire — delivered by a friendly, local team you'll be happy to give a key to.",
  trustItems: ['Fully insured', 'DBS-checked', 'Local & family-run', '5-star rated'],
  howSteps: withKey([
    { title: 'Get in touch', body: "Call, message or fill in our quick form — we'll get straight back to you, no pressure." },
    { title: 'We tailor a quote', body: "We listen to exactly what you need and put together a fair, no-obligation price." },
    { title: 'We bring the sparkle', body: "Our insured, DBS-checked team arrives on time and leaves everything gleaming." },
  ]),
  whyHeading: "The kind of company you'd hand a key to",
  whyPoints: withKey([
    { title: 'Fully insured & DBS-checked', body: 'Complete peace of mind on every single visit.' },
    { title: 'Local & family-run', body: "Real people from Chesterfield who genuinely care about your home." },
    { title: 'Trusted, vetted cleaners', body: "The same friendly faces you'll get to know and rely on." },
    { title: 'Eco-friendly on request', body: 'Gentle, effective products that are kind to your home and the planet.' },
    { title: 'Flexible scheduling', body: "We work around your life — not the other way round." },
    { title: 'Satisfaction guaranteed', body: "Not perfectly happy? Tell us and we'll put it right." },
  ]),
  ctaHeading: 'Ready to come home to a sparkle?',
  ctaBody: "Get a free, no-obligation quote today. We'll tailor a clean that fits your home, your business and your budget.",
}

// ─── Services ───────────────────────────────────────────────────────────────
const commonFaqs = [
  { question: 'Do you bring your own cleaning products and equipment?', answer: "Yes — we bring everything we need. If you'd prefer specific products (fragrance-free or eco-friendly), just let us know." },
  { question: 'Are you fully insured and DBS-checked?', answer: 'Absolutely. We are fully insured and every team member holds a current DBS check.' },
  { question: 'How do I pay?', answer: "We accept bank transfer and most major payment methods — we'll confirm details when we arrange your booking." },
  { question: 'Do I need to be at home when you clean?', answer: "Not at all. Many clients give us a key or access code. We're fully insured and DBS-checked, so you can trust us with your space." },
  { question: "What if I'm not happy with the result?", answer: "We aim to get it right first time, but if something isn't up to standard, let us know and we'll come back to put it right." },
]

const services = [
  {
    _id: 'service-regular-domestic-cleaning', _type: 'service',
    title: 'Regular domestic cleaning',
    slug: { _type: 'slug', current: 'regular-domestic-cleaning' },
    eyebrow: 'Domestic cleaning',
    shortBlurb: 'Reliable weekly or fortnightly visits that keep your home effortlessly fresh and welcoming.',
    heroDescription: "Reliable, friendly visits — weekly or fortnightly — that keep your home effortlessly fresh, so you can spend your time on the things that matter.",
    priceType: 'from', priceLabel: '£15/hr',
    included: ['Dusting all surfaces, shelves & skirting','Vacuuming & mopping all floors','Kitchen worktops, hob & exterior of appliances','Bathrooms cleaned, sanitised & shined','Beds made & linens changed (on request)','Mirrors & glass left streak-free','Bins emptied & fresh liners','Tidy, finishing touches throughout'],
    forWho: withKey([
      { title: 'Busy households', body: "Families and professionals who'd rather come home to calm than chores." },
      { title: 'A helping hand', body: 'Anyone who simply appreciates a reliable, friendly hand around the home.' },
      { title: 'Move-in ready', body: 'Fresh starts that deserve a spotless, welcoming space from day one.' },
    ]),
    faqs: withKey([...commonFaqs,
      { question: 'Will I get the same cleaner each visit?', answer: "Where possible, yes — we know how important familiarity and trust are." },
      { question: 'How do I set up a regular clean?', answer: "Just get in touch for a free quote. We'll agree a schedule that suits you — weekly, fortnightly or whatever works best." },
    ]),
    photoLabel: 'sparkling-clean living room', displayOrder: 1,
  },
  {
    _id: 'service-one-off-deep-cleans', _type: 'service',
    title: 'One-off & deep cleans',
    slug: { _type: 'slug', current: 'one-off-deep-cleans' },
    eyebrow: 'Deep cleaning',
    shortBlurb: 'A thorough top-to-bottom reset for spring cleans, move-ins or those special occasions.',
    heroDescription: "A thorough top-to-bottom reset — for spring cleans, move-ins or special occasions when your home deserves the full treatment.",
    priceType: 'from', priceLabel: '£18/hr',
    included: ['Everything in our regular clean, plus:','Inside oven & hob deep clean','Inside fridge & freezer cleaned','Inside kitchen cupboards wiped down','Limescale removal from taps & showerheads','Skirting boards & door frames scrubbed','Window sills & ledges deep cleaned','Light switches, plug sockets & radiators'],
    forWho: withKey([
      { title: 'Spring cleaning', body: 'That satisfying annual reset that gets every corner gleaming.' },
      { title: 'New home move-in', body: 'Starting fresh in a new property deserves a thorough clean first.' },
      { title: 'Pre / post event', body: 'Getting your home ready for (or back to normal after) a special occasion.' },
    ]),
    faqs: withKey([...commonFaqs,
      { question: 'How long does a deep clean take?', answer: "A typical 3-bedroom house takes 4–6 hours. We'll give you a more accurate estimate when you enquire." },
      { question: 'Can I book a one-off clean without committing to regular visits?', answer: "Absolutely — no obligation at all. Many clients start with a deep clean and then switch to a regular schedule." },
    ]),
    photoLabel: 'sparkling-clean kitchen after deep clean', displayOrder: 2,
  },
  {
    _id: 'service-end-of-tenancy-cleaning', _type: 'service',
    title: 'End-of-tenancy cleaning',
    slug: { _type: 'slug', current: 'end-of-tenancy-cleaning' },
    eyebrow: 'End of tenancy',
    shortBlurb: 'A meticulous, landlord-ready clean designed to help secure your full deposit back.',
    heroDescription: "A meticulous, landlord-ready clean designed to help you secure your full deposit back — every item on the inventory, done right.",
    priceType: 'from', priceLabel: '£140',
    included: ['Full kitchen deep clean including oven & hob','All white goods cleaned inside and out','Bathrooms & en-suites fully sanitised','All floors vacuumed and mopped','All windows cleaned (interior)','Carpets vacuumed and spot-treated','Skirting boards, doors & frames cleaned','Inside all cupboards and drawers','Walls spot-cleaned where necessary','Rubbish removed'],
    forWho: withKey([
      { title: 'Outgoing tenants', body: 'Maximise your chances of getting your full deposit back, hassle-free.' },
      { title: 'Landlords & letting agents', body: 'A professionally cleaned property attracts better tenants faster.' },
      { title: 'Property investors', body: 'Maintain your asset and keep turnarounds smooth between tenancies.' },
    ]),
    faqs: withKey([...commonFaqs,
      { question: 'Will the clean guarantee I get my deposit back?', answer: "We clean to the highest standard to give you the best possible chance. While we can't guarantee a landlord's decision, many of our clients have their full deposit returned." },
      { question: 'Do you work with landlords and letting agents directly?', answer: "Yes — we're happy to liaise directly. Just let us know the access arrangements and any inventory requirements." },
    ]),
    photoLabel: 'spotless empty rental property', displayOrder: 3,
  },
  {
    _id: 'service-commercial-office-cleaning', _type: 'service',
    title: 'Commercial & office cleaning',
    slug: { _type: 'slug', current: 'commercial-office-cleaning' },
    eyebrow: 'Commercial cleaning',
    shortBlurb: 'Spotless workspaces that make the right impression, scheduled neatly around your business.',
    heroDescription: "Spotless workspaces that make the right impression on clients and staff alike — scheduled around your business so we're never in the way.",
    priceType: 'quote', priceLabel: 'Tailored quote',
    included: ['Desks, workstations & office equipment wiped down','Hard floors swept, vacuumed & mopped','Carpets vacuumed throughout','Reception & communal areas maintained','Kitchens & staff rooms cleaned and restocked','Bathrooms & toilets fully sanitised','Bins emptied & liners replaced','Touch points sanitised (handles, switches, phones)','Glass, partitions & windows cleaned','Bespoke checklist tailored to your business'],
    forWho: withKey([
      { title: 'Offices & co-working', body: 'A clean, hygienic workspace your team and clients will appreciate.' },
      { title: 'Retail & showrooms', body: 'Pristine presentation that reflects the quality of your brand.' },
      { title: 'Hospitality & clinics', body: 'Thorough, regular cleans that meet the demands of high-footfall environments.' },
    ]),
    faqs: withKey([...commonFaqs,
      { question: 'Can you clean outside of business hours?', answer: "Yes — we can schedule early mornings, evenings or weekends to avoid disrupting your team." },
      { question: 'Do you provide a cleaning checklist?', answer: "Yes — we create a bespoke checklist for your business so you always know exactly what's been done." },
    ]),
    photoLabel: 'clean modern office space', displayOrder: 4,
  },
  {
    _id: 'service-airbnb-holiday-let-changeovers', _type: 'service',
    title: 'Airbnb & holiday-let changeovers',
    slug: { _type: 'slug', current: 'airbnb-holiday-let-changeovers' },
    eyebrow: 'Holiday let cleaning',
    shortBlurb: 'Quick, dependable turnarounds with fresh linen and a five-star finish, every time.',
    heroDescription: "Quick, dependable turnarounds between guests — fresh linen, a five-star finish and everything restocked, every time.",
    priceType: 'from', priceLabel: '£35',
    included: ['Full property clean to hotel standard','Fresh bed linen made up & towels laid out','Kitchen fully cleaned, dishes washed & put away','Bathrooms sanitised & restocked','All surfaces dusted & wiped','Floors vacuumed & mopped throughout','Rubbish removed & bins relined','Welcome touches arranged (on request)','Key collection & handover arranged','Damage & maintenance checks reported'],
    forWho: withKey([
      { title: 'Airbnb hosts', body: 'Consistent five-star turnarounds that keep your rating — and reviews — glowing.' },
      { title: 'Holiday let owners', body: "Reliable changeovers you can trust, even when you're not nearby." },
      { title: 'Property managers', body: 'Scale across multiple properties with a team you can rely on.' },
    ]),
    faqs: withKey([...commonFaqs,
      { question: 'Can you handle key collection and handover?', answer: "Yes — we can arrange key collection and handover to make the changeover completely hands-off for you." },
      { question: 'What happens if you find damage?', answer: "We'll photograph it and let you know straight away, so you can act before the next guest checks in." },
    ]),
    photoLabel: 'immaculate holiday cottage bedroom', displayOrder: 5,
  },
]

// ─── Testimonials ────────────────────────────────────────────────────────────
const testimonials = [
  { _id: 'testimonial-1', _type: 'testimonial', displayOrder: 1, name: 'J.R.', place: 'Chesterfield', quote: "Tash and Lou work as a team and do such a thorough job. They take extra special care in the bathroom and kitchen, with extra touches thrown in for good measure. Thank you both — and for making us laugh too!" },
  { _id: 'testimonial-2', _type: 'testimonial', displayOrder: 2, name: 'Rachel A.', place: 'Chesterfield', quote: "I've been using Chesterfield Cleaning Fairies for a while now and they've been fantastic. The team goes above and beyond — even letting my dogs out while they're here, which is so thoughtful. They leave the house sparkling every time. Highly recommend!" },
  { _id: 'testimonial-3', _type: 'testimonial', displayOrder: 3, name: 'Alice L.', place: 'Chesterfield', quote: "Very professional and polite — they leave the house spotless every time. Consistently reliable and thorough, and as well as being hardworking and efficient, they're also friendly and helpful. Highly recommend!" },
  { _id: 'testimonial-4', _type: 'testimonial', displayOrder: 4, name: 'Samantha Y.', place: 'Chesterfield', quote: "WOW — their service is incredibly professional and thorough. Our home looks like a hotel after they've been, thanks to their amazing attention to detail. The team is so friendly, and if anything isn't quite right, they sort it straight away." },
  { _id: 'testimonial-5', _type: 'testimonial', displayOrder: 5, name: 'Gabriella W.', place: 'Chesterfield', quote: "We've had our house cleaned by Chesterfield Cleaning Fairies for about a year now, and I always look forward to coming home when they've been. They clean to a high standard, show great attention to detail, and go above and beyond every time." },
]

// ─── Run ─────────────────────────────────────────────────────────────────────
async function seed() {
  const all = [siteSettings, homePage, ...services, ...testimonials]
  console.log(`\nSeeding ${all.length} documents → ${client.config().projectId}/${client.config().dataset}\n`)

  for (const doc of all) {
    try {
      await client.createOrReplace(doc)
      console.log(`  ✓  ${doc._type.padEnd(36)} ${doc._id}`)
    } catch (err) {
      if (err.statusCode === 403 || err.statusCode === 401 || err.message?.includes('permissions') || err.message?.includes('Insufficient') || err.message?.includes('Unauthorized')) {
        console.error('\n⚠️  Your token is read-only. To fix this:\n')
        console.error('  1. Go to https://sanity.io/manage')
        console.error('  2. Open your project → API → Tokens → Add API token')
        console.error('  3. Set role to Editor, copy the token')
        console.error('  4. Add to .env.local:  SANITY_WRITE_TOKEN=paste-token-here')
        console.error('  5. Run again:  node scripts/seed.mjs\n')
        process.exit(1)
      }
      console.error(`  ✗  ${doc._type}: ${doc._id} — ${err.message}`)
    }
  }

  console.log('\n✅  Done! All content is now live in Sanity Studio.')
  console.log('    Open /studio on the live site to view and edit everything.\n')
}

seed()
