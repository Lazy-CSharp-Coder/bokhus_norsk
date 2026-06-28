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

    return (<Link className="privacyLink" href="/Privacy">PRIVACY POLICY </Link>

    );

}

export function CookieButton()
{
    const [showPrivacy, setShowPrivacy] = useState<boolean>(false);

    return (<Link className="cookieLink" href="/Cookies">COOKIE POLICY </Link>

    );

}



export function AffiliateButton()
{
    const [showAffiliate, setShowAffiliate] = useState<boolean>(false);

    return (<button className="affiliateLink" onClick={() => setShowAffiliate((prev) => !prev)}>
       AFFILLIATE OF AMAZON
       
    </button>


    );

}
