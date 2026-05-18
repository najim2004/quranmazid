import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ReaderView } from "@/components/reader-view";
import { MAX_SURAH_NUMBER } from "@/lib/constants";
import { getAllSurahs, getSurahByNumber } from "@/services/surah.service";

type SurahPageProps = {
  params: Promise<{ surahNumber: string }>;
};

export async function generateMetadata({
  params,
}: SurahPageProps): Promise<Metadata> {
  const { surahNumber } = await params;
  const number = Number(surahNumber);
  const surah = await getSurahByNumber(number);

  if (!surah) {
    return { title: "Surah not found" };
  }

  const title =
    surah.number === 1
      ? "Surah Al Fatiha (01) - Arabic, English Translation & Recitation"
      : `Surah ${surah.englishName} (${String(surah.number).padStart(2, "0")})`;

  return {
    title,
    description: `Read Surah ${surah.englishName} with English translation, ayah by ayah.`,
  };
}

export default async function SurahPage({ params }: SurahPageProps) {
  const { surahNumber } = await params;
  const number = Number(surahNumber);

  if (!Number.isInteger(number) || number < 1 || number > MAX_SURAH_NUMBER) {
    notFound();
  }

  const [surah, surahs] = await Promise.all([
    getSurahByNumber(number),
    Promise.resolve(getAllSurahs()),
  ]);

  if (!surah) {
    notFound();
  }

  return <ReaderView surah={surah} surahs={surahs} />;
}
