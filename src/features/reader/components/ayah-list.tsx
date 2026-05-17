import Link from "next/link";
import { Icon } from "@/components/icons/icon";
import { AyahCard } from "@/features/reader/components/ayah-card";
import type { SurahDetail } from "@/features/reader/types";
import { siteConfig } from "@/config/site.config";
import { cn } from "@/lib/utils";

type AyahListProps = {
  surah: SurahDetail;
  arabicSize: number;
  translationSize: number;
};

export function AyahList({ surah, arabicSize, translationSize }: AyahListProps) {
  const surahNumber = surah.number;
  const hasPrevious = surahNumber > 1;
  const hasNext = surahNumber < siteConfig.maxSurahNumber;

  return (
    <div>
      {surah.ayahs.map((ayah) => (
        <AyahCard
          key={ayah.numberInSurah}
          surah={surah}
          ayah={ayah}
          arabicSize={arabicSize}
          translationSize={translationSize}
        />
      ))}

      <div className="px-content pt-12 pb-16 text-center">
        <nav
          aria-label="Surah navigation"
          className="border-border-color bg-secondary-bg mx-auto inline-flex rounded-full border px-4 py-2"
        >
          {hasPrevious ? (
            <Link
              href={`/${surahNumber - 1}`}
              className="text-subtitle text-subtitle-color tablet:text-base flex items-center gap-2 border-primary-7 border-r px-4 py-0.5 font-medium"
            >
              <Icon name="chevron-left" size={15} className="text-icon-color rotate-90" />
              Previous
            </Link>
          ) : (
            <span className="text-subtitle text-subtitle-color tablet:text-base pointer-events-none flex cursor-not-allowed items-center gap-2 border-primary-7 border-r px-4 py-0.5 font-medium opacity-50">
              <Icon name="chevron-left" size={15} className="text-icon-color rotate-90" />
              Previous
            </span>
          )}

          {hasNext ? (
            <Link
              href={`/${surahNumber + 1}`}
              className="text-subtitle text-subtitle-color tablet:text-base flex items-center gap-2 px-4 py-0.5 font-medium"
            >
              Next
              <Icon name="chevron-right" size={15} className="text-icon-color -rotate-90" />
            </Link>
          ) : (
            <span
              className={cn(
                "text-subtitle text-subtitle-color tablet:text-base flex items-center gap-2 px-4 py-0.5 font-medium",
                !hasNext && "pointer-events-none cursor-not-allowed opacity-50",
              )}
            >
              Next
              <Icon name="chevron-right" size={15} className="text-icon-color -rotate-90" />
            </span>
          )}
        </nav>
      </div>
    </div>
  );
}
