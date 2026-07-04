"use client";
import worWithUsJson from "@/json//workWithUs.json";
import { WorkWithUsButton } from "./WorkWithUsButton";
import { useState } from "react";


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
    const [isDisplayingTheme, setDisplayingTheme] = useState<string>("none");

    return (
        <main className="workWithUsPage">
            <ul className="workList">
                {workWithUsArray.map((item, index) =>
                    <li> <WorkWithUsButton theme={item.theme} handleClick={setDisplayingTheme} /> </li>

                )}

            </ul>
            
        </main>
    );
}