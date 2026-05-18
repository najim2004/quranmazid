import surahsList from "@/data/surahs-list.json";
import type { SurahDetail, SurahSummary } from "@/lib/types";

export function getAllSurahs(): SurahSummary[] {
  return surahsList as SurahSummary[];
}

export async function getSurahByNumber(
  number: number,
): Promise<SurahDetail | null> {
  const summary = getAllSurahs().find((s) => s.number === number);
  if (!summary) return null;

  try {
    const detail = (await import(`@/data/surahs/${number}.json`))
      .default as SurahDetail;
    return detail;
  } catch {
    return {
      ...summary,
      ayahs: [
        {
          numberInSurah: 1,
          arabic: "—",
          translation:
            "Demo data for this surah is not available yet. Add src/data/surahs/{number}.json to include it.",
        },
      ],
    };
  }
}
