"use client";

import { Icon } from "@/components/icons/icon";
import { siteConfig } from "@/config/site.config";
import type { Ayah, SurahDetail } from "@/features/reader/types";

type AyahCardProps = {
  surah: SurahDetail;
  ayah: Ayah;
  arabicSize: number;
  translationSize: number;
};

function AyahActions() {
  return (
    <div className="max-tablet:hidden flex flex-col items-center gap-2 pt-1">
      <button
        type="button"
        aria-label="Play ayah"
        className="icon-btn bg-transparent hover:bg-primary-7"
      >
        <Icon name="play" size={18} />
      </button>
      <button
        type="button"
        aria-label="Tafsir"
        className="icon-btn bg-transparent hover:bg-primary-7"
      >
        <Icon name="tafsir" size={22} />
      </button>
      <button
        type="button"
        aria-label="Bookmark ayah"
        className="icon-btn bg-transparent hover:bg-primary-7"
      >
        <Icon name="bookmark" size={16} />
      </button>
      <button
        type="button"
        aria-label="More actions"
        className="icon-btn bg-transparent hover:bg-primary-7"
      >
        <Icon name="more" />
      </button>
    </div>
  );
}

export function AyahCard({ surah, ayah, arabicSize, translationSize }: AyahCardProps) {
  return (
    <article
      id={`ayah-card-${surah.number}:${ayah.numberInSurah}`}
      className="border-border-color relative overflow-hidden border-b py-6 transition-colors duration-200 px-content"
    >
      <div className="flex items-center justify-between">
        <p className="text-title text-primary tablet:pl-2 tablet:text-body font-semibold">
          {surah.number}:{ayah.numberInSurah}
        </p>
      </div>

      <div className="tablet:grid-cols-[auto_1fr] grid grid-cols-1 gap-7 pt-3">
        <AyahActions />

        <div className="flex min-w-0 flex-col gap-4 tablet:flex-row-reverse tablet:items-start tablet:justify-between tablet:gap-10">
          <p
            dir="rtl"
            lang="ar"
            className="font-kfgq text-right text-pure-color tablet:flex-1"
            style={{
              fontSize: `${arabicSize}px`,
              lineHeight: `${arabicSize * 2}px`,
            }}
          >
            {ayah.arabic}
          </p>

          <div className="space-y-4 tablet:max-w-md tablet:shrink-0 tablet:pt-1">
            <div className="space-y-2">
              <p className="text-subtitle text-subtitle-color uppercase tracking-wide">
                {siteConfig.translationLabel}
              </p>
              <p
                className="text-body text-pure-color leading-relaxed"
                style={{ fontSize: `${translationSize}px` }}
              >
                {ayah.translation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
