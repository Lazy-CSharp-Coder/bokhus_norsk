import Link from "next/link";
import styles from "./ButtonsFooter.module.css";

export function TermsButton()
{
   return (<Link className={styles.legalLink} href="/Terms">BRUKERVILKÅR </Link>
    );
}


export function PrivacyButton()
{
    return (<Link className={styles.legalLink} href="/Privacy">PERSONVERNERKLÆRING </Link>
    );
}

export function CookieButton()
{
    return (<Link className={styles.legalLink} href="/Cookies">COOKIE POLICY </Link>

    );
}



export function AffiliateButton()
{
    return (<Link className={styles.legalLink} href="/Affiliate">AMAZON-PARTNER </Link>);

}


