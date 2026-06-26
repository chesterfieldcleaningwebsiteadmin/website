import { defineType, defineField } from "sanity";

export const pricingPage = defineType({
  name: "pricingPage",
  title: "Pricing Page",
  type: "document",
  fields: [
    defineField({ name: "metaTitle", title: "SEO title (overrides default)", type: "string", description: "Leave blank to use the default page title. Max ~60 characters." }),
    defineField({ name: "metaDescription", title: "SEO meta description", type: "text", rows: 2, description: "Shown in Google search results. Keep under 160 characters." }),
    defineField({ name: "heroEyebrow", title: "Hero eyebrow text", type: "string" }),
    defineField({ name: "heroHeading", title: "Hero heading", type: "string" }),
    defineField({ name: "heroSub", title: "Hero sub-heading", type: "text", rows: 2 }),
    defineField({
      name: "footerNote",
      title: "Pricing disclaimer (below the cards)",
      description: "The small note below the price cards explaining that prices are starting prices.",
      type: "text",
      rows: 3,
    }),
  ],
  preview: { select: { title: "heroHeading" } },
});
