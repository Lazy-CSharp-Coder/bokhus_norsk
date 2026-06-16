
import type { Author } from "@/types/booktypes";
import { AuthorCard } from "@/components/authors/AuthorCard";
import { BackgroundImage } from "@/components/global/BackgroundImage";
import { client } from "@/sanity/client";
import Link from "next/link";
// css specific import for this page
import "./Authors.module.css";
import { urlFor } from "@/lib/urlFor";

export default async function Authors()
{
    const animDelayInc: number = 300;

    const AUTOHRS_QUERY = `*[_type == "Author"]`;
    const authors: Author[] = await client.fetch<Author[]>(AUTOHRS_QUERY);
    authors.forEach((item) => console.log("Name : " + item.name));
    console.log(urlFor(authors[0].profileImage, 800));
    console.log(authors);
    // const authors = authorsFromServer;  // this works, but shows no image
    const setRouteToGo = (author: Author) =>
    {
        const params = new URLSearchParams();
        console.log("uid from sanity is  " + author._id);
        params.set("message", author._id);
        return (`/GeneralAuthorPage?${params.toString()}`);

    };


    return (
        <>
            <BackgroundImage className="backgroundImageAuthorsPage" src={"/images/backgrounds/authorBackground1.png"}/>
            <main className="authorsPage flex">
                <div className="bokhusAuthorsHeadingWrapper flex">
                    <h2 className="authorsPageRepresentedText">Authors at <span className="bokhusText">BokHus.com </span></h2>
                    <p className="authorsPageText">These are the authors that is represented by us</p>
                    <p className="clickText">Click on <span className="authorCardClickText">Author Card</span>  to access series available</p>
                </div>

                {authors.length > 0 ?
                    <ul className="linkList">
                        {authors.map((item, index) =>
                            <Link  key={item.name + index} href={setRouteToGo(item)}> 
                                <AuthorCard _id={item._id} profileImage={item.profileImage} name={item.name} subTitle={item.subTitle} genre={item.genre} description={item.description} animationDelay={`${index*animDelayInc}ms`}/>
                            </Link>
                        )}

                    </ul> : <p>No authors found or accesible from server</p>
                }


            </main>

        </>
    );
}