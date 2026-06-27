"use client";

import { BackgroundImage } from "@/components/global/BackgroundImage";
import { BokHus } from "./BoKHus";

import "./Heropage.module.css";
import { useLanguageChosen } from "@/globalStates";
import { QuotesBottom } from "@/components/global/QuotesBottom";

export default function Home() 
{

  const colorCodes: string[] =
    [
      "rgb(178, 126, 29)", "#B8AEA3", "lightblue"
    ];

  const animInc = 0;

  const waitForMain = 300;


  const { languageNumber, heroPage } = useLanguageChosen();

  return (
    <>
      <BackgroundImage key={"#herobackground#"} className="backgroundImageHero" src="/images/backgrounds/hero5.png" animDelay="0s" animDuration="1s" />


      <main className="heroPage flex">

        <section key={languageNumber + "#hero#"} className="heroSection flex fadeInAnim" style={{ animationDelay: "0.6s" }}>

          <BokHus heroPage={heroPage} />
          <div className="descriptionDivHeroPage flex">
            {heroPage.descriptionBokhus.map((item, index) =>
              <p key={index + "#HP#DESCRIPTION"} className="fadeInAnimQuotesx" style={{ animationDelay: `${(index * animInc) + waitForMain}ms` }}>{item}</p>
            )}

          </div>
          <QuotesBottom fontSize="2.4rem"/>
        </section>


        {/* <p>To be updated......</p> */}

      </main>
    </>

  );
}

