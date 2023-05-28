import Posts from "../components/Posts";

export default function PostsPage() {
  return (
    <main className="w-11/12 md:w-5/6 mx-auto mt-16">
      <h1 className="text-2xl text-left font-semibold mb-4">Posts</h1>
      <p className="dark:text-white/90 prose-lg w-full md:w-3/4 mb-8">
        Here you will find my random thoughts about my learning journey to
        become a software engineer, as well as updates on my current and
        upcoming projects. I always appreciate feedback or suggestions for
        future blog posts.
      </p>
      <Posts />
    </main>
  );
}
