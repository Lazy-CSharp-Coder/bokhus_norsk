import { getSeriesCardPropsArray } from "./getSeriesCardPropsArray";
import { SeriesCardLarge } from "../../components/common/SeriesCardLarge";
import { ErrorPage } from "@/components/common/ErrorPage";

import type { SeriesCardProps } from "@/types/booktypes";
import { SeriesPageListProps } from "./SeriesPageTypes";
import styles from "./Series.module.css";

export async function SeriesPageList({ seriesArray }: SeriesPageListProps)
{   let seriesToDisplay : SeriesCardProps[] = []
    try {
      seriesToDisplay = await getSeriesCardPropsArray(seriesArray);
    }
    catch(error)
    {
        console.error("Error fetching from Sanity : ", error);
        return <ErrorPage message="Could not load series data from the database." linkBack="/Series" />;
    }
    

    const animDelay = 200;
    return (
        <article className={styles.seriesPageListArticle}>
            <ul className={styles.seriesList}>
                {seriesToDisplay.map((item, index) => (
                    <li key={`${item.seriesSelected.seriesName + index}`}>
                        <SeriesCardLarge {...item} animationDelay={index * animDelay} fallbackRouteNoBooks="/"/>
                    </li>
                ))}
            </ul>
        </article>
    );
}
