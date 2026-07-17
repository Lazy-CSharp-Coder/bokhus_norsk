import type { PageProps  } from "@/types/types";

export default async function DynamicBookPage({ searchParams }: PageProps)
{

    const params = await searchParams;
    const bookUid = params.message as string;
    const BOOK_QUERY = `*[_type == "Book" && _id == $bookUidFromParams] | order(bookInSeries asc)`;

    




}
