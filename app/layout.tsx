import type { Metadata } from "next";
import { Cormorant_Garamond, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const nunito = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const BASE_URL = "https://www.chesterfieldcleaningfairies.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Chesterfield Cleaning Fairies | Local, Insured Cleaning",
    template: "%s | Chesterfield Cleaning Fairies",
  },
  description:
    "Trusted, insured cleaning for homes and businesses across Chesterfield & Derbyshire — delivered by a friendly, local team you'll be happy to give a key to.",
  openGraph: {
    type: "website",
    siteName: "Chesterfield Cleaning Fairies",
    locale: "en_GB",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Chesterfield Cleaning Fairies",
      telephone: "+447369255360",
      email: "Chesterfieldcleaningfairies@gmail.com",
      url: BASE_URL,
      description:
        "Local, insured cleaning for homes and businesses across Chesterfield & Derbyshire.",
      areaServed: [
        "Chesterfield", "Brampton", "Walton", "Hasland", "Brimington",
        "Old Whittington", "Newbold", "Wingerworth", "Dronfield",
        "Holymoorside", "Staveley", "Clay Cross", "Ashgate", "Calow",
      ],
      priceRange: "££",
      "@id": BASE_URL,
    }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${nunito.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
