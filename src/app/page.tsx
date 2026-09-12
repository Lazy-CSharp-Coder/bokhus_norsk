import { BackgroundImage } from "@/components/common/BackgroundImage";
import styles from "./Heropage.module.css";
import { QuotesBottom } from "@/components/common/QuotesBottom";
import languageJson from "@/json/languages.json"

export default function Home() 
{

  const waitForMain = 300;


  const { quotesHeading, descriptionBokhus} = languageJson[0].heroPage;


  return (
    <>
      <BackgroundImage key={"#herobackground#"}  src="/images/backgrounds/hero2.webp" className={styles.heroPageBackground}/>

      <main className={styles.heroPage}>

        <section className="heroSection flex fadeInAnim" style={{ animationDelay: "0.6s" }}>

          <div className="headingQuoteDiv flex">
            <h1 className="heroHeading">Bok<span className="heroHeadingSpan">Hus</span></h1>
            <div className="quotesDiv flex">
              <h2 className="quoteText fadeInAnimQuotesx">{quotesHeading[0].start}<span className="rootsText fadeInAnimx">{quotesHeading[0].end}</span></h2>
              <h2 className="quoteText2 fadeInAnimQuotesx">{quotesHeading[1].start} <span className="futureText fadeInAnimx">{quotesHeading[1].end}</span></h2>
            </div>
          </div>
          <div className="descriptionDivHeroPage flex">
            {descriptionBokhus.map((item, index) =>
              <p key={index + "#HP#DESCRIPTION"} className="fadeInAnimQuotesx" style={{ animationDelay: `${(index) + waitForMain}ms` }}>{item}</p>
            )}

          </div>
          <QuotesBottom fontSize="2.4rem" />
        </section>


        {/* <p>To be updated......</p> */}

      </main>
    </>

  );
}

