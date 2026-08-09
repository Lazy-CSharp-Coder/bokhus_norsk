import type { SeriesSectionProps } from "@/types/booktypes";
import { BookListAndCard } from "./BookListAndCard";
import { SerieHeader } from "./SerieHeader";
import styles from  "./SerieSection.module.css";

export function SerieSection({ seriesSelected, booksBelonging, authors }: SeriesSectionProps)
{

    const bestSellerIntro: string = authors[0].bestSellerIntro ?? "not found";
    const bestSellerList: string[] = authors[0].bestSellerList ?? ["not found"];

    const authorsStrArray = authors.map(item => item.name);

    return (
        <section className={styles.serieSection}>
            <SerieHeader key={seriesSelected._id} seriesName={seriesSelected.seriesName} authors={authorsStrArray}
                bestSellerIntro={bestSellerIntro} bestSellerList={bestSellerList} />
            <BookListAndCard key={seriesSelected._id + "#BookArticle#"} authors={authorsStrArray} series={seriesSelected} bookList={booksBelonging} />


        </section>
    );


}

