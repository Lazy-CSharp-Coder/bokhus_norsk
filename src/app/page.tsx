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

        <section className={`${styles.heroSection} flex fadeInAnim`} style={{ animationDelay: "0.6s" }}>

          <div className={styles.headingQuoteDiv}>
            <h1 className={styles.heroHeading}>Bok<span className="heroHeadingSpan">Hus</span></h1>
            <div className={styles.quotesDiv}>
              <h2 className={styles.quoteText}>{quotesHeading[0].start}<span className={styles.rootsText}>{quotesHeading[0].end}</span></h2>
              <h2 className={styles.quoteText2}>{quotesHeading[1].start} <span className={styles.futureText}>{quotesHeading[1].end}</span></h2>
            </div>
          </div>
          <div className={styles.descriptionDivHeroPage}>
            {descriptionBokhus.map((item, index) =>
              <p key={index + "#HP#DESCRIPTION"} >{item}</p>
            )}

          </div>
          <QuotesBottom fontSize="2.4rem" />
        </section>



      </main>
    </>

  );
}

