// // src/components/LoginForm.tsx
// 'use client';

// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { loginSchema, LoginInput } from '@/schemas/auth';

// interface LoginFormProps {
//   onSuccess: () => void;
//   onForgotPasswordClick: () => void;
// }

// export default function LoginForm({ onSuccess, onForgotPasswordClick }: LoginFormProps) {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm<LoginInput>({
//     resolver: zodResolver(loginSchema),
//   });

//   const onSubmit = async (data: LoginInput) => {
//     try {
//       // Simulate API verification request
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       console.log('Login Form Data:', data);
      
//       // Trigger success callback
//       onSuccess();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>
//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Email</label>
//           <input
//             type="email"
//             {...register('email')}
//             className="mt-1 block w-full rounded-md border border-gray-300 p-2"
//           />
//           {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Password</label>
//           <input
//             type="password"
//             {...register('password')}
//             className="mt-1 block w-full rounded-md border border-gray-300 p-2"
//           />
//           {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
//         </div>

//         <div className="flex justify-between items-center text-sm">
//           <button
//             type="button"
//             onClick={onForgotPasswordClick}
//             className="text-blue-600 hover:underline"
//           >
//             Forgot Password?
//           </button>
//         </div>

//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
//         >
//           {isSubmitting ? 'Logging in...' : 'Login'}
//         </button>
//       </form>
//     </div>
//   );
// }
