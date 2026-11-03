import { client } from "@/sanity/client";
import { Series } from "@/types/booktypes";

import { GoLinkExternal } from "react-icons/go";
import "./WhereToBuy.module.css";
import { ExpandingLine } from "@/components/common/ExpandingLine";
import { BackgroundImage } from "@/components/common/BackgroundImage";

import type { WhereToBuySeriesProps } from "./WhereToBuyTypes";
import { getWhereToBuyPropsArray } from "./getWhereToBuyPropsArray";
import { WhereToBuyList } from "./WhereToBuyList";
import styles from "./WhereToBuy.module.css";

export default async function WhereToBuy() 
{
    const languagePage = "NO";

  const SERIES_QUERY = `*[_type == "Series"  && forLanguagePage == $languagePage] | order(seriesName asc)`;
  // fecth all Series
  const series = await client.fetch<Series[]>(SERIES_QUERY, {languagePage : languagePage});
  if (!series) return (<h2 className="entiresNotFoundText">No series found in database</h2>);

  const buyArray: WhereToBuySeriesProps[] = await getWhereToBuyPropsArray(series);
  if (buyArray.length < 0) return (
    <div className="entriesNotFoundText">
      No entires found
    </div>

  );

  const waitForBackground = 500;

  return (
 

      <main className={styles.whereToBuyPage}>
        <BackgroundImage className={styles.whereToBuyBackground} src="/images/backgrounds/whereToBuy.webp" />

        <section className={styles.whereToBuySection}>
          <div className={styles.headingLineWrapper}>
            <h1 className={`${styles.whereToBuyHeading} fadeInAnim`} style={{animationDelay : `${waitForBackground}ms`}}>Hvor kan du kjøpe bøker fra BokHus?</h1>
            <ExpandingLine key={"BuyLine"} lineSize={2} color="var(--bokhusRootsColor)" animationDuration="2s" animationDelay="0.7s" />
          </div>

          <div className={`${styles.buyIntroContainer} fadeInAnim`} style={{animationDelay : `${waitForBackground}ms`}}>

            <p className={styles.whereToBuyText}> Her finner du lenker til nettbutikker hvor du kan kjøpe bøker og bokserier fra BokHus. </p>
            <p className={styles.whereToBuyText}>Hvis du opplever problemer med lenkene eller har andre spørsmål, kan du kontakte oss via kontaktskjemaet.</p>

          </div>
          <div className={`${styles.amazonDiv} fadeInAnim`} style={{animationDelay : `${waitForBackground + 200}ms`}}>
            <div className={`${styles.amazonHeadingIconWrapper} flex`}>
              <h2 className={styles.amazonHeading}>BokHus er en  <span className={styles.amazonAffiliateSpan}>Amazon-partner</span></h2>

              <GoLinkExternal size="1.9rem" className={styles.amazonIconLink} />
            </div>


            <div className={styles.amazonTextContainer}>
              <p className={styles.amazonText}>
               Denne siden inneholder lenker til bøker utgitt av BokHus og solgt gjennom Amazon.
              </p>
              <strong>Som Amazon-partner tjener vi provisjon på kvalifiserende kjøp.</strong>
              <p className={styles.amazonText}>
               Hvis du kjøper en av bøkene våre gjennom en Amazon-lenke på denne nettsiden, kan vi motta både ordinære inntekter fra boksalget og provisjon gjennom Amazon Associates-programmet. Dette medfører ingen ekstra kostnader for deg.
              </p>
              <p className={styles.amazonlText}>
              Vi tilbyr disse lenkene for å gjøre det enkelt for leserne å kjøpe bøkene våre gjennom den Amazon-butikken de foretrekker.
              </p>

            </div>
            <p className={styles.amazonTextBottom}>
              Amazon og Amazon-logoen er varemerker som tilhører Amazon.com, Inc. eller selskapets tilknyttede selskaper.
            </p>
          </div>
          <WhereToBuyList buyArray={buyArray}/>


        </section>
      </main>
   
  );
}
