import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemaTypes";
import { systemsInfoPlugin } from "./sanity/SystemsInfoPlugin";

const SINGLETONS = ["homePage", "siteSettings", "aboutPage"];

export default defineConfig({
  name: "chesterfield-cleaning-fairies",
  title: "Chesterfield Cleaning Fairies",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  basePath: "/studio",
  schema: { types: schemaTypes },

  plugins: [
    systemsInfoPlugin(),
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Home Page")
              .id("homePage")
              .child(
                S.document().schemaType("homePage").documentId("homePage")
              ),
            S.listItem()
              .title("Site Settings")
              .id("siteSettings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
              ),
            S.listItem()
              .title("About Page")
              .id("aboutPage")
              .child(
                S.document()
                  .schemaType("aboutPage")
                  .documentId("aboutPage")
              ),
            S.divider(),
            S.documentTypeListItem("service").title("Services"),
            S.documentTypeListItem("testimonial").title("Testimonials"),
            S.documentTypeListItem("promoBanner").title("Promotional Banner"),
          ]),
    }),
  ],

  // Prevent creating new instances of singleton types
  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === "global") {
        return prev.filter(
          (t) => !SINGLETONS.includes(t.templateId)
        );
      }
      return prev;
    },
  },
});
