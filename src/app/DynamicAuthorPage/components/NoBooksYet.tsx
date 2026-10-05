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

            <NoBooksDescription isLoggedIn={!!userId} />
        </div>









    );

}