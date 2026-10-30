"use client";
import { useState, useEffect } from "react";
import type { Book, BooksArticleProps } from "@/types/booktypes";
import { BookList } from "./BookList";
import { BookCard, BookCardSizer } from "./BookCard";
import { SerieDescription } from "./SerieDescription";
import { useDescriptionShowingState } from "@/globalStates";
import { urlFor } from "@/functions/urlFor";
import { ReviewScrollButton } from "./ReviewScrollButton";
import { ReviewArticle } from "./ReviewArticle";
import styles from "./BookListAndCard.module.css";

import { AsyncStatus, Review } from "@/types/reviewtypes";

interface BookAndReviews
{
    bookToShow?: Book,
    reviewsForBook: Review[],
    hasTriedFetchReviews: boolean;
}


export function BookListAndCard({ authors, series, bookList }: BooksArticleProps)
{
    const [bookInfoArray, setBookInfoArray] = useState<BookAndReviews[]>(bookList.map((item) => ({ bookToShow: item, reviewsForBook: [], hasTriedFetchReviews: false })));
    const [bookIndex, setBookIndex] = useState<number>(-1);

    const [asyncStatus, setAsyncStatus] = useState<AsyncStatus>("not started");

    const { isDescriptionShowing, setIsDescriptionShowing } = useDescriptionShowingState();
    const handleClick = (itemNumber: number) =>
    {
        setBookIndex(itemNumber);
        if (isDescriptionShowing) setIsDescriptionShowing(false);

    };


    const { bookToShow, reviewsForBook, hasTriedFetchReviews } = bookIndex == -1 ? { bookToShow: undefined, reviewsForBook: [], hasTriedFetchReviews: false } : bookInfoArray[bookIndex];

    const bookForSizing: Book = bookList[0];
    // console.log("Sanity tag for language is  : " + sanityTag);

    // useEffect to get Reviews 
    useEffect(() =>     
    {
        if (hasTriedFetchReviews) return;
        if (!bookToShow?._id) return;

        const abortController = new AbortController();

        const bookId = bookToShow._id;

        const getThemReviews = async () =>             
        {
            setAsyncStatus("loading");

            const res = await fetch("/api/reviews",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ bookId }),
                });
            if (!res.ok) throw new Error("Fetch of reviews failed");

            const reviewArray: Review[] = await res.json() as Review[];
            if (!abortController.signal.aborted) setAsyncStatus("done");
            console.log("Array length from getThemReviews() :  " + reviewArray.length);

            const newArray: BookAndReviews[] = bookInfoArray.map((item) =>
                item.bookToShow?._id == bookId ? { bookToShow: bookInfoArray[bookIndex].bookToShow, reviewsForBook: reviewArray, hasTriedFetchReviews: true } : item);

            setBookInfoArray(newArray);
        };
        getThemReviews();
        console.log("Get them reviews called");
        return () => { abortController.abort(); };

    }, [bookToShow]);

    const useDialect = series.dialektNO  ? series.dialektNO == "bokmaal" ? "BOKMÅL UTGAVE" : "NYNORSK UTGAVE" : "";
    
    return (
        <section className={styles.bookSection}>
            <div className={styles.bookArticleReviewButtonWrapper}>
                <article className={styles.booksArticle}>
                    <BookList bookList={bookList} handleClick={handleClick} />
                    <BookCardSizer key={bookForSizing._id + "#sizerCard#"} availability={bookForSizing.availability} bookInSeries={bookForSizing.bookInSeries} seriesRef={bookForSizing.seriesRef}
                        _id={bookForSizing._id} imageBook={bookForSizing.imageBook} releaseYear={bookForSizing.releaseYear} authorUids={bookForSizing.authorUids}
                        bookTitle={bookForSizing.bookTitle} subTitle={bookForSizing.subTitle} description={bookForSizing.description} seriesName={series.seriesName}
                        saintyTagLanguage={"ENG"} forLanguagePage={series.forLanguagePage} dialektNO={useDialect}/>

                    <div className={styles.bookCardWrapper}>
                        {
                            bookToShow && !isDescriptionShowing ?
                                <BookCard key={bookToShow._id} availability={bookToShow.availability} bookInSeries={bookToShow.bookInSeries} seriesRef={bookToShow.seriesRef}
                                    _id={bookToShow._id} imageBook={bookToShow.imageBook} releaseYear={bookToShow.releaseYear} authorUids={bookToShow.authorUids}
                                    bookTitle={bookToShow.bookTitle} subTitle={bookToShow.subTitle} description={bookToShow.description} seriesName={series.seriesName}
                                    saintyTagLanguage={"ENG"} buyLink={bookToShow.buyLink} forLanguagePage={bookToShow.forLanguagePage} dialektNO={useDialect}/> :
                                <SerieDescription seriesName={series.seriesName} authors={authors} seriesFact={series.seriesFact} description={series.description} imageUrl={urlFor(series.imageSeries, 800)} ageGroup={series.ageGroup} dialectNO={useDialect} />
                        }
                    </div>
                </article>
                {(!isDescriptionShowing && bookToShow) && <ReviewScrollButton />}
            </div>
            {bookToShow && !isDescriptionShowing && <ReviewArticle reviewsForBook={reviewsForBook} bookName={bookToShow.bookTitle} />}
        </section>

    );

}
