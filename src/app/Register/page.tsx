"use server";

import styles from  "./Register.module.css";
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

  const myId = `User.${userId}`;

  const USER_QUERY = `*[_type == "User" && _id == $userIdFromClerk][0]`;
  const userData: UserData = await client.fetch<UserData>(USER_QUERY, { userIdFromClerk : myId });
  const dataToSend: UserData =
    userData ? userData :
      {
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

    <main className={styles.registerPage}>
      <BackgroundImage className={styles.registerBackground} src="/images/backgrounds/contact.webp"/>
      <RegisterForm data={dataToSend} isNewUser={!userData ? true : false} />
    </main>


  );
};
