import { ContactUs } from "@/components/general/ContactForm";
import "./Contact.module.css";
import { BackgroundImage } from "@/components/global/BackgroundImage";
export default function ContactPage()
{
    return (

          
            <main className="contactPage">
                  <BackgroundImage className="contactBackground" src="/images/backgrounds/authorBackground1.png" />

                <ContactUs />
            </main>
 
    );
}