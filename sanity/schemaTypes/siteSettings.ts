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
    defineField({ name: "googleRating", title: "Google rating (e.g. 4.9)", type: "number", description: "Your current Google star rating" }),
    defineField({ name: "googleReviewCount", title: "Number of Google reviews", type: "number", description: "Total review count shown on Google" }),
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
  ],
  preview: { select: { title: "businessName" } },
});
