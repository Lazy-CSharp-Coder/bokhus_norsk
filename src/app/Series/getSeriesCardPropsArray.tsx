import type { Series, Author, SeriesCardProps, Book } from "@/types/booktypes";
import { client } from "@/sanity/client";
import { urlFor } from "@/functions/urlFor";
import { setRouteToGo } from "@/functions/setRouteToGo";
import { ErrorBokhus } from "../ErrorBokhus";
import { success } from "zod/v4-mini";

const AUTHORS_QUERY = `*[_type == "Author" && _id in $authorsIds]`;
const BOOK_QUERY = `*[_type == "Book" && seriesRef._ref == $serieID]`;

export async function getSeriesCardPropsArray(seriesArray: Series[]): Promise<SeriesCardProps[]>
{
  return await Promise.all(

     seriesArray.map(async (item) =>
        {
                const authorsIds: string[] = item.authorUids ? item.authorUids.map((authorRef) => authorRef._ref) : [];
                let authors: Author[] = authorsIds.length > 0 ? await client.fetch<Author[]>(AUTHORS_QUERY, { authorsIds }) : [];
                const authorsStrings : string[] = authors.length < 1 ? ["No author for serie found"] : authors.map((author) => author.name);


                const books: Book[] = await client.fetch<Book[]>(BOOK_QUERY, { serieID: item._id });
                if (books.length < 1) 
                {
                    console.log("Books not found");
                }
     

                return {
                    authors: authorsStrings,
                    seriesSelected: item,
                    imageUrl: urlFor(item.imageSeries, 800),
                    routeToGo: setRouteToGo(books.length > 1 ? item : books[0]),
                    booksAvailable : books.length < 1 ? false: true
                };

            }


        ));
           
    
} 