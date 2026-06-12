import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FontAwesomeLoader from "@/components/FontAwesomeLoader";
import "../styles/bootstrap.min.css";
import "../styles/style.css";
import "../styles/responsive.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZAPSHERE | AI Digital Marketing & Automation Agency — Australia, USA & Germany",
  description: "ZAPSHERE is a global AI-powered digital marketing and automation agency helping businesses in Australia, the USA, and Germany grow through SEO, GEO, AEO, paid ads, social media, email automation, and AI calling agents. Get your free audit today.",
  keywords: [
    "AI digital marketing agency Australia",
    "AI marketing automation agency",
    "GEO optimisation agency",
    "AEO agency",
    "digital marketing agency USA",
    "digital marketing agency Germany",
    "email automation agency",
    "AI calling agent",
    "SEO agency Australia"
  ],
  authors: [{ name: "ZAPSHERE" }],
  openGraph: {
    title: "ZAPSHERE | AI-Powered Digital Marketing & Automation — AU · US · DE",
    description: "From SEO, GEO & AEO to AI calling agents and full workflow automation — ZAPSHERE helps businesses in Australia, USA, and Germany grow smarter. 500+ clients. No lock-in contracts.",
    url: "https://www.zapshere.com",
    siteName: "ZAPSHERE",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZAPSHERE — AI Marketing & Automation Agency | AU · US · DE",
    description: "Smart marketing. Real automation. Unstoppable growth. ZAPSHERE combines AI with human expertise to scale your business across Australia, the US, and Germany",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <head>
        <FontAwesomeLoader />
        <link rel="icon" href='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="80">⚡</text></svg>' />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`} style={{ overflowX: 'hidden' }}>
        <div className="page-wrapper">
          <Header />
          {children}
          <Footer />
        </div>
        
        {/* Legacy Scripts */}
        <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/js/popper.min.js" strategy="lazyOnload" />
        <Script src="/js/bootstrap.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.fancybox.js" strategy="lazyOnload" />
        <Script src="/js/bxslider.js" strategy="lazyOnload" />
        <Script src="/js/jquery-ui.js" strategy="lazyOnload" />
        <Script src="/js/wow.js" strategy="lazyOnload" />
        <Script src="/js/select2.min.js" strategy="lazyOnload" />
        <Script src="/js/appear.js" strategy="lazyOnload" />
        <Script src="/js/knob.js" strategy="lazyOnload" />
        <Script src="/js/swiper.min.js" strategy="lazyOnload" />
        <Script src="/js/aos.js" strategy="lazyOnload" />
        <Script src="/js/gsap.min.js" strategy="afterInteractive" />
        <Script src="/js/ScrollTrigger.min.js" strategy="afterInteractive" />
        <Script src="/js/splitType.js" strategy="lazyOnload" />
        <Script src="/js/mixitup.js" strategy="lazyOnload" />
        <Script src="/js/gsap-scroll-smoother.js" strategy="lazyOnload" />
        <Script src="/js/gsap-scroll-to-plugin.js" strategy="lazyOnload" />
        <Script src="/js/SplitText.min.js" strategy="lazyOnload" />
        <Script src="/js/custom-gsap.js" strategy="lazyOnload" />
        <Script src="/js/script.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
