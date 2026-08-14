import { GraduationCap, MapPin } from "lucide-react";

const education = [
  {
    level: "Bachelor's Degree",
    title: "B.Tech in Computer Science",
    institution:
      "Dr. D.Y Patil Institute of Engineering and Technology, Ambi, Pune",
    field: "Computer Science & Engineering",
    score: "8.18 CGPA",
    description:
      "Studied core concepts of computer science including programming, data structures, algorithms, databases, operating systems, and software development.",
    period: "B.Tech",
    location: "India",
  },
  {
    level: "Higher Secondary",
    title: "12th / HSC",
    institution: "PT. J.L.N College, Marhaura, Saran.",
    field: "Higher Secondary Education",
    score: "68%",
    description:
      "Completed higher secondary education with a foundation in mathematics, science.",
    period: "12th",
    location: "India",
  },
  {
    level: "Secondary School",
    title: "10th / SSC",
    institution: "S P High School, Bhim Pur, Siwan",
    field: "Secondary Education",
    score: "55.6%",
    description:
      "Completed secondary school education and developed a foundation in mathematics, science, and general academics.",
    period: "10th",
    location: "India",
  },
];

function Education() {
  return (
    <section
      id="education"
      className="border-t border-[#1d252f] px-5 py-24 sm:px-8 md:px-12 lg:px-16 xl:px-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400">
            Academic Record
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
            Education
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            My academic background and foundation in computer science.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative ml-2 border-l border-[#29313c] pl-8 sm:ml-4 sm:pl-10">
          {education.map((item, index) => (
            <div
              key={item.title}
              className={`relative ${
                index !== education.length - 1 ? "pb-6" : ""
              }`}
            >
              {/* Timeline point */}
              <div className="absolute -left-9.25 top-8 h-2.5 w-2.5 rounded-full border-2 border-blue-400 bg-[#0b0f14] sm:-left-11.25" />

              <article className="rounded-xl border border-[#252d38] bg-[#12171e] p-6 transition-all duration-300 hover:border-blue-400/30">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  {/* Main content */}
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#29313c] bg-[#171d25] text-blue-400">
                        <GraduationCap size={18} />
                      </div>

                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-blue-400">
                          {item.level}
                        </p>

                        <h3 className="mt-1 text-xl font-semibold text-slate-100">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* Institution */}
                    <p className="mt-5 text-sm font-medium text-slate-300">
                      {item.institution}
                    </p>

                    {/* Field */}
                    <p className="mt-1 text-sm text-slate-500">{item.field}</p>

                    {/* Description */}
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>

                  {/* Right side */}
                  <div className="shrink-0 sm:text-right">
                    <p className="font-mono text-sm font-medium text-blue-400">
                      {item.score}
                    </p>

                    <p className="mt-2 font-mono text-xs text-slate-500">
                      {item.period}
                    </p>

                    <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-600 sm:justify-end">
                      <MapPin size={13} />
                      {item.location}
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
