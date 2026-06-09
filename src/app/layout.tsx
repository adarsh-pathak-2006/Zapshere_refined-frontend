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
  title: "ZAPSHERE | AI-Powered Digital Marketing Agency",
  description: "ZAPSHERE is a global AI-powered digital marketing agency specialising in SEO, paid ads, social media, email funnels, and analytics.",
  authors: [{ name: "ZAPSHERE" }],
  openGraph: {
    title: "ZAPSHERE | AI-Powered Digital Marketing Agency",
    description: "ZAPSHERE is a global AI-powered digital marketing agency specialising in SEO, paid ads, social media, email funnels, and analytics.",
    url: "https://www.zapshere.com",
    siteName: "ZAPSHERE",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZAPSHERE | AI-Powered Digital Marketing Agency",
    description: "ZAPSHERE is a global AI-powered digital marketing agency specialising in SEO, paid ads, social media, email funnels, and analytics.",
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
