import type { SeriesSectionProps } from "@/types/booktypes";
import { BooksArticle } from "./BooksArticle";
import { SeriesInfoArticle } from "./SeriesInfoArticle";


export function SeriesSection({ seriesSelected, booksBelonging, authors } : SeriesSectionProps)
{
    console.log(authors);
    const bestSellerIntro: string = authors[0].bestSellerIntro ?? "not found";
    const bestSellerList: string[] = authors[0].bestSellerList ?? ["not found"];

    const authorsStrArray = authors.map(item => item.name);
    console.log("series selected " + seriesSelected);
    console.log("authors" + authorsStrArray );
    console.log("")
    return (
        <section className="seriesSection flex">
            <SeriesInfoArticle key={seriesSelected._id} seriesName={seriesSelected.seriesName} authors={authorsStrArray}
                bestSellerIntro={bestSellerIntro} bestSellerList={bestSellerList} />
            <BooksArticle key={seriesSelected._id + "#BookArticle#"}authors={authorsStrArray} series={seriesSelected} bookList={booksBelonging}  />
           

        </section>
    );


}

