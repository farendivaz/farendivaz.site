import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript, SiTailwindcss, SiReact } from "react-icons/si";
import Footer from "../components/Footer";
import Link from "next/link";
import IconTooltip from "../components/IconTooltip";

export default function About() {
  return (
    <main className="w-11/12 md:w-5/6 mx-auto mt-16 dark:text-white/90">
      <h1 className="text-2xl font-bold">About me</h1>
      <section className="text-left prose-sm md:prose-base">
        <p className="w-full md:w-3/4 mb-8">
          Hey! I&apos;m Fariz. I go by the name of Farendivaz in the online
          community.
        </p>
        <p className="border-b border-zinc-500">
          I&apos;m currently an undergraduate student majoring in Informatics
          Engineering in Indonesia. I focus on learning web development,
          especially frontend with React and Next.js
        </p>
        <p>
          I started learning web development in early 2022 as part of my
          coursework at university. It all started when one of my classes
          introduced me to HTML and CSS, and I immediately developed a strong
          curiosity for them. I found myself thoroughly enjoying the process of
          delving deeper into the world of web development, and my passion for
          it only grew stronger with time.
        </p>
        <p>
          Frontend development offers an extensive array of concepts and
          technologies to master, and I&apos;m fueled by my motivation to absorb
          as much knowledge as possible. I find great joy in learning something
          new and receiving feedback that helps me grow and enhance my skills.
        </p>
        <p>
          Through this website, I intend to share my projects and write
          informative blogs. I strongly believe that documenting what I&apos;ve
          learned is an effective way to solidify my understanding, while also
          allowing me to share my knowledge with others. Please don&apos;t
          hesitate to reach out to me if you need any assistance—I&apos;ll be
          more than happy to help
        </p>
      </section>
      <section className="mt-8">
        <h2 className="text-xl md:text-2xl font-bold">
          Current Favourite Tech Stack
        </h2>
        <div className="flex">
          <IconTooltip
            title="Next.js"
            icon={<TbBrandNextjs />}
            desc=" enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds."
            link="https://beta.nextjs.org/docs"
          />
          <IconTooltip
            title="React"
            icon={<SiReact />}
            desc=" is a free and open-source front-end JavaScript library for building user interfaces based on components. "
            link="https://react.dev/learn"
          />
          <IconTooltip
            title="TailwindCSS"
            icon={<SiTailwindcss />}
            desc=" is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML."
            link="https://tailwindcss.com/docs/"
          />
          <IconTooltip
            title="Typescript"
            icon={<SiTypescript />}
            desc=" is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale."
            link="https://www.typescriptlang.org/"
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}
