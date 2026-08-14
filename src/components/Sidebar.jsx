import {
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Home,
  Mail,
  Menu,
  UserRound,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const navigation = [
  {
    label: "Home",
    href: "#home",
    icon: Home,
  },
  {
    label: "Projects",
    href: "#projects",
    icon: Code2,
  },
  {
    label: "Skills",
    href: "#skills",
    icon: BriefcaseBusiness,
  },
  {
    label: "Education",
    href: "#education",
    icon: GraduationCap,
  },
  {
    label: "Certifications",
    href: "#certifications",
    icon: UserRound,
  },
  {
    label: "Contact",
    href: "#contact",
    icon: Mail,
  },
];

function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.href.substring(1)))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Mobile top bar */}
      <header className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between border-b border-[#252d38] bg-[#0f141a]/95 px-5 backdrop-blur md:hidden">
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500 text-sm font-bold text-slate-950">
            MK
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-100">Murli Kumar</p>

            <p className="font-mono text-[10px] text-slate-500">
              full_stack.dev
            </p>
          </div>
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg border border-[#252d38] p-2 text-slate-300"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Desktop sidebar */}
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 border-r border-[#252d38] bg-[#10151b] md:block">
        <SidebarContent activeSection={activeSection} onNavigate={() => {}} />
      </aside>

      {/* Mobile navigation */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#0b0f14] pt-16 md:hidden">
          <SidebarContent
            activeSection={activeSection}
            onNavigate={() => setMobileOpen(false)}
          />
        </div>
      )}
    </>
  );
}

function SidebarContent({ activeSection, onNavigate }) {
  return (
    <div className="flex h-full flex-col px-5 py-6">
      {/* Profile */}
      <a
        href="#home"
        onClick={onNavigate}
        className="mb-10 flex items-center gap-3"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500 font-bold text-slate-950">
          MK
        </div>

        <div>
          <p className="font-semibold text-slate-100">Murli Kumar</p>

          <p className="font-mono text-xs text-slate-500">full_stack.dev</p>
        </div>
      </a>

      {/* Navigation */}
      <div>
        <p className="mb-4 px-3 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">
          Navigate
        </p>

        <nav className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={onNavigate}
                className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all duration-200 ${
                  isActive
                    ? "bg-[#181e26] text-blue-400"
                    : "text-slate-400 hover:bg-[#181e26] hover:text-blue-400"
                }`}
              >
                <Icon
                  size={17}
                  strokeWidth={1.8}
                  className="transition-transform group-hover:scale-105"
                />

                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>
      </div>

      {/* Bottom */}
      <div className="mt-auto border-t border-[#252d38] pt-5">
        <p className="px-3 font-mono text-[10px] text-slate-600">theme</p>

        <div className="mt-3 flex items-center justify-between rounded-lg border border-[#252d38] bg-[#151a21] px-3 py-2">
          <span className="font-mono text-xs text-slate-500">dark / blue</span>

          <div className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.7)]" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
