"use client";
import type { AnimationToUse } from "../../../types/reviewtypes";
import { AsyncStatus, type Review } from "../../../types/reviewtypes";
import { useRef, useEffect, useState, useLayoutEffect } from "react";
import { ReviewCard } from "./ReviewCard";
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import { GoMoveToTop } from "react-icons/go";
import { useWindowWidth } from "../../../components/hooks/useWindowWidth";
import "./ReviewArticle.module.css";
import { reverificationError } from "@clerk/nextjs/server";
import { array } from "zod";
import { Preview } from "sanity";

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


export interface ReviewCardDisplayOptions
{
    reviewArray : Review[],
    arrayToView: Review[],
    lastIndexDisplaying: number,
    tabletMode : boolean, 
    animationToUse: AnimationToUse;
}

export function ReviewArticle({ bookId, bookName }: ReviewArticleProps)
{
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const [asyncStatus, setAsyncStatus] = useState<AsyncStatus>("not started");

    const reviewSectionRef = useRef<HTMLDivElement>(null);
    const [displayOptions, setDisplayOptions] = useState<ReviewCardDisplayOptions>({
        reviewArray : [], arrayToView : [], lastIndexDisplaying: -1, animationToUse : "fadeInFromRightAnim", tabletMode : false})
        
       
    const itemRefsForHeight = useRef<(HTMLDivElement | null)[]>([]);

    const [reviewDisplayHeight, setReveiwDisplayHeight] = useState<number>(0);




    // set limit to when to not display second card
    const tabletLimit = 1024;

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
        const tabletMode = window.innerWidth < tabletLimit ? true : false;
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

         if(reviewArray) setDisplayOptions({ reviewArray : reviewArray, arrayToView: reviewArray ? reviewArray.slice(0, tabletMode || reviewArray.length == 1 ? 1: 2) : [], lastIndexDisplaying: tabletMode ? 0 : 1, animationToUse: "fadeInFromRightAnim", tabletMode : tabletMode }) 
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
            if(window.innerWidth < tabletLimit && !tabletMode)
                setDisplayOptions((prev) =>  ({...prev, tabletMode : true, arrayToView : arrayToView.slice(0, 1)}));
            else if(tabletMode && !(window.innerWidth < tabletLimit)) 
                 setDisplayOptions((prev) =>  ({...prev, tabletMode :false, arrayToView : reviewArray.slice(prev.lastIndexDisplaying, prev.lastIndexDisplaying+2)}));
        };

        // hvis det ikke er en høyde fra før, kjør handleResize();
        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [reviewDisplayHeight, displayOptions.reviewArray.length]);

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

    const { reviewArray, arrayToView, animationToUse, lastIndexDisplaying, tabletMode} = displayOptions;

    const handleRightSliderClick = () =>
    {
        if (reviewArray == undefined || lastIndexDisplaying >= reviewArray.length - 1) return;
        setDisplayOptions((prev) =>
        {
            console.log("Slicing Right in reviews. Amount of reviews : " + reviewArray.length);

            const sliceEnd = tabletMode || lastIndexDisplaying == reviewArray.length-3 ? prev.lastIndexDisplaying + 2: prev.lastIndexDisplaying + 3;
            console.log("Slice end is : " +sliceEnd + " LastIndexDisplaying is : " + lastIndexDisplaying ) 
            return ({...prev,arrayToView: reviewArray.slice(prev.lastIndexDisplaying + 1, sliceEnd),
                    lastIndexDisplaying: prev.lastIndexDisplaying+1,
                    animationToUse: "fadeInFromLeftAnim"} );
        });


    };

    const handleLeftSliderClick = () =>
    {
        if(reviewArray == undefined || lastIndexDisplaying == 0 || (lastIndexDisplaying == 1 && !tabletMode)) return;
        
        setDisplayOptions((prev) =>
        {
            console.log("Slicing Left in reviews. Amount of reviews : " + reviewArray.length);

            const sliceStart = tabletMode ? lastIndexDisplaying-1: lastIndexDisplaying-2;
            const sliceEnd = tabletMode ? sliceStart+1 : sliceStart+2;

            console.log("Slice start is : " +sliceStart + " LastIndexDisplaying is : " + lastIndexDisplaying ) 
            return ({...prev,arrayToView: reviewArray.slice(sliceStart, sliceEnd),
                    lastIndexDisplaying: sliceEnd-1,
                    animationToUse: "fadeInFromLeftAnim"} );
        });



    };

 
    return (
        <article id="reviewArticle" className={`reviewArticle flex ${isVisible && "fadeInFromBelowAnim"}`} ref={reviewSectionRef} style={{ animationDuration: "0.5s" }}>
            <div className="headingToTopWrapper flex">

                <span onClick={() => { window.scrollTo(0, 0); }}> <GoMoveToTop size="1.8rem" className="goToTopIcon" /></span>
                <div className="reviewHeadingArrowContainer">

                    <span style={{ }} onClick={handleLeftSliderClick} ><IoMdArrowDropleft className="leftSlider" size={"3rem"} /></span>

                    <h4 className="reviewTitle">READERS REVIEWS OF <span className="reviewHeadingSeriesName">{bookName.toLocaleUpperCase()}</span></h4>

                    <span style={{ }} onClick={handleRightSliderClick} ><IoMdArrowDropright size={"3rem"} className="rightSlider" /></span>


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
            {arrayToView && reviewDisplayHeight != 0 ?
                <ReviewSlideShow array={arrayToView} animationToUse={animationToUse} height={`${reviewDisplayHeight}px`} /> : <h3 className="reviewsNotFoundText">No reviews found</h3>
            }
        </article>);
}



export function ReviewSlideShow({ array, animationToUse, height }: ReviewSlideShowProps)
{
    console.log(`ReviewSlideShowData : Array length : ${array.length}` );
    return (

        <div className="reviewSlideContainer flex">


            <div className="reviewDisplayer flex" style={{ height: height }}>
                {array.map((item, index) =>
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
