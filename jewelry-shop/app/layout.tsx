import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair,DM_Sans, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dm = DM_Sans({
  variable: "--font-dm",
})

const libre = Libre_Baskerville({
  variable: "--font-libre",
  weight:["400","700"],
})
const playfair = Playfair({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShineCraft Jewelry",
  description: "Elegant handcrafted jewelry",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${dm.variable} ${libre.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
