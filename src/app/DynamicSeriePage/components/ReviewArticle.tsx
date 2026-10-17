"use client";
import type { AnimationToUse, Review } from "../../../types/reviewtypes";

import { useRef, useEffect, useState, useLayoutEffect } from "react";
import { ReviewCard } from "./ReviewCard";
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import { GoMoveToTop } from "react-icons/go";

import styles from "./ReviewArticle.module.css";



interface ReviewArticleProps
{
    reviewsForBook: Review[],
    bookName: string;

    // reviewsForBook: Review[];
}

interface ReviewSlideShowProps
{
    array: Review[],
    height: string,
    animationToUse: AnimationToUse,
    bookName: string;
}


export interface ReviewCardDisplayOptions
{

    arrayToView: Review[],
    lastIndexDisplaying: number,
    tabletMode: boolean,
    animationToUse: AnimationToUse;
}

export function ReviewArticle({ bookName, reviewsForBook }: ReviewArticleProps)
{
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const tabletLimit = 1024;

    const reviewSectionRef = useRef<HTMLDivElement>(null);
    const [displayOptions, setDisplayOptions] = useState<ReviewCardDisplayOptions>({
        arrayToView: [], lastIndexDisplaying: -1, tabletMode: false, animationToUse: "fadeInFromRightAnim"
    });


    const itemRefsForHeight = useRef<(HTMLDivElement | null)[]>([]);

    const [reviewDisplayHeight, setReveiwDisplayHeight] = useState<number>(0);

    useEffect(() => 
    {
        setDisplayOptions((prev) => ({ ...prev, lastIndexDisplaying: -1 }));
    }, [bookName]);

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

    useLayoutEffect(() => 
    {
        const handleResize = () =>
        {
            setReveiwDisplayHeight(heightOfReviewDisplay());
            const tabletMode = window.innerWidth < tabletLimit ? true : false;
            if (lastIndexDisplaying == -1)
            {
                if (tabletMode) setDisplayOptions((prev) => ({ ...prev, lastIndexDisplaying: 0, tabletMode: true, arrayToView: reviewsForBook.slice(0, 1) }));
                else setDisplayOptions((prev) => ({ ...prev, lastIndexDisplaying: 1, tabletMode: false, arrayToView: reviewsForBook.slice(0, 2) }));
            }
            else
                if (tabletMode)
                {
                    console.log("in mobile mode");
                    setDisplayOptions((prev) => ({ ...prev, lastIndexDisplaying: lastIndexDisplaying, tabletMode: true, arrayToView: reviewsForBook.slice(lastIndexDisplaying, lastIndexDisplaying + 1) }));

                }
                else 
                {
                    console.log("in desktop mode");
                    const newStartPos = lastIndexDisplaying % 2 ? lastIndexDisplaying == reviewsForBook.length - 1 ? lastIndexDisplaying : lastIndexDisplaying - 1 : lastIndexDisplaying;
                    const startPoint = newStartPos - 1;
                    const endPoint = newStartPos < reviewsForBook.length - 1 ? newStartPos + 2 : newStartPos + 1;
                    setDisplayOptions((prev) => ({ ...prev, arrayToView: reviewsForBook.slice(startPoint, endPoint), lastIndexDisplaying: newStartPos, tabletMode: false }));
                }


        };


        // hvis det ikke er en høyde fra før, kjør handleResize();
        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [reviewDisplayHeight, reviewsForBook]);

    // set arrayToView

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

    const { arrayToView, lastIndexDisplaying, tabletMode, animationToUse } = displayOptions;

    const handleRightSliderClick = () =>
    {
        if (reviewsForBook == undefined || lastIndexDisplaying >= reviewsForBook.length - 1) return;
        setDisplayOptions((prev) =>
        {
            console.log("Slicing Right in reviews. Amount of reviews : " + reviewsForBook.length);

            const sliceEnd = tabletMode || lastIndexDisplaying == reviewsForBook.length - 3 ? prev.lastIndexDisplaying + 2 : prev.lastIndexDisplaying + 3;
            console.log("Slice end is : " + sliceEnd + " LastIndexDisplaying is : " + lastIndexDisplaying);
            return ({
                ...prev, arrayToView: reviewsForBook.slice(prev.lastIndexDisplaying + 1, sliceEnd),
                lastIndexDisplaying: prev.lastIndexDisplaying + 1,
                animationToUse: "fadeInFromRightAnim"
            });
        });


    };

    const handleLeftSliderClick = () =>
    {
        if (reviewsForBook == undefined || lastIndexDisplaying == 0 || (lastIndexDisplaying == 1 && !tabletMode)) return;

        setDisplayOptions((prev) =>
        {
            console.log("Slicing Left in reviews. Amount of reviews : " + reviewsForBook.length);

            const sliceStart = tabletMode ? lastIndexDisplaying - 1 : lastIndexDisplaying - 2;
            const sliceEnd = tabletMode ? sliceStart + 1 : sliceStart + 2;

            console.log("Slice start is : " + sliceStart + " LastIndexDisplaying is : " + lastIndexDisplaying);
            return ({
                ...prev, arrayToView: reviewsForBook.slice(sliceStart, sliceEnd),
                lastIndexDisplaying: sliceEnd - 1,
                animationToUse: "fadeInFromLeftAnim"
            });
        });



    };
    const onFirst = arrayToView[0] == reviewsForBook[0] ? true : false;
    const onLast = lastIndexDisplaying == reviewsForBook.length - 1 ? true : false;


    return (
        <article id="reviewArticle" className={`${styles.reviewArticle} flex ${isVisible && "fadeInFromBelowAnim"}`} ref={reviewSectionRef} style={{ animationDuration: "0.5s" }}>
            <div className={`${styles.headingToTopWrapper} flex`}>

                <span onClick={() => { window.scrollTo(0, 0); }}> <GoMoveToTop size="1.8rem" className={styles.goToTopIcon} /></span>
                <div className={styles.reviewHeadingArrowContainer}>

                    <span style={{ opacity: onFirst ? "0.3" : "1" }} onClick={handleLeftSliderClick} ><IoMdArrowDropleft className={styles.leftSlider} size={"3rem"} /></span>

                    <h4 className={styles.reviewTitle}>LESERNES MENING OM <span className={styles.reviewHeadingSeriesName}>{bookName.toLocaleUpperCase()}</span></h4>

                    <span style={{ opacity: onLast ? "0.3" : "1" }} onClick={handleRightSliderClick} ><IoMdArrowDropright size={"3rem"} className={styles.rightSlider} /></span>


                </div>


                <span onClick={() => { window.scrollTo(0, 0); }}> <GoMoveToTop size="1.8rem" className={styles.goToTopIcon} /></span>



            </div>
            {reviewsForBook.map((item, index) =>

                <div ref={(element) => { itemRefsForHeight.current[index] = element; }} key={index + "#HeightColletorDiv#"} className={`${styles.reviewDisplayer} flex`} style={{ visibility: "hidden", position: "absolute" }}>
                    <ReviewCard key={item._id + "#hidden" + index} _id={item._id} bookReviewed={bookName} format={item.format} date={item.date} country={item.country}
                        stars={item.stars} reviewerName={item.reviewerName} titleReview={item.titleReview} reviewedOn={item.reviewedOn}
                        reviewDescription={item.reviewDescription} linkReview={item.linkReview} animationToUse="none" />
                </div>
            )}
            {arrayToView && lastIndexDisplaying != -1 && reviewDisplayHeight != 0 ?
                <ReviewSlideShow array={arrayToView} animationToUse={animationToUse} height={`${reviewDisplayHeight}px`} bookName={bookName} /> : <h3 className={styles.reviewsNotFoundText}>Ingen anmeldelser registrert</h3>
            }
        </article>);
}



export function ReviewSlideShow({ array, animationToUse, height, bookName }: ReviewSlideShowProps)
{

    return (

        <div className={styles.reviewSlideContainer}>


            <div className={styles.reviewDisplayer} style={{ height: height }}>
                {array.map((item, index) =>
                {

                    return (

                        <ReviewCard key={item._id} _id={item._id} bookReviewed={bookName} format={item.format} date={item.date} country={item.country}
                            stars={item.stars} reviewerName={item.reviewerName} titleReview={item.titleReview} reviewedOn={item.reviewedOn}
                            reviewDescription={item.reviewDescription} linkReview={item.linkReview} animationToUse={animationToUse} />);

                }
                )}

            </div>


        </div>

    );
}
