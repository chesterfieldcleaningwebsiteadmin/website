import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import WhatsAppButton from "@/components/WhatsAppButton";
import PromoBanner from "@/components/PromoBanner";
import { SITE_SETTINGS } from "@/lib/data";
import { getPromoBanner } from "@/lib/sanity";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const promoBanner = await getPromoBanner();

  return (
    <>
      {promoBanner && <PromoBanner banner={promoBanner} />}
      <Header />
      {children}
      <Footer />
      <CookieBanner />
      <WhatsAppButton phone={SITE_SETTINGS.phone} />
    </>
  );
}
