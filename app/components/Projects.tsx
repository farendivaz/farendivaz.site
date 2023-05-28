import { projects } from "@/public/data";
import ProjectItem from "./ProjectItem";

export default function Posts() {
  return (
    <section className="mt-14 mx-auto w-full ">
      <h2 className="text-lg md:text-xl mb-4 dark:text-white/90 font-semibold">
        Featured Projects
      </h2>
      <ul className="w-full divide-y divide-zinc-500 first-of-type:border-t border-zinc-500">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </ul>
    </section>
  );
}
