export type RevelationType = "Meccan" | "Medinan";

export type SurahSummary = {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: RevelationType;
};

export type Ayah = {
  numberInSurah: number;
  arabic: string;
  translation: string;
};

export type SurahDetail = SurahSummary & {
  ayahs: Ayah[];
};
