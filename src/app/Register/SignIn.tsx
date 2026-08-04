import { BackgroundImage } from "@/components/common/BackgroundImage";
import { BokHusCom } from "@/components/common/BokHusCom";

export function SignIn()
{
    return (
        <main className="signInMain">
            <BackgroundImage className="signInBackground" src="/images/backgrounds/contact.png" />
            <div className="signInSignDiv flex fadeInAnim" style={{ animationDelay: "0.8s" }}>
                <h2 className="signInText"> Sign in to <BokHusCom fontSize="2rem" /></h2>

                <h2 className="signInText"> to register/edit profile information</h2>
            </div>
        </main>
    );
}