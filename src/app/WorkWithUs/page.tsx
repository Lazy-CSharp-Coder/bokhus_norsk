"use client";
import worWithUsJson from "@/json//workWithUs.json";
import { WorkWithUsButton } from "./WorkWithUsButton";
import { useState } from "react";
import { WorkWithUsTheme } from "./WorkWithUsTheme";
// import { is } from "zod/locales";
import "./WorkWithUs.module.css";
import { ExpandingLine } from "@/components/global/ExpandingLine";


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

    return (
        <main className="workWithUsPage">
            <div className="workWithUsHeadingIntroWrapper">
                <div className="headingLineWrapper">
                    <h3 className="workWithUsHeading fadeInAnim"> Work with Bokhus </h3>
                    <ExpandingLine lineSize={2} color="var(--bokhusRootsColor)" animationDuration="2s" animationDelay="0.5s" />
                </div>


                <p className="workWithUsIntroText">

                    BokHus works with writers, editors, translators, illustrators, local historians and creative partners who care about strong stories and well-crafted books.
                </p>
                <p className="workWithUsIntroText">
                    We are especially interested in historical fiction, local history, folklore, cultural heritage and book projects with a clear sense of place. If you have a manuscript, an idea, archival material or a project that may fit BokHus, we would be happy to hear from you.

                </p>
            </div>
            <section className="workWithUsSection flex">
                <ul className="workList">
                    {workWithUsArray.map((item, index) =>
                        <li key={`"workButton + ${index}`}> <WorkWithUsButton subject={item} handleClick={setDisplayingTheme} /> </li>

                    )}

                </ul>
                {
                    isDisplayingTheme != null &&
                    <WorkWithUsTheme subject={isDisplayingTheme} />

                }</section>


        </main>
    );
}