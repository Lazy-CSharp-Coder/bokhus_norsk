import Link from "next/link";

export function TermsButton()
{
   return (<Link className="legalLink" href="/Terms">TERMS OF USE </Link>
    );
}


export function PrivacyButton()
{
    return (<Link className="legalLink" href="/Privacy">PRIVACY POLICY </Link>
    );
}

export function CookieButton()
{
    return (<Link className="legalLink" href="/Cookies">COOKIE POLICY </Link>

    );
}



export function AffiliateButton()
{
    return (<Link className="legalLink" href="/Affiliate">AFFILLIATE OF AMAZON </Link>);

}


