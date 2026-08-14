import SkillGroup from "../components/SkillGroup";
import skills from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-[#1d252f] px-5 py-24 sm:px-8 md:px-12 lg:px-16 xl:px-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400">
            Toolbox
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
            Skills
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            Technologies and tools I use to build full-stack applications, from
            responsive interfaces to APIs, databases, and deployment.
          </p>
        </div>

        {/* Skill groups */}
        <div className="grid gap-4 md:grid-cols-2">
          {skills.map((skill) => (
            <SkillGroup key={skill.number} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
