"use server";

import "./Register.module.css";
import { RegisterForm } from "@/app/Register/RegisterForm";
import { clerkUserId, UserData } from "@/app/Register/registerSchema";
import { auth, currentUser } from "@clerk/nextjs/server";
import { client } from "@/sanity/client";
import { SignIn } from "./SignIn";
import { BackgroundImage } from "@/components/common/BackgroundImage";


export default async function Register() 
{
  const { isAuthenticated, userId } = await auth();

  if (!isAuthenticated)
    return (<SignIn />);

  const user = await currentUser();
  if (!user)
  {
    return "Unauthorized user";
  }


  const USER_QUERY = `*[_type == "User" && userId == $userIdFromClerk]`;
  const userData: UserData[] = await client.fetch<UserData[]>(USER_QUERY, { userIdFromClerk: userId });
  const dataToSend: UserData =
    userData[0] ? userData[0] :
      {
        userId: clerkUserId.parse(userId),
        email: user.emailAddresses.find((email) => email.id === user.primaryEmailAddressId)?.emailAddress || "not found",
        country: "",
        preferredLanguage: "English",
        genresInterestedIn: [],
        linkProfilePage: "",
        newsLetter: true,
        arcInterest: false,
        arc: undefined

      };


  return (

    <main className="registerPage flex">

      <BackgroundImage className="registerBackground" src="/images/backgrounds/contact.avif"/>
      <RegisterForm data={dataToSend} isNewUser={!userData[0] ? true : false} />
    </main>


  );
};
