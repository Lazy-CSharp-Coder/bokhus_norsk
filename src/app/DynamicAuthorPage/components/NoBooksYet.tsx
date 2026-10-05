import { ImBooks } from "react-icons/im";
import styles from "./NoBooksYet.module.css";

import { NoBooksDescription } from "./NoBooksDescription";

interface NoBooksYetProps
{
    authorName: string,
    isLoggedIn: boolean;
}

export function NoBooksYet({ authorName, isLoggedIn }: NoBooksYetProps)
{
    return (
        <div className={styles.noBooksDiv}>

            <div className={styles.headingIconWrapper}>
                <ImBooks size="5rem"></ImBooks>
                <h3 className={styles.noBooksHeading}>Books coming soon !</h3>


            </div>

            <NoBooksDescription />
        </div>









    );

}