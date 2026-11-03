import Link from "next/link";
import styles from "./ChangeBokhusDomain.module.css";

interface ChangeBokhusDomainProps 
{
    onPage: string,
    toPage: string,
    domainUrl: string;
}


export function ChangeBokhusDomain({ onPage,toPage, domainUrl }: ChangeBokhusDomainProps)
{
    return (
            <div className={`${styles.cookieDialog} fadeInFromBelowAnim`}>
                <h1 className={styles.heading}>Valg av språk</h1>
                <p className={styles.cookieText}> Du er nå på den {onPage.toLowerCase()} Bokhus-siden. Ditt foretrukne språk er {toPage.toLowerCase()}. </p>
                <p className={styles.cookieText}>Vil du bytte til den {toPage.toLowerCase()}e siden, hvor du kan utforske bøkene våre på ditt foretrukne språk?</p>
                <div className={styles.buttonDiv}>
                    <button className="submitButton">
                        <Link href={domainUrl} >
                            Gå til {toPage}-siden
                        </Link>
                    </button>
                    <button className="submitButton"><Link href="/Register">Bli her</Link></button>

                </div>

            </div>
    );
}