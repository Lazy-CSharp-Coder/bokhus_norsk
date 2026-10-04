"use client";
import { CopyButton } from "./CopyButton";
import { useState } from "react";
import styles from "./AdminTabs.module.css";
import { type ARCUserInfo } from "./page";
import { genresDef } from "../Register/registerSchema";
import { BokHusCom } from "@/components/common/BokHusCom";
import { ErrorBokhus } from "../ErrorBokhus";
import Select from "react-select";

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

interface CopyToClipboardUserInfo
{
    email :string,
    userName : string,
    genresInterestedIn : string[]

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

interface SelectorOption  
{
    value: string,
    label: string;

}

type Tabs = "Newsletters" | "ARC Sendout";

export function AdminTabs({ newsLetterEmails, arcUsers, updateUsersARCBook }: AdminData)
{
    const [tab, setTab] = useState<Tabs>("Newsletters");
    const [options, setOptions] = useState<ARCSendoutOptions>(defaultsSendouts);
    const [selectOption, setSelectOption] = useState<SelectorOption | null>(null);

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

        return filterOnPrioritySpeed;
    
        return userInfoToGet;
    
        // const emailsToGet: string[] = filterOnPrioritySpeed.map((user) => user.email) ?? [] as string[];
        // return emailsToGet;
    };

        const arcUserInfo: CopyToClipboardUserInfo[] = filterEmails() as CopyToClipboardUserInfo[];
        const userInfoToGet : string[] = arcUserInfo.map((user) => `${user.userName}\t${user.email}\t${user.genresInterestedIn.join(",")}`);
        const finalStringHeading = `ARC Sendout user reciever info for book ${bookName} in format : ${format}\nname\temail\tbook interests\n`;




    const registerSendout = async (bookName: string, arcEmails: string[]) =>
    {
        if (bookName.length == 0 || arcEmails.length == 0) return;

        try
        {
            const response = await updateUsersARCBook(bookName, arcEmails);
            setOptions(defaultsSendouts);

        }
        catch (error)
        {
            console.error("An error occured updating user data.", error);
            <ErrorBokhus msg={"Could not update user data width sendout data."} />;
        }


    };

        
    const selectorOptions: SelectorOption[] = [...new Set(arcUsers.flatMap((user) => user.recievedBooks))].map((item) => ({ value: item, label: item })) ?? [];


    const transferFromSelector = () =>
    {
        if(selectOption) setOptions((prev) => ({...prev, bookName : selectOption.value}));
        else alert("Please choose book from dropdown list first.")
    }

    return (
        <section className={styles.adminTabSection}>

            <div className={styles.tabsDiv}>
                <button onClick={() => setTab("Newsletters")} className={`${styles.tabButtonLeft} ${tab == "Newsletters" ? styles.tabButtonActive : styles.tabButtonInactive}`}>NEWSLETTER</button>
                <button onClick={() => setTab("ARC Sendout")} className={`${styles.tabButtonRight} ${tab == "ARC Sendout" ? styles.tabButtonActive : styles.tabButtonInactive}`}>ARC SENDOUTS</button>
                <span className="scaleInAnim" style={{ animationDelay: "0.8s" }}>  <BokHusCom fontSize="1.4rem" /></span>
            </div>

            <div className={styles.tabsContainer}>

                {tab === "Newsletters" ?

                    <article key={tab + "newsletterkey"} className={`${styles.newsLetterSection} ${tab == "Newsletters" && "fadeInFromLeftSmallAnim"}`} style={{ animationDuration: "0.6s" }}>
                        <h1 className={styles.newsLetterHeading}>Newsletter subscribers</h1>
                        <div className={styles.emailDiv}>
                            <h3 className={styles.selectHeading}>Emails filtered : </h3>
                            <ul className={styles.emailListARC}>
                                {newsLetterEmails.length > 0 &&
                                    newsLetterEmails.map((emailadr, index) =>

                                        <li key={"newsLetterEmailKey" + index}>{emailadr}</li>)

                                }

                            </ul>
                            <CopyButton copyString={newsLetterEmails.join("; ")} />
                        </div>

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

       

                                    <button type="button" disabled={selectOption?.value ? false : true} onClick={transferFromSelector} className={`submitButton ${styles.findPreviosSendoutNameButton}`}>{`<<`}</button>
                                    <Select className={styles.prevSelector} classNamePrefix="prevSelector" value={selectOption} onChange={setSelectOption} options={selectorOptions} placeholder={"Select a previous sendout"} 
                                    styles={{ menu: (prev) => ({ ...prev,  backgroundColor: "var(--regBackground)", color: "var(--myWhiteColor)"}),
                                        option: (prev, state) => ({ ...prev, backgroundColor: state.isSelected || state.isFocused ? "var(--bokhusRootsColor)" : "var(--regBackground)",color:  state.isSelected || state.isFocused ? "white" : "var(--myWhiteColor)"  }),
                                        singleValue: (prev) => ({...prev, backgroundColor : "var(--regBackground)", color: "white"}),
                                        control: (prev, state) => ({...prev, backgroundColor: "var(--regBackground)"}) }} />

                          
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
                                <div className={styles.genreSelection}>     
                                    <h3 className={styles.selectHeading}>Other options :   </h3>

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
                            <h3 className={styles.selectHeading}>Users filtered : </h3>
                            <ul className={styles.emailListARC}>
                                {arcUserInfo.length > 0 &&
                                    arcUserInfo.map((info, index) =>

                                        <li className={styles.arcUserListItem} key={"arcKeyEmail" + index}>{`${info.userName } - ${info.email}`}</li>)

                                }

                            </ul>
                            <div className={styles.arcButtonDiv}>
                                <CopyButton copyString={finalStringHeading.concat(userInfoToGet.join("\n"))} />
                                <button onClick={() => registerSendout(bookName,arcUserInfo.map((user)=> user.email))} className="submitButton">Register <span className={styles.sendOutText}>"{bookName}"</span> sendout</button>


                            </div>

                        </div>
                    </article>}

            </div>



        </section>);


}