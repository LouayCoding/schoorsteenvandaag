import type { Metadata, Viewport } from "next";
import { Manrope, Sora } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import CookieConsent from "@/components/CookieConsent";
import ThemeProvider from "@/components/ThemeProvider";
import { BASE_URL, COMPANY_NAME, EMAIL, PHONE_NUMBER } from "@/lib/constants";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#12100e",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Schoorsteen vegen vanaf €39,50 | Schoorsteenservice heel Nederland",
    template: `%s | ${COMPANY_NAME}`,
  },
  description:
    "Professionele schoorsteenveger door heel Nederland. Schoorsteen vegen vanaf €39,50 incl. veegbewijs. Vandaag gebeld, deze week geholpen. Bel 085 115 50 71.",
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    siteName: COMPANY_NAME,
    locale: "nl_NL",
    title: "Schoorsteen vegen vanaf €39,50 | Heel Nederland",
    description:
      "Professionele schoorsteenveger door heel Nederland. Inclusief veegbewijs voor uw verzekering. Bel 085 115 50 71.",
    images: [{ url: "/heropc.webp", width: 1200, height: 630, alt: "Schoorsteenveger aan het werk op een Nederlands dak" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Schoorsteen vegen vanaf €39,50 | Heel Nederland",
    description:
      "Professionele schoorsteenveger door heel Nederland. Inclusief veegbewijs voor uw verzekering.",
    images: ["/heropc.webp"],
  },
};

const THEME_INIT = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark")t="dark";var d=document.documentElement;d.setAttribute("data-theme",t);d.classList.add("js");var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content",t==="dark"?"#12100e":"#faf8f4")}catch(e){}})();`;

const LOCAL_BUSINESS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: COMPANY_NAME,
  url: BASE_URL,
  telephone: "+31851155071",
  email: EMAIL,
  image: `${BASE_URL}/heropc.webp`,
  priceRange: "€39,50 - €165",
  description:
    "Landelijk netwerk van gecertificeerde schoorsteenvegers. Schoorsteen vegen, camera-inspectie, vogelnest verwijderen en dakreparaties.",
  areaServed: { "@type": "Country", name: "Nederland" },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
      </head>
      <body className={`${manrope.variable} ${sora.variable} antialiased`}>
        <a href="#main" className="skip-link">
          Direct naar inhoud
        </a>
        <ThemeProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <StickyCTA />
          <CookieConsent />
        </ThemeProvider>
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSONLD) }}
        />
      </body>
    </html>
  );
}
