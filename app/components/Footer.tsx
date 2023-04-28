import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black mt-16">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid justify-start md:justify-center grid-cols-1 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3 border-t dark:border-zinc-500">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Navigation
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link href="/" className=" hover:underline">
                  Home
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/about" className=" hover:underline">
                  About
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/contact" className=" hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Social
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link
                  href="https://github.com/farendivaz"
                  className="hover:underline"
                >
                  Github
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="https://twitter.com/farendivaz"
                  className="hover:underline"
                >
                  Twitter
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="https://linkedin.com/in/farizdandy"
                  className="hover:underline"
                >
                  Linkedin
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Blog
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link href="/posts">All Posts</Link>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Licensing
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
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
