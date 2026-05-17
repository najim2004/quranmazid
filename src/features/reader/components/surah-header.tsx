import Image from "next/image";
import type { SurahDetail } from "@/features/reader/types";

type SurahHeaderProps = {
  surah: SurahDetail;
};

export function SurahHeader({ surah }: SurahHeaderProps) {
  const place = surah.revelationType === "Meccan" ? "Makkah" : "Madinah";
  const displayName =
    surah.number === 1 ? "Surah Al Fatihah" : `Surah ${surah.englishName}`;

  return (
    <div className="relative px-content pb-10 pt-8">
      <div className="relative mx-auto flex max-w-3xl items-center justify-center">
        <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 tablet:left-8">
          <Image
            src="/assets/images/makkah.avif"
            alt=""
            width={160}
            height={160}
            className="h-24 w-24 object-contain opacity-30 tablet:h-32 tablet:w-32"
            priority
          />
        </div>
        <div className="relative z-10 space-y-2 text-center">
          <h1 className="text-heading-6 tablet:text-heading-5 font-semibold text-pure-color">
            {displayName}
          </h1>
          <p className="text-subtitle text-subtitle-color tablet:text-base capitalize">
            Ayah-{surah.numberOfAyahs}, {place}
          </p>
        </div>
      </div>
    </div>
  );
}
