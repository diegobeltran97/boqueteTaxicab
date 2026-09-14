import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { LangProvider } from "@/components/LangProvider";
import { MenuProvider } from "@/components/MenuProvider";
import { MobileMenu } from "@/components/MobileMenu";
import { SiteHeader } from "@/components/SiteHeader";
import { StickyContact } from "@/components/StickyContact";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { langBootstrapScript } from "@/lib/lang";
import { GA_MEASUREMENT_ID, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Private Airport Transfers & Taxi in Boquete | Boquete Taxi Cab",
  description:
    "Pre-book Boquete Taxi Cab for private airport transfers, Boquete taxi rides, fixed USD prices, and English-speaking drivers in Panama.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body data-lang="en" suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: langBootstrapScript }} />
        {/* Google tag (gtag.js) — GA4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
        </Script>
        <LangProvider>
          <MenuProvider>
            <a className="skip-link" href="#main">
              Skip to content
            </a>
            <SiteHeader />
            <MobileMenu />
            {children}
            {/*   <StickyContact /> */}
            {/* Must stay after StickyContact: CSS lifts the button above the
                bar whenever that bar is rendered. */}
            <WhatsAppFab />
          </MenuProvider>
        </LangProvider>
      </body>
    </html>
  );
}
