import { Project } from "@/types";
import Link from "next/link";
import { Key, ReactElement, ReactNode } from "react";
import { JsxElement } from "typescript";
import IconTooltip from "./IconTooltip";

type Props = {
  project: Project;
};
export default function ProjectItem({ project }: Props) {
  const { id, name, description, link, techStack } = project;

  return (
    <li className="text-sm md:text-lg p-4 dark:text-white/90">
      <Link
        className="underline underline-offset-4 decoration-2 decoration-dotted hover:text-black/70 dark:hover:text-white font-semibold"
        href={link}
        target="__blank"
      >
        {name}
      </Link>
      <br />
      <p className="text-sm md:text-base my-2">{description}</p>
      <div className="flex">
        {techStack.map(
          (
            stack: {
              name: string;
              description: string;
              link: string;
              icon: JSX.Element;
            },
            index: number
          ) => (
            <IconTooltip
              key={index}
              title={stack?.name}
              icon={stack?.icon}
              desc={stack?.description}
              link={stack?.link}
            />
          )
        )}
      </div>
    </li>
  );
}
