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
