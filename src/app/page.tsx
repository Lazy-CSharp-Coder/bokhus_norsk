"use client";

import { BackgroundImage } from "@/components/common/BackgroundImage";


import "./Heropage.module.css";
import { useLanguageChosen } from "@/globalStates";
import { QuotesBottom } from "@/components/common/QuotesBottom";

export default function Home() 
{

  const colorCodes: string[] =
    [
      "rgb(178, 126, 29)", "#B8AEA3", "lightblue"
    ];

  const animInc = 0;

  const waitForMain = 300;
  const { heroPage } = useLanguageChosen();
  const { quotesHeading, descriptionBokhus } = heroPage;


  return (
    <>
      <BackgroundImage key={"#herobackground#"} className="backgroundImageHero" src="/images/backgrounds/hero5.png" animDelay="0s" animDuration="1s" />

      <main className="heroPage flex">

        <section className="heroSection flex fadeInAnim" style={{ animationDelay: "0.6s" }}>

          <div className="headingQuoteDiv flex">
            <h1 className="heroHeading">Bok<span className="heroHeadingSpan">Hus</span></h1>
            <div className="quotesDiv flex">
              <h3 className="quoteText fadeInAnimQuotesx">{quotesHeading[0].start}<span className="rootsText fadeInAnimx">{quotesHeading[0].end}</span></h3>
              <h3 className="quoteText2 fadeInAnimQuotesx">{quotesHeading[1].start} <span className="futureText fadeInAnimx">{quotesHeading[1].end}</span></h3>
            </div>
          </div>
          <div className="descriptionDivHeroPage flex">
            {descriptionBokhus.map((item, index) =>
              <p key={index + "#HP#DESCRIPTION"} className="fadeInAnimQuotesx" style={{ animationDelay: `${(index * animInc) + waitForMain}ms` }}>{item}</p>
            )}

          </div>
          <QuotesBottom fontSize="2.4rem" />
        </section>


        {/* <p>To be updated......</p> */}

      </main>
    </>

  );
}

