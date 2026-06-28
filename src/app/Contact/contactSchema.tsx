import { z} from "zod"
import { emailSchema } from "./../Register/registerSchema";


export const contactSchema = z.object(
    {
        email : emailSchema,
        subject : z.string(),
        comment : z.string(),
        recaptchaToken :  z.string().min(1, "reCAPTCHA verification is required")
    }
)
export interface ServerResponse
{
    success : boolean,
    message  :string
};

export type ContactInfo = z.infer<typeof contactSchema>;