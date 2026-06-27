import { ContactUs } from "@/app/Contact/ContactForm";
import "./Contact.module.css";
import { BackgroundImage } from "@/components/global/BackgroundImage";
export default function ContactPage()
{
    return (


        <main className="contactPage">
            <BackgroundImage className="contactBackground" src="/images/backgrounds/profileBackground2.png" />

            <ContactUs />
        </main>

    );
}