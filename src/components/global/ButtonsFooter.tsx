import Link from "next/link";

export function TermsButton()
{


    return (<Link className="termsLink" href="/Terms">TERMS OF USE </Link>


    );

}


export function PrivacyButton()
{


    return (<Link className="privacyLink" href="/Privacy">PRIVACY POLICY </Link>

    );

}

export function CookieButton()
{


    return (<Link className="cookieLink" href="/Cookies">COOKIE POLICY </Link>

    );

}



export function AffiliateButton()
{


    return (<Link className="cookieLink" href="/Affiliate">AFFILLIATE OF AMAZON </Link>);


}


