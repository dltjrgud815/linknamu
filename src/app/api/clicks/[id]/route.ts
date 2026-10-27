import { getClicksCollection } from "@/lib/mongodb";
import { links } from "@/data/profile";

/** 해당 링크의 클릭 수를 1 늘리고, 늘어난 값을 반환 */
export async function POST(_request: Request, ctx: RouteContext<"/api/clicks/[id]">) {
  const { id } = await ctx.params;

  // 등록된 링크만 집계 (임의의 id로 문서가 쌓이는 것 방지)
  if (!links.some((l) => l.id === id)) {
    return Response.json({ error: "존재하지 않는 링크입니다." }, { status: 404 });
  }

  try {
    const clicks = await getClicksCollection();
    const doc = await clicks.findOneAndUpdate(
      { _id: id },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: "after" },
    );
    return Response.json({ id, count: doc?.count ?? 1 });
  } catch (error) {
    console.error(`[POST /api/clicks/${id}]`, error);
    return Response.json({ error: "클릭 수를 저장하지 못했습니다." }, { status: 500 });
  }
}
