"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeChanger from "../ThemeChanger";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full  h-[60px] mx-auto px-4 md:px-8 bg-zinc-400 dark:bg-zinc-800  flex items-center justify-between rounded-lg sticky top-5 z-10 backdrop-blur-xl backdrop-filter bg-opacity-10 dark:bg-opacity-50">
      <ul className="flex items-center gap-4 md:gap-6 text-xs sm:text-sm md:text-base ">
        <li>
          <Link
            href="/"
            className={`hover:text-black hover:dark:text-gray-100 ${
              pathname === "/"
                ? "underline decoration-2 decoration-dotted underline-offset-2 font-semibold"
                : "text-black/90  dark:text-zinc-200 font-medium"
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/posts"
            className={`hover:text-black hover:dark:text-gray-100 ${
              pathname === "/posts"
                ? "underline decoration-2 decoration-dotted underline-offset-2 font-semibold"
                : "text-black/90 dark:text-zinc-200"
            }`}
          >
            Posts
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={` hover:text-black hover:dark:text-gray-100  ${
              pathname === "/about"
                ? "underline decoration-2 decoration-dotted underline-offset-2 font-semibold"
                : "text-black/90 dark:text-zinc-200 font-medium"
            }`}
          >
            About
          </Link>
        </li>
        <Link
          href="/contact"
          className={` hover:text-black hover:dark:text-gray-100 ${
            pathname === "/contact"
              ? "underline decoration-2 decoration-dotted underline-offset-2 font-semibold"
              : "text-black/90 dark:text-zinc-200"
          }`}
        >
          Contact
        </Link>
        <li></li>
      </ul>
      <ThemeChanger />
    </nav>
  );
}
