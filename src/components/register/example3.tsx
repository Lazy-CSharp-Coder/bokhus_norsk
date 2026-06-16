// 'use client'; // Viktig i Next.js!

// import { useFormContext } from 'react-hook-form';
// import { z } from 'zod';
// import { childSchema } from './schemas'; // Hvis du har delt opp schemaet

// // Slik henter du ut typene hvis schemaet ligger i en annen fil
// type ChildFormValues = z.infer<typeof childSchema>;

// export function ChildForm() {
//   // Pass typen inn i hooken for full auto-complete og type-sikkerhet
//   const { register, formState: { errors } } = useFormContext<{ childData: ChildFormValues }>();

//   return (
//     <fieldset>
//       <input {...register('childData.childField')} />
//       {errors.childData?.childField && (
//         <p>{errors.childData.childField.message}</p>
//       )}
//     </fieldset>
//   );
// }
