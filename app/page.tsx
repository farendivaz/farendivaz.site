import Footer from "./components/Footer";
import Posts from "./components/Posts";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="w-11/12 md:w-5/6 mx-auto mt-16">
      <h2 className="text-lg md:text-xl dark:text-white/90 font-semibold">
        Hello I am Fariz✨
      </h2>
      <div className="mt-4 dark:text-white/90 prose-sm md:prose-lg w-full md:w-3/4">
        <p>I Design & Build things for web</p>
        <p>
          I enjoy tinkering with new technologies and keeping up with the latest
          developments in the world of web development
        </p>
      </div>
      <h2 className="text-lg md:text-xl mt-8 dark:text-white/90 font-semibold ">
        Featured Posts
      </h2>
      <Posts />
      <Projects />
      <Footer />
    </main>
  );
}
