"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod/v4-mini";
import { registerSchema, UserData } from "./registerSchema";
import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react";
import { BokHusCom } from "../../components/common/BokHusCom";
import { RegisterARC } from "./RegisterARC";
import { submitUserData } from "./submitToSanity";
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
    const methods = useForm<RegisterFormInput, object, UserData>(
        {
            resolver: zodResolver(registerSchema),
            defaultValues: data
        }
    );

    const { register, handleSubmit, watch, getValues, formState: { errors, isSubmitting } } = methods;
    const [userInfo, setUserInfo] = useState<UserInfoHeaderDisplayState>(isNewUser ? "No user message" : "User found message");

    const onSubmit = async (data: UserData) =>
    {
        const result = await submitUserData(data);

        if (result.success)
        {
            alert("Your profile have been submitted to bokhus. Thank you.");

        }
        else alert(`Error : ${result.error}`);
    };

    const userEmail = getValues("email");
    const isJoiningOurTeam = watch("arcInterest", false);

    return (
        <section className="registerSection">

            <div className="userEmailDiv fadeInAnim">

                <div className="mailIconAdressWrapper flex">
                    <FaUserLarge size="3rem" className="userIcon" />
                    {userInfo != "Display email" ?
                        <div key={userInfo} className="userInfoDiv" >
                            {userInfo == "No user message" ? <IoMdClose size="1.5rem" className="userInfoIcon userIconAnim" /> : <IoCheckmarkSharp size="1.4rem" className="userInfoIcon userIconAnim" />}
                            <span className="userTextAnim" onAnimationEnd={() => setUserInfo("Display email")}>{userInfo == "No user message" ? noUserMessage : userFoundMessage}</span>
                        </div> :
                        <div className="mailIconUserEmailWrapper"><IoMailOutline size="1.8rem" className="regMailIcon scaleInAnim" />  <p key={userInfo + "#userEmail"} className="userEmailText scaleInAnim" style={{ animationDuration: "2s" }}>{userEmail}</p>
                        </div>
                    }
                </div>
            </div>

            <article className="generalInfoArticle flex fadeInFromBelowAnim" style={{ animationDelay: "0.5s" }}>

                <div className="headingLogoTextWrapper flex">
                    <h2 className="registerHeading">YOUR PROFILE </h2>
                    <div className="logoRegWrapper">
                        <Image className="logoRegImg rotateInYAnim" style={{ animationDelay: "1.3s" }} src="/icons/logosvart.png" alt="bokhus logo" fill={true} sizes="(max-width: 128px) 100vw, 50vw" loading="eager" />
                    </div>

                </div>

                <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(onSubmit)} className="registerForm flex">

                        <div className="regUpperHalfWrapper flex">

                            <div className="registerDiv">
                                <IoEarthSharp className="inputRegIcon" size="1.9rem" />
                                <label>Which country are you from (optional) : </label>
                                <input className="registerInput" type="text" {...register("country")} placeholder="country" />
                                {errors.country && <p className="errorRegisterForm">{errors.country.message}</p>}

                            </div>
                            <div className="multipleChoicesDiv">
                                <label className="languagesText">What languages do you prefer ?</label>
                                <ul className="multipleChoicesList flex">
                                    <LuLetterText className="inputRegListIcon" size="2rem" />
                                    {languageOptions.map((item) => (
                                        <li key={item} className="languagePreferredDiv">
                                            <input type="radio" id={item} value={item} {...register("preferredLanguage")} />
                                            <label htmlFor={item}>{item}</label>
                                        </li>
                                    ))}

                                </ul>  {errors.preferredLanguage && <p className="errorRegisterForm">{errors.preferredLanguage.message}</p>}
                            </div>
                            <div className="multipleChoicesDiv">
                                <label className="languagesText">What genres are you interested in ?</label>

                                <ul className="multipleChoicesList flex">
                                    <LiaSwatchbookSolid className="inputRegListIcon" size="2.1rem" />
                                    {genresDef.map((item) => (
                                        <li key={item} className="languagePreferredDiv">
                                            <input type="checkbox" id={item} value={item} {...register("genresInterestedIn")} />
                                            <label htmlFor={item}>{item}</label>
                                        </li>
                                    ))}
                             
                                </ul>       {errors.genresInterestedIn && <p className="errorRegisterForm">{errors.genresInterestedIn.message}</p>}
                            </div>
                            <div className="registerDiv">
                                <TbWorldWww className="inputRegIcon" size="1.85rem" />
                                <label>Do you have a profile page (optional) : </label>
                                <input className="registerInput" type="text" {...register("linkProfilePage")} placeholder="profileUrl" />
                                {errors.linkProfilePage && <p className="errorRegisterForm">{errors.linkProfilePage.message}</p>}

                            </div>
                        </div>
                        <div className="newsLetterArcOptionsWrapper flex">
                            <div className="oneLineDiv">
                                <GiNewspaper className="inputRegSingleIcon" size="1.9rem" />
                                <div className="labelInputWrapperOneLineFirst flex">
                                    <input className="registerInput" type="checkbox" {...register("newsLetter")} />
                                    <label>Do you wanna receive newsletters from us ? </label>

                                </div>
                                {errors.newsLetter && <p className="errorRegisterForm">{errors.newsLetter.message}</p>}

                            </div>

                            <div className="oneLineDiv">
                                <FaBookOpenReader className="inputRegSingleIcon" size="1.8rem" />
                                <div className="labelInputWrapperOneLineSecond flex">
                                    <input className="registerInput" type="checkbox" {...register("arcInterest")} />
                                    <label>Are you intereted in joining or Advanced Readers Team ? </label>

                                </div>
                                {errors.arcInterest && <p className="errorRegisterForm">{errors.arcInterest.message}</p>}

                            </div>
                        </div>
                        {isJoiningOurTeam && <RegisterARC />}

                        <button className="submitButton" type="submit" disabled={isSubmitting} >{isSubmitting ? "Submitting data" : "Submit"}</button>
                        {Object.keys(errors).length > 0 && (
                            <p className="errorRegisterForm">
                                {/* {Object.entries(errors).map(([fieldName, error]) =>`${fieldName} :  ${error.message}`).join('\n') */}
                                Form not valid. Please check marked entires.
                            </p>)}
                    </form>



                </FormProvider>
                <div className="bokhusComWrapper flex">
                    <BokHusCom fontSize="1.1rem" />
                </div>
            </article>


        </section>
    );
}