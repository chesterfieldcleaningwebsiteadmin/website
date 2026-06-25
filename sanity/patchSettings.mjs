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

await client.patch('siteSettings').set({
  googleRating: 5,
  googleReviewCount: 12,
  streetAddress: 'Chesterfield, Derbyshire',
  openingHours: 'Monday–Saturday, 8am–6pm',
  statsStrip: {
    show: true,
    stats: [
      { _key: 's1', value: '500+', label: 'Happy homes' },
      { _key: 's2', value: '5★',  label: 'Google rated' },
      { _key: 's3', value: '14',   label: 'Areas covered' },
      { _key: 's4', value: '100%', label: 'Insured & DBS-checked' },
    ],
  },
}).commit()

console.log('siteSettings patched.')
