import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "businessName", title: "Business name", type: "string" }),
    defineField({ name: "phone", title: "Phone number", type: "string" }),
    defineField({ name: "email", title: "Email address", type: "string" }),
    defineField({ name: "instagramUrl", title: "Instagram URL", type: "url" }),
    defineField({ name: "facebookUrl", title: "Facebook URL", type: "url" }),
    defineField({ name: "footerBlurb", title: "Footer blurb", type: "text", rows: 2 }),
    defineField({
      name: "areasIntro",
      title: "Areas intro text",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "areas",
      title: "Areas covered",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "areaPages",
      title: "Area landing pages",
      description: "Each entry creates a dedicated SEO page at /areas/[slug]. Add the towns you most want to rank for.",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "name", type: "string", title: "Area name (e.g. Dronfield)" },
          { name: "slug", type: "slug", title: "URL slug", options: { source: "name" } },
        ],
        preview: { select: { title: "name", subtitle: "slug.current" } },
      }],
    }),
    defineField({ name: "googleRating", title: "Google rating (e.g. 4.9)", type: "number", description: "Your current Google star rating" }),
    defineField({ name: "googleReviewCount", title: "Number of Google reviews", type: "number", description: "Total review count shown on Google" }),
    defineField({ name: "googleWriteReviewUrl", title: "Google — write a review URL", type: "url", description: "Paste the direct link for customers to write a new Google review. Find it in Google Business Profile → 'Ask for reviews'." }),
    defineField({ name: "streetAddress", title: "Address / area", type: "string", description: "e.g. Chesterfield, Derbyshire, S40" }),
    defineField({ name: "openingHours", title: "Opening hours", type: "string", description: "e.g. Monday–Saturday, 8am–6pm" }),
    defineField({
      name: "instagramHighlights",
      title: "Instagram highlights",
      description: "Upload 4–6 recent work photos. Shown on the home page with a Follow Us link. Leave empty to hide the section.",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "image", type: "image", title: "Photo", options: { hotspot: true } },
          { name: "caption", type: "string", title: "Caption (optional)" },
        ],
        preview: { select: { title: "caption", media: "image" } },
      }],
    }),
    defineField({
      name: "statsStrip",
      title: "Stats strip",
      type: "object",
      description: "Numbers shown between the hero and trust strip. Toggle off to hide the strip entirely.",
      fields: [
        defineField({ name: "show", title: "Show stats strip", type: "boolean", initialValue: true }),
        defineField({
          name: "stats",
          title: "Stats",
          type: "array",
          of: [{
            type: "object",
            fields: [
              { name: "value", type: "string", title: "Value (e.g. 100+)" },
              { name: "label", type: "string", title: "Label (e.g. Happy customers)" },
            ],
            preview: { select: { title: "value", subtitle: "label" } },
          }],
        }),
      ],
    }),
    defineField({
      name: "priceCalculator",
      title: "Price calculator",
      type: "object",
      description: "Interactive price estimator on the Pricing page. Toggle off to hide it entirely.",
      initialValue: {
        show: true,
        heading: "Get an instant estimate",
        subheading: "Select your property size and how often you'd like us — we'll show you a price.",
        showOneOff: true,
        showFortnightly: true,
        showWeekly: true,
        tiers: [
          { label: "Studio / 1 bedroom", oneOffPrice: 35, fortnightlyPrice: 30, weeklyPrice: 28 },
          { label: "2 bedrooms",         oneOffPrice: 55, fortnightlyPrice: 45, weeklyPrice: 42 },
          { label: "3 bedrooms",         oneOffPrice: 75, fortnightlyPrice: 60, weeklyPrice: 58 },
          { label: "4+ bedrooms",        oneOffPrice: 110, fortnightlyPrice: 90, weeklyPrice: 85 },
        ],
        disclaimer: "Prices are a guide only. Final price confirmed after a quick chat about your exact needs.",
        ctaText: "Get your exact quote",
        ctaHref: "/contact",
      },
      fields: [
        defineField({ name: "show", title: "Show price calculator on the Pricing page", type: "boolean", initialValue: true }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "subheading", title: "Subheading", type: "string" }),
        defineField({
          name: "showOneOff",
          title: "Show 'One-off clean' option",
          type: "boolean",
          description: "Turn off to hide the one-off button from the calculator.",
          initialValue: true,
        }),
        defineField({
          name: "showFortnightly",
          title: "Show 'Fortnightly' option",
          type: "boolean",
          description: "Turn off to hide the fortnightly button from the calculator.",
          initialValue: true,
        }),
        defineField({
          name: "showWeekly",
          title: "Show 'Weekly' option",
          type: "boolean",
          description: "Turn off to hide the weekly button from the calculator.",
          initialValue: true,
        }),
        defineField({
          name: "tiers",
          title: "Property sizes & prices",
          description: "Each row is a property size. Set the price you charge for that size under each booking type. You can add, remove or reorder rows freely.",
          type: "array",
          of: [{
            type: "object",
            fields: [
              defineField({ name: "label", type: "string", title: "Property size label (e.g. 2 bedrooms)" }),
              defineField({ name: "oneOffPrice", type: "number", title: "One-off clean price (£)", description: "What you charge for a single one-off clean of this size." }),
              defineField({ name: "fortnightlyPrice", type: "number", title: "Fortnightly price per visit (£)", description: "What you charge per visit for a regular fortnightly booking." }),
              defineField({ name: "weeklyPrice", type: "number", title: "Weekly price per visit (£)", description: "What you charge per visit for a weekly booking. Can be the same as fortnightly or lower." }),
            ],
            preview: {
              select: { title: "label", oneOff: "oneOffPrice", fortnightly: "fortnightlyPrice", weekly: "weeklyPrice" },
              prepare({ title, oneOff, fortnightly, weekly }) {
                return { title, subtitle: `One-off £${oneOff} · Fortnightly £${fortnightly} · Weekly £${weekly}` }
              },
            },
          }],
        }),
        defineField({ name: "disclaimer", title: "Small print below the estimate", type: "string" }),
        defineField({ name: "ctaText", title: "Button text", type: "string" }),
        defineField({ name: "ctaHref", title: "Button link (e.g. /contact)", type: "string" }),
      ],
    }),
  ],
  preview: { select: { title: "businessName" } },
});
