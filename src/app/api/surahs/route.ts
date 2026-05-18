import { getAllSurahs } from "@/services/surah.service";

export async function GET() {
  return Response.json(getAllSurahs());
}
