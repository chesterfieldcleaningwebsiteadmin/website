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

// siteSettings — write-a-review URL
await client.patch('siteSettings').set({
  googleWriteReviewUrl: 'https://search.google.com/local/writereview?placeid=/g/11y6lrgf2k',
}).commit()

// homePage — link to their Google Business Profile for viewing reviews
await client.patch({ query: '*[_type == "homePage"][0]' }).set({
  googleReviewsUrl: 'https://share.google/9616sa4hG7LExGj7h',
}).commit()

console.log('Review URLs patched.')
