import { defineType, defineField } from "sanity";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    defineField({ name: "metaDescription", title: "SEO meta description", type: "text", rows: 2, description: "Shown in Google search results. Keep under 160 characters." }),
    defineField({ name: "heading", title: "Page heading", type: "string" }),
    defineField({ name: "subheading", title: "Page subheading", type: "text", rows: 2 }),
    defineField({ name: "storyHeading", title: "Story section heading", type: "string" }),
    defineField({
      name: "storyBody",
      title: "Story section body text",
      description: "Use a blank line between paragraphs.",
      type: "text",
      rows: 8,
    }),
    defineField({
      name: "image",
      title: "Team / company photo (optional)",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "valuesHeading",
      title: "Values section heading",
      description: "The heading above the 'Why choose us' points (pulled from Home Page settings).",
      type: "string",
    }),
  ],
  preview: { select: { title: "heading" } },
});
