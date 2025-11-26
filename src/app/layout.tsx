import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "تام مدیا | TAM MEDIA",
    template: "%s | تام مدیا کلاب",
  },
  description: "تام مدیا (TAM MEDIA) - آژانس خلاق بازاریابی و برندینگ. ما برندها را به‌عنوان موجودیت‌هایی زنده می‌بینیم و با استراتژی‌های هوشمندانه و کمپین‌های تأثیرگذار، روح برند شما را به زندگی می‌آوریم.",
  keywords: [
    "تام مدیا",
    "TAM MEDIA",
    "تام مدیا کلاب",
    "TAM MEDIA CLUB",
    "آژانس بازاریابی",
    "برندینگ",
    "دیجیتال مارکتینگ",
    "رسانه",
    "خدمات دیجیتال",
    "بازاریابی دیجیتال",
    "مدیا",
    "آژانس خلاق",
  ],
  authors: [{ name: "TAM MEDIA" }],
  creator: "TAM MEDIA",
  publisher: "TAM MEDIA",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "https://tammediaclub.com", 
    siteName: "تام مدیا",
    title: "تام مدیا کلاب | TAM MEDIA",
    description: "تام مدیا (TAM MEDIA) - آژانس خلاق بازاریابی و برندینگ. ما برندها را به‌عنوان موجودیت‌هایی زنده می‌بینیم و با استراتژی‌های هوشمندانه و کمپین‌های تأثیرگذار، روح برند شما را به زندگی می‌آوریم.",
    images: [
      {
        url: "https://tammediaclub.com/images/logo.svg",
        width: 1200,
        height: 630,
        alt: "تام مدیا - TAM MEDIA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "تام مدیا | TAM MEDIA",
    description: "تام مدیا کلاب (TAM MEDIA CLUB) - آژانس خلاق بازاریابی و برندینگ. ما برندها را به‌عنوان موجودیت‌هایی زنده می‌بینیم و با استراتژی‌های هوشمندانه و کمپین‌های تأثیرگذار، روح برند شما را به زندگی می‌آوریم.",
    images: ["https://tammediaclub.com/images/logo.svg"],
    creator: "@tammedia", // TODO: جایگزین کنید با Twitter handle واقعی
  },
  icons: {
    icon: [
      // ICO format برای گوگل (اولویت اول)
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      // SVG format برای مرورگرهای مدرن
      { url: "/images/logo.svg", sizes: "any", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/images/logo.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json", // TODO: اگر manifest.json دارید
  metadataBase: new URL("https://tammediaclub.com"), بعد ا
  alternates: {
    canonical: "/",
  },
  category: "media",
  classification: "Business",
  verification: {
    google: "74Ap5EHEgm-qia6m8xTp9BsaIEORXkWlOVD_2S-XhQA",
  },
  other: {
    "theme-color": "#0205AD",
    "color-scheme": "light",
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "تام مدیا",
    alternateName: "TAM MEDIA",
    url: "https://tammediaclub.com", 
    logo: {
      "@type": "ImageObject",
      url: "https://tammediaclub.com/images/logo.svg",
      width: 550,
      height: 550,
    },
    image: "https://tammediaclub.com/images/logo.svg",
    description: "تام مدیا (TAM MEDIA) - آژانس خلاق بازاریابی و برندینگ که برندها را به‌عنوان موجودیت‌هایی زنده می‌بیند",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IR",
      addressLocality: "ایران",
    },
    sameAs: [
      "https://instagram.com/tammediaclub",
      "https://t.me/tammediaclub",
    ],
  };

  return (
    <html lang="fa-IR">
      <body dir="rtl">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
