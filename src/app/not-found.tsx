import Link from "next/link";
import { DEFAULT_SURAH_NUMBER } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="bg-primary-bg flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-heading-6 font-semibold">Page not found</h1>
      <p className="text-subtitle-color text-sm">
        The surah or page you are looking for does not exist.
      </p>
      <Link
        href={`/${DEFAULT_SURAH_NUMBER}`}
        className="bg-primary text-pure-color rounded-full px-5 py-2 text-sm font-medium"
      >
        Read Quran
      </Link>
    </div>
  );
}
