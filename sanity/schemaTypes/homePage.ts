import { defineType, defineField } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    // SEO
    defineField({ name: "metaTitle", title: "SEO title (overrides default)", type: "string", description: "Leave blank to use the default page title. Max ~60 characters." }),
    defineField({ name: "metaDescription", title: "SEO meta description", type: "text", rows: 2, description: "Shown in Google search results. Max ~160 characters." }),

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

    // Services section labels
    defineField({ name: "servicesEyebrow", title: "Services section eyebrow", type: "string" }),
    defineField({ name: "servicesHeading", title: "Services section heading", type: "string" }),
    defineField({ name: "servicesSub", title: "Services section sub-heading", type: "text", rows: 2 }),

    // How it works
    defineField({ name: "howEyebrow", title: "How it works — eyebrow text", type: "string" }),
    defineField({ name: "howHeading", title: "How it works — section heading", type: "string" }),
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
    defineField({ name: "testimonialsEyebrow", title: "Testimonials — eyebrow text", type: "string" }),
    defineField({ name: "testimonialsHeading", title: "Testimonials — section heading", type: "string" }),
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
