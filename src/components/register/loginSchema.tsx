// import { z } from "zod";

// export const emailSchema = z
//     .email({ message: "Please enter a valid e-mail adress" })
//     .toLowerCase()
//     .trim();


// export const loginSchema = z.object(
// {
//     email: emailSchema,
//     password: z.string().min(6, "Password is required with at least 6 letters")
// });

// export type LoginInput = z.infer<typeof loginSchema>;

// export const forgotPasswordSchema = z.object(
// {
//     email : emailSchema
// });

// export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>;

