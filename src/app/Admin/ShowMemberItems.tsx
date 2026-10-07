import { UserInfo } from "./page";
import styles from "./ShowMemberItems.module.css";
import { CopyButton } from "./CopyButton";
import { useState } from "react";


interface ShowMemberItemsProps 
{
    heading: string,
    memberArray: UserInfo[],
    copyHeading?: string,
    includesDefaults?: Includes;
}

export interface Includes
{
    email: boolean,
    name: boolean,
    interests: boolean,
    preferredLanguage: boolean;

}

export function ShowMemberItems({ heading, memberArray, includesDefaults }: ShowMemberItemsProps)
{
    const emailsOnly: string[] = memberArray.map((user) => user.email);
    const [includes, setIncludes] = useState<Includes>(includesDefaults ??
        { email: true, name: true, interests: true, preferredLanguage: true });

    // const getWhatToShow = () =>
    // {
    //     const filterByEmail : UserInfo
    // }

    return (
        <div className={`${styles.memberItemsDiv} fadeInAnim`}>
            <h3 className={styles.heading}>{heading}</h3>
                   <h4 className={styles.includesHeading }>Select items to include for copying </h4>
            <div className={styles.includesDiv}>
         
            
                <label className={styles.includesLabel} key={`includes#email`}>

                    <input type="checkbox" checked={includes.email} onChange={(e) => setIncludes((prev) => ({ ...prev, email: !prev.email }))} />Email address
                </label>

                <label className={styles.includesLabel} key={`includes#name`}>

                    <input type="checkbox" checked={includes.name} onChange={(e) => setIncludes((prev) => ({ ...prev, name: !prev.name }))} />Name
                </label>
                <label className={styles.includesLabel} key={`includes#interest`}>

                    <input type="checkbox" checked={includes.interests} onChange={(e) => setIncludes((prev) => ({ ...prev, interests: !prev.interests }))} />Book interests
                </label>
                <label className={styles.includesLabel} key={`includes#language`}>

                    <input type="checkbox" checked={includes.preferredLanguage} onChange={(e) => setIncludes((prev) => ({ ...prev, preferredLanguage: !prev.preferredLanguage }))} />Language chosen
                </label>
            </div>
            <ul className={styles.memberList}>
                {memberArray.length > 0 &&
                    memberArray.map((info, index) =>

                        <li className={styles.arcUserListItem} key={"arcKeyEmail" + index}>{includes.email && info.email}<span> {includes.name && info.userName}</span>
                        
                        <span>{includes.interests && info.genresInterestedIn.join(", ")}</span><span className={styles.languageInfo}>{includes.preferredLanguage && info.preferredLanguage}</span>
                        </li>)

                }

            </ul>
            <div className={styles.arcButtonDiv}>
                <CopyButton buttonText="Copy to Clipboard (Excel)" copyString={emailsOnly.join("; ")} />
                <CopyButton buttonText="Copy emails only" copyString={emailsOnly.join(";")} />


            </div>


        </div>



    );

}