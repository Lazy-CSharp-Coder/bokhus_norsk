import { ContactUs } from "@/components/general/ContactForm"
import "./Contact.module.css";
import { BackgroundImage } from "@/components/global/BackgroundImage";
export default function ContactPage()
{
    return(
        <>
        <main>
             <BackgroundImage className="contactBackground" />
            <ContactUs/>
        </main>
        </>
      
    )
}