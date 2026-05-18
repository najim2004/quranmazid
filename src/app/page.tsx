import { redirect } from "next/navigation";
import { DEFAULT_SURAH_NUMBER } from "@/lib/constants";

export default function HomePage() {
  redirect(`/${DEFAULT_SURAH_NUMBER}`);
}
