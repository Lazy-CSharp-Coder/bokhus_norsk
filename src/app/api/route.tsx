import { NextResponse } from "next/server";
import { getReviews } from "@/components/books/getReviews";

export async function POST(req: Request)
{
    const body = await req.json();
    const reviews = await getReviews(body);
    return NextResponse.json(reviews);
}