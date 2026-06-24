/**
 * Cleans up duplicate homePage and siteSettings documents in Sanity.
 * Merges any data from duplicates (e.g. the Google Reviews URL you published)
 * into the canonical documents before deleting the extras.
 *
 * Run with: node scripts/cleanup-duplicates.mjs
 */

import { createClient } from '@sanity/client'
import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dir = dirname(fileURLToPath(import.meta.url))
try {
  const env = readFileSync(resolve(__dir, '../.env.local'), 'utf8')
  for (const line of env.split('\n')) {
    const [key, ...rest] = line.split('=')
    if (key?.trim() && rest.length) process.env[key.trim()] = rest.join('=').trim()
  }
} catch { /* rely on process.env */ }

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'uoci4hci',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN || process.env.SANITY_API_READ_TOKEN,
})

async function deduplicateSingleton(type, canonicalId) {
  // Get all published documents of this type
  const docs = await client.fetch(`*[_type == $type && !(_id in path("drafts.**"))]`, { type })

  if (docs.length <= 1) {
    console.log(`  ✓  ${type}: only one document, nothing to do`)
    return
  }

  console.log(`  ⚠  ${type}: found ${docs.length} documents — merging into '${canonicalId}'`)

  // Merge all field values into one object (last non-null value wins)
  const merged = docs.reduce((acc, doc) => {
    for (const [key, val] of Object.entries(doc)) {
      if (key.startsWith('_')) continue
      if (val !== null && val !== undefined) acc[key] = val
    }
    return acc
  }, {})

  // Save merged data to canonical document
  const canonical = docs.find(d => d._id === canonicalId)
  if (canonical) {
    await client.patch(canonicalId).set(merged).commit()
    console.log(`     Saved merged data to '${canonicalId}'`)
  } else {
    await client.createOrReplace({ ...merged, _id: canonicalId, _type: type })
    console.log(`     Created canonical '${canonicalId}' with merged data`)
  }

  // Delete all non-canonical documents (and their drafts)
  for (const doc of docs) {
    if (doc._id === canonicalId) continue
    await client.delete(doc._id)
    // Also delete any draft
    try { await client.delete(`drafts.${doc._id}`) } catch { /* no draft, fine */ }
    console.log(`     Deleted duplicate: ${doc._id}`)
  }
}

async function run() {
  console.log('\nCleaning up duplicate Sanity documents...\n')
  await deduplicateSingleton('homePage', 'homePage')
  await deduplicateSingleton('siteSettings', 'siteSettings')
  console.log('\n✅  Done. Each type now has exactly one document.\n')
}

run().catch(err => { console.error(err.message); process.exit(1) })
