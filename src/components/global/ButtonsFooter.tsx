"use client";

import { useState } from "react";

export function TermsButton()
{
    const [showTerms, setShowTerms] = useState<boolean>(false);

    return (<button className="termsButton" onClick={() => setShowTerms((prev) => !prev)}>

     TERMS OF SERVICE
    </button>


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

export interface FooterInfo
{
    heading: string,
    text: string[];
}

export function DisplayInfo({ heading, text }: FooterInfo)
{
    return (
        <div className="footerInfoDiv">
            <h3 className="footerInfoHeading">{heading} </h3>
            <div className="footerInfoTextDiv fadeInFromBelowAnim">
                {text.map((item, index) =>
                    <p className="footerInfoParagraph">{item}</p>)

                }

            </div>
        </div>
    );
}