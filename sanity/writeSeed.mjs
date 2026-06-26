import { createClient } from '@sanity/client'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Load .env.local
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

// Parse seed.ndjson
const ndjsonPath = join(__dirname, 'seed.ndjson')
const documents = readFileSync(ndjsonPath, 'utf-8')
  .split(/\r?\n/)
  .filter(line => line.trim())
  .map(line => JSON.parse(line))

// Recursively remove image fields so owner-uploaded photos are never overwritten
function stripImages(val) {
  if (!val || typeof val !== 'object') return val
  if (val._type === 'image') return undefined
  if (Array.isArray(val)) return val.map(stripImages).filter(v => v !== undefined)
  const out = {}
  for (const [k, v] of Object.entries(val)) {
    const stripped = stripImages(v)
    if (stripped !== undefined) out[k] = stripped
  }
  return out
}

console.log(`Seeding ${documents.length} documents into ${env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${env.NEXT_PUBLIC_SANITY_DATASET || 'production'}...\n`)

for (const doc of documents) {
  await client.createOrReplace(stripImages(doc))
  console.log(`  ✓  ${doc._type.padEnd(20)} ${doc._id}`)
}

console.log('\nDone.')
