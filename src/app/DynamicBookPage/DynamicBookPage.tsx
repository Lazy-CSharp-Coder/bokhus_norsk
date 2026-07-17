import type { PageProps  } from "@/types/types";

export default async function DynamicAuthorPage({ searchParams }: PageProps)
{

    const params = await searchParams;
    const bookUid = params.message as string;



}
