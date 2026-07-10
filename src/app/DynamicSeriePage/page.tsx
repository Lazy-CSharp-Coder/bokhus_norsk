import { BackgroundImage } from "@/components/common/BackgroundImage";
import { SerieSection } from "@/app/DynamicSeriePage/components/SerieSection";
import type { Series, Book, Author } from "@/types/booktypes";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import { client } from "@/sanity/client";

// css module import
import "./DynamicSeriePage.module.css";
import type { PageProps } from "@/types/types";
import { urlFor } from "@/functions/urlFor";



// ******************

export default async function DynamicSeriePage({ searchParams }: PageProps)
{
   // const eastEndLassUid = "#SL#EASTENDLASS";
   // const authorUids = ["#Sigrid#Lunde"];
   // sette opp variabel for å hente inn serie ved searchParams

   const params = await searchParams;
   const serieUid = params.message as string;


   console.log("Serie id sendt to General Page is " + serieUid);

   const SERIES_QUERY = `*[_type == "Series" && _id == $serieUidFromParams]`;
   const AUTHORS_QUERY = `*[_type == "Author" &&  _id in $authorsIds]`;
   const BOOK_QUERY = `*[_type == "Book" && seriesRef._ref == $serieID] | order(bookInSeries asc)`;


   const series = await client.fetch<Series[]>(SERIES_QUERY, { serieUidFromParams: serieUid });
   const serie = series[0];
   const authorsIds: string[] = serie.authorUids ? serie.authorUids.map((item) => item._ref) : [];

   console.log("Serie : " + serie._id + serie.seriesName + serie.authorUids);
   serie.authorUids.forEach((item) => { console.log(item._ref); });

   if (!serie)
   {
      console.log("series not loaded");
      return <h2>Series not found i database</h2>;
   }
   console.log("Serie name " + serie.seriesName);
   const authors: Author[] = await client.fetch<Author[]>(AUTHORS_QUERY, { authorsIds: authorsIds });
   if (authors.length < 1)
   {
      console.log("Error fetching : No author for series found.");
      return <h2>Author not found in database</h2>;
      return;
   }
   // console.log(authors);
   const bookList: Book[] = await client.fetch<Book[]>(BOOK_QUERY, { serieID : serie._id });
   if (bookList.length < 1)
   {

      console.log("Error fetching : No books for series found.");
      return <h2>Books for series not found in database</h2>;

   }

   // const reviews = reviewsJsonEng;
   // const showReviews : boolean = reviews == undefined || reviews == null ? false : true;
   return (
      <>
         <ScrollToTop />
         <BackgroundImage className="seriePageBackgroundImage" src={urlFor(serie.imageSeriesBackground, 1920)} />
         <main className="seriesPage">
            {(serie && authors) &&
               <div className="presentationReviewHrefWrapper">
                  <SerieSection seriesSelected={serie} booksBelonging={bookList} authors={authors} />
               </div>}



         </main>

      </>
   );
}

// <SeriesSection seriesSelected={series} booksBelonging={bookList} authors={authors} /> : <h2>Series not found</h2>