import { z} from "zod"
import { emailSchema } from "./../Register/registerSchema";


export const contactSchema = z.object(
    {
        email : emailSchema,
        subject : z.string(),
        comment : z.string()

    }
)
export interface ServerResponse
{
    success : boolean,
    message  :string
};

export type ContactInfo = z.infer<typeof contactSchema>;