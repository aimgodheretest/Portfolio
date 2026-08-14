function TerminalCard() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-[#29313c] bg-[#12171e] shadow-2xl shadow-black/20">
      {/* Terminal header */}
      <div className="flex items-center gap-2 border-b border-[#29313c] bg-[#171d25] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />

        <span className="ml-3 font-mono text-[11px] text-slate-600">
          murli@portfolio — zsh
        </span>
      </div>

      {/* Terminal content */}
      <div className="space-y-5 p-6 font-mono text-sm">
        <div>
          <p className="text-blue-400">
            <span className="mr-2">→</span>~ whoami
          </p>

          <p className="mt-1 pl-5 text-slate-400">Full Stack Developer</p>
        </div>

        <div>
          <p className="text-blue-400">
            <span className="mr-2">→</span>~ cat status.txt
          </p>

          <p className="mt-1 pl-5 text-slate-400">
            Open to Work · Mumbai, India
          </p>
        </div>

        <div>
          <p className="text-blue-400">
            <span className="mr-2">→</span>~ ls stack/
          </p>

          <div className="mt-1 grid grid-cols-2 gap-x-4 gap-y-1 pl-5 text-slate-400 sm:grid-cols-3">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MySQL</span>
            <span>MongoDB</span>
            <span>JavaScript</span>
          </div>
        </div>

        <div>
          <p className="text-blue-400">
            <span className="mr-2">→</span>~
          </p>

          <span className="ml-5 inline-block h-4 w-1.5 animate-pulse bg-blue-400" />
        </div>
      </div>
    </div>
  );
}

export default TerminalCard;
