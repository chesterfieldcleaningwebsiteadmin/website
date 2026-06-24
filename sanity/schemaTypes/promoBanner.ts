import { defineType, defineField } from "sanity";

export const promoBanner = defineType({
  name: "promoBanner",
  title: "Promotional Banner",
  type: "document",
  description: "A dismissible strip shown at the top of every page. Toggle on/off as needed.",
  fields: [
    defineField({
      name: "enabled",
      title: "Show banner",
      type: "boolean",
      description: "Turn this on to display the banner, off to hide it.",
      initialValue: false,
    }),
    defineField({
      name: "text",
      title: "Banner text",
      type: "string",
      description: "The main message shown in the banner (e.g. 'Spring offer — 10% off your first deep clean this month').",
    }),
    defineField({
      name: "linkLabel",
      title: "Link label (optional)",
      type: "string",
      description: "Text for the call-to-action link, e.g. 'Get the offer'.",
    }),
    defineField({
      name: "linkUrl",
      title: "Link URL (optional)",
      type: "url",
      description: "Where the link points to, e.g. /contact.",
    }),
  ],
  preview: {
    select: { title: "text", enabled: "enabled" },
    prepare({ title, enabled }) {
      return {
        title: title || "(No text set)",
        subtitle: enabled ? "Live" : "Hidden",
      };
    },
  },
});
