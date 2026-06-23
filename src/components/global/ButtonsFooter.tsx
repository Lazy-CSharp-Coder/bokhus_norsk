"use client";

import { useState } from "react";

export function TermsButton()
{
    const [showTerms, setShowTerms] = useState<boolean>(false);

    return (<button className="termsButton" onClick={() => setShowTerms((prev) => !prev)}>

        Terms of service
    </button>


    );

}


export function PrivacyButton()
{
    const [showTerms, setShowTerms] = useState<boolean>(false);

    return (<button className="termsButton" onClick={() => setShowTerms((prev) => !prev)}>

        Privacy Policy
    </button>


    );

}



export function AffiliateButton()
{
    const [showTerms, setShowTerms] = useState<boolean>(false);

    return (<button className="termsButton" onClick={() => setShowTerms((prev) => !prev)}>

        Affiliate of Amazon
    </button>


    );

}

