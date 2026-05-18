"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/icons/icon";
import { siteConfig } from "@/config/site.config";
import { cn } from "@/lib/utils";
import logo from "../../../../public/assets/icons/logo.svg";

const navLinks = [
  { href: "/", label: "Home", icon: "home" as const },
  {
    href: `/${siteConfig.defaultSurah}`,
    label: "Read Quran",
    icon: "read-quran" as const,
  },
  { href: "#", label: "Go to Ayah", icon: "go-to-ayah" as const },
  { href: "#", label: "Bookmark", icon: "bookmark-nav" as const },
  { href: "#", label: "Others", icon: "others" as const },
];

export function SideNav() {
  const pathname = usePathname();
  const surahActive = /^\/\d+/.test(pathname);

  return (
    <nav className={"sticky top-0 h-screen"}>
      <div className="flex h-full w-full max-laptop:items-center max-laptop:justify-center laptop:flex-col">
        <Link
          href="/"
          aria-label="Home"
          className="max-laptop:hidden laptop:py-3 flex justify-center"
        >
          {/* <Icon name="logo" size={36} /> */}
          <img src={logo} className="size-[36px]" alt="Logo" />
        </Link>

        <div className="tablet:gap-8 laptop:h-side-nav-inner laptop:flex-col laptop:justify-center laptop:gap-6 flex items-center justify-between gap-6">
          {navLinks.map((item, index) => {
            const active = index === 1 && surahActive;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(index === 0 && "max-laptop:hidden")}
              >
                <button
                  type="button"
                  aria-label={item.label}
                  className={"nav-icon-btn"}
                >
                  <Icon
                    name={item.icon}
                    className={cn(item.icon === "read-quran" && "size-[26px]")}
                  />
                </button>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
