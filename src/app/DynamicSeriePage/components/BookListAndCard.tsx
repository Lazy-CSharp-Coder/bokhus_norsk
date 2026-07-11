"use client";
import { useState } from "react";
import type { Book, BooksArticleProps } from "@/types/booktypes";
import { BookList } from "./BookList";
import { BookCard, BookCardSizer } from "./BookCard";
import { SerieDescription } from "./SerieDescription";
import { useDescriptionShowingState} from "@/globalStates";
import { urlFor } from "@/functions/urlFor";
import { useLanguageChosen } from "@/globalStates";
import { ReviewScrollButton } from "../../../components/general/ReviewScrollButton";
import { ReviewArticle } from "./ReviewArticle";
import "./BookListAndCard.module.css";

export function BookListAndCard({ authors, series, bookList }: BooksArticleProps)
{
    const [bookToShow, setBookToShow] = useState<Book | undefined>(undefined);

    const { isDescriptionShowing, setIsDescriptionShowing } = useDescriptionShowingState();

    const handleClick = (item: Book) =>
    {
        setBookToShow(item);
        if (isDescriptionShowing) setIsDescriptionShowing(false);
    };

    const { sanityTag } = useLanguageChosen();
    const bookForSizing: Book = bookList[0];
    // console.log("Sanity tag for language is  : " + sanityTag);


    return (
        <section className="bookSection flex">
            <div className="bookArticleReviewButtonWrapper flex">
                <article className="booksArticle">
                    <BookList bookList={bookList} handleClick={handleClick} />
                    <BookCardSizer key={bookForSizing._id + "#sizerCard#"} availability={bookForSizing.availability} bookInSeries={bookForSizing.bookInSeries} seriesRef={bookForSizing.seriesRef}
                        _id={bookForSizing._id} imageBook={bookForSizing.imageBook} releaseYear={bookForSizing.releaseYear} authorUids={bookForSizing.authorUids}
                        bookTitle={bookForSizing.bookTitle} subTitle={bookForSizing.subTitle} description={bookForSizing.description} seriesName={series.seriesName}
                        saintyTagLanguage={sanityTag} />

                    <div className="bookCardWrapper">
                        {
                            bookToShow && !isDescriptionShowing ?
                                <BookCard key={bookToShow._id} availability={bookToShow.availability} bookInSeries={bookToShow.bookInSeries} seriesRef={bookToShow.seriesRef}
                                    _id={bookToShow._id} imageBook={bookToShow.imageBook} releaseYear={bookToShow.releaseYear} authorUids={bookToShow.authorUids}
                                    bookTitle={bookToShow.bookTitle} subTitle={bookToShow.subTitle} description={bookToShow.description} seriesName={series.seriesName}
                                   saintyTagLanguage={sanityTag} /> :
                                <SerieDescription seriesName={series.seriesName} authors={authors} seriesFact={series.seriesFact} description={series.description} imageUrl={urlFor(series.imageSeries, 800)} ageGroup={series.ageGroup} />
                        }
                    </div>
                </article>
                {!isDescriptionShowing && bookToShow && <ReviewScrollButton />}
            </div>
            {bookToShow && !isDescriptionShowing && <ReviewArticle bookId={bookToShow._id} bookName={bookToShow.bookTitle} />}
        </section>

    );

}
