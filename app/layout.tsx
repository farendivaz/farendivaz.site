import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Providers } from "./Providers";

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
