"use server";

import { Resend } from "resend";
import { ContactInfo, contactSchema, ServerResponse, serverFormSchema } from "./contactSchema";

const resend = new Resend(process.env.RESEND_API_KEY);


// refine -> zod takes care of recaptcha verification (if I'm right)


export async function sendContactForm(data : ContactInfo ) : Promise<ServerResponse>
{
 
    const validateFields = serverFormSchema.safeParse(data);

    if(!validateFields.success)
    {
        return  {
            success : false,
            message : "Invalid field data in Contact"
        }
    }

    const { email, subject, comment } = validateFields.data;
    try {
        const { error } = await resend.emails.send({
            from : "Constact Form <onboarding@resend.dev>",
            to: process.env.CONTACT_RECEIVER_EMAIL as string,
            replyTo: email, 
            subject : `[Contact Form] ${subject}`,
            html : `<p>${comment}</p>`
        });
        if(error)
        {
            return { success : false, message: error.message}
        }
        return { success : true, message : "Your message has been sendt to Bokhus.com"};
    
    }
    catch (err)
    {
        return { success : false, message : "An unexpected server error occured"}
    }

}