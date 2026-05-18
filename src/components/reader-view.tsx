"use client";

import { AyahList } from "@/components/ayah-list";
import { ReaderSettingsPanel } from "@/components/reader-settings-panel";
import { SideNav } from "@/components/side-nav";
import { SurahHeader } from "@/components/surah-header";
import { SurahPickerSidebar } from "@/components/surah-picker-sidebar";
import { TopNav } from "@/components/top-nav";
import { useReaderSettings } from "@/components/use-reader-settings";
import type { SurahDetail, SurahSummary } from "@/lib/types";

type ReaderViewProps = {
  surah: SurahDetail;
  surahs: SurahSummary[];
};

export function ReaderView({ surah, surahs }: ReaderViewProps) {
  const {
    arabicSize,
    setArabicSize,
    translationSize,
    setTranslationSize,
  } = useReaderSettings();

  return (
    <div className="relative flex min-h-full w-full">
      <SideNav />
      <div className="laptop:ltr:pl-side-nav flex min-h-fs min-w-0 flex-1 flex-col bg-primary-bg text-pure-color w-full">
        <TopNav />
        <div className="reader-layout-grid flex-1 w-full">
          <SurahPickerSidebar surahs={surahs} />
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
        </div>
      </div>
    </div>
  );
}
