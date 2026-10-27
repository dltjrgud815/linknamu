import { getClicksCollection } from "@/lib/mongodb";
import { links } from "@/data/profile";

/** 모든 링크의 현재 클릭 수를 { [링크 id]: 횟수 } 형태로 한 번에 반환 */
export async function GET() {
  try {
    const clicks = await getClicksCollection();
    const docs = await clicks.find({ _id: { $in: links.map((l) => l.id) } }).toArray();

    const counts: Record<string, number> = Object.fromEntries(links.map((l) => [l.id, 0]));
    for (const doc of docs) counts[doc._id] = doc.count;

    return Response.json(counts, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    console.error("[GET /api/clicks]", error);
    return Response.json({ error: "클릭 수를 불러오지 못했습니다." }, { status: 500 });
  }
}
