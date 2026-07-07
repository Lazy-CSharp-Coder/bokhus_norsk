import type { PageProps } from "@/types/types";
import type { Author } from "@/types/booktypes";
import { client } from "@/sanity/client";
import AuthorSection from "@/components/authors/AuthorSection";
import "./DynamicAuthorPage.module.css";
import { BackgroundImage } from "@/components/global/BackgroundImage";


export default async function DynamicAuthorPage({ searchParams }: PageProps)
{

    const params = await searchParams;
    const authorUid = params.message as string;

    const AUTOHRS_QUERY = `*[_type == "Author" && _id == $authorUid]`;
    const authors: Author[] = await client.fetch<Author[]>(AUTOHRS_QUERY, { authorUid: authorUid });

    if (!authors) return;
    console.log("Author fetched is : " + authors[0].name);

    return (
        <>
            <BackgroundImage className="backgroundImageAuthorsPage" src={"/images/backgrounds/pen.jpg"} />
        <main className="authorsPage flex">
        
            <AuthorSection author={authors[0]} />
        </main>
        </>

    );
} 