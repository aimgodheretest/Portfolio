function SkillGroup({ skill }) {
  return (
    <article className="rounded-xl border border-[#252d38] bg-[#12171e] p-6 transition-all duration-300 hover:border-blue-400/30 hover:bg-[#151b23]">
      {/* Header */}
      <div className="flex items-start gap-4">
        <span className="font-mono text-[10px] font-medium text-blue-400">
          {skill.number}
        </span>

        <div>
          <h3 className="text-base font-semibold text-slate-100">
            {skill.title}
          </h3>

          <p className="mt-1 text-xs leading-5 text-slate-600">
            {skill.description}
          </p>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-5 flex flex-wrap gap-2">
        {skill.items.map((item) => (
          <span
            key={item}
            className="rounded-md border border-[#29313c] bg-[#171d25] px-3 py-1.5 font-mono text-[10px] text-slate-400 transition-colors hover:border-blue-400/40 hover:text-blue-400"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

export default SkillGroup;
