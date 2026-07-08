import { client } from "@/sanity/client";
import { Series } from "@/types/booktypes";
import { WhereToBuySerie } from "./WhereToBuySerie";

import "./WhereToBuy.module.css";

export default async function WhereToBuy() 
{

  const SERIES_QUERY = `*[_type == "Series"] | order(seriesName asc)`;
  const AUTHORS_QUERY = `*[_type == "Author" &&  _id in $authorsIds]`;
  const series = await client.fetch<Series[]>(SERIES_QUERY);

  if (!series) return (<h2 className="entiresNotFoundText">No series found in database</h2>);
  return (
    <>

      <main className="whereToBuyPage flex">

        <h2 className="whereToBuyHeading">Where to buy books from Bokhus</h2>

        <p className="whereToBuyText"> Here are the places with links from where you can buy books and series from Bokhus </p>
        <p className="whereToBuyText">Should you experience some trouble with the links or other issues, please use the contact form to tell us about it</p>
        {
            series.map((item) =>
            <WhereToBuySerie key={item._id} serieSelected={item}/>
          )


        }
      </main>
    </>

  );
}
