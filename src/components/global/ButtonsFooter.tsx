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

    return (<button className="privacyButton" onClick={() => setShowPrivacy((prev) => !prev)}>

        PRIVACY POLICY
    </button>


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
