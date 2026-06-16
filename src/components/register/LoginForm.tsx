// "use client";

// import React, { useTransition } from "react";
// import Link from "next/link";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";

// interface LoginFormProps 
// {
//     onSuccess: () => void,
//     handleForgotPassword: () => void;
// }

// import { loginSchema, type LoginInput } from "./loginSchema";

// export default function LoginForm({ onSuccess, handleForgotPassword }: LoginFormProps)
// {
//     const [isPending, startTransition] = useTransition();

//     const { register, handleSubmit, formState: { errors, isSubmitting }, } = useForm<LoginInput>(
//         {
//             resolver: zodResolver(loginSchema),
//             defaultValues: { email: "", password: "" },

//         });

//     const onSubmit = async (data: LoginInput) =>
//     {
//         try
//         {

//             await new Promise((resolve) => setTimeout(resolve, 1000));
//             console.log("login form data", data);
//             onSuccess();
//         }
//         catch (error)
//         {
//             console.error(error);
//         }
//     };

//     const handleRegisterNewUser =  ()=>
//     {
//         console.log("here stuff should happen");
//     }

//     return (

//         <section className="loginSection flex fadeInAnim">
//             <h2 className="loginHeadingText">Login to Bokhus.com</h2>
//             <form onSubmit={handleSubmit(onSubmit)} className="loginForm flex">
//                 <div className="emailInputDiv flex">

//                     <label className="emailAddress">Email address :</label>
//                     <input type="email" {...register("email")} className="emailInput" placeholder="e-mail address"></input>


//                     {errors.email && <span className="errorMsg">{errors.email.message}</span>}

//                 </div>
//                 <div className="passwordInputDiv flex">

//                     <label className="password">Password :</label>
//                     <input type="password" {...register("password")} className="passwordInput" placeholder="password"></input>

//                     {errors.password && <p className="errorMsg fadeInAnim">{errors.password.message}</p>}


//                 </div>

//                 <button type="button" onClick={handleForgotPassword} className="forgotPasswordButton">
                
//                     Forgot Password ?
//                 </button>
//                 <div className="registerDiv flex">
//                     Not a member ?          
//                     <button type="button" onClick={handleRegisterNewUser} className="registerButton">Register</button> </div>
                

//                 <button type="submit" disabled={isSubmitting} className="submitButton">{isSubmitting ? "Logging in...." : "Login"}</button>
//             </form>



//         </section>

//     );



// }