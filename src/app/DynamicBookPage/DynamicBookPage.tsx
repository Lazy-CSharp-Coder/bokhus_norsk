import type { PageProps  } from "@/types/types";
import type { BookProps } from "@/types/booktypes";
export default async function DynamicAuthorPage({ searchParams }: PageProps)
{

    const params = await searchParams;
    const bookUid = params.message as string;



}
