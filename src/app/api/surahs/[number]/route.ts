import { NextResponse } from "next/server";
import { MAX_SURAH_NUMBER } from "@/lib/constants";
import { getSurahByNumber } from "@/services/surah.service";

type RouteContext = {
  params: Promise<{ number: string }>;
};

export async function GET(_request: Request, { params }: RouteContext) {
  const { number: numberParam } = await params;
  const number = Number(numberParam);

  if (!Number.isInteger(number) || number < 1 || number > MAX_SURAH_NUMBER) {
    return NextResponse.json({ error: "Invalid surah number" }, { status: 400 });
  }

  const surah = await getSurahByNumber(number);

  if (!surah) {
    return NextResponse.json({ error: "Surah not found" }, { status: 404 });
  }

  return NextResponse.json(surah);
}
