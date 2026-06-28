// "use server";

// import { clientFormSchema } from "./schema";

// // Vi utvider klientskjemaet med Google-verifiseringen på serveren
// const serverFormSchema = clientFormSchema.refine(
//   async (data) => {
//     try {
//       const response = await fetch(
//         "https://google.com",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/x-www-form-urlencoded" },
//           body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${data.recaptchaToken}`,
//         }
//       );
//       const resData = await response.json();
//       return resData.success; // Returnerer true hvis Google godkjenner tokenet
//     } catch {
//       return false; // Feiler hvis Google API-et er nede
//     }
//   },
//   {
//     message: "reCAPTCHA-verifisering feilet. Vennligst prøv igjen.",
//     path: ["recaptchaToken"], // Setter feilmeldingen på riktig felt
//   }
// );

// export type ActionState = {
//   success: boolean;
//   message: string;
//   errors?: Record<string, string[]>;
// };

// export async function submitFormAction(
//   prevState: ActionState,
//   formData: FormData
// ): Promise<ActionState> {
//   const rawFields = {
//     email: formData.get("email"),
//     message: formData.get("message"),
//     recaptchaToken: formData.get("recaptchaToken"),
//   };

//   // Siden .refine() gjør et nettverkskall, MÅ vi bruke safeParseAsync
//   const result = await serverFormSchema.safeParseAsync(rawFields);

//   if (!result.success) {
//     return {
//       success: false,
//       message: "Validering feilet.",
//       errors: result.error.flatten().fieldErrors, // Inneholder nå også Google-feilen
//     };
//   }

//   // Dataene er 100% vasket og verifisert av Google og Zod
//   const { email, message } = result.data;
//   console.log("Suksess! Lagrer i database:", { email, message });

//   return {
//     success: true,
//     message: "Skjemaet ble sendt inn!",
//   };
// }
