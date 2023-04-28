"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiLinkedin } from "react-icons/si";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-11/12 md:w-full h-[60px] mt-4 mx-auto px-4 md:px-8 bg-zinc-600  flex justify-between items-center rounded-lg sticky top-5 z-10 backdrop-blur-lg backdrop-filter bg-opacity-30">
      <ul className="flex items-center gap-4 md:gap-6 text-xs md:text-base">
        <li>
          <Link
            href="/"
            className={`hover:text-gray-100 ${
              pathname === "/" ? "border-b-2 font-bold" : "text-gray-300"
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={` hover:text-gray-100  ${
              pathname === "/about" ? "border-b-2 font-bold" : "text-gray-300"
            }`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/posts"
            className={`hover:text-gray-100 ${
              pathname === "/posts" ? "border-b-2 font-bold" : "text-gray-300"
            }`}
          >
            Posts
          </Link>
        </li>
        <Link
          href="/contact"
          className={` hover:text-gray-100 ${
            pathname === "/contact" ? "border-b-2 font-bold" : "text-gray-300"
          }`}
        >
          Contact
        </Link>
        <li></li>
      </ul>
      <SiLinkedin />
    </nav>
  );
}
