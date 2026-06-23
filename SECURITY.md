# Security — what must never be committed to this repo

This repository is **public**. Any file committed here is visible to the entire internet.
The rules below apply permanently, even after the repo is made private.

---

## NEVER commit these

| What | Why |
|---|---|
| `.env.local` or any `.env*` file | Contains live API keys — instant compromise |
| `NEXT_PUBLIC_WEB3FORMS_KEY` hardcoded in source | Anyone can spam the contact form endpoint |
| `SANITY_API_READ_TOKEN` or any Sanity token | Grants read/write access to the CMS |
| Any Vercel token | Full deployment and env-var access |
| Any GitHub personal access token | Full repo + account access |
| Database passwords or connection strings | Not used yet — flag if added |
| Private SSL certificates or `.pem` files | Cryptographic identity compromise |
| Admin credentials of any kind | Self-explanatory |

All secrets go in **Vercel environment variables only**
(Vercel dashboard → Project → Settings → Environment Variables).
They are never stored in the repository.

---

## What IS safe in this public repo

- Phone number and email — already public on the live website
- Hardcoded content in `lib/data.ts` — it's business copy, not credentials
- `NEXT_PUBLIC_*` variable names in source — names are fine, values are not
- Sanity schema files — they describe structure, not credentials
- `vercel.json` — build config only, no secrets

---

## Adding a new integration? Check this first

Before adding any new service (payment provider, analytics, maps, chat, etc.):

1. **Store the key in Vercel env vars**, never in code
2. **Prefix with `NEXT_PUBLIC_`** only if the key is intentionally public
   (e.g. a publishable Stripe key — never a secret Stripe key)
3. **Add the variable name** to `.env.local.example` with a placeholder value
4. **Check `.gitignore`** includes `.env.local` before committing

---

## If a secret is accidentally committed

Act immediately:
1. **Revoke / rotate the key** at the provider (Web3Forms, Sanity, Vercel, GitHub)
2. Remove the secret from git history (`git filter-repo` or contact GitHub support)
3. Force-push the cleaned history
4. Add the file/pattern to `.gitignore`

Deleting the file in a new commit is NOT enough — the secret remains in git history.

---

## .gitignore — currently protected files

```
.env*          # all env files
.env.local
*.pem
```

Do not remove these entries.
