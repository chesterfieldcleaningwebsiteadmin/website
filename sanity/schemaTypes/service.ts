import { defineType, defineField } from "sanity";

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({ name: "metaTitle", title: "SEO title (overrides default)", type: "string", description: "Leave blank to use the service title. Max ~60 characters." }),
    defineField({ name: "metaDescription", title: "SEO meta description", type: "text", rows: 2, description: "Shown in Google search results. Max ~160 characters." }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "eyebrow", title: "Eyebrow label", type: "string" }),
    defineField({ name: "shortBlurb", title: "Short blurb (home grid)", type: "text", rows: 2 }),
    defineField({ name: "heroDescription", title: "Hero description", type: "text", rows: 3 }),
    defineField({
      name: "priceType",
      title: "Price type",
      type: "string",
      options: { list: [{ title: "From price", value: "from" }, { title: "Tailored quote", value: "quote" }], layout: "radio" },
    }),
    defineField({ name: "priceLabel", title: "Price label (e.g. £15/hr or £140)", type: "string" }),
    defineField({
      name: "included",
      title: "What's included",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "forWho",
      title: "Who it's for",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Title" },
            { name: "body", type: "text", title: "Body", rows: 2 },
          ],
        },
      ],
    }),
    defineField({ name: "mainImage", title: "Service photo", type: "image", options: { hotspot: true } }),
    defineField({ name: "photoLabel", title: "Photo label (placeholder)", type: "string" }),
    defineField({ name: "displayOrder", title: "Display order", type: "number" }),
    defineField({
      name: "faqs",
      title: "Frequently asked questions",
      description: "Questions and answers shown on this service page. Edit or add new ones — owner-editable.",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "question", type: "string", title: "Question" },
          { name: "answer", type: "text", title: "Answer", rows: 3 },
        ],
        preview: { select: { title: "question" } },
      }],
    }),
  ],
  orderings: [{ title: "Display order", name: "displayOrder", by: [{ field: "displayOrder", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "priceLabel" } },
});
