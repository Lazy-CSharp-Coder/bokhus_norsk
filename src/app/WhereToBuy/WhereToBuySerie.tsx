import { Series, Author, Book } from "@/types/booktypes";
import { client } from "@/sanity/client";

interface WhereToBuySeriesProps 
{
  serieSelected: Series,

}

export async function WhereToBuySerie({ serieSelected }: WhereToBuySeriesProps)
{
  // fetch authors and books here.
    const AUTHORS_QUERY = `*[_type == "Author" &&  _id in $authorsUids]`;
    const BOOK_QUERY = `*[_type == "Book" && _id in $bookUids[]._ref] | order(bookInSeries asc)`;
      const authorsUidsArray : string[] = serieSelected.authorUids ? serieSelected.authorUids.map((authorRef) => authorRef._ref) : [];

  const authors: Author[] = await client.fetch<Author[]>(AUTHORS_QUERY, { authorsUids: authorsUidsArray });
   if (authors.length < 1)
   {
      console.log("Error fetching : No author for series found.");
      return <h2>Author not found in database</h2>;
      return;
   }
   // console.log(authors);
   const bookList: Book[] = await client.fetch<Book[]>(BOOK_QUERY, { bookUids: serieSelected.bookUids });
   if (bookList.length < 1)
   {

      console.log("Error fetching : No books for series found.");
      return <h2>Books for series not found in database</h2>;

   }
  return (
    <article className="whereToBuySerieArticle">
      <div className="whereToBuySerieHeadingDiv">
{serieSelected.seriesName}
      </div>

      <ul className="whereToBuyBooksList">
      {bookList.map((item, index)=> 
      <li key={item._id + "whereToBuy"} className="whereToBuyBookListItem">{item.bookTitle}</li>)}


      </ul>

    </article>

  );
}
