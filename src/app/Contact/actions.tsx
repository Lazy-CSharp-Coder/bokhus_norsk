"use server";

import { Resend } from "resend";
import { ContactInfo,ServerResponse, contactSchema } from "./contactSchema";
import type { NewUserAlert } from "@/types/types";
import { UserData } from "../Register/registerSchema";

const resend = new Resend(process.env.RESEND_API_KEY);


// refine -> zod takes care of recaptcha verification (if I'm right)


 const serverFormSchema = contactSchema.refine(

    async(data) =>
    {
        if(!process.env.NEXT_SECRET_RECAPTCHA_KEY)
        {
            console.error("Missing ReCaptcha secret key in enviroment variables");
            return false;
        }
        try 
        {
            const params = new URLSearchParams({
                secret : process.env.NEXT_SECRET_RECAPTCHA_KEY,
                response : data.recaptchaToken
            });
            const response = await fetch(
              "https://www.google.com/recaptcha/api/siteverify",
                {
                    method: "POST",
                    headers : { "Content-Type": "application/x-www-form-urlencoded"},
                    body: params.toString()
                }
            );
            const resData = await response.json();
            return resData.success;
        }
        catch (error){
            console.error("reCaptcha fetch failed", error)
            return false;
        }
    },
    { message : "reCAPTCHA verification failed. Please try again.",
        path : ["recaptchaToken"]   // error shows in right field
    }
)

export async function sendContactForm(data : ContactInfo ) : Promise<ServerResponse>
{
 
    const validateFields = await serverFormSchema.safeParseAsync(data);

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
            from : "Contact Form Mail <onboarding@resend.dev>",
            to: process.env.CONTACT_RECEIVER_EMAIL as string,
            replyTo: email, 
            subject : `Contact Form : ${subject}`,
            html : `<p>${email} has send the following message from your norwegian Bokhus.no web page.</p>
            <p>Subject is : ${subject}. </p> <br>
            <p>${comment}</p>`
        });
        if(error)
        {
            return { success : false, message: error.message}
        }
        return { success : true, message : "Your message has been sendt to Bokhus.no"};
    
    }
    catch (err)
    {
        return { success : false, message : "An unexpected server error occured"}
    }

}



export async function sendNewUserAlert(data : UserData) : Promise<ServerResponse>
{
    const { email, userName, genresInterestedIn, arcInterest, newsLetter} = data;
    const arcText = arcInterest ?  "User is interested in becoming ARC reader" : "User has not applied for ARC candidacy";
    const newsLetterText = newsLetter ? "User wants to recieve newsletters" : "User do not want to recieve newsletter";
    const interests = genresInterestedIn.join(", ");
      try {
        const { error } = await resend.emails.send({
            from : "New User Alert Mail <onboarding@resend.dev>",
            to: process.env.CONTACT_RECEIVER_EMAIL as string,
            replyTo: email, 
            subject : `User ${userName} has registered profile information at BokHus.no`,
            html : `<p>${email} has registered/updated profile information at your web-page.</p>
            <p>User has interest in the following genres :  ${interests} </p><br>
            <p>${newsLetterText}</p> <br>
            <p>${arcText}</p> <br>
            <p>Please refer to Clerk metadata for more information</p>`
        });
        if(error)
        {
            return { success : false, message: error.message}
        }
        return { success : true, message : "Your message has been sendt to Bokhus.no"};
    
    }
    catch (err)
    {
        return { success : false, message : "An unexpected server error occured"}
    }
}