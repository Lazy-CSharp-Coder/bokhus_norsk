"use client";
import worWithUsJson from "@/json//workWithUs.json";
import styles from "./WorkWithUs.module.css";
import { ExpandingLine } from "@/components/common/ExpandingLine";
import { BackgroundImage } from "@/components/common/BackgroundImage";
import Link from "next/link";
import { QuotesWorkWithUs } from "@/components/common/QuotesBottom";
import { WorkWithUsTheme } from "./WorkWithUsTheme";
import { IoTelescopeOutline } from "react-icons/io5";
import { FaQuestion } from "react-icons/fa6";

// export interface WorkWithUs
// {
//     theme: string,
//     subTitle?: string,
//     description?: string[],
//     list: string[],
//     iconNumber: number;
// }

export interface WorkWithUs 
{
    themeDescription: string,
    themeHeading: string,
    descriptionHeading: string,
    descriptionList: string[],
    experience: string,
    iconNumber: number;

}


export default function WorkWithUsPage()
{

    const workWithUsArray: WorkWithUs[] = worWithUsJson; const animDelay = 200;
    const waitForMainAnim = 600;

    const tabletLimit = 1024;


    return (
        <main className={styles.workWithUsPage}>
            <BackgroundImage src="/images/backgrounds/workWithUs.webp" className={styles.workWithUsBackground} />
            <section className={styles.workWithUsSection}>
                <article className={`${styles.workWithUsTextArticle} fadeInAnim`} style={{ animationDelay: "0.5s" }}>
                    <div className={styles.headingLineWrapper}>

                        <h1 className={styles.workWithUsHeading}>Hjelp oss å bringe bøker til nye lesere</h1>
                        <ExpandingLine key={"WorkLine"} lineSize={3} color="var(--bokhusRootsColor)" animationDuration="2s" animationDelay="0.7s" />
                    </div>

                    <div className={styles.workWithUsTextDiv}>
                        <p className={styles.workWithUsIntroText}>

                          BokHus bygger et moderne forlag med fokus på å bringe gode bøker, glemte verk, lokalhistorie, skjønnlitteratur og fagkunnskap til lesere over hele verden.


                    </p>
                    <p className={styles.workWithUsIntroText}>

                        For å gjøre det, jobber vi med talentfulle frilansere, forlagsfolk og kreative spesialister.

                    </p>
                    <p className={styles.workWithUsIntroText}>Vi er alltid interesserte i å høre fra dyktige folk som ønsker å jobbe med oss på enkeltprosjekter eller bygge et langsiktig samarbeid med BokHus.</p>
                        <QuotesWorkWithUs fontSize="1.6rem" />

                    </div>
                </article>
                <article className={styles.whoArticle}>

                    <div className={`${styles.whoIconHeadingWrapper} fadeInAnim`} style={{animationDelay: "1.2s"}}>
                        <IoTelescopeOutline size="2rem" />

      <h2 className={styles.whoWeAreLookingForHeading}> HVEM <span className={styles.weSpan}>VI</span> SER ETTER </h2>
                        <FaQuestion size="1.6rem" />
                    </div>


                    {workWithUsArray.map((item, index) =>
                        <WorkWithUsTheme key={index + "workwithusTheme"} subject={item} />
                    )}

                </article>
                <p className={`${styles.workWithUsIntroText} fadeInAnim`} style={{ animationDelay: "2.8s" }} >Hvis du er interessert i å samarbeide med oss, kilkk <Link href="/Contact" className={styles.linkContact}>her</Link> for å komme til kontaktskjemaet.</p>
            </section>
        </main >
    );
}