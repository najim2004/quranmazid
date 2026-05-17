import { redirect } from "next/navigation";
import { siteConfig } from "@/config/site.config";

export default function HomePage() {
  redirect(`/${siteConfig.defaultSurah}`);
}
