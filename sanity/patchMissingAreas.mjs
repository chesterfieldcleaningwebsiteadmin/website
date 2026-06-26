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

// Append the 5 areas that appear in the chips but have no dedicated page yet
await client.patch('siteSettings').insert('after', 'areaPages[-1]', [
  { _key: 'a10', name: 'Walton',           slug: { _type: 'slug', current: 'walton' } },
  { _key: 'a11', name: 'Old Whittington',  slug: { _type: 'slug', current: 'old-whittington' } },
  { _key: 'a12', name: 'Newbold',          slug: { _type: 'slug', current: 'newbold' } },
  { _key: 'a13', name: 'Ashgate',          slug: { _type: 'slug', current: 'ashgate' } },
  { _key: 'a14', name: 'Calow',            slug: { _type: 'slug', current: 'calow' } },
]).commit()

console.log('Missing area pages added.')
