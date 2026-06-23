import { defineType, defineField } from "sanity";

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
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
    defineField({ name: "photoLabel", title: "Photo label (placeholder)", type: "string" }),
    defineField({ name: "displayOrder", title: "Display order", type: "number" }),
  ],
  orderings: [{ title: "Display order", name: "displayOrder", by: [{ field: "displayOrder", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "priceLabel" } },
});
