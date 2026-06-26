/**
 * One-time script — seeds the price calculator defaults into the Sanity siteSettings document.
 *
 * 1. Go to sanity.io/manage → your project → API → Tokens → Add API token
 *    Give it "Editor" permissions and copy the token.
 *
 * 2. In your terminal (PowerShell):
 *    $env:SANITY_WRITE_TOKEN="paste-token-here"; node scripts/seed-price-calculator.mjs
 */

import { createClient } from 'next-sanity'

const token = process.env.SANITY_WRITE_TOKEN
if (!token) {
  console.error('\nMissing SANITY_WRITE_TOKEN — see instructions at the top of this file.\n')
  process.exit(1)
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'uoci4hci',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
})

const priceCalculator = {
  show: true,
  heading: 'Get an instant estimate',
  subheading: "Select your property size and how often you'd like us — we'll show you a price.",
  showOneOff: true,
  showFortnightly: true,
  showWeekly: true,
  tiers: [
    { _key: 'tier-studio', label: 'Studio / 1 bedroom', oneOffPrice: 35,  fortnightlyPrice: 30, weeklyPrice: 28 },
    { _key: 'tier-2bed',   label: '2 bedrooms',         oneOffPrice: 55,  fortnightlyPrice: 45, weeklyPrice: 42 },
    { _key: 'tier-3bed',   label: '3 bedrooms',         oneOffPrice: 75,  fortnightlyPrice: 60, weeklyPrice: 58 },
    { _key: 'tier-4bed',   label: '4+ bedrooms',        oneOffPrice: 110, fortnightlyPrice: 90, weeklyPrice: 85 },
  ],
  disclaimer: 'Prices are a guide only. Final price confirmed after a quick chat about your exact needs.',
  ctaText: 'Get your exact quote',
  ctaHref: '/contact',
}

// Patch both the published document and the draft (Studio shows whichever exists)
for (const id of ['siteSettings', 'drafts.siteSettings']) {
  await client.createIfNotExists({ _id: id, _type: 'siteSettings' })
  await client.patch(id).set({ priceCalculator }).commit()
  console.log(`✓ Patched ${id}`)
}

console.log('\n✓ Done — refresh /studio → Site Settings to see the values.\n')
