"user server";

import "./Register.module.css";
import { RegisterForm } from "@/app/Register/RegisterForm";
import { UserData } from "@/app/Register/registerSchema";
import { auth, currentUser } from "@clerk/nextjs/server";

const defaultData: UserData =
{
  email: "",
  country: "",
  preferredLanguage: ["English"],
  genresInterestedIn: ["Historical novels"],
  linkProfilePage: "",
  newsLetter: true,
  arcInterest: false,


};


export default async function Register() 
{
  const { isAuthenticated, userId} = await auth();

  if (!isAuthenticated)
    return (<div className="signInToProceedDiv">Sign in the view this page</div>);

  const user = await currentUser();

  return (

    <main className="registerPage flex">

      <RegisterForm data={defaultData} />


    </main>


  );
}
