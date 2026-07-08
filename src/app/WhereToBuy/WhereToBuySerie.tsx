import { Series } from "@/types/booktypes";


interface WhereToBuySeriesProps 
{
  serieSelected: Series,

}

export async function WhereToBuySerie({ serieSelected }: WhereToBuySeriesProps)
{
  // fetch authors and books here.

  return (
    <article className="whereToBuySerieArticle">
      <div className="whereToBuySerieHeadingDiv">
{serieSelected.seriesName}
      </div>

      <ul className="whereToBuyBooksInSerieList">



      </ul>

    </article>

  );
}
