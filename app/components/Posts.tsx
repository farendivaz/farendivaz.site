import { getSortedPostsData } from "@/lib/posts";
import ListItem from "./ListItem";

export default function Posts() {
  const posts = getSortedPostsData();

  return (
    <section className="mt-6 mx-auto w-full ">
      <h2 className="text-xl mb-4 dark:text-white/90 ">Featured Posts</h2>
      <ul className="w-full divide-y divide-zinc-500 first-of-type:border-t border-zinc-500">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
