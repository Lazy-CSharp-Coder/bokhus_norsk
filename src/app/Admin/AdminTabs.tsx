"use client";
import { CopyButton } from "./CopyButton";
import { useState } from "react";
import styles from "./AdminTabs.module.css";
import { type ARCUserInfo } from "./page";
import { genresDef } from "../Register/registerSchema";

export interface AdminData
{
    newsLetterEmails: string[],
    arcUsers : ARCUserInfo[], 
    updateUsersARCBook: (book: string, emails: string[]) => Promise<void> 
}

interface ARCSendoutOptions
{

}


type Tabs = "Newsletters" | "ARC Sendout";

export function AdminTabs({ newsLetterEmails, arcUsers, updateUsersARCBook }: AdminData)
{
    const [tab, setTab] = useState<Tabs>("Newsletters");

    // flatMap takes all recievedBooks and gets them into an array. Set removes duplicates
    const previousSendouts : string[] = [...new Set(arcUsers.flatMap((user) => user.recievedBooks))];
    
    return (
        <section className={styles.adminTabSection}>
            <div className={styles.tabsDiv}>
                <button onClick={() => setTab("Newsletters")} className={styles.tabButton}>NewsLetter</button>
                <button onClick={() => setTab("ARC Sendout")} className={styles.tabButton}>ARC Sendouts</button>
            </div>



            {tab === "Newsletters" ?

                <article className={`${styles.newsLetterSection} fadeInAnim`}>
                    <h1 className={styles.newsLetterHeading}>Email adresses to send newsletters to :</h1>
                    <div className={styles.emailDiv}>
                        {newsLetterEmails.map((item, index, array) =>
                            <p key={"adresses" + index}>{item} {index < array.length - 1 ? "," : ""} </p>)}
                    </div>
                    {/* <CopyButton copyString={copyString} /> */}
                </article>
                :
                <article className={`${styles.arcSendoutSection} fadeInAnim`}>
                    <h1 className={styles.newsLetterHeading}>ARC Canditates:</h1>
                    <form className={styles.selectionForm}>
                        <label 


                    </form>
                </article>
            }

        </section>);


}