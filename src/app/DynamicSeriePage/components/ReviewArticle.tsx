"use client";
import type { AnimationToUse } from "../../../types/reviewtypes";
import { AsyncStatus, type Review, type ReviewCardDisplayOptions } from "../../../types/reviewtypes";
import { useRef, useEffect, useState, useLayoutEffect } from "react";
import { ReviewCard } from "./ReviewCard";
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import { GoMoveToTop } from "react-icons/go";
import { useWindowWidth } from "../../../components/hooks/useWindowWidth";
import "./ReviewArticle.module.css";

interface ReviewArticleProps
{
    bookId: string,
    bookName: string,

    // reviewArray: Review[];
}

interface ReviewSlideShowProps
{
    array: Review[],
    height: string,
    animationToUse: AnimationToUse;
}

export function ReviewArticle({ bookId, bookName }: ReviewArticleProps)
{
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [reviewArray, setReviewArray] = useState<Review[] | null>(null);
    const [asyncStatus, setAsyncStatus] = useState<AsyncStatus>("not started");

    const reviewSectionRef = useRef<HTMLDivElement>(null);
    const [displayOptions, setDisplayOptions] = useState<ReviewCardDisplayOptions>({ firstIndexDisplaying: 0, animationToUse: "fadeInFromRightAnim" });
    const itemRefsForHeight = useRef<(HTMLDivElement | null)[]>([]);

    const [reviewDisplayHeight, setReveiwDisplayHeight] = useState<number>(0);
    const { firstIndexDisplaying, animationToUse } = displayOptions;  // desctructuring displayOptions
    const width = useWindowWidth();


    // set limit to when to not display second card
    const tabletLimit = 1024;

    // true if in tablet mode, if window does not exist, not in tablet mode (why shouldn't it I don't know)
    const tabletMode = width ? (width < tabletLimit ? true : false) : false;
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
        console.log("Get them reviews called");
        // setAsyncStatus("done");
    }, [bookId]);

    // useEffect(() =>
    // {
    //     if (!bookId) return;
    //     setAsyncStatus("loading");

    // }, [bookId]);

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
    }, [reviewDisplayHeight, reviewArray?.length]);

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

    const pairToDisplay: Review[] = reviewArray ? reviewArray?.slice(0, 2) : [] ;

    const handleLeftSliderClick = () =>
    {
        if(firstIndexDisplaying > 1)
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
        
        if (reviewArray == null) return;
        if(firstIndexDisplaying >= reviewArray.length - 2) return;
        
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
    return (
        <article id="reviewArticle" className={`reviewArticle flex ${isVisible && "fadeInFromBelowAnim"}`} ref={reviewSectionRef} style={{ animationDuration: "0.5s" }}>
            <div className="headingToTopWrapper flex">
                
                <span onClick={() => { window.scrollTo(0, 0); }}> <GoMoveToTop size="1.8rem" className="goToTopIcon" /></span>
                <div className="reviewHeadingArrowContainer">

                    <span style={{ opacity: firstIndexDisplaying === 0 ? "0.3" : "1" }} onClick={handleLeftSliderClick} ><IoMdArrowDropleft className="leftSlider" size={"3rem"} /></span>

                    <h4 className="reviewTitle">READERS REVIEWS OF <span className="reviewHeadingSeriesName">{bookName.toLocaleUpperCase()}</span></h4>

                    <span style={{ opacity: (reviewArray) && (firstIndexDisplaying < reviewArray.length - 2) ? "1" : "0.3" }} onClick={handleRightSliderClick} ><IoMdArrowDropright size={"3rem"} className="rightSlider" /></span>


                </div>


                <span onClick={() => { window.scrollTo(0, 0); }}> <GoMoveToTop size="1.8rem" className="goToTopIcon" /></span>



            </div>
            {reviewArray && reviewArray.map((item, index) =>

                <div ref={(element) => { itemRefsForHeight.current[index] = element; }} key={index + "#HeightColletorDiv#"} className="reviewDisplayer flex" style={{ visibility: "hidden", position: "absolute" }}>
                    <ReviewCard key={item._id + "#hidden" + index} _id={item._id} bookRef={item.bookRef} bookReviewed={item.bookReviewed} format={item.format} date={item.date} country={item.country}
                        stars={item.stars} reviewerName={item.reviewerName} titleReview={item.titleReview} reviewedOn={item.reviewedOn}
                        reviewDescription={item.reviewDescription} linkReview={item.linkReview} animationToUse="none" />
                </div>
            )}
            {reviewArray != null && reviewDisplayHeight != 0 ?
                <ReviewSlideShow array={pairToDisplay} animationToUse={animationToUse} height={`${reviewDisplayHeight}px`} /> : <h3 className="reviewsNotFoundText">No reviews found</h3>
            }
        </article>);
}



export function ReviewSlideShow({ array, animationToUse, height }: ReviewSlideShowProps)
{

 const width = useWindowWidth();


    // set limit to when to not display second card
    const tabletLimit = 1024;

    // true if in tablet mode, if window does not exist, not in tablet mode (why shouldn't it I don't know)
    const tabletMode = width ? (width < tabletLimit ? true : false) : false;



    // function to find height dependent on refs collected from the not visible div



    // useEffect for controlling window width - needed to recalculate height



    // reviewArray.forEach((item) => { console.log("review item id ;" + item._id); });
    return (

        <div className="reviewSlideContainer flex">


            <div className="reviewDisplayer flex" style={{ height: height }}>
            {array.filter((item,index)=>{ return tabletMode ? index !== 1 : true }).map((item, index) =>
                
               {

                    return (
                   
                        <ReviewCard key={item._id} _id={item._id} bookRef={item.bookRef} bookReviewed={item.bookReviewed} format={item.format} date={item.date} country={item.country}
                            stars={item.stars} reviewerName={item.reviewerName} titleReview={item.titleReview} reviewedOn={item.reviewedOn}
                            reviewDescription={item.reviewDescription} linkReview={item.linkReview} animationToUse={animationToUse} />);

                }
                )}

            </div>


        </div>

    );
}
