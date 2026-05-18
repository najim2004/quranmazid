"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site.config";
import { Icon } from "@/components/icons";
import { cn } from "@/lib/utils";

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

  return (
    <nav className={"sticky top-0 h-screen w-full bg-accent max-w-[60px] py-3"}>
      <div className="flex h-full w-full flex-col items-center">
        <Link
          href="/"
          aria-label="Home"
          className="flex justify-center bg-primary items-center size-9 rounded-sm"
        >
          <Icon name="logo" size={35} className="size-8" />
        </Link>

        <div className="flex-1 flex flex-col items-center justify-center gap-6">
          {navLinks.map((item, index) => {

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(index === 0 && "max-laptop:hidden")}
              >
                <button type="button" aria-label={item.label} className={"nav-icon-btn"}>
                  <Icon
                    name={item.icon}
                    size={22}
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
