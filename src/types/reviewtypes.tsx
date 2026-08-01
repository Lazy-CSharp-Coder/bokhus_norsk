import { SanityReference } from "next-sanity";

export interface Review
{

    _id: string,
    format?: string,
    date: string,
    reviewedOn: string,
    country: string,
    stars: number,
    reviewerName: string,
    titleReview: string,
    reviewDescription: string[],
    linkReview: string;

}

export type AnimationToUse = "fadeInFromLeftAnim" | "fadeInFromRightAnim" | "none";
export type AsyncStatus = "loading" | "done" | "not started";
export interface ReviewProps extends Review
{
    bookReviewed : string,
    doAnimateStars?: boolean;
    animationToUse: AnimationToUse,

}