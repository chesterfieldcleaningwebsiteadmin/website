# Chesterfield Cleaning Fairies — Owner's Guide

This is a plain-English guide to running your website. You don't need to touch any code.

---

## Logging in to edit your website content

Go to your website and add `/studio` to the end of the address. For example:

```
https://your-domain.co.uk/studio
```

Log in with your Sanity account. Once inside, you'll see a panel on the left with sections for everything you can edit.

> **New to Sanity?** You'll receive an invite email from Sanity to the address your web developer used. Click the link, create a free account, and you're in. It costs nothing.

---

## What you can edit in the Studio

### Site Settings
Phone number, email, social media links, the list of areas you cover, opening hours, and your Google rating. Update these whenever they change.

**Price calculator** — you can turn this on or off with a single toggle, and update the hourly rate and property tiers when your prices change.

**Stats strip** — a row of numbers (e.g. "100+ happy customers") that appears between the hero and trust strip. Toggle on/off and update the numbers freely.

### Home Page
The headline, subheading, how-it-works steps, "Why choose us" points, and the before/after gallery. When you have before/after photos, upload them here.

### Services
Edit what's included in each service, the price shown, and the FAQs. Each service has its own entry.

### Testimonials
Add new reviews here. Each testimonial has a quote, customer name, location, and display order. Change the order number to control which ones appear first.

### About Page
Your company story and the values section. Update this whenever your story changes.

### Promotional Banner
A dismissible banner that appears at the top of every page (e.g. "10% off first clean this month"). Toggle it on or off without deleting the text.

---

## Updating your prices

1. Go to Studio → **Services**
2. Click the service you want to update
3. Change the **Price label** (e.g. `£16/hr` or `From £150`)
4. Click **Publish** in the bottom-right corner

For the price calculator on the Pricing page:

1. Go to Studio → **Site Settings**
2. Scroll down to **Price calculator**
3. Update the **Hourly rate** field and any tier hours
4. Click **Publish**

---

## Adding a before/after photo

1. Go to Studio → **Home Page**
2. Scroll to **Before/After gallery**
3. Click an existing entry (e.g. "Kitchen deep clean") or add a new one
4. Upload a "before" photo and an "after" photo
5. Click **Publish**

---

## Adding a new testimonial

1. Go to Studio → **Testimonials**
2. Click **Create new**
3. Fill in: quote, customer name, location (e.g. "Chesterfield"), and display order
4. Click **Publish**

The testimonial will appear on the home page immediately.

---

## Turning the price calculator on or off

1. Go to Studio → **Site Settings**
2. Scroll to **Price calculator**
3. Toggle **Show price calculator** on or off
4. Click **Publish**

---

## Running a promotion

1. Go to Studio → **Promotional Banner**
2. Toggle **Enabled** to on
3. Type your promotion text (e.g. "Book before 31 July — 10% off your first clean!")
4. Optionally add a link label and URL
5. Click **Publish**

To end the promotion, toggle **Enabled** off and publish.

---

## Your accounts — what's what

| Account | What it controls | Who should own it |
|---|---|---|
| **Sanity** (sanity.io) | Studio login — editing all website content | You (the business owner) |
| **Vercel** | Hosting — where the website lives | You (the business owner) |
| **GitHub** | Code backup — the technical source of the site | You (the business owner) |
| **Web3Forms** | Sends contact form emails to your Gmail | You (the business owner) |
| **Google My Business** | Your Google Maps listing + reviews | You (the business owner) |

---

## Contact form emails

When a customer fills in the contact form, the message goes to your Gmail inbox via Web3Forms.

- **First time:** Check your spam folder. Gmail sometimes filters Web3Forms emails initially. Mark it "Not spam" and create a filter to always send to inbox.
- **Change the email address:** Log into web3forms.com, change the notification email, and verify the new address.

---

## Something looks broken?

Don't panic. The quickest fix is to roll back to a previous working version:

1. Log into vercel.com
2. Go to your project
3. Click **Deployments** in the top menu
4. Find a recent deployment that you know was working
5. Click the three-dot menu (⋯) → **Promote to Production**

This puts the previous version live in under a minute.

---

## Setting up your own domain

Your site currently runs on a Vercel address. To use your own domain (e.g. `chesterfieldcleaningfairies.co.uk`):

1. Register the domain from a registrar like **Namecheap** or **123-reg** (~£10/year)
2. In Vercel, go to your project → **Settings → Domains**
3. Add your domain and follow the DNS instructions they show you
4. Once live, add the new domain to Sanity: go to **sanity.io/manage** → your project → **API → CORS Origins** → add `https://your-domain.co.uk` with "Allow credentials" ticked

---

## Google Search Console

This is a free Google tool that shows you which searches bring visitors to your site. Set it up under your own Google account:

1. Go to search.google.com/search-console
2. Add your domain
3. Follow the verification steps

Once verified, it updates over the coming weeks and shows you search traffic data.

---

## Google My Business

Your Google Maps listing controls what people see when they search for your business. Make sure you've claimed and verified it:

1. Go to business.google.com
2. Search for "Chesterfield Cleaning Fairies"
3. Claim the listing and verify via postcard or phone
4. Keep it updated: add photos, respond to reviews, and keep your phone/hours current

---

## What NOT to change

These things are in the code, not the Studio. Don't edit them unless your web developer guides you:

- Files in the `app/`, `components/`, `lib/` folders
- The `sanity.config.ts` file
- Environment variables in Vercel (the ones that start with `NEXT_PUBLIC_` or `SANITY_`)

Changing these without guidance could take the site offline. If something needs updating here (e.g. a new page, new feature), contact your web developer.
