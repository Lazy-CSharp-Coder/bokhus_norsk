"use client";

import { useState } from "react";
import Link from "next/link";

export function TermsButton()
{
    // const [showTerms, setShowTerms] = useState<boolean>(false);

    return (<Link className="termsLink" href="/Terms">TERMS OF USE </Link>

    


    );

}


export function PrivacyButton()
{
    const [showPrivacy, setShowPrivacy] = useState<boolean>(false);

    return (<Link className="termsLink" href="/Privacy">Privacy Policy </Link>

    );

}

export function CookieButton()
{
    const [showPrivacy, setShowPrivacy] = useState<boolean>(false);

    return (<Link className="termsLink" href="/Cookies">Cookies </Link>

    );

}



export function AffiliateButton()
{
    const [showAffiliate, setShowAffiliate] = useState<boolean>(false);

    return (<button className="affiliateButton" onClick={() => setShowAffiliate((prev) => !prev)}>
       AFFILLIATE OF AMAZON
       
    </button>


    );

}
