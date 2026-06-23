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
  ],
  preview: { select: { title: "businessName" } },
});
