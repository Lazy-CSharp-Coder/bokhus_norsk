import type { Author, Book, Series, SeriesCardProps } from "@/types/booktypes";
import { getSeriesCardPropsArray } from "@/app/Series/getSeriesCardPropsArray";
import { AuthorCard } from "../../Authors/components/AuthorCard";
import { AuthorSeriesHeading } from "./AuthorSeriesHeading";
import { client } from "@/sanity/client";
import { urlFor } from "@/functions/urlFor";
import "./AuthorSection.module.css";
import { setRouteToGo } from "@/functions/setRouteToGo";
import { SeriesCardLarge } from "@/components/common/SeriesCardLarge";
import "./AuthorSection.module.css";

export default async function AuthorSection({ author }: { author: Author; })
{
    // set a placeholder if not found 
    const { _id, name, profileImage, subTitle, bestSellerIntro, bestSellerList, description } = author;
    const SERIES_QUERY = `*[_type == "Series" && references($authorUid)]`;
    const BOOK_QUERY = `*[_type == "Book" && seriesRef._ref == $serieID]`;

    const seriesAuthor: Series[] = await client.fetch<Series[]>(SERIES_QUERY, { authorUid: _id });

    if (seriesAuthor.length < 1) console.log("Series not found.");

    const checkForNumberOfBooks = async (item: Series) =>
    {
        const booksToShow: Book[] = await client.fetch<Book[]>(BOOK_QUERY, { serieId: item._id });
        if (booksToShow.length == 1) return booksToShow[0];
        else return item;


    };

    const seriesToDisplay: SeriesCardProps[] = await getSeriesCardPropsArray(seriesAuthor);
    const animInc: number = 200;
    const animWaitForMain: number = 300;

    const array: string[] = [author.name];
    const animDelayInc: number = 200;
    return (
        <>

            <section className="authorSection flex">
                <AuthorCard _id={_id} profileImage={profileImage} name={name} description={description} bestSellerIntro={bestSellerIntro} bestSellerList={bestSellerList} subTitle={subTitle} genre={author.genre} />
                <AuthorSeriesHeading authorName={name} animationDelay={200} />

                <ul className="seriesCardList flex">
                    {seriesToDisplay.length > 0 &&
                        seriesToDisplay.map((item, index) =>
                            <SeriesCardLarge {...item} animationDelay={index * animDelayInc} />)
                           

                    } </ul>
            </section>
        </>
    );
}
