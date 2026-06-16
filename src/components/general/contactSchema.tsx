import { z} from "zod"
import { emailSchema } from "../register/loginSchema"

export const contactSchema = z.object(
    {
        email : emailSchema,
        subject : z.string(),
        comment : z.string()

    }
)

export type ContactInfo = z.infer<typeof contactSchema>;