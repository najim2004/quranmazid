"use client";

import type { Ayah, SurahDetail } from "@/lib/types";
import { siteConfig } from "@/lib/site.config";
import { Icon } from "@/components/icons";

type AyahCardProps = {
  surah: SurahDetail;
  ayah: Ayah;
  arabicSize: number;
  translationSize: number;
};

function AyahIconButton({
  label,
  icon,
  size,
}: {
  label: string;
  icon: "play" | "tafsir" | "bookmark" | "more";
  size?: number;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className="ayah-icon-btn"
    >
      <Icon name={icon} size={size} className="text-icon-color" />
    </button>
  );
}

function AyahActions() {
  return (
    <div className="max-tablet:hidden flex flex-col items-center gap-2">
      <AyahIconButton label="Play ayah" icon="play" size={18} />
      <AyahIconButton label="Tafsir" icon="tafsir" size={22} />
      <AyahIconButton label="Bookmark ayah" icon="bookmark" size={16} />
      <AyahIconButton label="More actions" icon="more" />
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
        <div className="flex items-center gap-3">
          <div className="tablet:hidden">
            <button type="button" aria-label="More actions" className="ayah-icon-btn w-full">
              <Icon name="more" className="text-icon-color size-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="tablet:grid-cols-[auto_1fr] grid grid-cols-1 gap-7 pt-3">
        <AyahActions />

        <div>
          <p
            dir="rtl"
            lang="ar"
            className="font-arabic mb-4 text-right text-pure-color"
            style={{
              fontSize: `${arabicSize}px`,
              lineHeight: `${arabicSize * 2}px`,
            }}
          >
            {ayah.arabic}
          </p>

          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-subtitle text-subtitle-color uppercase">
                {siteConfig.translationLabel}
              </p>
              <p
                className="text-body text-pure-color"
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
