import { AffiliateButton, PrivacyButton, TermsButton } from "./ButtonsFooter";
import { FaFacebook, FaInstagram } from "react-icons/fa";

import Image from "next/image";
import { BokHusCom } from "./BokHusCom";
export function Footer()
{
    return (
        <footer>

            <div className="termsGroup">
                <div className="logoFooterWrapper">
                    <Image className="logoFooterImg" src="/icons/logosvart.png" alt="bokhus logo" fill={true}  sizes="(max-width: 128px) 100vw, 50vw" loading="eager" />

                </div>

                <TermsButton />
                <PrivacyButton />
                <AffiliateButton />
            </div>

            <div className="socialMediaGroup">
    <FaInstagram size={"1.7rem"}/>
                <FaFacebook size={"1.7rem"} />
            
                


            </div>
        </footer>
    );
}

