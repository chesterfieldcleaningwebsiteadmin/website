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
  areaPages: [
    { _key: 'a0', name: 'Chesterfield',  slug: { _type: 'slug', current: 'chesterfield' } },
    { _key: 'a1', name: 'Dronfield',     slug: { _type: 'slug', current: 'dronfield' } },
    { _key: 'a2', name: 'Staveley',      slug: { _type: 'slug', current: 'staveley' } },
    { _key: 'a3', name: 'Eckington',     slug: { _type: 'slug', current: 'eckington' } },
    { _key: 'a4', name: 'Clay Cross',    slug: { _type: 'slug', current: 'clay-cross' } },
    { _key: 'a5', name: 'Brimington',    slug: { _type: 'slug', current: 'brimington' } },
    { _key: 'a6', name: 'Holymoorside', slug: { _type: 'slug', current: 'holymoorside' } },
    { _key: 'a7', name: 'Wingerworth',   slug: { _type: 'slug', current: 'wingerworth' } },
    { _key: 'a8', name: 'Hasland',       slug: { _type: 'slug', current: 'hasland' } },
    { _key: 'a9', name: 'Brampton',      slug: { _type: 'slug', current: 'brampton' } },
  ],
}).commit()

console.log('siteSettings patched.')
