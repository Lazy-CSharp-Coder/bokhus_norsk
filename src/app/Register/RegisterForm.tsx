"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Resolver } from "react-hook-form";
import { z } from "zod/v4-mini";
import { registerSchema, UserData } from "./registerSchema";
import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react";
import { BokHusCom } from "../../components/common/BokHusCom";
import { RegisterARC } from "./RegisterARC";

import Image from "next/image";
// react icons
import { genresDef } from "./registerSchema";
import { IoEarthSharp } from "react-icons/io5";
import { LuLetterText } from "react-icons/lu";
import { LiaSwatchbookSolid } from "react-icons/lia";
import { TbWorldWww } from "react-icons/tb";
import { GiNewspaper } from "react-icons/gi";
import { FaBookOpenReader } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { IoCheckmarkSharp } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { languageOptions } from "./registerSchema";
import { RegErrorMessage } from "./RegErrorMessage";
import styles from "./RegisterForm.module.css";
import { SubmitButton } from "../../components/common/SubmitButton";
import { submitToClerk } from "./submitToClerk";
import { sendNewUserAlert } from "../Contact/actions";

type RegisterFormInput = z.input<typeof registerSchema>;

interface RegisterFormProps 
{
    data?: RegisterFormInput,
    isNewUser: boolean;

}

type UserInfoHeaderDisplayState = "No user message" | "User found message" | "Display email";

export function RegisterForm({ data, isNewUser }: RegisterFormProps,)
{

    const noUserMessage = "No profile registered. Please submit info";
    const userFoundMessage = "Profile at BokHus retrieved from database";


    
    const myResolver : Resolver<RegisterFormInput, object, UserData> = async (values, context, options) => 
    {
        const normalized : RegisterFormInput = 
        {
            ...values, 
            arc : values.arcInterest ? values.arc : undefined

        } as RegisterFormInput;
        return zodResolver(registerSchema)(normalized, context, options);
    } 

    const methods = useForm<RegisterFormInput, object, UserData>(
        {
            resolver: myResolver,
            defaultValues: data
        }
    );


    const { register, handleSubmit, watch, getValues, formState: { errors, isSubmitting, isValid } } = methods;
    const [userInfo, setUserInfo] = useState<UserInfoHeaderDisplayState>(isNewUser ? "No user message" : "User found message");

    const onSubmit = async (data: UserData) =>
    {
 
       const result = await submitToClerk(data);

        if (result.success)
        {
            alert("Your profile have been submitted to bokhus. Thank you.");
            
            const result = await sendNewUserAlert(data);
            if(result.success == false)
            {
                console.log("Could not send new/updated user altert.");
            }
        

        }
        else alert(`Error : ${result.error}`);
    };

    const userEmail = getValues("email");
    const isJoiningOurTeam = watch("arcInterest", false);


    return (
        <section className={styles.registerSection}>

            <div className={`${styles.userEmailDiv} fadeInAnim`}>

                <div className={`${styles.mailIconAdressWrapper} flex`}>
                    <FaUserLarge size="3rem" className="userIcon" />
                    {userInfo != "Display email" ?
                        <div key={userInfo} className={styles.userInfoDiv} >
                            {userInfo == "No user message" ? <IoMdClose size="1.5rem" className= {`${styles.userInfoIcon} userIconAnim`}/> : <IoCheckmarkSharp size="1.4rem" className={`${styles.userInfoIcon} userIconAnim`} />}
                            <span className="userTextAnim" onAnimationEnd={() => setUserInfo("Display email")}>{userInfo == "No user message" ? noUserMessage : userFoundMessage}</span>
                        </div> :
                        <div className={styles.mailIconUserEmailWrapper}><IoMailOutline size="1.8rem" className={`${styles.regMailIcon} scaleInAnim`} />  <p key={userInfo + "#userEmail"} className={`${styles.userEmailText} scaleInAnim`} style={{ animationDuration: "2s" }}>{userEmail}</p>
                        </div>
                    }
                </div>
            </div>

            <article className={`${styles.generalInfoArticle} flex fadeInFromBelowAnim`} style={{ animationDelay: "0.5s" }}>

                <div className={styles.headingLogoTextWrapper}>
                    <h1 className={styles.registerHeading}>YOUR PROFILE </h1>
                    <div className={styles.logoRegWrapper}>
                        <Image className={`${styles.logoRegImg} rotateInYAnim`} style={{ animationDelay: "1.3s" }} src="/icons/logohvit.png" alt="bokhus logo" fill={true} sizes="(max-width: 128px) 100vw, 50vw" loading="eager" />
                    </div>

                </div>

                <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.registerForm}>

                        <div className={styles.regUpperHalfWrapper}>

                            <div className={styles.registerDiv}>
                                <IoEarthSharp className={styles.inputRegIcon} size="1.9rem" />
                                <label>Which country are you from (optional) :    {errors.country && <p className={styles.errorRegisterForm}>{errors.country.message}</p>} </label>
                                <input className={styles.registerInput} type="text" {...register("country")} placeholder="country" />


                            </div>
                            <div className={styles.multipleChoicesDiv}>
                                <label className={styles.languagesText}>What languages do you prefer ?{errors.preferredLanguage && <RegErrorMessage message={errors.preferredLanguage.message} />} </label>
                                <ul className={styles.multipleChoicesList}>
                                    <LuLetterText className={styles.inputRegListIcon} size="2rem" />
                                    {languageOptions.map((item) => (
                                        <li key={item} className={styles.languagePreferredDiv}>
                                            <input type="radio" id={item} value={item} {...register("preferredLanguage")} />
                                            <label htmlFor={item}>{item}</label>
                                        </li>
                                    ))}

                                </ul>
                            </div>
                                  <div className={styles.multipleChoicesDiv}>
                                 <label className={styles.languagesText}>What genres are you interested in ? {errors.genresInterestedIn && <RegErrorMessage message={errors.genresInterestedIn.message} />}</label>

                                  <ul className={styles.multipleChoicesList}>
                                    <LiaSwatchbookSolid className={styles.inputRegListIcon} size="2.1rem" />
                                    {genresDef.map((item) => (
                                        <li key={item} className={styles.languagePreferredDiv}>
                                            <input type="checkbox" id={item} value={item} {...register("genresInterestedIn")} />
                                            <label htmlFor={item}>{item}</label>
                                        </li>
                                    ))}

                                </ul>
                            </div>
                            <div className={styles.registerDiv}>
                                <TbWorldWww className={styles.inputRegIcon} size="1.85rem" />
                                <label>Do you have a profile page (optional) :  {errors.linkProfilePage && <RegErrorMessage message={errors.linkProfilePage.message} />}
                                </label>
                                <input className={styles.registerInput} type="text" {...register("linkProfilePage")} placeholder="profileUrl" />

                            </div>
                        </div>
                        <div className={styles.newsLetterArcOptionsWrapper}>
                            <div className={styles.oneLineDiv}>
                                <GiNewspaper className={styles.inputRegSingleIcon} size="1.9rem" />
                                <div className={styles.labelInputWrapperOneLineFirst}>
                                    <input className={styles.registerInput} type="checkbox" {...register("newsLetter")} />
                                    <label>Do you wanna receive newsletters from us ? </label>

                                </div>
                                {errors.newsLetter && <RegErrorMessage message={errors.newsLetter.message} />}

                            </div>

                            <div className={styles.oneLineDiv}>
                                <FaBookOpenReader className={styles.inputRegSingleIcon} size="1.8rem" />
                                <div className={styles.labelInputWrapperOneLineSecond}>
                                    <input className="registerInput" type="checkbox" {...register("arcInterest")} />
                                    <label>Are you intereted in joining or Advanced Readers Team ? </label>

                                </div>
                                {errors.arcInterest && <RegErrorMessage message={errors.arcInterest.message} />}

                            </div>
                        </div>
                        {isJoiningOurTeam && <RegisterARC />}
                        <SubmitButton isSubmitting={isSubmitting} />
                    </form>



                </FormProvider>
                <div className={styles.bokhusComWrapper}>
                    <span className="scaleInAnim"  style={{animationDelay: "2s"}}>   <BokHusCom fontSize="1.1rem" /></span>
                 
                </div>
            </article>


        </section>
    );
}