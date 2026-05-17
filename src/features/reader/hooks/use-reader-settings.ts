"use client";

import { useState } from "react";

const DEFAULT_ARABIC_SIZE = 30;
const DEFAULT_TRANSLATION_SIZE = 17;

export function useReaderSettings() {
  const [arabicSize, setArabicSize] = useState(DEFAULT_ARABIC_SIZE);
  const [translationSize, setTranslationSize] = useState(DEFAULT_TRANSLATION_SIZE);

  return {
    arabicSize,
    setArabicSize,
    translationSize,
    setTranslationSize,
  };
}
