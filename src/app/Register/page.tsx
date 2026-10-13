"use server";

import styles from  "./Register.module.css";
import { RegisterForm } from "@/app/Register/RegisterForm";
import {registerSchema, UserData } from "@/app/Register/registerSchema";
import { auth, currentUser } from "@clerk/nextjs/server";
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

  const rawData = user.publicMetadata?.userData;

  const validatedData = registerSchema.safeParse(rawData);
  const userData: UserData|null = validatedData.success ? validatedData.data : null;

  const dataToSend: UserData =
    userData ? userData :
      {
       email: user.emailAddresses.find((email) => email.id === user.primaryEmailAddressId)?.emailAddress || "not found",
       userName : user.firstName ? user.fullName ?? "" : "",
        country: "",
        preferredLanguage: "English",
        genresInterestedIn: [],
        linkProfilePage: "",
        newsLetter: true,
        arcInterest: false,
        arc: undefined,
        shouldNotReciveARCAnymore : false

      };


  return (

    <main className={styles.registerPage}>
      <BackgroundImage className={styles.registerBackground} src="/images/backgrounds/contact.webp"/>
      <RegisterForm data={dataToSend} isNewUser={!userData ? true : false} />
    </main>


  );
};
