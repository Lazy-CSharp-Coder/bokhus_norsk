"use client";
import worWithUsJson from "@/json//workWithUs.json";
import { WorkWithUsButton } from "./WorkWithUsButton";
import { useState } from "react";
import { WorkWithUsTheme } from "./WorkWithUsTheme";
// import { is } from "zod/locales";
import "./WorkWithUs.module.css";
import { ExpandingLine } from "@/components/global/ExpandingLine";
import { BackgroundImage } from "@/components/global/BackgroundImage";
import Link from "next/link";


export interface WorkWithUs
{
    theme: string,
    subTitle?: string,
    description?: string[],
    list: string[],
    iconNumber: number;
}



export default function WorkWithUsPage()
{

    const workWithUsArray: WorkWithUs[] = worWithUsJson;
    const [isDisplayingTheme, setDisplayingTheme] = useState<WorkWithUs | null>(null);
    const animDelay = 200;
    const waitForMainAnim = 600;

    return (
        <main className="workWithUsPage">
            <BackgroundImage src="/images/backgrounds/workWithUsBackground.png" className="workWithUsBackground" />
            <section className="workWithUsSection flex">
                <article className="workWithUsTextArticle fadeInAnim" style={{ animationDelay: "0.5s" }}>
                    <div className="headingLineWrapper">
                        <h3 className="workWithUsHeading"> Work with Bokhus </h3>
                        <ExpandingLine key={"WorkLine"} lineSize={2} color="var(--bokhusRootsColor)" animationDuration="2s" animationDelay="0.7s" />
                    </div>


                    <div className="workWithUsTextDiv">
                        <p className="workWithUsIntroText">

                            BokHus works with writers, editors, translators, illustrators, local historians and creative partners who care about strong stories and well-crafted books.
                        </p>
                        <p className="workWithUsIntroText">
                            We are especially interested in historical fiction, local history, folklore, cultural heritage and book projects with a clear sense of place. If you have a manuscript, an idea, archival material or a project that may fit BokHus, we would be happy to hear from you.

                        </p>
                        <p className="workWithUsIntroText fadeInAnim" >Here is a list of what we can help you with :</p>

                    </div>

                </article>
                <article className="workWithUsListArticle flex">

                    <ul className="workList">
                        {workWithUsArray.map((item, index) =>
                            <li key={`"workButton + ${index}`}> <WorkWithUsButton subject={item} handleClick={setDisplayingTheme} anmiationDelay={`${animDelay * index + waitForMainAnim}ms`} /> </li>

                        )}

                    </ul>

                    <div style={{ opacity: isDisplayingTheme != null ? "1" : "0", flex: "2", width: "100%", height: "auto" }}>
                        {isDisplayingTheme && <WorkWithUsTheme key={isDisplayingTheme.theme} subject={isDisplayingTheme} />}
                    </div>
                </article>
                <p className="workWithUsIntroText fadeInAnim" style={{ animationDelay: "2.8s" }} >If your are interested in working with us, click <Link href="/Contact" className="linkContact">here</Link> to fill out contact information.</p>
            </section>
        </main>
    );
}