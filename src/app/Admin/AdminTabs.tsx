"use client";
import { CopyButton } from "./CopyButton";
import { useState } from "react";
import styles from "./AdminTabs.module.css";
import { type ARCUserInfo } from "./page";
import { genresDef } from "../Register/registerSchema";

const howLongArray = ["Within a week", "Less than a month", "2-3 months", "4-5 months", "More than 6 months"];

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
    format: "ePub" | "pdf",
    bookName: string;

}



const defaultsSendouts: ARCSendoutOptions =
{
    genereOfSendout: ["Historical novels"],
    comfortable: false,
    prioritizeSpeedRead: false,
    disableFormerSendout: false,
    format: "ePub",
    bookName: ""

};
type Tabs = "Newsletters" | "ARC Sendout";

export function AdminTabs({ newsLetterEmails, arcUsers, updateUsersARCBook }: AdminData)
{
    const [tab, setTab] = useState<Tabs>("Newsletters");
    const [options, setOptions] = useState<ARCSendoutOptions>(defaultsSendouts);

    const { genereOfSendout, comfortable, prioritizeSpeedRead, disableFormerSendout, format, bookName } = options;
    // flatMap takes all recievedBooks and gets them into an array. Set removes duplicates

    const handleGenreChange = (e: React.ChangeEvent<HTMLInputElement>, genre: Genres) =>
    {
        e.target.checked ? setOptions((prev) => ({ ...prev, genereOfSendout: [...prev.genereOfSendout, genre] })) : setOptions((prev) => ({ ...prev, genereOfSendout: prev.genereOfSendout.filter((item) => item != genre) }));
    };

    const filterEmails = () => 
    {
        const filterOnGenre = arcUsers.filter((user) => options.genereOfSendout.some((genre) => user.genresInterestedIn.includes(genre)));
        if (filterOnGenre.length == 0) console.log("filter on genre failed");

        const filterOnComfortable = comfortable ? filterOnGenre.filter((user) => user.comfortable == "Yes") : filterOnGenre;
        if (filterOnComfortable.length == 0) console.log("filter on confortable failed");

        const filterOnFormat = filterOnComfortable.filter((user) => user.format == format);
        const previousSendouts: string[] = [...new Set(arcUsers.flatMap((user) => user.recievedBooks))];

        const filterOnPrevSendouts = disableFormerSendout ? filterOnFormat : filterOnFormat.filter((user) =>
            user.recievedBooks.every((book) => !previousSendouts.includes(bookName)));

        // prioritize on how fast you read
        const filterOnPrioritySpeed = prioritizeSpeedRead ? filterOnPrevSendouts.sort((a, b) => 
        {
            const aIndex = howLongArray.findIndex((item) => item == a.howLong);
            const bIndex = howLongArray.findIndex((item) => item == b.howLong);

            return aIndex - bIndex;
        }) : filterOnPrevSendouts;

        const emailsToGet: string[] = filterOnPrioritySpeed.map((user) => user.email) ?? [] as string[];
        return emailsToGet;
    };

    const arcEmails: string[] = filterEmails();
    const allEmails: string[] = arcUsers.map((user) => user.email);

    console.log("user email  " + arcEmails);
    arcUsers.forEach((user) => 
    {
        console.log("user data " + user.email + user.comfortable + user.format + user.genresInterestedIn.length + user.howLong + user.recievedBooks.length);
    });

    return (
        <section className={styles.adminTabSection}>
            <div className={styles.tabsDiv}>
                <button onClick={() => setTab("Newsletters")} className={`${styles.tabButtonLeft} ${tab == "Newsletters" ? styles.tabButtonActive : styles.tabButtonInactive}`}>NEWSLETTER</button>
                <button onClick={() => setTab("ARC Sendout")} className={`${styles.tabButtonRight} ${tab == "ARC Sendout" ? styles.tabButtonActive : styles.tabButtonInactive}`}>ARC SENDOUTS</button>
                <div className={styles.tabButtonLineDiv}></div>
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
                    <article key={tab + "arckey"} className={`${styles.arcSendoutArticle} ${tab == "ARC Sendout" && "fadeInFromLeftSmallAnim"}`} style={{ animationDuration: "0.6s" }}>
                        <h1 className={styles.newsLetterHeading}>ARC canditates and sendouts</h1>
                        <form className={styles.candidatesForm}>
                            <div className={styles.bookNameDiv}>
                                <div className={styles.bookNameInputDiv}>
                                    <label className={styles.sendoutBookNameLabel} htmlFor="bookName">Name of book to send out ARC copies of :   </label>
                                    <input className={styles.sendOutBookNameInput} type="text" id="bookName" value={bookName} onChange={(e) => setOptions((prev) => ({ ...prev, bookName: e.target.value }))} />
                                </div>


                                <button type="button" onClick={() => { console.log("button clicked"); }} className={`submitButton ${styles.findPreviosSendoutNameButton}`}>Find previos sendout</button>
                            </div>
                            <div className={styles.optionsDiv}>

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



                            </div>


                        </form>

                <div className={styles.emailDiv}>
                    <h3 className={styles.selectHeading}>Emails filtered : </h3>
                    <ul className={styles.emailListARC}>
                        {arcEmails.length > 0 &&
                            arcEmails.map((emailadr, index) =>

                                <li key={"arcKeyEmail" + index}>{emailadr}</li>)




                        }



                    </ul>
                    <CopyButton copyString={arcEmails.join("; ")} />
                </div>
                    </article>}

            </div>



        </section>);


}