import "./About.module.css";
import aboutJson from "@/json/about.json";
import type { LanguageText } from "@/types/languagetypes";
import languagesJson from "@/json/languages.json";
import { BackgroundImage } from "@/components/common/BackgroundImage";
import type { About } from "@/types/types";
import { BokHusCom } from "@/components/common/BokHusCom";
import { QuotesBottom } from "@/components/common/QuotesBottom";
import { ExpandingLine } from "@/components/common/ExpandingLine";


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
    const colorLine: string = "rgb(221, 221, 221)";

    return (
        <main className="aboutPage flex">
            <BackgroundImage className="aboutBackground" src="/images/backgrounds/about.png" />
            <section className="aboutSection flex fadeInAnim">
                <h1 className="aboutHeading fadeInAnim" style={{ animationDelay: "0.6s" }}>{aboutUs.aboutHeading.toUpperCase()}</h1>
                <ExpandingLine key={"AboutLine1"} lineSize={2} color={colorLine} animationDelay="1s" animationDuration="3.5s" />
                <div className="aboutTextDiv flex fadeInAnim" style={{ animationDelay: "0.8s" }}>
                    {aboutUs.aboutText.map((item, index) =>
                        <p key={index + "#About#"} className="aboutText" style={{ animationDelay: `${index * animInc}ms` }}>{item}</p>

                    )}
                    <QuotesBottom fontSize="1.35rem" />
                </div>
                <ExpandingLine key={"AboutLine2"} lineSize={2} color={colorLine} animationDelay="1s" animationDuration="3.5s" />

                <div className="bokhusComWrapperAbout fadeInAnim" style={{ animationDelay: "0.6s" }}>
                    <BokHusCom fontSize="1.2rem" />
                </div>
            </section>

        </main>

    );
}