import { ContactUs } from "@/components/general/ContactForm";
import "./About.module.css";
import aboutJson from "@/json/about.json";
import type { LanguageText } from "@/types/languagetypes";
import languagesJson from "@/json/languages.json";
import { BackgroundImage } from "@/components/global/BackgroundImage";
import type { About } from "@/types/types";
import { BokHusCom } from "@/components/global/BokHusCom";
import { LanguageChosen } from "@/types/languagetypes";
import { QuotesBottom } from "@/components/global/QuotesBottom";


export default function About()
{
    const aboutUs: About = aboutJson;
    const animInc: number = 200;

    const languageArray: LanguageText[] = languagesJson;
    const { heroPage } = languageArray[0];

    const colorCodes: string[] =
        [
            "rgb(178, 126, 29)", "#B8AEA3", "lightblue"
        ];

    const animIncQuotesBottom = 1700;
    const waitForMain = 300;
    const waitForDescription = 800;

    return (
        <main className="aboutPage flex">
            <BackgroundImage className="aboutBackground" src="/images/backgrounds/authorBackground2.png" />
            <section className="aboutSection flex fadeInAnim">
                <h2 className="aboutHeading fadeInAnim"  style={{ animationDelay: "0.6s" }}>{aboutUs.aboutHeading.toUpperCase()}</h2>
                <div className="aboutTextDiv flex fadeInAnim" style={{ animationDelay: "0.8s" }}>
                    {aboutUs.aboutText.map((item, index) =>
                        <p key={index + "#About#"} className="aboutText" style={{ animationDelay: `${index * animInc}ms` }}>{item}</p>

                    )} 
                    <QuotesBottom fontSize="1.5rem"/>
                </div>


                <div className="bokhusComWrapper fadeInAnim" style={{ animationDelay: "0.6s" }}>
                    <BokHusCom fontSize="1.45rem" />
                </div>
            </section>

        </main>

    );
}