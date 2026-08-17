"use client";
import worWithUsJson from "@/json//workWithUs.json";
import { WorkWithUsButton } from "./WorkWithUsButton";
import { useState, useEffect } from "react";
import { WorkWithUsStartup, WorkWithUsTheme } from "./WorkWithUsTheme";
import styles from "./WorkWithUs.module.css";
import { ExpandingLine } from "@/components/common/ExpandingLine";
import { BackgroundImage } from "@/components/common/BackgroundImage";
import Link from "next/link";
import { QuotesWorkWithUs } from "@/components/common/QuotesBottom";


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
    theme: string,
    themeHeading: string,
    descriptionHeading: string,
    descriptionList: string[],
    experience: string;

}


export default function WorkWithUsPage()
{

    const workWithUsArray: WorkWithUs[] = worWithUsJson;
    const [isDisplayingTheme, setDisplayingTheme] = useState<WorkWithUs | null>(null);
    const animDelay = 200;
    const waitForMainAnim = 600;

    const tabletLimit = 1024;
    useEffect(() =>
    {
        if (isDisplayingTheme != null)
        {
            const elementToScrollTo = document.getElementById(`#SCROLL#ID#${isDisplayingTheme.theme}`);
            if (elementToScrollTo && window.innerWidth < tabletLimit) elementToScrollTo.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }, [isDisplayingTheme]);

    return (
        <main className={styles.workWithUsPage}>
            <BackgroundImage src="/images/backgrounds/workWithUs.webp" className={styles.workWithUsBackground} />
            <section className={styles.workWithUsSection}>
                <article className={`${styles.workWithUsTextArticle} fadeInAnim`} style={{ animationDelay: "0.5s" }}>
                    <div className={styles.headingLineWrapper}>
                        <h1 className={styles.workWithUsHeading}> Help Us Bring Books to New Readers </h1>
                        <ExpandingLine key={"WorkLine"} lineSize={2} color="var(--bokhusRootsColor)" animationDuration="2s" animationDelay="0.7s" />
                    </div>

                    <div className={styles.workWithUsTextDiv}>
                        <p className={styles.workWithUsIntroText}>

                            BokHus is building a modern publishing house focused on bringing great books, forgotten works, local history, fiction and specialist knowledge to readers around the world.


                        </p>
                        <p className={styles.workWithUsIntroText}>

                            To do that, we work with talented freelancers, publishing professionals and creative specialists.

                        </p>
                        <p className={styles.workWithUsIntroText}>We are always interested in hearing from skilled people who would like to work with us on individual projects or build a long-term collaboration with BokHus.</p>
                        <QuotesWorkWithUs fontSize="1.5rem" />

                    </div>
                </article>
                <article className={styles.workWithUsListArticle}>
                    <h2 className="whatWeAreLookingForHeading">
                        Who we are looking for :
                    </h2>

                    <ul className="whatWeAreLookingForList">
                        {workWithUsArray.map((theme, index) =>
                            <div className="workWithUsThemeArticle">
                                <h3>{theme.themeHeading}</h3>
                                <p>{theme.theme}</p>
                                <p>{theme.descriptionHeading}</h4>
                                <ul className="descriptionList">
                                    {theme.descriptionList.map((item, index) =>
                                        <li>{item}</li>
                                    )}

                                </ul>

                                <p>{theme.experience}</p>

                            </div>

                        )}

                    </ul>

                    <ul className={styles.workList}>
                        {workWithUsArray.map((item, index) =>
                            <li key={`"workButton + ${index}`}> <WorkWithUsButton subject={item} handleClick={setDisplayingTheme} anmiationDelay={`${animDelay * index + waitForMainAnim}ms`} /> </li>

                        )}

                    </ul>

                    <div style={{ flex: "2", width: "100%", height: "auto" }}>
                        {isDisplayingTheme ? <WorkWithUsTheme key={isDisplayingTheme.theme} subject={isDisplayingTheme} /> : <WorkWithUsStartup />}
                    </div>
                </article>
                <p className={`${styles.workWithUsIntroText} fadeInAnim`} style={{ animationDelay: "2.8s" }} >If your are interested in working with us, click <Link href="/Contact" className={styles.linkContact}>here</Link> to fill out contact information.</p>
            </section>
        </main>
    );
}