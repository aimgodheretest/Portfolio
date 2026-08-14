import { Award } from "lucide-react";
import certifications from "../data/certifications";

function Certifications() {
  return (
    <section
      id="certifications"
      className="border-t border-[#1d252f] px-5 py-24 sm:px-8 md:px-12 lg:px-16 xl:px-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400">
            Credentials
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
            Certifications
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            Courses and certifications covering development, computer science
            fundamentals, and software engineering.
          </p>
        </div>

        {/* Certifications */}
        <div className="rounded-xl border border-[#252d38] bg-[#12171e] p-6 sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#29313c] bg-[#171d25] text-blue-400">
              <Award size={18} />
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-blue-400">
                Completed Learning
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Professional courses and technical learning
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {certifications.map((certification) => (
              <div
                key={certification}
                className="rounded-lg border border-[#29313c] bg-[#171d25] px-4 py-2.5 text-sm text-slate-300 transition-all duration-200 hover:border-blue-400/40 hover:text-blue-400"
              >
                {certification}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
