const ICON_BASE_PATH = "/assets/icons";

export const iconSrcMap = {
  "bookmark-nav": `${ICON_BASE_PATH}/bookmark-nav.svg`,
  bookmark: `${ICON_BASE_PATH}/bookmark.svg`,
  "chevron-down": `${ICON_BASE_PATH}/chevron-down.svg`,
  "chevron-left": `${ICON_BASE_PATH}/chevron-left.svg`,
  "chevron-right": `${ICON_BASE_PATH}/chevron-right.svg`,
  "font-settings": `${ICON_BASE_PATH}/font-settings.svg`,
  "go-to-ayah": `${ICON_BASE_PATH}/go-to-ayah.svg`,
  home: `${ICON_BASE_PATH}/home.svg`,
  logo: `${ICON_BASE_PATH}/logo.svg`,
  more: `${ICON_BASE_PATH}/more.svg`,
  others: `${ICON_BASE_PATH}/others.svg`,
  play: `${ICON_BASE_PATH}/play.svg`,
  "read-quran": `${ICON_BASE_PATH}/read-quran.svg`,
  "reading-settings": `${ICON_BASE_PATH}/reading-settings.svg`,
  "search-muted": `${ICON_BASE_PATH}/search-muted.svg`,
  search: `${ICON_BASE_PATH}/search.svg`,
  settings: `${ICON_BASE_PATH}/settings.svg`,
  "support-heart": `${ICON_BASE_PATH}/support-heart.svg`,
  tafsir: `${ICON_BASE_PATH}/tafsir.svg`,
  theme: `${ICON_BASE_PATH}/theme.svg`,
} as const;

export type IconName = keyof typeof iconSrcMap;
