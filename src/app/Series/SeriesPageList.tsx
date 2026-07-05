import type { Series } from "@/types/booktypes";
import { SeriesCard } from "./SeriesCard";
import { SeriesCardProps } from "./SeriesPageTypes";
import { SanityReference } from "next-sanity";
import type { Author } from "@/types/booktypes";
import { client } from "@/sanity/client";
interface SeriesPageListProps 
{
    seriesArray : Series[],
    
}
async function getAuthors( authorUids : SanityReference[])
{
    const AUTHORS_QUERY = `*[_type == "Author" &&  _id in $authorsIds]`;
       const authorsIds: string[] = authorUids ? authorUids.map((item) => item._ref) : [];
     const authors: Author[] = await client.fetch<Author[]>(AUTHORS_QUERY, { authorsIds: authorsIds });
       if (authors.length < 1)
       {
          console.log("Error fetching : No author for series found.");
          return [];
          
       }
    const authorsStrArray = authors.map(item => item.name);
    return authorsStrArray;
}


export function SeriesPageList({seriesArray} : SeriesPageListProps)
{

     const seriesToDisplay : SeriesCardProps[] =
    seriesArray.map

        

       
    
       console.log("Serie : " + serie._id + serie.seriesName + serie.authorUids);
       serie.authorUids.forEach((item) => { console.log(item._ref); });

       console.log("Serie name " + serie.seriesName);
  
    const { seriesName, imageSeries, seriesFact, seriesTeaser} = serie;
    
    return(
        <article className="seriesPageListArticle">
          <ul className="seriesList">
            {seriesArray.map((item, index) =>
              <li key={`${item.seriesName + index}`}> <SeriesCard serie={item}/>  </li>)}
          </ul>

        </article>


    )
}