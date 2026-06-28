"use client";
import { useForm } from "react-hook-form";
import { useState, useRef } from "react";
import { ContactInfo, ServerResponse } from "./contactSchema";
import { BokHusCom } from "../../components/global/BokHusCom";
import { sendContactForm } from "./actions";
import ReCAPTCHA from "react-google-recaptcha";


const sitekey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

export function ContactUs()
{
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactInfo>();
    const [serverState, setServerState] = useState<ServerResponse | null>(null);
    const [serverMessage, setServerMessage] = useState<string>("")
    const [chaptaToken, setChaptaToken] = useState<string | null>(null);
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    const onSubmit = async (data: ContactInfo) =>
    {
        if (!chaptaToken) 
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
            setServerMessage("Your request has been sendt to Bokhus")
            console.log("should be sendt");
        }
        else
        {

            console.log(response.message);
            recaptchaRef.current?.reset();
        }
    };


    const handleCaptchaChange = (token: string | null) => 
    {
        setChaptaToken(token);
        console.log("Token successfully stored in state:", token);
    };


    return (
        <section className="contactUsSection flex">
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
                    <input className="registerInput" type="email" {...register("email")} placeholder="e-mail address" />
                    {errors.email && <p className="errorRegisterForm">{errors.email.message}</p>}


                </div>

                <div className="inputDiv">
                    <label>Subject : </label>
                    <input className="registerInput" type="text" {...register("subject")} placeholder="subject" />
                    {errors.subject && <p className="errorRegisterForm">{errors.subject.message}</p>}


                </div>


                <div className="inputDiv">
                    <label>Your comment : </label>
                    <textarea className="registerInput" {...register("comment")} placeholder="what is it about ?" rows={10} />
                    {errors.comment && <p className="errorRegisterForm">{errors.comment.message}</p>}


                </div>
                <div className="inputDiv">

                    <ReCAPTCHA ref={recaptchaRef} sitekey={sitekey} onChange={handleCaptchaChange} />
                    {errors.recaptchaToken && <p className="errorRegisterForm">{errors.recaptchaToken.message} </p>}
                </div>
                <button className="submitButton" type="submit" disabled={isSubmitting} >{isSubmitting ? "Submitting data" : "Submit"}</button>
               <p>{serverMessage}</p>


            </form>

            <div className="bokhusComWrapper flex">
                <BokHusCom fontSize="1.1rem" />
            </div>

            {/* </article> */}

        </section>
    );
}
