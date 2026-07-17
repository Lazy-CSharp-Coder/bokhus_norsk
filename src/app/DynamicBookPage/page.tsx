import { client } from "@/sanity/client";
import type { PageProps } from "@/types/types";
import type { Author, Book } from "@/types/booktypes";
import { ErrorPage } from "@/components/common/ErrorPage";
import { SingleBookCard } from "./components/SingleBookCard";

export default async function DynamicBookPage({ searchParams }: PageProps)
{

    const params = await searchParams;
    // const bookUid = params.message as string;
    const bookUid = "779ccbb4-8d96-4c30-aee9-65a54403e014";
    const BOOK_QUERY = `*[_type == "Book" && _id == $bookUidFromParams][0]`;
    const AUTHORS_QUERY = `*[_type == "Author" &&  _id in $authorsIds]`;

    const bookToShow: Book = await client.fetch<Book>(BOOK_QUERY, { bookUidFromParams: bookUid });

    if (!bookToShow)
    {
        return (
            <ErrorPage message="BOOKS FOR SERIE NOT FOUND IN DATABASE" />);
    }
   const authorsIds: string[] = bookToShow.authorUids.map((item) => item._ref) ;
    const authors: Author[] = await client.fetch<Author[]>(AUTHORS_QUERY, { authorsIds: authorsIds });

    if (!authors)
    {
        return (
            <ErrorPage message="AUTHORS FOR BOOK NOT FOUND IN DATABASE" />);
    }
    const authorNames: string[] = authors.map((item) => item.name);
    return (
        <main className="singleBookPage">
            <section className="singleBookCardSection">
                <SingleBookCard _id={bookToShow._id} imageBook={bookToShow.imageBook} bookTitle={bookToShow.bookTitle} authorNames={authorNames} availability={bookToShow.availability} releaseYear={bookToShow.releaseYear} subTitle={bookToShow.subTitle}
                    description={bookToShow.description} seriesRef={bookToShow.seriesRef} bookInSeries={bookToShow.bookInSeries} authorUids={bookToShow.authorUids} />



            </section>


        </main>

    );

}
