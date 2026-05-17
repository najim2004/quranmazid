import { cn } from "@/lib/utils";
import { iconMap, type IconName } from "./icon-map";

type IconProps = {
  name: IconName;
  className?: string;
  size?: number;
};

export function Icon({ name, className, size }: IconProps) {
  const svg = iconMap[name];
  const sizedSvg =
    size != null
      ? svg.replace(/<svg/, `<svg width="${size}" height="${size}"`)
      : svg;

  return (
    <span
      className={cn("inline-flex shrink-0 [&_svg]:block", className)}
      aria-hidden
      dangerouslySetInnerHTML={{ __html: sizedSvg }}
    />
  );
}
