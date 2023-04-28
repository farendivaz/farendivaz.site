import Link from "next/link";

interface IconTooltipProps {
  title: string;
  icon: JSX.Element;
  desc: string;
  link: string;
}

export default function IconTooltip({
  title,
  icon,
  desc,
  link,
}: IconTooltipProps) {
  return (
    <div className="relative flex flex-col items-center group text-4xl mx-1">
      {icon}
      <div className="absolute bottom-0 left-0 md:bottom-3 md:left-0 hidden mb-6 group-hover:flex">
        <span className="relative z-10 w-52 md:w-64 p-4 text-sm leading-none text-white whitespace-normal border rounded-md dark:border-white/90 bg-black shadow-lg">
          <Link
            href={link}
            className="underline decoration-dotted underline-offset-2"
          >
            {title}
          </Link>
          {desc}
        </span>
      </div>
    </div>
  );
}
