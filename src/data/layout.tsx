import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "منصة الحازم | مجموعة العالمية",
  description: "منصة مرجعية للأجهزة الكهربائية والتكييف والأدوات المنزلية، مع مستشارين افتراضيين وتحويل العملاء إلى فريق المبيعات.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}