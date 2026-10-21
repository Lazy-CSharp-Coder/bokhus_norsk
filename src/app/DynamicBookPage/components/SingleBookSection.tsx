"use client";
import { urlFor } from "@/functions/urlFor";
import Image from "next/image";
import { BookAvailableIn } from "@/components/common/BookAvailableIn";
import { ByAuthor } from "@/components/common/ByAuthor";
import { BookAndReviews } from "@/app/DynamicSeriePage/components/BookListAndCard";
import { Book, Series } from "@/types/booktypes";
import styles from "./SingleBookSection.module.css";
import { Review } from "@/types/reviewtypes";
import { ReviewArticle } from "@/app/DynamicSeriePage/components/ReviewArticle";
import { ReviewScrollButton } from "@/app/DynamicSeriePage/components/ReviewScrollButton";
import { BookCardSizer, BookCard } from "@/app/DynamicSeriePage/components/BookCard";
import { SingleBookCard} from "./SingleBookCard";

export interface SingleBookSectionProps 
{
    authors: string[],
    series: Series,
    bookToShow: Book,
    reviewsForBook: Review[]
}

export function SingleBookSection({authors, series, bookToShow, reviewsForBook }: SingleBookSectionProps)
{ 
    const bookForSizing = bookToShow;
    // console.log("Sanity tag for language is  : " + sanityTag);

    return (
        <section className={styles.bookSection}>
            <div className={styles.bookArticleReviewButtonWrapper}>
                <article className={styles.booksArticle}>
                 
                    <div className={styles.bookCardWrapper}>
                        {
                            bookToShow && 
                                <SingleBookCard key={bookToShow._id} availability={bookToShow.availability} bookInSeries={bookToShow.bookInSeries} seriesRef={bookToShow.seriesRef}
                                    _id={bookToShow._id} imageBook={bookToShow.imageBook} releaseYear={bookToShow.releaseYear} authorUids={bookToShow.authorUids}
                                    bookTitle={bookToShow.bookTitle} subTitle={bookToShow.subTitle} description={bookToShow.description} seriesName={series.seriesName}
                                    saintyTagLanguage={"ENG"} buyLink={bookToShow.buyLink} forLanguagePage={bookToShow.forLanguagePage} /> 
                           
                        }
                    </div>
                </article>
                {(bookToShow) && <span className="scaleInAnim" style={{animationDelay: "0.8s"}}>  <ReviewScrollButton /> </span>}
            </div>
            <ReviewArticle reviewsForBook={reviewsForBook} bookName={bookToShow.bookTitle} />
        </section>

    );


    
}
