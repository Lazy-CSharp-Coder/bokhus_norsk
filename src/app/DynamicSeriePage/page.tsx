import { BackgroundImage } from "@/components/common/BackgroundImage";
import { SerieSection } from "@/app/DynamicSeriePage/components/SerieSection";
import type { Series, Book, Author } from "@/types/booktypes";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import { client } from "@/sanity/client";

// css module import
import "./DynamicSeriePage.module.css";
import type { PageProps } from "@/types/types";
import { urlFor } from "@/functions/urlFor";
import { ErrorBokhus } from "../ErrorBokhus";

// ******************

export default async function DynamicSeriePage({ searchParams }: PageProps)
{
   // const eastEndLassUid = "#SL#EASTENDLASS";
   // const authorUids = ["#Sigrid#Lunde"];
   // sette opp variabel for å hente inn serie ved searchParams

   const params = await searchParams;
   const serieUid = params.message as string;
   let serie: Series;


   console.log("Serie id sendt to General Page is " + serieUid);

   const SERIES_QUERY = `*[_type == "Series" && _id == $serieUidFromParams][0]`;
   const AUTHORS_QUERY = `*[_type == "Author" &&  _id in $authorsIds]`;
   const BOOK_QUERY = `*[_type == "Book" && seriesRef._ref == $serieID] | order(bookInSeries asc)`;

   try
   {
      serie = await client.fetch<Series>(SERIES_QUERY, { serieUidFromParams: serieUid });
   }
   catch (error)
   {
      console.error("Sanity fetch failed :", error);
      throw new Error("Failed to fetch series from Sanity");
   }

;
   if (!serie) return (<ErrorBokhus msg="SERIE NOT FOUND." />);

   const authorsIds: string[] = serie.authorUids ? serie.authorUids.map((item) => item._ref) : [];

   serie.authorUids.forEach((item) => { console.log(item._ref); });

   let authors: Author[] = [];

   if(authorsIds.length > 0)
   try
   {
      authors = await client.fetch<Author[]>(AUTHORS_QUERY, { authorsIds: authorsIds });
   }
   catch (error)
   {
      console.error("Sanity fetch failed :", error);
      throw new Error("Failed to fetch authors from Sanity");
   }




   let bookList: Book[] = [];
   // console.log(authors);

   try
   {
      bookList = await client.fetch<Book[]>(BOOK_QUERY, { serieID: serie._id });
   }
   catch (error)
   {
      console.error("Sanity fetch failed :", error);
      throw new Error("Failed to fetch authors from Sanity");
   }
   
   if (authors.length < 1)
   {
      console.log("Error fetching : No author for series found.");
      return <ErrorBokhus msg="AUTHORS NOT FOUND IN DATABASE" />;

   }

   if (bookList.length < 1)
   {

      console.log("Error fetching : No books for series found.");
      return <ErrorBokhus msg="BOOKS FOR SERIE NOT FOUND IN DATABASE" />;

   }

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