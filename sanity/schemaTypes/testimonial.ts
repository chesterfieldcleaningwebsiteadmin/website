import { defineType, defineField } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "quote", title: "Quote", type: "text", rows: 3 }),
    defineField({ name: "name", title: "Customer name", type: "string" }),
    defineField({ name: "place", title: "Place (e.g. Walton)", type: "string" }),
    defineField({ name: "displayOrder", title: "Display order", type: "number" }),
  ],
  orderings: [{ title: "Display order", name: "displayOrder", by: [{ field: "displayOrder", direction: "asc" }] }],
  preview: { select: { title: "name", subtitle: "place" } },
});
