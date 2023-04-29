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
      <body className="w-full md:w-4/6 mx-auto bg-white text-black/90 dark:bg-black dark:text-white/90">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
