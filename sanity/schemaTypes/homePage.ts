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
  ],
  preview: { select: { title: "heroHeading" } },
});
