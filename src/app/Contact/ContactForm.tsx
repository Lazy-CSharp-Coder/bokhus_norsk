"use client";
import { useForm } from "react-hook-form";
import { useState, useRef } from "react";
import { ContactInfo, ServerResponse } from "./contactSchema";
import { BokHusCom } from "../../components/global/BokHusCom";
import { sendContactForm } from "./actions";
import ReCAPTCHA from "react-google-recaptcha";
import { IoMailOutline } from "react-icons/io5";
import { FaUserCheck } from "react-icons/fa6";
import { MdOutlineInsertComment, MdOutlineSubject } from "react-icons/md";
import { GoogleReCAPTCHA } from "./GoogleReCAPTCHA";
import Script from "next/script";


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
            setTimeout(() => { setServerMessage("nomessage"); },3000);
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


        <section className="contactUsSection flex fadeInFromLeftAnim" style={{ animationDelay: "0.8s" }}>
            {/* <article className="contactUsArticle flex"> */}
            <h2 className="contactUsHeading flex">
                Contact Us
            </h2>
            <p className="contactUsText">
                If you have some questions to Bokhus about future releases, this web page or you wanna work with us, please fill out this contact form and we will get back to you as soon as possible.
            </p>

            <form className="contactUsForm flex" onSubmit={handleSubmit(onSubmit)}>

                <div className="inputDiv">
                    <label>Your email address : </label>
                    <IoMailOutline size="1.95rem" className="inputIcon" />
                    <input className="registerInput" type="email" {...register("email")} />
                    {errors.email && <p className="errorRegisterForm">{errors.email.message}</p>}


                </div>

                <div className="inputDiv">
                    <label>Subject : </label>
                    <MdOutlineSubject className="inputIcon" size="2rem" />
                    <input className="registerInput" type="text" {...register("subject")} />
                    {errors.subject && <p className="errorRegisterForm">{errors.subject.message}</p>}


                </div>


                <div className="inputDiv">
                    <label>Your comment : </label>
                    <MdOutlineInsertComment className="inputIcon" size="1.95rem" />
                    <textarea className="registerInput" {...register("comment")} rows={10} />
                    {errors.comment && <p className="errorRegisterForm">{errors.comment.message}</p>}


                </div>
                <div className="recaptchaWrapper">
                    <FaUserCheck className="inputIconRecaptcha" size="1.9rem" />
                    <GoogleReCAPTCHA ref={(el) => { recaptchaRef.current = el; }} sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string} onChange={handleCaptchaChange} theme="dark" />
                    {errors.recaptchaToken && <p className="errorRegisterForm">{errors.recaptchaToken.message}  </p>}

                </div>
                <button className="submitButton" type="submit" disabled={isSubmitting} >{isSubmitting ? "Submitting data" : "Submit"}</button>
            


            </form>
        
                              <div className="bokhusComWrapper flex">
                                { serverMessage != "nomessage" ?
                <div className="serverMessageDiv scaleInAnim">{serverMessage}</div> :
                <span className="scaleInAnim"><BokHusCom fontSize="1.2rem" />  </span>}
            </div>

            {/* </article> */}

        </section>
    );
}
