import type { Series, Author, SeriesCardProps, Book } from "@/types/booktypes";
import { client } from "@/sanity/client";
import { urlFor } from "@/functions/urlFor";
import { setRouteToGo } from "@/functions/setRouteToGo";


const AUTHORS_QUERY = `*[_type == "Author" && _id in $authorsIds]`;
const BOOK_QUERY = `*[_type == "Book" && seriesRef._ref == $serieID]`;

export async function getSeriesCardPropsArray(seriesArray: Series[]): Promise<SeriesCardProps[]>
{
    
  
        return await Promise.all(

     seriesArray.map(async (item) =>
        {
            let authors: Author[] = [];
                const authorsIds: string[] = item?.authorUids && Array.isArray(item.authorUids) ? item.authorUids.map((authorRef) => authorRef?._ref).filter((ref): ref is string  => typeof ref === "string" && ref.length > 0) : [];
                
                if(authorsIds.length > 0)
                try {
                  authors = await client.fetch<Author[]>(AUTHORS_QUERY, { authorsIds });
                }
                catch(error)
                {
                    console.error("Error fetching authors", error);
                    authors = [];
                }
            
                const authorsStrings : string[] = authors.length < 1 || !authors ? ["No author for serie found"] : authors.map((author) => author.name);
                let books :  Book[] = [];
                try {

                 books= await client.fetch<Book[]>(BOOK_QUERY, { serieID: item._id });
                }
                catch(error) {
                    console.error("Error fetching books : ", error);
                    books = [];
                }

                if (books.length < 1) 
                {
                    console.log("Books not found");
                }
                

                return {
                    authors: authorsStrings,
                    seriesSelected: item,
                    imageUrl: urlFor(item.imageSeries, 800),
                    routeToGo: setRouteToGo(books.length < 1 ? item : books[0]),
                    booksAvailable : books.length < 1 ? false: true
                };

            }


        ));
    

} 