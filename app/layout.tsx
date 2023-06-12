import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Providers } from "./Providers";
import Head from "next/head";

const inter = Inter({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Farendivaz",
  description: "Farendivaz Personal Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <Head>
        <script
          async
          defer
          data-website-id="379c1412-f16b-421a-949d-d2d02af41941"
          src="https://umami-test-livid.vercel.app/umami.js"
        ></script>
      </Head>
      <body className="w-full h-full mx-auto bg-cover bg-zinc-100 text-black/90 dark:bg-zinc-900 dark:text-white/90">
        <Providers>
          <div className="main">
            <div className="gradient"></div>
          </div>
          <main className="app">
            <Navbar />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
