// // app/components/DocumentForm.tsx
// 'use client'

// import { useForm } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { z } from 'zod'
// import { createSanityDocument } from '../actions/sanityActions'

// const formSchema = z.object({
//   title: z.string().min(3, 'Title must be 3+ characters'),
//   description: z.string().min(10, 'Description must be 10+ characters'),
// })

// type FormValues = z.infer<typeof formSchema>

// export default function DocumentForm() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//     reset,
//   } = useForm<FormValues>({
//     resolver: zodResolver(formSchema),
//   })

//   const onSubmit = async (data: FormValues) => {
//     // Call the server action directly like a normal function
//     const response = await createSanityDocument(data)

//     if (response.success) {
//       alert(`Success! Created document ID: ${response.id}`)
//       reset()
//     } else {
//       alert(`Error: ${response.error}`)
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
//       <div>
//         <label>Title</label>
//         <input {...register('title')} />
//         {errors.title && <p style={{ color: 'red' }}>{errors.title.message}</p>}
//       </div>

//       <div>
//         <label>Description</label>
//         <textarea {...register('description')} />
//         {errors.description && <p style={{ color: 'red' }}>{errors.description.message}</p>}
//       </div>

//       <button type="submit" disabled={isSubmitting}>
//         {isSubmitting ? 'Saving...' : 'Submit Form'}
//       </button>
//     </form>
//   )
// }
