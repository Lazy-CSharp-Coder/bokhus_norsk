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

    // fetch author from Sanity using searhParams

    const AUTOHRS_QUERY = `*[_type == "Author" && _id == $authorUid][0]`;
    let author: Author;

    try
    {

        author = await await client.fetch<Author>(AUTOHRS_QUERY, { authorUid: authorUid });
    }
    catch (error)
    {
        console.error("Sanity fetch failed :", error);
        throw new Error("Failed to fetch authors from Sanity");
    }

    if (!author) 
    {
        return (<ErrorBokhus msg="No author found in database. Please try again later." />);
    }


    return (
        <>
            <BackgroundImage className="backgroundImageAuthorsPage" src="/images/backgrounds/pen.avif" />
            <main className="authorsPage flex">

                <AuthorSection author={author} />
            </main>
        </>

    );
} 