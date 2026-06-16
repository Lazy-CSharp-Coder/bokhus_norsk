// import { createClient } from "next-sanity";
// import { NextResponse } from "next/server";
// import { client } from "@/sanity/client";
// import type { Review } from "@/types/reviewtypes";

// export async function POST(request : Request)
// {
//     const body : fetchReviewRequest = await request.json();


//     const { bookId} = body

//     try  {
//         C
//         const reviewArray: Review[] = await client.fetch<Review[]>(`*[_type == "Review" && bookRef._ref == $bookId]`, { bookId: bookId });
//       return NextResponse.json(reviewArray, { status: 200});
//     }
//     catch  (error)
//     {
//         return NextResponse.json({error : "Failed to fetch reviews"}, { status : 500});
//     }
// }