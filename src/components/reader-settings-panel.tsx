"use client";

import { useState } from "react";
import { Icon } from "@/components/icons";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { siteConfig } from "@/lib/site.config";
import { cn } from "@/lib/utils";

type ReaderSettingsPanelProps = {
  arabicSize: number;
  onArabicSizeChange: (size: number) => void;
  translationSize: number;
  onTranslationSizeChange: (size: number) => void;
};

function SettingsSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <div className="space-y-2">
      <p className="text-title font-medium text-pure-color">{label}</p>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="sr-only"
          aria-label={label}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={() => {
            const index = options.indexOf(value);
            onChange(options[(index + 1) % options.length]);
          }}
          className="bg-secondary-bg flex min-h-[40px] w-full cursor-pointer items-center justify-between gap-2 rounded-sm px-4 py-2.5 text-base capitalize"
        >
          <span className="min-w-0 flex-1 truncate text-left">{value}</span>
          <Icon name="chevron-down" size={14} className="text-icon-color shrink-0 -rotate-90" />
        </button>
      </div>
    </div>
  );
}

function SettingsToggle({
  label,
  checked,
  onCheckedChange,
}: {
  label: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <p className="text-title font-medium text-pure-color">{label}</p>
      <Switch checked={checked} onCheckedChange={onCheckedChange} />
    </div>
  );
}

export function ReaderSettingsPanel({
  arabicSize,
  onArabicSizeChange,
  translationSize,
  onTranslationSizeChange,
}: ReaderSettingsPanelProps) {
  const [mode, setMode] = useState<"translation" | "reading">("translation");
  const [translation, setTranslation] = useState<string>(siteConfig.translationLabel);
  const [wordByWord, setWordByWord] = useState("Bengali");
  const [showByWords, setShowByWords] = useState(false);
  const [tajweed, setTajweed] = useState(false);

  return (
    <aside className="max-desktop:hidden sticky-panel">
      <div className="border-border-color flex h-full w-full border-s">
        <div className="relative flex w-full flex-col overflow-y-auto">
          <div className="desktop:pt-6 flex w-full flex-col overflow-hidden">
            <div className="border-secondary-bg bg-secondary-bg relative isolate ms-gap-start me-gap-end mb-4 flex min-h-10 items-center rounded-full border-4">
              {(["translation", "reading"] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setMode(tab)}
                  className={cn(
                    "text-subtitle-color-secondary z-10 h-full w-full cursor-pointer text-base capitalize",
                    mode === tab && "text-pure-color font-semibold",
                  )}
                >
                  {tab}
                </button>
              ))}
              <div
                className="bg-primary-bg absolute h-full rounded-full transition-transform duration-300 ease-in-out"
                style={{
                  width: "50%",
                  transform: mode === "translation" ? "translateX(0%)" : "translateX(100%)",
                }}
              />
            </div>

            <Collapsible defaultOpen className="px-gap">
              <CollapsibleTrigger className="group flex w-full items-center justify-between py-3 [&[data-panel-open]>svg:last-child]:rotate-180">
                <div className="flex items-center gap-4">
                  <Icon
                    name="reading-settings"
                    size={22}
                    className="text-subtitle-color group-data-[panel-open]:hidden"
                  />
                  <p className="text-title group-data-[panel-open]:text-primary group-data-[panel-open]:font-bold">
                    Reading Settings
                  </p>
                </div>
                <Icon name="chevron-down" size={14} className="text-icon-color transition-transform" />
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-6 pb-4 pt-2">
                <SettingsSelect
                  label="Translations"
                  value={translation}
                  options={[siteConfig.translationLabel, "Dr. Mustafa Khattab"]}
                  onChange={setTranslation}
                />
                <SettingsSelect
                  label="Word-by-word translations"
                  value={wordByWord}
                  options={["Bengali", "English", "Urdu", "None"]}
                  onChange={setWordByWord}
                />
                <SettingsToggle
                  label="Show by words"
                  checked={showByWords}
                  onCheckedChange={setShowByWords}
                />
                <SettingsToggle label="Tajweed" checked={tajweed} onCheckedChange={setTajweed} />
              </CollapsibleContent>
            </Collapsible>

            <Collapsible defaultOpen className="px-gap">
              <CollapsibleTrigger className="group flex w-full items-center justify-between py-3 [&[data-panel-open]>svg:last-child]:rotate-180">
                <div className="flex items-center gap-4">
                  <Icon
                    name="font-settings"
                    size={19}
                    className="text-subtitle-color group-data-[panel-open]:hidden"
                  />
                  <p className="text-title group-data-[panel-open]:text-primary group-data-[panel-open]:font-bold">
                    Font Settings
                  </p>
                </div>
                <Icon name="chevron-down" size={14} className="text-icon-color transition-transform" />
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-8 pb-4 pt-3">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-title font-medium">Arabic Font Size</p>
                    <p className="text-subtitle text-primary font-medium">{arabicSize}</p>
                  </div>
                  <Slider
                    min={16}
                    max={48}
                    step={1}
                    value={[arabicSize]}
                    onValueChange={(values) => {
                      const next = Array.isArray(values) ? values[0] : values;
                      if (typeof next === "number") onArabicSizeChange(next);
                    }}
                    aria-label="Arabic Font Size"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-title font-medium">Translation Font Size</p>
                    <p className="text-subtitle text-primary font-medium">{translationSize}</p>
                  </div>
                  <Slider
                    min={12}
                    max={24}
                    step={1}
                    value={[translationSize]}
                    onValueChange={(values) => {
                      const next = Array.isArray(values) ? values[0] : values;
                      if (typeof next === "number") onTranslationSizeChange(next);
                    }}
                    aria-label="Translation Font Size"
                  />
                </div>

                <div className="space-y-2">
                  <p className="text-title font-medium">Arabic Font Face</p>
                  <button
                    type="button"
                    className="bg-secondary-bg flex min-h-[40px] w-full cursor-pointer items-center justify-between gap-2 rounded-sm px-4 py-2.5 text-base capitalize"
                  >
                    <span className="min-w-0 flex-1 truncate text-left">KFGQ</span>
                    <Icon name="chevron-down" size={14} className="text-icon-color shrink-0 -rotate-90" />
                  </button>
                </div>
              </CollapsibleContent>
            </Collapsible>

            <div className="mt-auto px-gap pb-6 pt-4">
              <div className="border-primary-7 bg-primary-10 relative isolate overflow-hidden rounded-md border px-3 pt-3.5 pb-3">
                <div className="space-y-2">
                  <p className="text-body font-bold text-pure-color">
                    Help spread the knowledge of Islam
                  </p>
                  <p className="text-subtitle text-subtitle-color-secondary relative z-20">
                    Your regular support helps us reach our religious brothers and sisters with the
                    message of Islam. Join our mission and be part of the big change.
                  </p>
                  <a
                    href={siteConfig.supportUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-primary-fg mt-3 flex h-10 w-full items-center justify-center rounded-sm text-[14px] font-semibold"
                  >
                    Support Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
