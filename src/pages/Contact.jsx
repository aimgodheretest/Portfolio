import { Mail, MapPin, Phone } from "lucide-react";

const email = "murlikumar07@gmail.com";

function Contact() {
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

  return (
    <section
      id="contact"
      className="border-t border-[#1d252f] px-5 py-24 sm:px-8 md:px-12 lg:px-16 xl:px-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400">
            Say Hello
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
            Contact
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            Open to opportunities in full-stack and software development. Feel
            free to reach out through any of the channels below.
          </p>
        </div>

        {/* Location */}
        <div className="mb-5 flex items-center gap-3 rounded-xl border border-[#252d38] bg-[#12171e] px-5 py-4">
          <MapPin size={17} className="text-blue-400" />

          <p className="font-mono text-xs text-slate-400">
            Based in Mumbai, India · Open to remote & onsite
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Email */}
          <ContactCard
            icon={<Mail size={17} />}
            label="Email"
            value={email}
            href={gmailUrl}
          />

          {/* Phone */}
          <ContactCard
            icon={<Phone size={17} />}
            label="Phone"
            value="+91 8452916764"
            href="tel:+918452916764"
          />

          {/* GitHub */}
          <ContactCard
            icon={<GithubIcon />}
            label="GitHub"
            value="aimgodheretest"
            href="https://github.com/aimgodheretest"
          />

          {/* LinkedIn */}
          <ContactCard
            icon={<LinkedinIcon />}
            label="LinkedIn"
            value="Murli Kumar"
            href="https://www.linkedin.com/in/murli-kumar/"
          />
        </div>

        {/* CTA */}
        <div className="mt-5 rounded-xl border border-[#252d38] bg-[#151b23] p-8 text-center">
          <h3 className="text-lg font-semibold text-slate-100">
            Ready to start a conversation?
          </h3>

          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
            The fastest way to reach me is through email. I'm always happy to
            discuss opportunities, projects, or collaborations.
          </p>

          <a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-blue-400"
          >
            <Mail size={16} />
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon, label, value, href }) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-4 rounded-xl border border-[#252d38] bg-[#12171e] p-5 transition-all duration-300 hover:border-blue-400/40 hover:bg-[#151b23]"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#29313c] bg-[#171d25] text-blue-400 transition-colors group-hover:border-blue-400/40">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="font-mono text-[9px] uppercase tracking-widest text-slate-600">
          {label}
        </p>

        <p className="mt-1 truncate text-sm font-medium text-slate-300 transition-colors group-hover:text-blue-400">
          {value}
        </p>
      </div>
    </a>
  );
}

/* GitHub brand icon */
function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-[17px] w-[17px]"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.16c-3.2.7-3.88-1.36-3.88-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.95.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.25 5.68.41.35.78 1.04.78 2.1v3.11c0 .31.21.68.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

/* LinkedIn brand icon */
function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-[17px] w-[17px]"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.37 4.28 5.46v6.29ZM5.34 7.4a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45H7.1V8.98H3.56v11.47ZM22.22 0H1.78C.8 0 0 .8 0 1.78v20.44C0 23.2.8 24 1.78 24h20.44C23.2 24 24 23.2 23.2 24 24 23.2 24 22.22V1.78C24 .8 23.2 0 22.22 0Z" />
    </svg>
  );
}

export default Contact;
