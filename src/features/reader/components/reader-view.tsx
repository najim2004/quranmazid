"use client";

import { AyahList } from "@/features/reader/components/ayah-list";
import { ReaderSettingsPanel } from "@/features/reader/components/reader-settings-panel";
import { SurahHeader } from "@/features/reader/components/surah-header";
import { useReaderSettings } from "@/features/reader/hooks/use-reader-settings";
import type { SurahDetail } from "@/features/reader/types";

type ReaderViewProps = {
  surah: SurahDetail;
};

export function ReaderView({ surah }: ReaderViewProps) {
  const { arabicSize, setArabicSize, translationSize, setTranslationSize } =
    useReaderSettings();

  return (
    <>
      <main className="reader-main mt-top-nav mb-bottom-bar min-w-0 bg-primary-bg">
        <section className="[--padding-x:15px] tablet:[--padding-x:24px] desktop:[--padding-x:36px] mx-auto w-full">
          <SurahHeader surah={surah} />
          <AyahList
            surah={surah}
            arabicSize={arabicSize}
            translationSize={translationSize}
          />
        </section>
      </main>

      <ReaderSettingsPanel
        arabicSize={arabicSize}
        onArabicSizeChange={setArabicSize}
        translationSize={translationSize}
        onTranslationSizeChange={setTranslationSize}
      />
    </>
  );
}
