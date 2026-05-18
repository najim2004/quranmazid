import Link from "next/link";
import { siteConfig } from "@/lib/site.config";
import { Icon } from "@/components/icons";
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
            href="/"
            className="flex items-center gap-2.5 max-tablet:hidden"
          >
            <div className="space-y-[2px] text-left select-none">
              <p className="text-dark font-poppins mt-[2px] text-xl leading-none font-bold">
                {siteConfig.name}
              </p>
              <p className="text-subtitle-color w-max text-[10px] tracking-tight">
                {siteConfig.tagline}
              </p>
            </div>
          </Link>
          <Link href="/" className="tablet:hidden">
            <p className="text-body tablet:hidden font-bold">{siteConfig.name}</p>
          </Link>
        </div>

        <div className="tablet:gap-6 flex items-center gap-4">
          <button
            type="button"
            className="icon-btn text-primary"
            aria-label="Search"
          >
            <Icon name="search" className="size-[18px] text-icon-color" />
          </button>
          <button
            type="button"
            className="icon-btn flex items-center gap-1 text-primary outline-none"
            aria-label="Theme"
          >
            <Icon name="theme" className="size-[18px]" />
          </button>
          <button
            type="button"
            className="icon-btn desktop:hidden text-primary"
            aria-label="Settings"
          >
            <Icon name="settings" className="size-[18px] text-icon-color" />
          </button>
          <a
            href={siteConfig.supportUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-fg flex h-[38px] min-w-[136px] items-center justify-center gap-2 rounded-full px-2 select-none max-laptop:hidden"
          >
            <span className="text-primary-fg text-base font-medium">
              Support Us
            </span>
            <Icon name="support-heart" className="size-[18px] text-icon-color" />
          </a>
        </div>
      </div>
    </nav>
  );
}
