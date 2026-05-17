import Link from "next/link";
import { Icon } from "@/components/icons/icon";
import { siteConfig } from "@/config/site.config";
import { cn } from "@/lib/utils";

export function TopNav() {
  return (
    <nav
      className={cn(
        "border-b-border-color bg-primary-bg fixed top-0 isolate z-2 flex h-top-nav w-full items-center justify-center border-b",
        "laptop:top-nav-w laptop:ltr:right-0",
      )}
    >
      <div className="tablet:px-6 flex h-full w-full items-center justify-between px-4">
        <div className="flex items-center gap-2.5">
          <Link
            href={`/${siteConfig.defaultSurah}`}
            className="flex items-center gap-2.5 max-tablet:hidden"
          >
            <Icon name="logo" size={36} className="shrink-0" />
            <div className="space-y-[2px] text-left select-none">
              <p className="font-[family-name:var(--font-poppins)] mt-[2px] text-xl leading-none font-bold text-pure-color max-sm:text-base">
                {siteConfig.name}
              </p>
              <p className="text-subtitle-color w-max text-[10px] tracking-tight">
                {siteConfig.tagline}
              </p>
            </div>
          </Link>
        </div>

        <div className="tablet:gap-6 flex items-center gap-4">
          <button type="button" aria-label="Search" className="icon-btn text-primary">
            <Icon name="search" size={21} />
          </button>
          <button type="button" aria-label="Toggle theme" className="icon-btn">
            <Icon name="theme" />
          </button>
          <a
            href={siteConfig.supportUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-fg max-laptop:hidden flex h-[38px] min-w-[136px] items-center justify-center gap-2 rounded-full px-2 select-none"
          >
            <span className="text-base font-medium">Support Us</span>
            <Icon name="support-heart" size={19} />
          </a>
        </div>
      </div>
    </nav>
  );
}
