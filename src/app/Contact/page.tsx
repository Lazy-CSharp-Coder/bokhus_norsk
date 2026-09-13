import { ContactUs } from "@/app/Contact/ContactForm";
import styles from "./ContactPage.module.css";
import { BackgroundImage } from "@/components/common/BackgroundImage";
export default function ContactPage()
{
    return (

        <main className={`${styles.contactPage}`}>
            <BackgroundImage className={`${styles.contactBackground}`}src="/images/backgrounds/contact.webp"/>
            <ContactUs />
        </main>

    );
}