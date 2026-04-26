import * as Icons from "lucide-react";
import type { ComponentType, SVGProps } from "react";

type IconName = keyof typeof Icons;

interface Props extends SVGProps<SVGSVGElement> {
  name: string;
  className?: string;
}

export function Icon({ name, className, ...rest }: Props) {
  const Cmp = (Icons as unknown as Record<string, ComponentType<SVGProps<SVGSVGElement>>>)[
    name as IconName
  ];
  if (!Cmp) return null;
  return <Cmp className={className} {...rest} />;
}

export default Icon;
