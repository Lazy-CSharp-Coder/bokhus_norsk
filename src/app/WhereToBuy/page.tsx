import { client } from "@/sanity/client";
import { Series } from "@/types/booktypes";
import { WhereToBuySerie } from "./WhereToBuySerie";
import { TbExternalLink } from "react-icons/tb";
import { LuShoppingCart } from "react-icons/lu";
import "./WhereToBuy.module.css";
import { ExpandingLine } from "@/components/common/ExpandingLine";
import { BackgroundImage } from "@/components/common/BackgroundImage";
import { BokHusCom } from "@/components/common/BokHusCom";

export default async function WhereToBuy() 
{

  const SERIES_QUERY = `*[_type == "Series"] | order(seriesName asc)`;
  const AUTHORS_QUERY = `*[_type == "Author" &&  _id in $authorsIds]`;
  const series = await client.fetch<Series[]>(SERIES_QUERY);

  if (!series) return (<h2 className="entiresNotFoundText">No series found in database</h2>);
  return (
    <>

      <main className="whereToBuyPage flex">
        <BackgroundImage src="/images/backgrounds/contact.png" />

       <section className="whereToBuySection">
        <div className="headingLineWrapper">
                             <h2 className="whereToBuyHeading">Where to buy books from Bokhus</h2>
                               <ExpandingLine key={"BuyLine"} lineSize={2} color="var(--bokhusRootsColor)" animationDuration="2s" animationDelay="0.7s" />
                           </div> 
         
<div className="buyIntroContainer">
  
        <p className="whereToBuyText"> Here are links to websites where you can purchase books and series from us. </p>
        <p className="whereToBuyText">Should you experience some trouble with the links or other issues, please use the contact form to tell us about it.</p>

</div>
        <div className="amazonDiv fadeInAnim">
          <div className="amazonHeadingIconWrapper flex">
            <h3 className="amazonHeading">Bokhus is an <span className="amazonAffiliateSpan">Affiliate of Amazon</span></h3>

            <TbExternalLink size="2rem" className="amazonIconLink" />
          </div>


          <div className="amazonTextContainer">
            <p className="amazonText">
              This page contains links to books published by our company and sold through Amazon.
            </p>
            <strong>As an Amazon Associate we earn from qualifying purchases.</strong>
            <p className="amazonText">
              If you purchase one of our books through an Amazon link on this website, we may receive both the normal proceeds from the sale of the book and an Amazon Associates commission, at no additional cost to you.
            </p>
            <p className="amazonlText">
              We include these links to make it easy for readers to purchase our books through their preferred Amazon marketplace.
            </p>

          </div>
          <p className="amazonTextBottom">
            Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its affiliates.
          </p>
        </div>
  
        {
          series.map((item) =>
            <WhereToBuySerie key={item._id + "WhereToBuy"} serieSelected={item} />
          )


        }
       </section>
      </main>
    </>

  );
}
