import Image from "next/image";
import type { SurahDetail } from "@/lib/types";

type SurahHeaderProps = {
  surah: SurahDetail;
};

export function SurahHeader({ surah }: SurahHeaderProps) {
  const place = surah.revelationType === "Meccan" ? "Makkah" : "Madinah";
  const displayName =
    surah.number === 1 ? "Surah Al Fatihah" : `Surah ${surah.englishName}`;

  return (
    <div className="max-tablet:gap-y-6 tablet:grid-cols-3 grid grid-cols-1 items-center px-content py-5">
      <div className="image-in-dark max-tablet:hidden w-[140px]">
        <Image
          src="/assets/images/makkah.avif"
          alt="makkah"
          width={140}
          height={95}
          priority
          className="h-auto w-[140px]"
        />
      </div>
      <div className="space-y-2 text-center">
        <h1 className="text-heading-6 tablet:text-heading-5 font-semibold">
          {displayName}
        </h1>
        <p className="text-subtitle text-subtitle-color tablet:text-base capitalize">
          Ayah-{surah.numberOfAyahs}, {place}
        </p>
      </div>
    </div>
  );
}
