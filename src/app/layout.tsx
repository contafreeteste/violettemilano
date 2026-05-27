import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Violette Milano | Luxury Skincare",
  description:
    "Luxury skincare inspired by timeless elegance. Discover premium beauty products crafted with sophistication and care by Violette Milano.",
  keywords: [
    "Violette Milano",
    "luxury skincare",
    "premium cosmetics",
    "beauty",
    "skincare",
    "elegance",
    "luxury beauty",
  ],
  authors: [{ name: "Violette Milano" }],
  openGraph: {
    title: "Violette Milano | Luxury Skincare",
    description:
      "Luxury skincare inspired by timeless elegance. Discover premium beauty products crafted with sophistication and care.",
    url: "https://violettemilano.com",
    siteName: "Violette Milano",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Violette Milano | Luxury Skincare",
    description:
      "Luxury skincare inspired by timeless elegance. Discover premium beauty products crafted with sophistication and care.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://violettemilano.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Violette Milano",
              url: "https://violettemilano.com",
              description:
                "Luxury skincare inspired by timeless elegance.",
              sameAs: [
                "https://instagram.com/violettemilano",
                "https://linkedin.com/company/violettemilano",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Violette Milano",
              url: "https://violettemilano.com",
            }),
          }}
        />
      </body>
    </html>
  );
}
