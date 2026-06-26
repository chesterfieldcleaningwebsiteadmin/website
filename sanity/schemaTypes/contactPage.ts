import { defineType, defineField } from "sanity";

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  fields: [
    defineField({ name: "metaTitle", title: "SEO title (overrides default)", type: "string", description: "Leave blank to use the default page title. Max ~60 characters." }),
    defineField({ name: "metaDescription", title: "SEO meta description", type: "text", rows: 2, description: "Shown in Google search results. Keep under 160 characters." }),
    defineField({ name: "heroEyebrow", title: "Hero eyebrow text", type: "string" }),
    defineField({ name: "heroHeading", title: "Hero heading", type: "string" }),
    defineField({ name: "heroSub", title: "Hero sub-heading", type: "text", rows: 2 }),
    defineField({
      name: "trustItems",
      title: "Trust items (sidebar bullet points)",
      description: "Short trust signals shown in the sidebar. Keep to 3 items.",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  preview: { select: { title: "heroHeading" } },
});
