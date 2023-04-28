import Posts from "../components/Posts";

export default function PostsPage() {
  return (
    <main className="w-11/12 md:w-5/6 mx-auto mt-16">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and Welcome👋&nbsp;
      </p>
      <Posts />
    </main>
  );
}
