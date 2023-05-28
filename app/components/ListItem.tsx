import Link from "next/link";
import getFormattedDate from "@/lib/posts";
import { BlogPost } from "@/types";

type Props = {
  post: BlogPost;
};

export default function ListItem({ post }: Props) {
  const { id, title, date } = post;
  // console.log(date);
  const formattedDate = getFormattedDate(date);

  return (
    <li className="text-sm md:text-lg p-4 dark:text-white/90">
      <Link
        className="underline underline-offset-4 decoration-2 decoration-dotted hover:text-black/70 dark:hover:text-white font-semibold"
        href={`/posts/${id}`}
      >
        {title}
      </Link>
      <br />
      <p className="text-xs md:text-sm mt-1">{formattedDate}</p>
    </li>
  );
}
