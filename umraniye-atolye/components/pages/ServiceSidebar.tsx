import { WORKSHOP } from "@/lib/constants";
import { Sidebar } from "@/components/ui/Sidebar";
import { Icon } from "@/components/ui/Icon";

export function ServiceSidebar() {
  const links = [
    {
      label: "Tüm Hizmetler",
      href: "/hizmetler",
    },
    ...WORKSHOP.services
      .filter((s) => s.slug)
      .map((s) => ({
        label: s.title,
        href: `/hizmetler/${s.slug}`,
        icon: <Icon name={s.icon} className="w-4 h-4" />,
        badge: s.badgeVariant === "blue" ? "B2B" : undefined,
      })),
  ];
  return <Sidebar heading="HİZMETLER" links={links} />;
}

export default ServiceSidebar;
