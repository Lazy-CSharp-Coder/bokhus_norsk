"use server";

import { z} from "zod"
import { emailSchema } from "./../Register/registerSchema";

const key = process.env.NEXT_SECRET_RECAPTCHA_KEY;
export const contactSchema = z.object(
    {
        email : emailSchema,
        subject : z.string(),
        comment : z.string(),
        // recaptchaToken :  z.string().min(1, "reCAPTCHA verification is required")
    }
)
export interface ServerResponse
{
    success : boolean,
    message  :string
};
export const serverFormSchema = contactSchema;

// export const serverFormSchema = contactSchema.refine(

//     async(data) =>
//     {
//         try 
//         {
//             const response = await fetch(
//                 "https://google.com",
//                 {
//                     method: "POST",
//                     headers : { "Content-Type": "application/x-www-form-urlencoded"},
//                     body: `secret=${key}&response=${data.recaptchaToken}`
//                 }
//             );
//             const resData = await response.json();
//             return resData.success;
//         }
//         catch{
//             return false;
//         }
//     },
//     { message : "reCAPTCHA verification failed. Please try again.",
//         path : ["recaptchaToken"]   // error shows in right field
//     }
// )

export type ContactInfo = z.infer<typeof contactSchema>;