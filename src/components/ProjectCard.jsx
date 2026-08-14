import { ArrowUpRight } from "lucide-react";

function ProjectCard({ project, index }) {
  return (
    <article className="group flex h-full flex-col rounded-xl border border-[#252d38] bg-[#12171e] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-[#151b23]">
      {/* Number */}
      <div className="mb-5 flex items-center justify-between">
        <span className="font-mono text-xs text-blue-400">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="font-mono text-[10px] uppercase tracking-widest text-slate-600">
          Full Stack
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-slate-100 transition-colors group-hover:text-blue-400">
        {project.title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-sm leading-6 text-slate-500">
        {project.description}
      </p>

      {/* Highlights */}
      <ul className="mt-5 space-y-2">
        {project.highlights.map((highlight) => (
          <li
            key={highlight}
            className="flex gap-2 text-xs leading-5 text-slate-400"
          >
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-400" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      {/* Technologies */}
      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-md border border-[#29313c] bg-[#171d25] px-2.5 py-1 font-mono text-[10px] text-slate-400"
          >
            {technology}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="mt-auto flex gap-2 pt-7">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-slate-500 transition hover:text-blue-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.16c-3.2.7-3.88-1.36-3.88-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.95.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.25 5.68.41.35.78 1.04.78 2.1v3.11c0 .31.21.68.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
          </svg>
        </a>

        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-blue-500 px-3 py-2 text-xs font-semibold text-slate-950 transition hover:bg-blue-400"
        >
          Live
          <ArrowUpRight size={14} />
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
