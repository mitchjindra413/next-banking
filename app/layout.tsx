import type { Metadata } from "next";
import { IBM_Plex_Serif, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter'
});

const ibm = IBM_Plex_Serif({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-ibm-plex-serif'
})

export const metadata: Metadata = {
    title: "Next Banking",
    description: "Banking app created using Next.js",
    icons: {
        icon: '/public/icons/logo.svg'
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibm.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
