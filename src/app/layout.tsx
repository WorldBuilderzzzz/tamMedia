import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "تام مدیا",
  description: "TAM MEDIA",
  icons: {
    icon: "/images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa-IR">
      <body dir="rtl">
        {children}
      </body>
    </html>
  );
}
