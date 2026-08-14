import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-[#1d252f] px-5 py-24 sm:px-8 md:px-12 lg:px-16 xl:px-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400">
              Selected Work
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
              Projects
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
              Full-stack applications built to solve practical problems, with a
              focus on authentication, APIs, databases, and responsive user
              interfaces.
            </p>
          </div>

          <span className="font-mono text-xs text-slate-600">
            {projects.length} projects
          </span>
        </div>

        {/* Projects */}
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
