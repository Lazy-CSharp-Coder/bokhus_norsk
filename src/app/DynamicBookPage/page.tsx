import { client } from "@/sanity/client";
import type { PageProps } from "@/types/types";
import type { Author, Book, Series} from "@/types/booktypes";
import type { Review } from "@/types/reviewtypes";
import { SingleBookCard } from "./components/SingleBookCard";
import { BackgroundImage } from "@/components/common/BackgroundImage";
import { urlFor } from "@/functions/urlFor";
import { ErrorBokhus } from "../ErrorBokhus";
import { ReviewArticle } from "../DynamicSeriePage/components/ReviewArticle";
import { ReviewScrollButton } from "../DynamicSeriePage/components/ReviewScrollButton";

export default async function DynamicBookPage({ searchParams }: PageProps)
{

    const params = await searchParams;
    const bookUid = params.message as string;
    // const bookUid = "779ccbb4-8d96-4c30-aee9-65a54403e014";
    const BOOK_QUERY = `*[_type == "Book" && _id == $bookUidFromParams][0]`;
    const AUTHORS_QUERY = `*[_type == "Author" &&  _id in $authorsIds]`;
    const SERIES_QUERY = `*[_type == "Series" && _id == $serieId ][0]`;
    const REVIEW_QUERY = `*[_type == "Review" &&  bookRef._ref == $bookId]`;
    let bookToShow: Book | undefined;

    try
    {
        bookToShow = await client.fetch<Book>(BOOK_QUERY, { bookUidFromParams: bookUid });
    }
    catch (error)
    {
        console.error("Sanity fetch failed :", error);
        throw new Error("Failed to fetch authors from Sanity");
    }

    if (!bookToShow) 
    {
        return (<ErrorBokhus msg="BOOK FOR SERIE NOT FOUND IN DATABASE." />);
    }

    const authorsIds: string[] = bookToShow.authorUids.map((item) => item._ref);
    console.log("author ids are " + authorsIds);
    let authors: Author[] = [];

    try
    {
        authors = await client.fetch<Author[]>(AUTHORS_QUERY, { authorsIds: authorsIds });

    }
    catch (error)
    {
        console.error("Sanity fetch failed :", error);
        throw new Error("Failed to fetch authors from Sanity");
    }

    if (!authors)
    {
        return (
            <ErrorBokhus msg="AUTHORS FOR BOOK NOT FOUND IN DATABASE" />);
    }

    const authorNames: string[] = authors.map((item) => item.name);

    const serieId = bookToShow.seriesRef._ref;

    let serieBelonging: Series | undefined;
    try
    {

        serieBelonging = await client.fetch<Series>(SERIES_QUERY, { serieId: serieId });

    }
    catch (error)
    {
        console.error("Sanity fetch failed :", error);
        throw new Error("Failed to fetch authors from Sanity");
    }

    if (!serieBelonging) 
    {
        return (
            <ErrorBokhus msg="SERIE FOR BOOK NOT FOUND IN DATABASE" />);
    }
    let reviewsForBook : Review[] = []
    try {
        reviewsForBook  = await client.fetch(REVIEW_QUERY, { bookId : bookUid});
    }
    catch (error)
    {
      
        console.error("Sanity fetch failed :", error);
        throw new Error("Failed to find review document from Sanity");
    }

    const backgroundImage = urlFor(serieBelonging.imageSeriesBackground, 1920);

    return (
        <main className="singleBookPage">
            <BackgroundImage className="singleBookPageBackgroundImage" src={backgroundImage} />
            <section className="singleBookCardSection">
                <article className="singleBookCardArticle flex">
 <SingleBookCard _id={bookToShow._id} imageBook={bookToShow.imageBook} bookTitle={bookToShow.bookTitle} authorNames={authorNames} availability={bookToShow.availability} releaseYear={bookToShow.releaseYear} subTitle={bookToShow.subTitle}
                    description={bookToShow.description} seriesRef={bookToShow.seriesRef} bookInSeries={bookToShow.bookInSeries} authorUids={bookToShow.authorUids} />
      {bookToShow && <ReviewScrollButton />}
                </article>
               

             
                <ReviewArticle reviewsForBook={reviewsForBook} bookName={bookToShow.bookTitle}/>
            

            </section>

        </main>

    );

}
