import { defineType, defineField } from "sanity";

export const privacyPage = defineType({
  name: "privacyPage",
  title: "Privacy Policy Page",
  type: "document",
  fields: [
    defineField({ name: "metaDescription", title: "SEO meta description", type: "text", rows: 2, description: "Shown in Google search results. Keep under 160 characters." }),
  ],
  preview: { select: { title: "metaDescription" } },
});
