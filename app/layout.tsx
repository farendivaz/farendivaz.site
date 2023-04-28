import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

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
    <html lang="en" className={inter.className}>
      <body className="w-full md:w-4/6 mx-auto">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
