"use server";

import "./Register.module.css";
import { RegisterForm } from "@/app/Register/RegisterForm";
import { BrandedClerkUserId, clerkUserId, UserData } from "@/app/Register/registerSchema";
import { auth, currentUser } from "@clerk/nextjs/server";
import { client } from "@/sanity/client";
// const defaultData: UserData =
// {
//   email: "",
//   country: "",
//   preferredLanguage: ["English"],
//   genresInterestedIn: ["Historical novels"],
//   linkProfilePage: "",
//   newsLetter: true,
//   arcInterest: false,


// };


export default async function Register() 
{
  const { isAuthenticated, userId } = await auth();

  if (!isAuthenticated)
    return (<div className="signInToProceedDiv">Sign in the view this page</div>);

  const user = await currentUser();
  if (!user)
  {
    return "Unauthorized user";
  }


  const USER_QUERY = `*[_type == "User" && userId == $userIdFromClerk]`;
  const userData: UserData[] = await client.fetch<UserData[]>(USER_QUERY, { userIdFromClerk: userId });
  const dataToSend :  UserData = 
  userData[0] ? userData[0] : 
  {
        userId: clerkUserId.parse(userId),
        email: user.emailAddresses.find((email) => email.id === user.primaryEmailAddressId)?.emailAddress || "not found",
        country: "",
        preferredLanguage: ["English"],
        genresInterestedIn: ["Historical novels"],
        linkProfilePage: "",
        newsLetter: true,
        arcInterest: false,
        arc: undefined

      };
  
  
    return (

      <main className="registerPage flex">

        <RegisterForm data={dataToSend} />

     </main>


    );
  };
