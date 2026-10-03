"use client";
import { CopyButton } from "./CopyButton";
import { useState } from "react";
import styles from "./AdminTabs.module.css";
import { type ARCUserInfo } from "./page";
import { genresDef } from "../Register/registerSchema";

export interface AdminData
{
    newsLetterEmails: string[],
    arcUsers: ARCUserInfo[],
    updateUsersARCBook: (book: string, emails: string[]) => Promise<void>;
}

type Genres = typeof genresDef[number];

interface ARCSendoutOptions
{
    genereOfSendout: Genres[],
    comfortable: boolean,
    prioritizeSpeedRead: boolean,
    disableFormerSendout: boolean,
    format: "ePub" | "pdf";
}



const defaultsSendouts: ARCSendoutOptions =
{
    genereOfSendout: ["Historical novels"],
    comfortable: false,
    prioritizeSpeedRead: false,
    disableFormerSendout: false,
    format: "ePub"
};
type Tabs = "Newsletters" | "ARC Sendout";

export function AdminTabs({ newsLetterEmails, arcUsers, updateUsersARCBook }: AdminData)
{
    const [tab, setTab] = useState<Tabs>("Newsletters");
    const [options, setOptions] = useState<ARCSendoutOptions>(defaultsSendouts);
    const { genereOfSendout, comfortable, prioritizeSpeedRead, disableFormerSendout, format } = options;
    // flatMap takes all recievedBooks and gets them into an array. Set removes duplicates

    const handleGenreChange = (e: React.ChangeEvent<HTMLInputElement>, genre: Genres) =>
    {
        e.target.checked ? setOptions((prev) => ({ ...prev, genereOfSendout: [...prev.genereOfSendout, genre] })) : setOptions((prev) => ({ ...prev, genereOfSendout: prev.genereOfSendout.filter((item) => item != genre) }));
    };

    return (
        <section className={styles.adminTabSection}>
            <div className={styles.tabsDiv}>
                <button onClick={() => setTab("Newsletters")} className={`${styles.tabButtonLeft} ${tab == "Newsletters" ? styles.tabButtonActive : styles.tabButtonInactive}`}>NEWSLETTER</button>
                <button onClick={() => setTab("ARC Sendout")} className={`${styles.tabButtonRight} ${tab == "ARC Sendout" ? styles.tabButtonActive : styles.tabButtonInactive}`}>ARC SENDOUTS</button>
            </div>
            <div className={styles.tabsContainer}>

                {tab === "Newsletters" ?

                    <article key={tab + "newsletterkey"} className={`${styles.newsLetterSection} ${tab == "Newsletters" && "fadeInFromLeftSmallAnim"}`} style={{ animationDuration: "0.6s" }}>
                        <h1 className={styles.newsLetterHeading}>Newsletter subscribers</h1>
                        <div className={styles.emailDiv}>
                            {newsLetterEmails.map((item, index, array) =>
                                <p key={"adresses" + index}>{item} {index < array.length - 1 ? "," : ""} </p>)}
                        </div>
                        {/* <CopyButton copyString={copyString} /> */}
                    </article>
                    :
                    <article key={tab + "arckey"} className={`${styles.arcSendoutSection} ${tab == "ARC Sendout" && "fadeInFromLeftSmallAnim"}`} style={{ animationDuration: "0.6s" }}>
                        <h1 className={styles.newsLetterHeading}>ARC canditates and sendouts</h1>
                        <form className={styles.candidatesForm}>
                            <div className={styles.genreSelection}>     <h3 className={styles.selectHeading}>Select book genre/category :   </h3>
                                {genresDef.map((genre, index) =>
                                    <label className={styles.genreLabel} key={`${genre} + ${index} key`}>
                                        <input type="checkbox" checked={genereOfSendout.includes(genre)} value={genre} onChange={(e) => handleGenreChange(e, genre)} />{genre}
                                    </label>)
                                }

                            </div>
                            <div className={styles.bookFormatRadioInputDiv}>
                                <h3 className={styles.selectHeading}>Select format to send out :   </h3>
                                <label className={styles.bookFormatLabel} >               <input className={styles.bookFormatInput} onChange={() => setOptions((prev) => ({ ...prev, format: "ePub" }))} name="format" type="radio" value="ePub" checked={format == "ePub"} />e-Pub </label>


                                <label className={styles.bookFormatLabel} >
                                    <input className={styles.bookFormatInput} onChange={() => setOptions((prev) => ({ ...prev, format: "pdf" }))} name="format" type="radio" value="pdf"
                                        checked={format == "pdf"} />pdf </label>

                            </div>
                            <div className={styles.genreSelection}>     <h3 className={styles.selectHeading}>Other options :   </h3>

                                <label className={styles.genreLabel}>
                                    <input type="checkbox" checked={prioritizeSpeedRead} value={"false"} onChange={(e) => setOptions((prev) => ({ ...prev, prioritizeSpeedRead: !prev.prioritizeSpeedRead }))} />Prioritize fast readers
                                </label>

                                <label className={styles.genreLabel}>
                                    <input type="checkbox" checked={comfortable} value={"false"} onChange={(e) => setOptions((prev) => ({ ...prev, comfortable: !prev.comfortable }))} />User should be comfortable giving reviews </label>
                                <label className={styles.genreLabel}>
                                    <input type="checkbox" checked={disableFormerSendout} value={"false"} onChange={(e) => setOptions((prev) => ({ ...prev, disableFormerSendout: !prev.disableFormerSendout }))} />Disable earlier sendout filtering </label>



                            </div>

                        </form>
                    </article>}


            </div>



        </section>);


}