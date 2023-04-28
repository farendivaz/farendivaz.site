import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript, SiTailwindcss, SiReact } from "react-icons/si";
import Footer from "../components/Footer";
import Link from "next/link";
import IconTooltip from "../components/IconTooltip";

export default function About() {
  return (
    <main className="w-11/12 md:w-5/6 mx-auto mt-16 dark:text-white/90">
      <h1 className="text-3xl font-bold hidden lg:block">Fariz Dandy</h1>
      <section className="w-full mx-auto flex flex-col-reverse lg:flex-row gap-4">
        <div className="flex flex-col gap-4">
          <p>
            Hi there! I'm Fariz, a frontend web developer based in Indonesia. I
            have experience as a laboratory assistant, where I taught web
            programming and basic programming with Python to students of all
            levels.
          </p>
          <p>
            Through my teaching experience, I developed a passion for helping
            others learn and grow in the field of web development. I am a
            patient and enthusiastic instructor, and I enjoy breaking down
            complex concepts into simple, easy-to-understand terms. In addition
            to teaching, I am also a skilled frontend web developer with a focus
            on creating beautiful and responsive websites using the latest web
            technologies such as Next.js and React. I have a strong portfolio of
            projects that showcase my abilities, and I am always eager to take
            on new challenges and learn new skills.
          </p>
        </div>
        <img
          src="/profile.jpg"
          alt="Man"
          className="w-[250px] md:w-[280px] rounded-lg mx-auto"
        />
      </section>
      <section className="mt-8">
        <h2 className="text-xl md:text-3xl font-bold">
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
