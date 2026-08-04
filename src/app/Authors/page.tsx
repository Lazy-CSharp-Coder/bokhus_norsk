
import type { Author } from "@/types/booktypes";
import { AuthorCard } from "@/app/Authors/components/AuthorCard";
import { BackgroundImage } from "@/components/common/BackgroundImage";
import { client } from "@/sanity/client";
import Link from "next/link";

// css specific import for this page
import "./Authors.module.css";

import { ExpandingLine } from "@/components/common/ExpandingLine";
import "./Authors.module.css";
import { ErrorBokhus } from "../ErrorBokhus";

export default async function Authors()
{
    const animDelayInc: number = 300;
    const waitForMain: number = 800;

    const AUTOHRS_QUERY = `*[_type == "Author"] | order(name asc)`;
    let authors : Author[] = [];
    try {
     
        
        authors = await client.fetch<Author[]>(AUTOHRS_QUERY);
        

    }
    catch (error)
    {
        console.error("Sanity fetch failed :", error);
        throw new Error("Failed to fetch authors from Sanity");
    }

    if(authors.length < 1) 
    {
        return(<ErrorBokhus msg="No authors found in database. Please try again later."/>)
    }

    const setRouteToGo = (author: Author) =>
    {
        const params = new URLSearchParams();

        params.set("message", author._id);
        return (`/DynamicAuthorPage?${params.toString()}`);

    };


    return (
        <>
            <BackgroundImage className="authorsBackgroundImage" src={"/images/backgrounds/authors.avif"}/>
            <main className="authorsPage flex">
                <div className="authorsSection flex">

                    <div className="authorsHeadingWrapper flex">

                        <div className="authorsHeadingLineWrapper">
                            <h1 className="authorsPageHeading fadeInAnim">Meet the <span className="voicesText">voices</span> behind our books</h1>
                            <ExpandingLine key={"AuthorLine"} lineSize={2} color="var(--bokhusRootsColor)" width="100%" animationDuration="2.8s" animationDelay="0.5s" />
                        </div>
                        <p className="authorsPageText fadeInAnim">BokHus represents authors with a strong sense of story, place and history. From historical fiction and folklore to educational stories and local heritage, our writers create books that invite readers into worlds they can return to.
                        </p>
                        <p className="clickText scaleInAnim" style={{ animationDelay: "2s" }}>Click on <span className="authorCardClickText">Author Card</span> to explore available books and series.</p>



                    </div>


                    {authors.length > 0 ?
                        <ul className="linkList">
                            {authors.map((item, index) =>
                                <Link key={item.name + index} href={setRouteToGo(item)}>
                                    <AuthorCard _id={item._id} profileImage={item.profileImage} name={item.name} subTitle={item.subTitle} genre={item.genre} description={item.description} animationDelay={`${index * animDelayInc + waitForMain}ms`} shouldDisplayGuidance={true}/>
                                </Link>
                            )}

                        </ul> : <p>No authors found or accesible from server</p>
                    }

                </div>
            </main>

        </>
    );
}