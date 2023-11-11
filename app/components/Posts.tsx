import { getSortedPostsData } from "@/lib/posts";
import ListItem from "./ListItem";

interface PostsProps {
  numPosts: number;
}

export default function Posts({ numPosts }: PostsProps) {
  const allPosts = getSortedPostsData();

  // If numPosts is -1, render all posts; otherwise, slice the array
  const posts = numPosts === -1 ? allPosts : allPosts.slice(0, numPosts);

  return (
    <section className="mt-6 mx-auto w-full ">
      <ul className="w-full divide-y divide-zinc-500 first-of-type:border-t border-zinc-500">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
