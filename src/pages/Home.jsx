import { ArrowUpRight, Download, Mail } from "lucide-react";
import TerminalCard from "../components/TerminalCard";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen px-5 pb-20 pt-24 sm:px-8 md:px-12 lg:px-16 xl:px-20"
    >
      <div className="mx-auto flex min-h-[calc(100vh-120px)] max-w-6xl flex-col justify-center">
        {/* Availability */}
        <div className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-blue-400">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
          Mumbai, India · Open to Work
        </div>

        {/* Hero */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left */}
          <div>
            <h1 className="text-5xl font-bold tracking-tight text-slate-100 sm:text-6xl lg:text-7xl">
              Murli <span className="text-blue-400">Kumar</span>
            </h1>

            <h2 className="mt-5 text-xl font-medium text-slate-400 sm:text-2xl">
              Full Stack Developer
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
              B.Tech Computer Science graduate building responsive,
              production-ready web applications with modern JavaScript
              technologies. Focused on clean APIs, authentication, databases,
              and user-friendly interfaces.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-blue-400"
              >
                View Projects
                <ArrowUpRight size={17} />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[#303947] bg-[#12171e] px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-blue-400/50 hover:text-blue-400"
              >
                <Download size={17} />
                Resume
              </a>
            </div>

            {/* Social */}
            {/* Social */}
            <div className="mt-7 flex items-center gap-4">
              {/* GitHub */}
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

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-slate-500 transition hover:text-blue-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.37 4.28 5.46v6.29ZM5.34 7.4a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45H7.1V8.98H3.56v11.47ZM22.22 0H1.78C.8 0 0 .8 0 1.78v20.44C0 23.2.8 24 1.78 24h20.44c.98 0 1.78-.8 1.78-1.78V1.78C24 .8 23.2 0 22.22 0Z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:your-email@gmail.com"
                aria-label="Email"
                className="text-slate-500 transition hover:text-blue-400"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="lg:pl-4">
            <TerminalCard />
          </div>
        </div>

        {/* Small stats */}
        <div className="mt-16 grid grid-cols-2 gap-3 lg:grid-cols-4">
          <Stat value="3+" label="Full Stack Projects" />
          <Stat value="MERN" label="Primary Stack" />
          <Stat value="REST" label="API Development" />
          <Stat value="Open" label="To Opportunities" />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-xl border border-[#252d38] bg-[#12171e] p-5">
      <p className="text-2xl font-bold text-slate-100">{value}</p>

      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-slate-600">
        {label}
      </p>
    </div>
  );
}

export default Home;
