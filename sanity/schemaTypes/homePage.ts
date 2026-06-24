import { defineType, defineField } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    // Hero
    defineField({ name: "heroImage", title: "Hero photo", type: "image", options: { hotspot: true } }),
    defineField({ name: "heroBadge", title: "Hero badge text", type: "string" }),
    defineField({ name: "heroHeading", title: "Hero heading (press Enter for line break)", type: "text", rows: 2 }),
    defineField({ name: "heroSubheading", title: "Hero subheading", type: "text", rows: 3 }),

    // Trust strip
    defineField({
      name: "trustItems",
      title: "Trust strip items",
      type: "array",
      of: [{ type: "string" }],
    }),

    // How it works
    defineField({
      name: "howSteps",
      title: "How it works — steps",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "title", type: "string", title: "Step title" },
          { name: "body", type: "text", title: "Step description", rows: 2 },
        ],
        preview: { select: { title: "title" } },
      }],
    }),

    // Why choose us
    defineField({ name: "whyHeading", title: "Why choose us — heading", type: "string" }),
    defineField({
      name: "whyPoints",
      title: "Why choose us — points",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "title", type: "string", title: "Point title" },
          { name: "body", type: "text", title: "Point description", rows: 2 },
        ],
        preview: { select: { title: "title" } },
      }],
    }),

    // CTA band
    defineField({ name: "ctaHeading", title: "CTA band heading", type: "string" }),
    defineField({ name: "ctaBody", title: "CTA band body text", type: "text", rows: 2 }),

    // Testimonials
    defineField({
      name: "googleReviewsUrl",
      title: "Google Reviews URL",
      description: "Paste your Google Business Profile reviews link here (e.g. from Google Maps). Shown as a 'See our Google reviews' link below testimonials.",
      type: "url",
    }),

    // Gallery
    defineField({
      name: "gallery",
      title: "Photo gallery",
      description: "Upload photos of your work. Leave empty to hide the gallery section.",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "image", type: "image", title: "Photo", options: { hotspot: true } },
          { name: "altText", type: "string", title: "Alt text (describe the photo)" },
        ],
        preview: { select: { title: "altText", media: "image" } },
      }],
    }),

    // Before & after gallery
    defineField({
      name: "beforeAfter",
      title: "Before & after gallery",
      description: "Upload before and after photos of your cleaning work. Leave empty to hide this section.",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "label", type: "string", title: "Label (e.g. Kitchen deep clean)" },
          { name: "beforeImage", type: "image", title: "Before photo", options: { hotspot: true } },
          { name: "afterImage", type: "image", title: "After photo", options: { hotspot: true } },
        ],
        preview: { select: { title: "label", media: "afterImage" } },
      }],
    }),
  ],
  preview: { select: { title: "heroHeading" } },
});
