
import type { Author } from "@/types/booktypes";
import { AuthorCard } from "@/components/authors/AuthorCard";
import { BackgroundImage } from "@/components/global/BackgroundImage";
import { client } from "@/sanity/client";
import Link from "next/link";
// css specific import for this page
import "./Authors.module.css";
import { urlFor } from "@/lib/urlFor";
import { BokHusCom } from "@/components/global/BokHusCom";
import { ExpandingLine } from "@/components/global/ExpandingLine";

export default async function Authors()
{
    const animDelayInc: number = 300;
    const waitForMain : number = 800;

    const AUTOHRS_QUERY = `*[_type == "Author"]`;
    const authors: Author[] = await client.fetch<Author[]>(AUTOHRS_QUERY);

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

                                  
                <div className="headingLineWrappr">
                        <h2 className="authorsPageRepresentedText fadeInAnim">Meet the <span className="voicesText">voices</span> behind our books</h2>
                    <ExpandingLine lineSize={2} color="var(--bokhusRootsColor)" width="100%" animationDuration="2.8s" animationDelay="0.5s"/>
                </div>
                    <p className="authorsPageText fadeInAnim">BokHus represents authors with a strong sense of story, place and history. From historical fiction and folklore to educational stories and local heritage, our writers create books that invite readers into worlds they can return to.
</p>
                    <p className="clickText scaleInAnim" style={{animationDelay: "2s"}}>(Click on <span className="authorCardClickText">Author Card</span> to explore available books and series)</p>
                </div>

                {authors.length > 0 ?
                    <ul className="linkList">
                        {authors.map((item, index) =>
                            <Link  key={item.name + index} href={setRouteToGo(item)}> 
                                <AuthorCard _id={item._id} profileImage={item.profileImage} name={item.name} subTitle={item.subTitle} genre={item.genre} description={item.description} animationDelay={`${index*animDelayInc+waitForMain}ms`}/>
                            </Link>
                        )}

                    </ul> : <p>No authors found or accesible from server</p>
                }


            </main>

        </>
    );
}