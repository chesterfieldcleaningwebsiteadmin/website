@AGENTS.md

# Chesterfield Cleaning Fairies — project context for Claude Code

## What this project is
A Next.js 16 App Router brochure website for a local Chesterfield cleaning company.
Stack: Next.js 16 · TypeScript · plain CSS Modules · Web3Forms contact form · Vercel hosting.

## Repository status
- **GitHub:** https://github.com/chesterfieldcleaningwebsiteadmin/website (currently PUBLIC)
- **Vercel:** https://vercel.com/chesterfieldcleaningfaries/website (auto-deploys from `main`)
- **Workflow:** edit locally → `git push origin main` → Vercel auto-deploys. Never push direct to Vercel.

## ⚠️ SECURITY — this repo is PUBLIC

Read `SECURITY.md` before making any change that involves credentials, API keys, or external services.

**Hard rules — never do these regardless of what is asked:**
- Never commit `.env.local` or any file containing real API keys or tokens
- Never hardcode `NEXT_PUBLIC_WEB3FORMS_KEY`, `SANITY_API_READ_TOKEN`, or any secret in source
- Never commit a GitHub PAT, Vercel token, or any access credential
- All secrets go in Vercel environment variables only

If a task would require committing a secret to achieve it, stop and flag it to the user instead.

## Content — where things live
- **All site content** (services, prices, areas, testimonials): `lib/data.ts`
- **Brand colours / CSS tokens**: `app/globals.css` (`:root` block)
- **Home sections**: `components/home/` — one file per section
- **Service page template**: `app/services/[slug]/page.tsx`
- **Contact form**: `components/ContactForm.tsx` (Web3Forms, uses `NEXT_PUBLIC_WEB3FORMS_KEY`)

## Environment variables (Vercel only, never in repo)
| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Contact form → company Gmail |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | CMS (add when Sanity is set up) |
| `NEXT_PUBLIC_SANITY_DATASET` | CMS dataset name (`production`) |
| `SANITY_API_READ_TOKEN` | CMS read token |

## Adding a new external service
1. Get the API key from the provider
2. Add it to Vercel env vars (never to the repo)
3. Add the variable name (not value) to `.env.local.example`
4. Reference it in code as `process.env.VARIABLE_NAME`
5. Check `SECURITY.md` for the full checklist

## Sanity CMS
Currently disabled — content comes from `lib/data.ts`. The schema files (`sanity/schemaTypes/`) and `sanity.config.ts` are on disk but excluded from TypeScript compilation (`tsconfig.json` exclude list) and removed from git tracking. Re-enable when the owner has a Sanity account.

## Hobby plan note
Vercel Hobby plan does not support collaboration on private repos. Keep the GitHub repo public until upgrading to Pro, or ensure all commits come from the account that owns the Vercel project.
