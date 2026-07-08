import type { Series, Author, Book } from "@/types/booktypes";
import { WhereToBuySeriesProps } from "./WhereToBuyTypes";
import { client } from "@/sanity/client";

const AUTHORS_QUERY = `*[_type == "Author" &&  _id in $authorsUids]`;
const BOOK_QUERY = `*[_type == "Book" && _id in $bookUids[]._ref] | order(bookInSeries asc)`;

export function getWhereToBuyPropsArray(serieArray: Series[]): Promise<WhereToBuySeriesProps[]>
{
  return Promise.all(
    // fetch authors and books here.
    serieArray.map(async (item) =>
    {
      const authorsUidsArray: string[] = item.authorUids ? item.authorUids.map((authorRef) => authorRef._ref) : [];
      const authors: Author[] = authorsUidsArray.length > 0 ? await client.fetch<Author[]>(AUTHORS_QUERY, { authorsUids: authorsUidsArray }) : [];
      if (authors.length < 1)
      {
        console.log("Error fetching : No author for serie found");
      }
      const bookList: Book[] = await client.fetch<Book[]>(BOOK_QUERY, { bookUids: item.bookUids });
      if (bookList.length < 1)
      {
        console.log("Error fetching : No books for serie found");

      }
      return {
        serieSelected: item,
        authorsStrArray: authors.map((item) => item.name),
        bookList: bookList,

      }
    }));
  
}