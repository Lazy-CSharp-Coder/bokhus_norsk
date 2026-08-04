import { client } from "@/sanity/client";
import { Series } from "@/types/booktypes";

import { GoLinkExternal } from "react-icons/go";
import "./WhereToBuy.module.css";
import { ExpandingLine } from "@/components/common/ExpandingLine";
import { BackgroundImage } from "@/components/common/BackgroundImage";

import type { WhereToBuySeriesProps } from "./WhereToBuyTypes";
import { getWhereToBuyPropsArray } from "./getWhereToBuyPropsArray";
import { WhereToBuyList } from "./WhereToBuyList";
import "./WhereToBuy.module.css";

export default async function WhereToBuy() 
{

  const SERIES_QUERY = `*[_type == "Series"] | order(seriesName asc)`;

  // fecth all Series
  const series = await client.fetch<Series[]>(SERIES_QUERY);

  if (!series) return (<h2 className="entiresNotFoundText">No series found in database</h2>);

  const buyArray: WhereToBuySeriesProps[] = await getWhereToBuyPropsArray(series);
  if (buyArray.length < 0) return (
    <div className="entriesNotFoundText">
      No entires found
    </div>

  );

  const waitForBackground = 500;

  return (
 

      <main className="whereToBuyPage flex">
        <BackgroundImage className="whereToBuyBackground" src="/images/backgrounds/whereToBuy.avif" alt="WhereToBuy Page Image"/>

        <section className="whereToBuySection">
          <div className="headingLineWrapper">
            <h1 className="whereToBuyHeading fadeInAnim" style={{animationDelay : `${waitForBackground}ms`}}>Where to buy books from Bokhus</h1>
            <ExpandingLine key={"BuyLine"} lineSize={2} color="var(--bokhusRootsColor)" animationDuration="2s" animationDelay="0.7s" />
          </div>

          <div className="buyIntroContainer fadeInAnim" style={{animationDelay : `${waitForBackground}ms`}}>

            <p className="whereToBuyText"> Here are links to websites where you can purchase books and series from us. </p>
            <p className="whereToBuyText">Should you experience some trouble with the links or other issues, please use the contact form to tell us about it.</p>

          </div>
          <div className="amazonDiv fadeInAnim"  style={{animationDelay : `${waitForBackground + 200}ms`}}>
            <div className="amazonHeadingIconWrapper flex">
              <h2 className="amazonHeading">BokHus is an <span className="amazonAffiliateSpan">Affiliate of Amazon</span></h2>

              <GoLinkExternal size="1.9rem" className="amazonIconLink" />
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
          <WhereToBuyList buyArray={buyArray}/>


        </section>
      </main>
   
  );
}
