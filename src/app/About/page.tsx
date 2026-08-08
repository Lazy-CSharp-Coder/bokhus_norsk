import "./About.module.css";
import aboutJson from "@/json/about.json";
import { BackgroundImage } from "@/components/common/BackgroundImage";
import type { About } from "@/types/types";
import { BokHusCom } from "@/components/common/BokHusCom";
import { QuotesBottom } from "@/components/common/QuotesBottom";
import { ExpandingLine } from "@/components/common/ExpandingLine";
import styles from "./About.module.css";


export default function About()
{
    const aboutUs: About = aboutJson;
    const animInc: number = 200;

    const colorLine: string = "rgb(221, 221, 221)";

    return (
        <main className={`${styles.aboutPage}`}>
            <BackgroundImage className={styles.aboutBackground} src="/images/backgrounds/about.webp" />
            <section className={`${styles.aboutSection} fadeInAnim`}>
                <h1 className={`${styles.aboutHeading} fadeInAnim`} style={{ animationDelay: "0.6s" }}>{aboutUs.aboutHeading.toUpperCase()}</h1>
                <ExpandingLine key={"AboutLine1"} lineSize={2} color={colorLine} animationDelay="1s" animationDuration="3.5s" />
                <div className={`${styles.aboutTextDiv} fadeInAnim`} style={{ animationDelay: "0.8s" }}>
                    {aboutUs.aboutText.map((item, index) =>
                        <p key={index + "#About#"} className={`${styles.aboutText} fadeInAnim`} style={{ animationDelay: `${index * animInc}ms` }}>{item}</p>

                    )}
                    <QuotesBottom fontSize="1.35rem" />
                </div>
                <ExpandingLine key={"AboutLine2"} lineSize={2} color={colorLine} animationDelay="1s" animationDuration="3.5s" />

                <div className={`${styles.bokhusComWrapperAbout} fadeInAnim`} style={{ animationDelay: "0.6s" }}>
                    <BokHusCom fontSize="1.2rem" />
                </div>
            </section>

        </main>

    );
}