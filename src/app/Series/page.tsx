import type { Series } from "@/types/booktypes";
import { client } from "@/sanity/client";
import styles from  "./Series.module.css";
import { ExpandingLine } from "@/components/common/ExpandingLine";
import { BackgroundImage } from "@/components/common/BackgroundImage";
import { SeriesPageList } from "./SeriesPageList";
import { ErrorPage } from "@/components/common/ErrorPage";
export default async function Series() 
{

  
  const SERIES_QUERY = `*[_type == "Series"] | order(seriesName asc)`;

  let series : Series[] = [];
  try {
     series = await client.fetch<Series[]>(SERIES_QUERY);
  }
  catch(error)
  {
     console.error("Error fecthing series : ", error)
     throw error;

  }

  if (!series) return (<ErrorPage message="No series found in database" />);
  
  return (
    <>
      <BackgroundImage className={styles.seriesPageBackgroundImage} src={"/images/backgrounds/authors.webp"}  />
      <main className={styles.seriesPage}>
        <section className={styles.seriesPageSection}>
          <article className={styles.seriesPageDescriptionArticle}>
            <div className={styles.seriesPageHeadingLineWrapper}>

              <h1 className={styles.seriesPageHeading}>Series from BokHus </h1>
              <ExpandingLine key={"AuthorLine"} lineSize={2} color="var(--bokhusRootsColor)" width="100%" animationDuration="2.8s" animationDelay="0.5s" />
            </div>

            <div className={styles.seriesPageTextDiv}>
              <p className={styles.seriesPageText}>

                Many BokHus books are built as series, giving readers a world to return to. Characters, places and historical themes can grow from book to book, whether the stories are rooted in fiction, folklore, local history or cultural memory.
              </p>   <p className={styles.seriesPageText}>


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
