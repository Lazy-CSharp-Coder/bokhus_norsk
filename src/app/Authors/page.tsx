
import type { Author } from "@/types/booktypes";
import { AuthorCard } from "@/app/Authors/components/AuthorCard";
import { BackgroundImage } from "@/components/common/BackgroundImage";
import { client } from "@/sanity/client";
import Link from "next/link";

// css specific import for this page

import { ExpandingLine } from "@/components/common/ExpandingLine";
import styles from "./Authors.module.css";
import { ErrorBokhus } from "../ErrorBokhus";

export default async function Authors()
{
    const animDelayInc: number = 300;
    const waitForMain: number = 800;

    const AUTOHRS_QUERY = `*[_type == "Author"] | order(name asc)`;
    let authors : Author[] = [];
    try {
     
        
              authors = await client.fetch<Author[]>(AUTOHRS_QUERY,{}, {next : { tags :["Author"]}});
        

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
            <BackgroundImage className={`${styles.authorsBackgroundImage}`} src={"/images/backgrounds/authors.webp"}/>
            <main className={`${styles.authorsPage} flex`}>
                <div className={`${styles.authorsSection}`}>

                    <div className={`${styles.authorsHeadingWrapper}`}>

                        <div className={`${styles.authorsHeadingLineWrapper}`}>
                            <h1 className={`${styles.authorsPageHeading} fadeInAnim`}>Møt <span className={`${styles.voicesText}`}>forfatterne</span> bak bøkene våre</h1>
                            <ExpandingLine key={"AuthorLine"} lineSize={2} color="var(--bokhusRootsColor)" width="100%" animationDuration="2.8s" animationDelay="0.5s" />
                        </div>
                        <p className={`${styles.authorsPageText} fadeInAnim`}>BokHus representerer forfattere med et sterkt engasjement for fortellinger, steder og historie. Fra historiske romaner og folketro til lærerike fortellinger og lokalhistorie skaper våre forfattere bøker som inviterer leserne inn i verdener de kan vende tilbake til.
                        </p>
                        <p className={`${styles.clickText} scaleInAnim`} style={{ animationDelay: "2s" }}>Klikk på et<span className={`${styles.authorCardClickText}`}> forfatterkort</span> for å utforske tilgjengelige bøker og bokserier.</p>

                    </div>


                    {authors.length > 0 ?
                        <ul className={`${styles.linkList}`}>
                            {authors.map((item, index) =>
                                <Link key={item.name + index} href={setRouteToGo(item)}>
                                    <AuthorCard _id={item._id} profileImage={item.profileImage} name={item.name} subTitle={item.subTitle} genre={item.genre} description={item.description} animationDelay={`${index * animDelayInc + waitForMain}ms`} shouldDisplayGuidance={true} forLanguagePage={item.forLanguagePage}/>
                                </Link>
                            )}

                        </ul> : <ErrorBokhus msg="Ingen forfattere funnet i databasen."/>
                    }

                </div>
            </main>

        </>
    );
}