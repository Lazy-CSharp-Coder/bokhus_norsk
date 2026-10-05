import type { Author, Book, Series, SeriesCardProps } from "@/types/booktypes";
import { getSeriesCardPropsArray } from "@/app/Series/getSeriesCardPropsArray";
import { AuthorCard } from "../../Authors/components/AuthorCard";
import { AuthorSeriesHeading } from "./AuthorSeriesHeading";
import { client } from "@/sanity/client";
import { SeriesCardLarge } from "@/components/common/SeriesCardLarge";
import styles from "./AuthorSection.module.css";
import { NoBooksYet } from "./NoBooksYet";

export default async function AuthorSection({ author }: { author: Author; })
{
    // set a placeholder if not found 
    const { _id, name, profileImage, subTitle, bestSellerIntro, bestSellerList, description } = author;
    const SERIES_QUERY = `*[_type == "Series" && references($authorUid)]`;

    const seriesAuthor: Series[] = await client.fetch<Series[]>(SERIES_QUERY, { authorUid: _id });

    if (seriesAuthor.length < 1) console.log("Series not found.");

    const seriesToDisplay: SeriesCardProps[] = await getSeriesCardPropsArray(seriesAuthor);
    const animDelayInc: number = 200;
    return (


        <section className={styles.authorSection}>
            <AuthorCard _id={_id} profileImage={profileImage} name={name} description={description} bestSellerIntro={bestSellerIntro} bestSellerList={bestSellerList} subTitle={subTitle} genre={author.genre} shouldDisplayGuidance={false} />
            <AuthorSeriesHeading authorName={name} animationDelay={200} />
            {seriesAuthor.length < 1 ?

                <NoBooksYet authorName={author.name} /> :

                <ul className={styles.seriesCardList}>
                    {seriesToDisplay.length > 0 &&
                        seriesToDisplay.map((item, index) =>
                            <SeriesCardLarge key={`#SCAUTHOR + ${index}`} {...item} animationDelay={index * animDelayInc} />)


                    } </ul>
            }
        </section>

    );
}
