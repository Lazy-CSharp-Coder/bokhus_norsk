interface ErrorProps 
{
    message: string
}

import styles from "./ErrorPage.module.css"

export function ErrorPage({ message} : ErrorProps )
{
    console.error(message);
    return(
   
        <main className={styles.errorPage}>{message}</main>

    )
}