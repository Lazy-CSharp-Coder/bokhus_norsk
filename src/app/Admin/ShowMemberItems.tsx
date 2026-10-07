import { UserInfo } from "./page";
import styles from "./ShowMemberItems.module.css";
import { CopyButton } from "./CopyButton";
import { useState } from "react";


interface ShowMemberItemsProps 
{
    heading: string,
    memberArray: UserInfo[],
    copyHeading: string,
    includesDefaults? : Includes
}

interface Includes {
    email : boolean,
    name : boolean, 
    interests : boolean,
    preferredLanguage : boolean
    
}

export function ShowMemberItems({ heading, memberArray, includesDefaults }: ShowMemberItemsProps)
{
    const emailsOnly: string[] = memberArray.map((user) => user.email);
    const [includes, setIncludes] = useState<Includes>(includesDefaults ?? 
        {email : true, name : true, interests : true, preferredLanguage: true });

    return (
        <div className={`${styles.memberItemsDiv} fadeInAnim`}>
            <h3 className={styles.heading}>{heading}</h3>
            <ul className={styles.memberList}>
                {memberArray.length > 0 &&
                    memberArray.map((info, index) =>

                        <li className={styles.arcUserListItem} key={"arcKeyEmail" + index}>{info.userName}<span> {info.email}</span></li>)

                }

            </ul>
            <div className={styles.arcButtonDiv}>
                <CopyButton buttonText="Copy to Clipboard" copyString={emailsOnly.join("; ")} />
                <CopyButton buttonText="Copy emails only" copyString={emailsOnly.join(";")} />


            </div>

        </div>



    );

}