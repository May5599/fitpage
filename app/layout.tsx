import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ceecefit × Gyata Nutrition | 20% Off With Code CEECEFIT",
  description: "Ceecefit's go-to protein. Real food, real reps — get 20% off Gyata Nutrition's Whey & Twin Pack with code CEECEFIT. Canadian-made, clean formula.",
  keywords: ["Ceecefit", "Gyata Nutrition", "protein powder", "whey protein", "fitness creator", "CEECEFIT discount", "Canadian protein"],
  authors: [{ name: "Ceecefit" }],
  creator: "Ceecefit",
  metadataBase: new URL("https://ceecefit.gyatanutrition.com"),
  openGraph: {
    type: "website",
    url: "https://ceecefit.gyatanutrition.com",
    title: "Ceecefit × Gyata Nutrition | 20% Off With Code CEECEFIT",
    description: "Ceecefit's go-to protein. Get 20% off Gyata Nutrition Whey & Twin Pack with code CEECEFIT. Clean label. No fillers. Proudly Canadian.",
    siteName: "Ceecefit",
    images: [
      {
        url: "/c.jpg",
        width: 1200,
        height: 630,
        alt: "Ceecefit holding Gyata Nutrition protein",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ceecefit × Gyata Nutrition | 20% Off With Code CEECEFIT",
    description: "Ceecefit's go-to protein. Get 20% off Gyata Nutrition Whey & Twin Pack with code CEECEFIT.",
    images: ["/c.jpg"],
    creator: "@ceecefit",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
