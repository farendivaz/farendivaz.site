import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" mt-16">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid justify-start md:justify-center grid-cols-1 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3 border-t border-zinc-500">
          <div>
            <h2 className="mb-6 text-xs md:text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Navigation
            </h2>
            <ul className="text-xs md:text-sm text-black/90 dark:text-white">
              <li className="mb-4">
                <Link
                  href="/"
                  className=" hover:underline hover:decoration-dotted hover:decoration-2 hover:underline-offset-2"
                >
                  Home
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/about"
                  className=" hover:underline hover:decoration-dotted hover:decoration-2 hover:underline-offset-2"
                >
                  About
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/contact"
                  className=" hover:underline hover:decoration-dotted hover:decoration-2 hover:underline-offset-2"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-xs md:text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Social
            </h2>
            <ul className="text-xs md:text-sm text-black/90 dark:text-white">
              <li className="mb-4">
                <Link
                  href="https://github.com/farendivaz"
                  className=" hover:underline hover:decoration-dotted hover:decoration-2 hover:underline-offset-2"
                >
                  Github
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="https://twitter.com/farendivaz"
                  className=" hover:underline hover:decoration-dotted hover:decoration-2 hover:underline-offset-2"
                >
                  Twitter
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="https://linkedin.com/in/farizdandy"
                  className=" hover:underline hover:decoration-dotted hover:decoration-2 hover:underline-offset-2"
                >
                  Linkedin
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-xs md:text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Blog
            </h2>
            <ul className="text-xs md:text-sm text-black/90 dark:text-white">
              <li className="mb-4">
                <Link
                  href="/posts"
                  className=" hover:underline hover:decoration-dotted hover:decoration-2 hover:underline-offset-2"
                >
                  All Posts
                </Link>
              </li>
              <li className="mb-4">
                <a
                  href="#"
                  className=" hover:underline hover:decoration-dotted hover:decoration-2 hover:underline-offset-2"
                >
                  Licensing
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#"
                  className=" hover:underline hover:decoration-dotted hover:decoration-2 hover:underline-offset-2"
                >
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
