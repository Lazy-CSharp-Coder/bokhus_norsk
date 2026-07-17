import { client } from "@/sanity/client";
import type { PageProps } from "@/types/types";
import type { Book } from "@/types/booktypes";

export default async function DynamicBookPage({ searchParams }: PageProps)
{

    const params = await searchParams;
    const bookUid = params.message as string;
    const BOOK_QUERY = `*[_type == "Book" && _id == $bookUidFromParams][0]`;
       const AUTHORS_QUERY = `*[_type == "Author" &&  _id in $authorsIds]`;

    const bookToShow: Book = await client.fetch<Book>(BOOK_QUERY, { bookUidFromParams: bookUid });

    if (!bookToShow)
    {
        console.log("Error fetching : No books for series found.");
        return <div className="notFoundDatabase"      >BOOKS FOR SERIE NOT FOUND IN DATABASE</div>;

    }

    return(
        
    )

}
