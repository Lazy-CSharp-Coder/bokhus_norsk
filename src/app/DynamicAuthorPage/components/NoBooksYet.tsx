import { ImBooks } from "react-icons/im";
import styles from "./NoBooksYet.module.css";

import { NoBooksDescription } from "./NoBooksDescription";
import { auth } from "@clerk/nextjs/server";

interface NoBooksYetProps
{
    authorName: string
  
}

export async function NoBooksYet({ authorName }: NoBooksYetProps)
{
    const { userId } = await auth();

    
    return (
        <div className={styles.noBooksDiv}>

            <div className={styles.headingIconWrapper}>
                <ImBooks size="5rem"></ImBooks>
                <h3 className={styles.noBooksHeading}>Books coming soon !</h3>


            </div>

            <NoBooksDescription isLoggedIn={!!userId} />
        </div>









    );

}