import { revalidateTag, revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

export async function POST(req: NextRequest)
{
    try
    {
        const { isValidSignature, body } = await parseBody<{ _type: string; }>(
            req, process.env.SANITY_REVALIDATE_SECRET
        );

        if (!isValidSignature)
        {
            return new Response("Invalid signature", { status: 401 });
        }
        if (!body?._type)
        {
            return new Response("Bad request", { status: 400 });
        }

        revalidateTag(body._type, { expire: 0 });

        if (body._type === "Author")
        {
            revalidatePath("/Authors");
        }
        if (body._type === "Series")
        {
            revalidatePath("/Series");
        }
        
        return NextResponse.json({

            status: 200,
            revalidate: true,
            now: Date.now(),
            type: body._type
        });
    } catch (err: any)
    {
        console.error(err);
        return new Response(err.message, { status: 500 });
    }
}