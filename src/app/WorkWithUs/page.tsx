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

                        <h1 className={styles.workWithUsHeading}> Help Us Bring Books to New Readers </h1>
                        <ExpandingLine key={"WorkLine"} lineSize={3} color="var(--bokhusRootsColor)" animationDuration="2s" animationDelay="0.7s" />
                    </div>

                    <div className={styles.workWithUsTextDiv}>
                        <p className={styles.workWithUsIntroText}>

                            BokHus is building a modern publishing house focused on bringing great books, forgotten works, local history, fiction and specialist knowledge to readers around the world.


                        </p>
                        <p className={styles.workWithUsIntroText}>

                            To do that, we work with talented freelancers, publishing professionals and creative specialists.

                        </p>
                        <p className={styles.workWithUsIntroText}>We are always interested in hearing from skilled people who would like to work with us on individual projects or build a long-term collaboration with BokHus.</p>
                        <QuotesWorkWithUs fontSize="1.6rem" />

                    </div>
                </article>
                <article className={styles.whoArticle}>

                    <div className={`${styles.whoIconHeadingWrapper} fadeInAnim`} style={{animationDelay: "1.2s"}}>
                        <IoTelescopeOutline size="2rem" />

                        <h2 className={styles.whoWeAreLookingForHeading}> WHO <span className={styles.weSpan}>WE</span> ARE LOOKING FOR </h2>
                        <FaQuestion size="1.6rem" />
                    </div>


                    {workWithUsArray.map((item, index) =>
                        <WorkWithUsTheme key={index + "workwithusTheme"} subject={item} />
                    )}

                </article>
                <p className={`${styles.workWithUsIntroText} fadeInAnim`} style={{ animationDelay: "2.8s" }} >If your are interested in working with us, click <Link href="/Contact" className={styles.linkContact}>here</Link> to fill out contact information.</p>
            </section>
        </main >
    );
}