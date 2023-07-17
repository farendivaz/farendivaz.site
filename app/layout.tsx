import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Providers } from "./Providers";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

const inter = Inter({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

// export const metadata = {
//   title: "Farendivaz",
//   description: "Farendivaz Personal Website",
//   // google-site-verification: ""
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>Farendivaz</title>
        <meta name="description">Farendivaz Personal Website</meta>
        <meta
          name="google-site-verification"
          content="sAW_62gARtx7mQWt0mKm4b4PGBZRcSQ4O1_iNzBrYYo"
        />
      </Head>
      <html lang="en" className={inter.className} suppressHydrationWarning>
        <body className="w-full h-full mx-auto bg-cover bg-zinc-100 text-black/90 dark:bg-zinc-900 dark:text-white/90">
          <Providers>
            <div className="main">
              <div className="gradient"></div>
            </div>
            <main className="app">
              <Navbar />
              {children}
              <Analytics />
            </main>
          </Providers>
        </body>
      </html>
    </>
  );
}
