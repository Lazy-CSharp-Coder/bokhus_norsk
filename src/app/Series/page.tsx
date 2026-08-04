import type { Series } from "@/types/booktypes";
import { client } from "@/sanity/client";
import "./Series.module.css";
import { ExpandingLine } from "@/components/common/ExpandingLine";
import { BackgroundImage } from "@/components/common/BackgroundImage";
import { SeriesPageList } from "./SeriesPageList";
import { ErrorPage } from "@/components/common/ErrorPage";
export default async function Series() 
{
  const SERIES_QUERY = `*[_type == "Series"] | order(seriesName asc)`;
  const AUTHORS_QUERY = `*[_type == "Author" &&  _id in $authorsIds]`;
  const series = await client.fetch<Series[]>(SERIES_QUERY);

  if (!series) return (<ErrorPage message="No series found in database" />);

  return (
    <>
      <BackgroundImage className="seriesPageBackgroundImage" src={"/images/backgrounds/authors.webp"}  />
      <main className="seriesPage flex">

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
          <SeriesPageList seriesArray={series} />
        </section>






      </main>
    </>

  );
}
