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

    const [includes, setIncludes] = useState<Includes>(includesDefaults ??
        { email: true, name: true, interests: true, preferredLanguage: true });

    const emailsOnly: string[] = memberArray.map((user) => user.email);
    const clipboardHeadeing = heading.concat(`\n${includes.email && "email\t"}${includes.name && "name\t"}${includes.interests && "book interests\t"}${includes.email && "language chosen"}`);
    const table = memberArray.map((user) => `\n${includes.email && `${user.email}\t`}${includes.name && `${user.userName}\t`}${includes.interests && `${user.genresInterestedIn.join(", ")}\t`}${includes.preferredLanguage && user.preferredLanguage}`);
    return (
        <div key={heading + memberArray[0]} className={`${styles.memberItemsDiv} fadeInAnim`}>
            <h3 className={styles.heading}>{heading}</h3>
            <h4 className={styles.includesHeading}>Select items to include for copying </h4>
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

                        <li className={styles.arcUserListItem} key={"arcKeyEmail" + index}> <span className={styles.includesSpan}>{includes.email && info.email}</span><span className={styles.includesSpan}> {includes.name && info.userName}</span>

                            <span className={styles.includesSpan}>{includes.interests && info.genresInterestedIn.join(", ")}</span><span className={styles.includesSpan}>{includes.preferredLanguage && info.preferredLanguage}</span>
                        </li>)

                }

            </ul>
            <div className={styles.arcButtonDiv}>
                <CopyButton buttonText="Copy to Clipboard (Excel)" copyString={clipboardHeadeing.concat(table.join("\n"))} />
                <CopyButton buttonText="Copy emails only" copyString={emailsOnly.join(";")} />


            </div>


        </div>



    );

}