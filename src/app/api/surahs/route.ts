import { NextResponse } from "next/server";
import { getAllSurahs } from "@/lib/repositories/surah.repository";

export async function GET() {
  return NextResponse.json(getAllSurahs());
}
