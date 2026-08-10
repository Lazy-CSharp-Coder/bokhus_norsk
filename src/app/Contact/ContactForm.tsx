"use client";
import { useForm } from "react-hook-form";
import { useState, useRef } from "react";
import { ContactInfo, ServerResponse } from "./contactSchema";
import { BokHusCom } from "../../components/common/BokHusCom";
import { sendContactForm } from "./actions";

import ReCAPTCHA from "react-google-recaptcha";

import { IoMailOutline } from "react-icons/io5";
import { FaUserCheck } from "react-icons/fa6";
import { MdOutlineInsertComment, MdOutlineSubject } from "react-icons/md";

import { GoogleReCAPTCHA } from "../../components/common/GoogleReCAPTCHA";
import Image from "next/image";
import { SubmitButton } from "@/components/common/SubmitButton";
import styles from "./ContactForm.module.css";

//  added for importing recaptcha to fix turbopack fault


export function ContactUs()
{
    const { register, handleSubmit, setValue, reset, clearErrors, formState: { errors, isSubmitting } } = useForm<ContactInfo>();
    const [serverState, setServerState] = useState<ServerResponse | null>(null);
    const [serverMessage, setServerMessage] = useState<string>("nomessage");
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    const onSubmit = async (data: ContactInfo) =>
    {

        if (!data.recaptchaToken) 
        {
            alert("Please verify that you are not a robot");
            return;
        }

        setServerState(null);
        const response = await sendContactForm(data);
        setServerState(response);
        if (response.success)
        {

            reset();
            setServerMessage("Your message has been sendt to Bokhus");
            setTimeout(() => { setServerMessage("nomessage"); }, 4000);
            console.log("should be sendt");
            recaptchaRef.current?.reset();
        }
        else
        {

            console.log(response.message);
            recaptchaRef.current?.reset();
        }
    };


    const handleCaptchaChange = (token: string | null) => 
    {
        setValue("recaptchaToken", token || ``, { shouldValidate: false });
        clearErrors("recaptchaToken");

    };


    return (


        <section className={`${styles.contactUsSection} flex fadeInFromBelowAnim`} style={{ animationDelay: "0.8s" }}>
    
            <div className={`${styles.logoHeadingWrapper} flex`}>
                <h2 className={`${styles.contactHeading} flex`}>
                    Contact Us
                </h2>
                <div className={`${styles.logoRegWrapper} flex`}>
                    <Image className={`${styles.logoRegImg} flex rotateInYAnim`} style={{ animationDelay: "1.3s" }} src="/icons/logohvit.png" alt="bokhus logo" fill={true} sizes="(max-width: 128px) 100vw, 50vw" loading="eager" />
                </div>

            </div>
            <p className={`${styles.contactUsText}`}>
                If you have some questions to Bokhus about future releases, this web page or you wanna work with us, please fill out this contact form and we will get back to you as soon as possible.
            </p>

            <form className={`${styles.contactUsForm} flex` }onSubmit={handleSubmit(onSubmit)}>

                <div className={`${styles.inputDiv}`}>
                    <label>Your email address : </label>
                    <IoMailOutline size="1.95rem" className="inputIcon" />
                    <input className={`${styles.contactInput}`} type="email" {...register("email")} />
                    {errors.email && <p className={`${styles.errorRegisterForm}`}>{errors.email.message}</p>}


                </div>

                <div className={`${styles.inputDiv}`}>
                    <label>Subject : </label>
                    <MdOutlineSubject className={`${styles.input}`} size="2rem" />
                    <input className={`${styles.contactInput}`} type="text" {...register("subject")} />
                    {errors.subject && <p className={`${styles.errorRegisterForm}`}>{errors.subject.message}</p>}


                </div>


                <div className={`${styles.inputDiv}`}>
                    <label>Your comment : </label>
                    <MdOutlineInsertComment className={`${styles.inputIcon}`} size="1.95rem" />
                    <textarea className={`${styles.contactInput}`} {...register("comment")} rows={7} />
                    {errors.comment && <p className={`${styles.errorRegisterForm}`}>{errors.comment.message}</p>}


                </div>
                <div className={`${styles.recaptchaWrapper}`}>
                    <FaUserCheck className={`${styles.inputIconRecaptcha}`} size="1.9rem" />
                    <GoogleReCAPTCHA ref={(el) => { recaptchaRef.current = el; }} sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string} onChange={handleCaptchaChange} theme="dark" />
                    {errors.recaptchaToken && <p className={`${styles.errorRegisterForm}`}>{errors.recaptchaToken.message}  </p>}

                </div>

      
                <SubmitButton buttonText="Send message" submitMessage="Sending message" isSubmitting={isSubmitting}/>


            </form>

            <div className={`${styles.bokhusComWrapperContact} flex`}>
                {serverMessage != "nomessage" ?
                    <div className={`${styles.serverMessageDiv} scaleInAnim`}>{serverMessage}</div> :
                    <span className="scaleInAnim" style={{animationDelay: "1s"}}><BokHusCom fontSize="1.2rem" />  </span>}
            </div>

      

        </section>
    );
}
