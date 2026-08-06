"use client";
import { useState,useEffect } from "react";
import type { Book, BooksArticleProps } from "@/types/booktypes";
import { BookList } from "./BookList";
import { BookCard, BookCardSizer } from "./BookCard";
import { SerieDescription } from "./SerieDescription";
import { useDescriptionShowingState } from "@/globalStates";
import { urlFor } from "@/functions/urlFor";
import { useLanguageChosen } from "@/globalStates";
import { ReviewScrollButton } from "./ReviewScrollButton";
import { ReviewArticle } from "./ReviewArticle";
import "./BookListAndCard.module.css";
import { AsyncStatus, Review } from "@/types/reviewtypes";

interface BookAndReviews {
    bookIndex : number, 
    reviewsForBook : Review[],
    hasTriedFetchReviews : boolean
}



export function BookListAndCard({ authors, series, bookList }: BooksArticleProps)
{
    const [bookInfo, setBookInfo] = useState<BookAndReviews[]>(bookList.map((item) => ({bookToShow : -1, reviewsForBook: [], hasTriedFetchReviews : false})) );
 const [asyncStatus, setAsyncStatus] = useState<AsyncStatus>("not started");
    const { isDescriptionShowing, setIsDescriptionShowing } = useDescriptionShowingState();

    const handleClick = (item: Book) =>
    {
        setBookInfo((prev) => {return {...prev, bookToShow : item}});
        if (isDescriptionShowing) setIsDescriptionShowing(false);
    };
 // set limit to when to not display second card
    const tabletLimit = 1024;
    const { sanityTag } = useLanguageChosen();
    const { bookToShow, reviewsForBook, hasTriedFetchReviews} = bookInfo;
    
    const bookForSizing: Book = bookList[0];
    // console.log("Sanity tag for language is  : " + sanityTag);

        // useEffect to get Reviews 
        useEffect(() =>     
        {
            if(hasTriedFetchReviews )  return;
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
                        body: JSON.stringify({ bookId}),
                    });
                if (!res.ok) throw new Error("Fetch of reviews failed");
    
                const reviewArray: Review[] = await res.json() as Review[];
                if(!abortController.signal.aborted) setAsyncStatus("done");
                console.log("Array length from getThemReviews() :  "  + reviewArray.length);
                if (reviewArray.length > 0) setBookInfo((prev) => ({...prev, reviewsForBook : reviewArray, hasTriedFetchReviews: true }))
                    else setBookInfo((prev) => ({...prev, reviewsForBook : [], hasTriedFetchReviews : true}));
            };
            getThemReviews();
            console.log("Get them reviews called");
            return () => { abortController.abort()}
    
    
      
        }, [bookToShow]);


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
                                    saintyTagLanguage={sanityTag} buyLink={bookToShow.buyLink} /> :
                                <SerieDescription seriesName={series.seriesName} authors={authors} seriesFact={series.seriesFact} description={series.description} imageUrl={urlFor(series.imageSeries, 800)} ageGroup={series.ageGroup} />
                        }
                    </div>
                </article>
                {(!isDescriptionShowing && bookToShow) && <ReviewScrollButton />}
            </div>
            {bookToShow && !isDescriptionShowing && <ReviewArticle reviewsForBook={reviewsForBook} bookName={bookToShow.bookTitle} />}
        </section>

    );

}
