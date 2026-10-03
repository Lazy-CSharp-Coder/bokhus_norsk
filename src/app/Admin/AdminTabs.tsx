"use client";
import { CopyButton } from "./CopyButton";
import { useState } from "react";
import styles from "./AdminTabs.module.css";


interface ARCUserInfo
{
    email : string,
    recievedBooks : string[],
    howLong : string
    genresInterestedIn : string[]

}

interface AdminData
{
    newsLetterEmails: string[],
    arcUsers : ARCUserInfo[], 
    updateUsersARCBook: (book: string, emails: string[]) => Promise<void> 
}


type Tabs = "Newsletters" | "ARC Sendout";

export function AdminTabs({ newsLetterEmails, arcUsers, updateUsersARCBook }: AdminData)
{
    const [tab, setTab] = useState<Tabs>("Newsletters");
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
                    <h1 className={styles.newsLetterHeading}>Email adresses to send newsletters to :</h1>
                    <div className={styles.emailDiv}>
                        {arcUsers.map((item, index, array) =>
                            <p key={"adresses" + index}>{item.howLong} {index < array.length - 1 ? "," : ""} </p>)}
                    </div>
                </article>
            }

        </section>);


}