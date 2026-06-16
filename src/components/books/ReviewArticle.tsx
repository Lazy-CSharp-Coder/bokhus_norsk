"use client";

import { AsyncStatus, type Review, type ReviewCardDisplayOptions } from "../../types/reviewtypes";
import { useRef, useEffect, useState, useLayoutEffect } from "react";
import { ReviewCard } from "./ReviewCard";
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import { GoMoveToTop } from "react-icons/go";
import { useWindowWidth } from "../hooks/useWindowWidth";


export interface ReviewArticleProps
{
    bookId: string,
    bookName: string,

    // reviewArray: Review[];
}

export function ReviewArticle({ bookId, bookName }: ReviewArticleProps)
{
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [reviewArray, setReviewArray] = useState<Review[] | null>(null);
    const [asyncStatus, setAsyncStatus] = useState<AsyncStatus>("not started");
    const reviewSectionRef = useRef<HTMLDivElement>(null);

    // useEffect to get Reviews 
    useEffect(() =>     
    {
        if (!bookId) return;
        const getThemReviews = async () =>             
        {
            // setAsyncStatus("loading");

            const res = await fetch("/api/reviews",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ bookId }),
                });
            if (!res.ok) throw new Error("Fetch of reviews failed");

            const reviewArray: Review[] = await res.json() as Review[];

            // setAsyncStatus("done");

            setReviewArray(reviewArray);

        };
        getThemReviews();
        // setAsyncStatus("done");
    }, [bookId]);

    // useEffect(() =>
    // {
    //     if (!bookId) return;
    //     setAsyncStatus("loading");

    // }, [bookId]);


    useEffect(() =>
    {
        // important -> get a snapshot of the current ref - needed for cleanup
        const element = reviewSectionRef.current;

        if (!element) return;

        const observer = new IntersectionObserver((entries) =>
        {
            setIsVisible(entries[0].isIntersecting);

        }, { threshold: 0.1 });

        observer.observe(element);

        return (() => { observer.unobserve(element); });


    }, []);
    return (
        <article id="reviewArticle" className={`reviewArticle flex ${isVisible && "fadeInFromBelowAnim"}`} ref={reviewSectionRef} style={{ animationDuration: "0.5s" }}>
            <div className="headingToTopWrapper flex">
                <h4 className="reviewTitle">READERS REVIEWS OF <span className="reviewHeadingSeriesName">{bookName.toLocaleUpperCase()}</span></h4>
                <span onClick={() => { window.scrollTo(0,0) }}> <GoMoveToTop size="1.8rem" /></span>
            </div>
            {reviewArray != null && reviewArray.length > 0 ?
                <ReviewSlideShow reviewArray={reviewArray} /> : <h3 className="reviewsNotFoundText">No reviews found</h3>
            }
        </article>);
}



export function ReviewSlideShow({ reviewArray }: { reviewArray: Review[]; })
{

    const itemRefsForHeight = useRef<(HTMLDivElement | null)[]>([]);

    const [reviewDisplayHeight, setReveiwDisplayHeight] = useState<number>(0);
    const [displayOptions, setDisplayOptions] = useState<ReviewCardDisplayOptions>({ firstIndexDisplaying: 0, animationToUse: "fadeInFromRightAnim" });

    const { firstIndexDisplaying, animationToUse } = displayOptions;  // desctructuring displayOptions

    const width = useWindowWidth();

    // set limit to when to not display second card
    const tabletLimit = 1024;

    // true if in tablet mode, if window does not exist, not in tablet mode (why shouldn't it I don't know)
    const tabletMode = width ? (width < tabletLimit ? true : false) : false;

    // function to find height dependent on refs collected from the not visible div

    const heightOfReviewDisplay = () =>
    {
        let height = 0;


        itemRefsForHeight.current.forEach((item) =>
        {
            if (item)
                if (height < item?.offsetHeight) height = item?.offsetHeight;

        });
        return height;

    };

    // useEffect for controlling window width - needed to recalculate height

    useLayoutEffect(() => 
    {
        const handleResize = () =>
        {
            setReveiwDisplayHeight(heightOfReviewDisplay());
        };

        // hvis det ikke er en høyde fra før, kjør handleResize();
        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);



    const handleLeftSliderClick = () =>
    {

        setDisplayOptions((prev) =>
        {

            if (window.innerWidth >= tabletLimit)
                return {
                    firstIndexDisplaying: (prev.firstIndexDisplaying == 0 || prev.firstIndexDisplaying == 1) ?
                        0 : prev.firstIndexDisplaying - 2, animationToUse: "fadeInFromLeftAnim"
                };
            return {
                firstIndexDisplaying: (prev.firstIndexDisplaying == 0 || prev.firstIndexDisplaying == 1) ?
                    0 : prev.firstIndexDisplaying - 1, animationToUse: "fadeInFromLeftAnim"
            };
        });


    };

    const handleRightSliderClick = () =>
    {
        setDisplayOptions((prev) =>
        {

            if (window.innerWidth >= tabletLimit)
                return {
                    firstIndexDisplaying: (prev.firstIndexDisplaying == reviewArray.length - 1 || prev.firstIndexDisplaying == reviewArray.length - 2) ? reviewArray.length - 1 :
                        prev.firstIndexDisplaying + 2, animationToUse: "fadeInFromRightAnim"
                };
            return {
                firstIndexDisplaying: (prev.firstIndexDisplaying == reviewArray.length - 1) ? reviewArray.length - 1 :
                    prev.firstIndexDisplaying + 1, animationToUse: "fadeInFromRightAnim"
            };
        });


    };
    reviewArray.forEach((item) => { console.log("review item id ;" + item._id); });
    return (

        <div className="reviewSlideContainer flex">
            {reviewArray.map((item, index) =>

                <div ref={(element) => { itemRefsForHeight.current[index] = element; }} key={index + "#HeightColletorDiv#"} className="reviewDisplayer flex" style={{ visibility: "hidden", position: "absolute" }}>
                    <ReviewCard key={item._id + "#hidden" + index} _id={item._id} bookRef={item.bookRef} bookReviewed={item.bookReviewed} format={item.format} date={item.date} country={item.country}
                        stars={item.stars} reviewerName={item.reviewerName} titleReview={item.titleReview} reviewedOn={item.reviewedOn}
                        reviewDescription={item.reviewDescription} linkReview={item.linkReview} animationToUse="none" />
                </div>
            )}

            <div className="reviewDisplayer flex" style={{ height: `${reviewDisplayHeight}px` }}>
                {reviewArray.map((item, index) =>
                {
                    return index == firstIndexDisplaying ?
                        <ReviewCard key={item._id} _id={item._id} bookRef={item.bookRef} bookReviewed={item.bookReviewed} format={item.format} date={item.date} country={item.country}
                            stars={item.stars} reviewerName={item.reviewerName} titleReview={item.titleReview} reviewedOn={item.reviewedOn}
                            reviewDescription={item.reviewDescription} linkReview={item.linkReview} animationToUse={animationToUse} /> :
                        (index == (firstIndexDisplaying + 1) && !tabletMode) &&
                        <ReviewCard key={item._id} _id={item._id} bookRef={item.bookRef} bookReviewed={item.bookReviewed} format={item.format} date={item.date} country={item.country}
                            stars={item.stars} reviewerName={item.reviewerName} titleReview={item.titleReview} reviewedOn={item.reviewedOn}
                            reviewDescription={item.reviewDescription} linkReview={item.linkReview} animationToUse={animationToUse} />;
                }
                )}

            </div>

            <span style={{ opacity: firstIndexDisplaying === 0 ? "0.3" : "1" }} onClick={handleLeftSliderClick} className="leftSlider"><IoMdArrowDropleft size={"3rem"} /></span>
            <span style={{ opacity: firstIndexDisplaying === reviewArray.length - 1 ? "0.3" : "1" }} onClick={handleRightSliderClick} className="rightSlider"><IoMdArrowDropright size={"3rem"} /></span>


        </div>

    );
}
