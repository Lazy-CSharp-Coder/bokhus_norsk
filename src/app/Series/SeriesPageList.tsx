
import { getSeriesCardPropsArray } from "./getSeriesCardPropsArray";
import { SeriesCardLarge } from "../../components/common/SeriesCardLarge";

import type { SeriesCardProps, Series } from "@/types/booktypes";
import { SeriesPageListProps } from "./SeriesPageTypes";

export async function SeriesPageList({ seriesArray }: SeriesPageListProps)
{
    const seriesToDisplay: SeriesCardProps[] = await getSeriesCardPropsArray(seriesArray);
    const animDelay = 200;
    return (
        <article className="seriesPageListArticle">
            <ul className="seriesList">
                {seriesToDisplay.map((item, index) => (
                    <li key={`${item.seriesSelected.seriesName + index}`}>
                        <SeriesCardLarge {...item} animationDelay={index * animDelay} />
                    </li>
                ))}
            </ul>
        </article>
    );
}
