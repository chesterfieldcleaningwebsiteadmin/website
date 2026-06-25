import type { Metadata } from "next";
import { Cormorant_Garamond, Nunito_Sans, Dancing_Script } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import CursorTrail from "@/components/CursorTrail";

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

const dancing = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["700"],
});

const GTM_ID = "GTM-M6LGSRJ7";
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
      "@type": ["LocalBusiness", "HousekeepingBusiness"],
      "@id": BASE_URL,
      name: "Chesterfield Cleaning Fairies",
      url: BASE_URL,
      telephone: "+447369255360",
      email: "Chesterfieldcleaningfairies@gmail.com",
      description:
        "Local, insured cleaning for homes and businesses across Chesterfield & Derbyshire.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chesterfield",
        addressRegion: "Derbyshire",
        postalCode: "S40",
        addressCountry: "GB",
      },
      // Update openingHours in siteSettings in Studio to keep in sync
      openingHours: "Mo-Sa 08:00-18:00",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        ratingCount: "12",
      },
      areaServed: [
        "Chesterfield", "Brampton", "Walton", "Hasland", "Brimington",
        "Old Whittington", "Newbold", "Wingerworth", "Dronfield",
        "Holymoorside", "Staveley", "Clay Cross", "Ashgate", "Calow",
      ],
      priceRange: "££",
    }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${nunito.variable} ${dancing.variable}`}>
      <head>
        {/* Consent Mode v2 defaults — must run before GTM */}
        <Script
          id="consent-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                analytics_storage: 'denied',
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                wait_for_update: 500,
              });
              try {
                var saved = localStorage.getItem('ccf_cookie_consent');
                if (saved === 'granted') {
                  gtag('consent', 'update', {
                    analytics_storage: 'granted',
                    ad_storage: 'granted',
                    ad_user_data: 'granted',
                    ad_personalization: 'granted',
                  });
                }
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <CursorTrail />
        {children}
      </body>
    </html>
  );
}
