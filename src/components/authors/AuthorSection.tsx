import type { Author, Series, SeriesCardProps } from "@/types/booktypes";
import { AuthorCard } from "./AuthorCard";
import { SeriesCard } from "./SeriesCard";
import { SeriesHeading } from "./SeriesHeading";
import { client } from "@/sanity/client";
import { urlFor } from "@/lib/urlFor";
import { SanityReference } from "next-sanity";
import { get } from "http";
export const language = "English";

export function setRouteToGo(serie : Series) 
{
    const params = new URLSearchParams();
        console.log("uid from sanity is  " + serie._id);
        params.set("message", serie._id);
        return (`/DynamicSeriePage?${params.toString()}`);
}

export default async function AuthorSection({ author }: { author: Author; })
{
    // set a placeholder if not found 
    const { _id, name, profileImage, subTitle, bestSellerIntro, bestSellerList, description } = author;
    const SERIES_QUERY = `*[_type == "Series" && references($authorUid)]`;
    const seriesAuthor: Series[] = await client.fetch<Series[]>(SERIES_QUERY, { authorUid: _id });

    if (seriesAuthor.length < 1) console.log("series not found. Queriy wrong");
    const animInc: number = 200;
    const animWaitForMain: number = 300;

    // const setRouteToGo = (serie: Series) =>
    // {
    //     const params = new URLSearchParams();
    //     console.log("uid from sanity is  " + serie._id);
    //     params.set("message", serie._id);
    //     return (`/GeneralSeriePage?${params.toString()}`);

    // };

    const getAuthorsForSeries = async (serie : Series): Promise<string[]>  =>
    {
        const uids : string[] = serie.authorUids.map((item ) => item._ref);
        const AUTHORS_QUERY = `*[_type == "Author" && _id in &authorUids]`;
        const authorObjects : Author[] = await client.fetch<Author[]>(AUTHORS_QUERY, { authorsUids : uids});
        if(!authorObjects)
            {
                console.error("could not find authors for series");
                return  [];
            } 
        const authorsStrings : string[] = authorObjects.map((item) => item._id);
        return authorsStrings;
    }
    const array : string[] = [ author.name];
    const animDelayInc : number = 200;
    return (
        <>

            <section className="authorSection flex">
                <AuthorCard _id={_id} profileImage={profileImage} name={name} description={description} bestSellerIntro={bestSellerIntro} bestSellerList={bestSellerList} subTitle={subTitle} genre={author.genre}/>
                <SeriesHeading authorName={name} animationDelay={200} />

                <ul className="seriesCardList flex">
                    {seriesAuthor.length > 0 &&
                        seriesAuthor.map((item, index) =>
                            <SeriesCard key={item._id} authors={array} seriesSelected={item} imageUrl={urlFor(item.imageSeries, 800)} routeToGo={setRouteToGo(item)} animationDelay={(index * animInc) + animWaitForMain} />)

                    } </ul>
            </section>
        </>
    );
}
