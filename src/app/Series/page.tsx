import type { Series } from "@/types/booktypes";
import { client } from "@/sanity/client";
import "./Series.module.css";
import { ExpandingLine } from "@/components/global/ExpandingLine";

export default async function Series() 
{
  const SERIES_QUERY = `*[_type == "Series"] | order(seriesName asc)`;

  const series = await client.fetch<Series[]>(SERIES_QUERY);
  if (!series) return (<h2>No series found in database</h2>);

  return (
    <>

      <main className="completeSeriesPage flex">
        <section className="seriesPageSection">
          <article className="seriesPageDescriptionArticle">
            <div className="seriesPageHeadingLineWrapper">

              <h2 className="seriesPageHeading">Series from BokHus </h2>
              <ExpandingLine key={"AuthorLine"} lineSize={2} color="var(--bokhusRootsColor)" width="100%" animationDuration="2.8s" animationDelay="0.5s" />
            </div>

        <div className="seriesPageTextDiv">
              <p className="seriesPageText">

              Many BokHus books are built as series, giving readers a world to return to. Characters, places and historical themes can grow from book to book, whether the stories are rooted in fiction, folklore, local history or cultural memory.
            </p>   <p className="seriesPageText">


              Here you can explore current and upcoming BokHus series.
            </p>
        </div>

          </article>

        </section>

        <article className="seriesPageListArticle">


          <ul className="seriesList">

            {series.map((item, index) =>
              <li key={`${item.seriesName + index}`} >{item.seriesName}</li>)}


          </ul>

        </article>






      </main>
    </>

  );
}
