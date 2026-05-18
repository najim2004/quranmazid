import Image from "next/image";
import { cn } from "@/lib/utils";
import { iconSrcMap, type IconName } from "./icon-map";

/** Multi-color SVGs must render as an image, not a CSS mask. */
const MULTICOLOR_ICONS = new Set<IconName>(["logo"]);

type IconProps = {
  name: IconName;
  className?: string;
  size?: number;
  width?: number;
  height?: number;
};

export function Icon({ name, className, size, width, height }: IconProps) {
  const src = iconSrcMap[name];
  if (!src) return null;

  const dimensionStyle =
    size != null
      ? { width: size, height: size }
      : width != null || height != null
        ? { width: width ?? height, height: height ?? width }
        : undefined;

  if (MULTICOLOR_ICONS.has(name)) {
    const w = size ?? width ?? 24;
    const h = size ?? height ?? width ?? 24;

    return (
      <Image
        src={src}
        alt=""
        aria-hidden
        width={w}
        height={h}
        className={cn("shrink-0", className)}
      />
    );
  }

  return (
    <span
      aria-hidden
      className={cn(
        "inline-block shrink-0 bg-current text-icon-color",
        !dimensionStyle && "size-6",
        className,
      )}
      style={{
        ...dimensionStyle,
        maskImage: `url("${src}")`,
        WebkitMaskImage: `url("${src}")`,
        maskSize: "contain",
        maskRepeat: "no-repeat",
        maskPosition: "center",
      }}
    />
  );
}

export type { IconName };
