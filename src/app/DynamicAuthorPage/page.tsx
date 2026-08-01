import type { PageProps } from "@/types/types";
import type { Author } from "@/types/booktypes";
import { client } from "@/sanity/client";
import AuthorSection from "@/app/DynamicAuthorPage/components/AuthorSection";
import "./DynamicAuthorPage.module.css";
import { BackgroundImage } from "@/components/common/BackgroundImage";
import { ErrorBokhus } from "../ErrorBokhus";

export default async function DynamicAuthorPage({ searchParams }: PageProps)
{

    const params = await searchParams;
    const authorUid = params.message as string;

    const AUTOHRS_QUERY = `*[_type == "Author" && _id == $authorUid]`;
    let authors: Author[] = [];


    try
    {


        authors = await await client.fetch<Author[]>(AUTOHRS_QUERY, { authorUid: authorUid });


    }
    catch (error)
    {
        console.error("Sanity fetch failed :", error);
        throw new Error("Failed to fetch authors from Sanity");
    }

    if (authors.length < 1) 
    {
        return (<ErrorBokhus msg="No authors found in database. Please try again later." />);
    }


    return (
        <>
            <BackgroundImage className="backgroundImageAuthorsPage" src={"/images/backgrounds/pen.jpg"} />
            <main className="authorsPage flex">

                <AuthorSection author={authors[0]} />
            </main>
        </>

    );
} 