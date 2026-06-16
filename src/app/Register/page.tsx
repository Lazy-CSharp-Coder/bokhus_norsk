"use client"
import { useState } from "react";
import LoginForm from "@/components/register/LoginForm";
import "./Register.module.css";
import { RegisterForm } from "@/components/register/RegisterForm";
import { UserData } from "@/components/register/registerSchema";

type AuthScreen = "Login" | "Forgot Password" | "Register Data"

const defaultData : UserData =
{
    email : "",
    country : "",
    preferredLanguage : [ "English" ],
    genresInterestedIn : ["Historical novels"],
    linkProfilePage : "",
    newsLetter : true,
    arcInterest : false, 


}


export default function Register() 
{
    const[screen, setScreen] = useState<AuthScreen>("Register Data")

      const onSuccess = () =>
    {
      console.log("handle successs");
      setScreen("Register Data");

    }

    const handleForgotPassword = () =>
    {
       console.log ("handle forgot password")
       setScreen("Forgot Password");
    }


  return (

      <main className="registerPage flex">
      { screen == "Login" &&
       <LoginForm onSuccess={onSuccess} handleForgotPassword={handleForgotPassword}/>
      }
      { screen == "Register Data" &&
        <RegisterForm onSuccess={onSuccess} data={defaultData}/>
      }
      { screen == "Forgot Password" &&
      <p>Forgot Password form </p>
       }


      </main>


  );
}
