import Footer from "./components/Footer";
import Posts from "./components/Posts";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="w-11/12 md:w-5/6 mx-auto mt-16">
      <h2 className="text-xl dark:text-white/90">Hello I am Fariz✨</h2>
      <div className="dark:text-white/90 prose-lg">
        <p>I Design & Build things for web</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio id
          reiciendis iusto corporis illo praesentium. Adipisci dolorem sint
          consequuntur? Non.
        </p>
      </div>
      <Posts />
      <Projects />
      <Footer />
    </main>
  );
}
