import { NextResponse } from "next/server";
import { getReviews } from "@/app/api/reviews/getReviews";

export async function POST(req: Request)
{
  const body = await req.json();
  const bookId = typeof body === "string" ? body : body?.bookId;

  if (!bookId || typeof bookId !== "string")
  {
    return NextResponse.json({ error: "Missing or invalid bookId" }, { status: 400 });
  }

  const reviews = await getReviews(bookId);
  return NextResponse.json(reviews);
}
