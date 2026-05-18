"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { SurahSummary } from "@/lib/types";
import { Icon } from "@/components/icons";
import { cn } from "@/lib/utils";

type SurahPickerSidebarProps = {
  surahs: SurahSummary[];
};

const tabs = ["Surah", "Juz", "Page"] as const;

export function SurahPickerSidebar({ surahs }: SurahPickerSidebarProps) {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(0);
  const [query, setQuery] = useState("");

  const filtered = surahs.filter((surah) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      surah.englishName.toLowerCase().includes(q) ||
      surah.englishNameTranslation.toLowerCase().includes(q) ||
      surah.name.includes(q) ||
      surah.number.toString().includes(q)
    );
  });

  return (
    <aside className="w-full max-w-[333px] sticky-panel">
      <div className="border-border-color flex h-full w-full border-e">
        <div className="flex h-full w-full flex-col overflow-y-auto pt-6">
          <div className="border-secondary-bg bg-secondary-bg relative isolate flex min-h-10 items-center rounded-full border-4 ms-gap-start me-gap-end mb-4">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(index)}
                className={cn(
                  "text-subtitle-color-secondary z-10 h-full w-full cursor-pointer text-base",
                  activeTab === index && "text-pure-color font-semibold",
                )}
              >
                {tab}
              </button>
            ))}
            <div
              className="bg-primary-bg absolute h-full rounded-full transition-transform duration-300 ease-in-out"
              style={{
                width: `${100 / tabs.length}%`,
                transform: `translateX(${activeTab * 100}%)`,
              }}
            />
          </div>

          <div className="mb-4 ps-gap-start pe-gap-end">
            <div className="border-border-color bg-secondary-bg flex h-10 items-center gap-3 rounded-full border px-3 text-base">
              <Icon
                name="search-muted"
                size={21}
                className="text-subtitle-color shrink-0"
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Surah"
                aria-label="Search Surah"
                className="placeholder:text-subtitle-color/70 w-full bg-transparent font-light outline-none text-pure-color"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto pb-4">
            {filtered.map((surah) => {
              const href = `/${surah.number}`;
              const active = pathname === href;

              return (
                <div
                  key={surah.number}
                  className="block ps-gap-start pe-gap-end pb-2"
                >
                  <Link href={href}>
                    <div
                      className={cn(
                        "group/card border-border-color hover:bg-primary-7 tablet:gap-4 flex h-[76px] w-full min-w-[200px] cursor-pointer items-center justify-between gap-5 rounded-md border px-4 select-none transition-colors",
                        active && "active bg-primary-7",
                      )}
                    >
                      <div
                        className={cn(
                          "bg-secondary-bg group-hover/card:bg-primary flex size-8 min-h-8 min-w-8 rotate-45 items-center justify-center rounded-[6px]",
                          active && "bg-primary",
                        )}
                      >
                        <span
                          className={cn(
                            "text-subtitle text-subtitle-color -rotate-45 font-medium group-hover/card:text-primary-fg",
                            active && "text-primary-fg",
                          )}
                        >
                          {surah.number}
                        </span>
                      </div>
                      <div className="grow text-start laptop:w-full desktop:w-1/2 desktop:shrink-0 w-1/2">
                        <p
                          className={cn(
                            "text-title line-clamp-1 pr-3 font-medium text-pure-color break-all",
                            active && "text-primary",
                          )}
                        >
                          {surah.englishName}
                        </p>
                        <p className="text-subtitle text-subtitle-color-secondary line-clamp-1 font-normal break-all">
                          {surah.englishNameTranslation}
                        </p>
                      </div>
                      <span
                        dir="rtl"
                        className="font-calligraphy text-heading-5 text-subtitle-color text-right [unicode-bidi:isolate] laptop:hidden desktop:block block"
                      >
                        {surah.name.replace(/^سُورَةُ\s*/, "")}
                      </span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
}
