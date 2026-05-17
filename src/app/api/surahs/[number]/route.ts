import { NextResponse } from "next/server";
import { getSurahByNumber } from "@/lib/repositories/surah.repository";

type RouteContext = {
  params: Promise<{ number: string }>;
};

export async function GET(_request: Request, context: RouteContext) {
  const { number } = await context.params;
  const surahNumber = Number(number);

  if (!Number.isInteger(surahNumber) || surahNumber < 1 || surahNumber > 114) {
    return NextResponse.json({ error: "Invalid surah number" }, { status: 400 });
  }

  const surah = await getSurahByNumber(surahNumber);
  if (!surah) {
    return NextResponse.json({ error: "Surah not found" }, { status: 404 });
  }

  return NextResponse.json(surah);
}
