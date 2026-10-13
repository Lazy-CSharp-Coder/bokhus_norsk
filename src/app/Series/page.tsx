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
     series = await client.fetch<Series[]>(SERIES_QUERY, { }, {next : { tags :["Series"]}});
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

              <h1 className={styles.seriesPageHeading}>Bokserier fra BokHus </h1>
              <ExpandingLine key={"AuthorLine"} lineSize={2} color="var(--bokhusRootsColor)" width="100%" animationDuration="2.8s" animationDelay="0.5s" />
            </div>

            <div className={styles.seriesPageTextDiv}>
              <p className={styles.seriesPageText}>

               Mange av bøkene fra BokHus inngår i serier som gir leserne en verden de kan vende tilbake til. Personer, steder og historiske temaer utvikler seg fra bok til bok, enten fortellingene bygger på skjønnlitteratur, folketro, lokalhistorie eller kulturarv.
              </p>   
              <p className={styles.seriesPageText}>
                Her kan du utforske eksisterende og kommende bokserier fra BokHus.
              </p>
            </div>

          </article>
          <SeriesPageList seriesArray={series} />
        </section>
      </main>
    </>

  );
}
