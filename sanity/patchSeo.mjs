import { createClient } from '@sanity/client'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const envPath = join(__dirname, '../.env.local')
const env = {}
for (const line of readFileSync(envPath, 'utf-8').split(/\r?\n/)) {
  if (!line || line.startsWith('#')) continue
  const idx = line.indexOf('=')
  if (idx === -1) continue
  env[line.slice(0, idx)] = line.slice(idx + 1)
}

const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: env.SANITY_WRITE_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

// ─── Home Page ───────────────────────────────────────────────────────────────
// Title: keyword first, location, under 60 chars (59)
// Description: services listed, trust signals, CTA signal, under 160 chars (157)

await client.patch('homePage').set({
  metaTitle: 'House Cleaning Chesterfield | Chesterfield Cleaning Fairies',
  metaDescription:
    'Trusted, insured house cleaning in Chesterfield & Derbyshire. Regular, deep, end-of-tenancy and Airbnb cleans from £15/hr. DBS-checked team. Same-day quotes.',
}).commit()

console.log('✓ Home page SEO patched')

// ─── About Page ──────────────────────────────────────────────────────────────
// Title: 57 chars
// Description: who they are, trust signals, location, 127 chars

await client.patch('aboutPage').set({
  metaTitle: 'About Chesterfield Cleaning Fairies | Local, Insured Team',
  metaDescription:
    'Meet the local, DBS-checked team behind Chesterfield Cleaning Fairies — serving homes & businesses across Chesterfield & Derbyshire with genuine care.',
}).commit()

console.log('✓ About page SEO patched')

// ─── Services ─────────────────────────────────────────────────────────────────
// Services use heroDescription as the meta description automatically.
// We only set metaTitle — keyword + location + differentiator, all under 60 chars.

const serviceSeo = {
  'regular-domestic-cleaning': {
    metaTitle: 'Regular House Cleaning Chesterfield | From £15/hr',
    metaDescription: 'Reliable weekly & fortnightly house cleaning in Chesterfield & Derbyshire from £15/hr. Fully insured, DBS-checked team. Same familiar cleaner every visit.',
  },
  'one-off-deep-cleans': {
    metaTitle: 'Deep Cleaning Chesterfield | One-Off & Spring Cleans',
    metaDescription: 'Top-to-bottom deep cleaning in Chesterfield from £18/hr. Oven, fridge & cupboards included. Perfect for spring cleans, move-ins and special occasions.',
  },
  'end-of-tenancy-cleaning': {
    metaTitle: 'End of Tenancy Cleaning Chesterfield | From £140',
    metaDescription: 'Professional end of tenancy cleaning in Chesterfield from £140. Inventory-standard, landlord-ready — to help you get your full deposit back.',
  },
  'commercial-office-cleaning': {
    metaTitle: 'Commercial Cleaning Chesterfield | Office & Business',
    metaDescription: 'Office & commercial cleaning in Chesterfield & Derbyshire. Tailored schedules, bespoke checklists. Scheduled around your business — fully insured.',
  },
  'airbnb-holiday-let-changeovers': {
    metaTitle: 'Airbnb & Holiday Let Cleaning | Chesterfield Cleaning',
    metaDescription: 'Airbnb & holiday let changeovers in Chesterfield & Derbyshire from £35. Fast, reliable turnarounds with fresh linen and a five-star finish every time.',
  },
}

const services = await client.fetch(
  `*[_type == "service"]{ _id, "slug": slug.current }`
)

for (const svc of services) {
  const seo = serviceSeo[svc.slug]
  if (!seo) {
    console.log(`  ⚠ No SEO entry for slug: ${svc.slug} — skipping`)
    continue
  }
  await client.patch(svc._id).set(seo).commit()
  console.log(`✓ Service "${svc.slug}" SEO patched`)
}

console.log('\nAll SEO fields patched.')
