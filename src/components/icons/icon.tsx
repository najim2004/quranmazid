import { iconComponentMap, type IconName } from "./index";

type IconProps = {
  name: IconName;
  className?: string;
  size?: number | string;
};

export function Icon({ name, className, size }: IconProps) {
  const IconComponent = iconComponentMap[name];
  if (!IconComponent) return null;

  return <IconComponent className={className} size={size} />;
}
export type { IconName };
