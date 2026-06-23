import { AffiliateButton, PrivacyButton, TermsButton } from "./ButtonsFooter";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { BokHusCom } from "./BokHusCom";
export function Footer()
{
    return (
        <footer>
            <div className="logoTermsWrapper">
                <div className="logoFooterWrapper">
                    <Image className="logoFooterImg" src="/icons/logosvart.png" alt="bokhus logo" fill={true} sizes="(max-width: 128px) 100vw, 50vw" loading="eager" />
                </div>
                <div className="termsGroup">

                    <TermsButton />
                    <PrivacyButton />
                    <AffiliateButton />
                </div>
            </div>


            <div className="socialMediaGroup">

                <Link className="contactUsLink" href="/Contact"><IoMailOutline size="1.8rem" /></Link>
                <FaInstagram size={"1.7rem"} />
                <FaFacebook size={"1.7rem"} />
            </div>
        </footer>
    );
}

