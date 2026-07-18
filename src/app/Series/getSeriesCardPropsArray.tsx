import type { Series, Author, SeriesCardProps, Book } from "@/types/booktypes";
import { client } from "@/sanity/client";
import { urlFor } from "@/functions/urlFor";
import { setRouteToGo } from "@/functions/setRouteToGo";

const AUTHORS_QUERY = `*[_type == "Author" && _id in $authorsIds]`;
const BOOK_QUERY = `*[_type == "Book" && seriesRef._ref == $serieID]`;

export async function getSeriesCardPropsArray(seriesArray: Series[]): Promise<SeriesCardProps[]>
{
    return Promise.all(

        seriesArray.map(async (item) =>
        {
            const authorsIds: string[] = item.authorUids ? item.authorUids.map((authorRef) => authorRef._ref) : [];
            const authors: Author[] = authorsIds.length > 0 ? await client.fetch<Author[]>(AUTHORS_QUERY, { authorsIds }) : [];

            if (authors.length < 1)
            {
                console.log("Error fetching : No author for series found.");
                
            }

            const books: Book[] = await client.fetch<Book[]>(BOOK_QUERY, { serieID: item._id });
            if (books.length < 1) 
            {
                console.log("Books not found");

            }
            return {
                authors: authors.map((author) => author.name),
                seriesSelected: item,
                imageUrl: urlFor(item.imageSeries, 800),
                routeToGo: setRouteToGo(books.length > 1 ? item : books[0])
     


            };

        })

    );
} 