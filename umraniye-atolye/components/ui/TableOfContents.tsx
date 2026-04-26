"use client";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

interface Props {
  sections: { id: string; label: string }[];
}

export function TableOfContents({ sections }: Props) {
  const active = useActiveSection(sections.map((s) => s.id));

  const onClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <aside className="hidden xl:block">
      <div className="sticky top-24">
        <h4 className="section-label mb-4">İÇİNDEKİLER</h4>
        <nav>
          <ul className="space-y-1.5 border-l border-border-light">
            {sections.map((s) => {
              const isActive = active === s.id;
              return (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    onClick={(e) => onClick(e, s.id)}
                    className={cn(
                      "relative block pl-4 py-1.5 text-sm transition-colors -ml-px border-l",
                      isActive
                        ? "text-blue-700 font-medium border-blue-600"
                        : "text-text-muted border-transparent hover:text-text-primary"
                    )}
                  >
                    {isActive && (
                      <span className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-600" />
                    )}
                    {s.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default TableOfContents;
