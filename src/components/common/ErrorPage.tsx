import Link from "next/link";

import styles from "./ErrorPage.module.css";
interface ErrorProps 
{
    message: string,
    linkBack : string
}



export function ErrorPage({ message, linkBack }: ErrorProps)
{
    console.error(message);
    return (

        <main className={styles.errorPage}>{message} <Link className={styles.backLink} href={linkBack}>Back to Page </Link> </main>

    );
}