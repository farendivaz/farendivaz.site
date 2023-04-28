import Link from "next/link";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <main className="w-11/12 md:w-5/6 mx-auto mt-16 dark:text-white/90 ">
      <h1 className="text-2xl font-semibold">Contact me</h1>
      <p>The best way to contact me is through one of the options below:</p>
      <ul className="list-disc p-4 md:p-8 mb-32">
        <li>
          Twitter:{" "}
          <Link
            href="https://twitter.com/farendivaz"
            target="__blank"
            className="underline decoration-dotted underline-offset-4 text-white text-sm md:text-base"
          >
            @farendivaz
          </Link>
        </li>
        <li>
          Linkedin:{" "}
          <Link
            href="https://linkedin.com/in/farizdandy"
            target="__blank"
            className="underline decoration-dotted underline-offset-4 text-white text-sm md:text-base"
          >
            https://linkedin.com/in/farizdandy
          </Link>
        </li>
        <li>
          Email:
          <Link
            href="mailto: 20702310@unkris.ac.id"
            target="__blank"
            className="underline decoration-dotted underline-offset-4 text-white text-sm md:text-base"
          >
            20702310@unkris.ac.id
          </Link>
        </li>
      </ul>
      <Footer />
    </main>
  );
}
