"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ContactInfo, ServerResponse } from "./contactSchema";
import { BokHusCom } from "../../components/global/BokHusCom";
import { sendContactForm } from "./actions";

const emptyForm: ContactInfo =
{
    email: "",
    subject: "",
    comment: "",

};


export function ContactUs()
{
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactInfo>();
    const [ serverState, setServerState] = useState<ServerResponse | null>(null);

    const onSubmit = async (data: ContactInfo) =>
    {
        setServerState(null);
        const response = await sendContactForm(data);
        setServerState(response);
        if(response.success) console.log("should be sendt");
        else console.log(response.message);
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

                    <button className="submitButton" type="submit" disabled={isSubmitting} >{isSubmitting ? "Submitting data" : "Submit"}</button>


                </form>
                <div className="bokhusComWrapper flex">
                    <BokHusCom fontSize="1.1rem" />
                </div>

            {/* </article> */}

        </section>
    );
}


// import { useState, useRef } from "react";
// import emailjs from '@emailjs/browser';
// import ReCAPTCHA from "react-google-recaptcha";

// const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
// const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
// const PUBLIC_KEY_EMAIL = import.meta.env.VITE_PUBLIC_KEY_EMAIL;
// const RECAPTCHA_KEY = import.meta.env.VITE_RECAPTCHA_KEY;


// export interface ContactInfoData
// {
//     name: string,
//     email: string,
//     comment: string,
//     rating: number;
// };

// type AsyncStatus = "loading" | "idle" | "error";
// export function ContactInfoForm()
// {
//     const [contactInfo, setContactInfo] = useState<ContactInfoData>({ name: "", email: "", comment: "", rating: 3 });
//     const [statusMessage, setStatusMessage] = useState<string>("-");
//     const [asyncStatus, setAsyncStatus] = useState<AsyncStatus>("idle");
//     const contactFormRef = useRef<HTMLFormElement>(null);
//     const [chaptaToken, setChaptaToken] = useState<string | null>(null);

//     const { name, email, comment, rating } = contactInfo;

//     const handleChange = (field: keyof ContactInfoData, value: string) =>
//     {
//         setContactInfo((prev) => ({ ...prev, [field]: field == "rating" ? Number(value) : value }));
//     };

//     const handleSubmit = async (e: React.FormEvent) =>
//     {
//         if (!contactFormRef.current) return;

//         if (!chaptaToken)
//         {
//             alert("Please verify that you are not a robot");
//             return;
//         }

//         e.preventDefault();

//         const params = {
//             name: contactInfo.name,
//             email: contactInfo.email,
//             comment: contactInfo.comment,
//             rating: contactInfo.rating,
//             "g-recaptcha-response": chaptaToken
//         };

//         console.log("on submit function called", contactInfo);
//         setAsyncStatus("loading");

//         const serviceId = SERVICE_ID;
//         const templateId = TEMPLATE_ID;
//         const publicKey = PUBLIC_KEY_EMAIL;

//         try
//         {
//             await emailjs.send(serviceId, templateId, params, publicKey);

//             setContactInfo({ name: "", email: "", comment: "", rating: 3 });
//             setStatusMessage("Thank you! Your opinion has been emailed to the creator");
//             setAsyncStatus("idle");
//             setChaptaToken(null);
//         }
//         catch (error)
//         {
//             console.error("Error sending info : " + error);
//             setStatusMessage("An error occured when sending the comment. Please try again.");
//         }

//     };

//     const handleCaptchaChange = (token: string | null) =>
//     {
//         setChaptaToken(token);
//         console.log("Token successfully stored in state:", token);
//     };

//     return (

//         <form ref={contactFormRef} onSubmit={handleSubmit} className="contactMeForm flex">

//             <div className="formNameDiv">
//                 <label className="labelSettings" htmlFor="name">Your name :</label>
//                 <input className="inputSettings" type="text" id="name" value={name} onChange={(e) => handleChange("name", e.target.value)} placeholder="name" />
//             </div>
//             <div className="formMailDiv">
//                 <label className="labelSettings" htmlFor="userEmail">Your e-mail adress :</label>
//                 <input className="inputSettings" type="email" id="userEmail" value={email} onChange={(e) => handleChange("email", e.target.value)} placeholder="e-mail" />

//             </div>
//             <div className="commentDiv flex">

//                 <label className="labelSettings" htmlFor="comment">Your comment :</label>
//                 <textarea className="inputSettings" id="comment" value={comment} onChange={(e) => handleChange("comment", e.target.value)} placeholder="comment" />
//             </div>

//             <div className="ratingDiv flex">
//                 <label className="ratingLabel" htmlFor="rating">Your verdict :</label>

//                 <div className="emojiDiv flex">
//                     <label className="emojiLabel" >
//                         <input type="radio" name="rating" value="1" checked={rating == 1} onChange={(e) => handleChange("rating", e.target.value)} />
//                         😒</label>
//                     <label className="emojiLabel" >
//                         <input type="radio" name="rating" value="2" checked={rating == 2} onChange={(e) => handleChange("rating", e.target.value)} />
//                         🥱</label>
//                     <label className="emojiLabel" >
//                         <input type="radio" name="rating" value="3" checked={rating == 3} onChange={(e) => handleChange("rating", e.target.value)} />
//                         🤔</label>
//                     <label className="emojiLabel" >
//                         <input type="radio" name="rating" value="4" checked={rating == 4} onChange={(e) => handleChange("rating", e.target.value)} />
//                         😉</label>
//                     <label className="emojiLabel" >
//                         <input type="radio" name="rating" value="5" checked={rating == 5} onChange={(e) => handleChange("rating", e.target.value)} />
//                         😀</label>
//                 </div>

//             </div>


//             <div className="formButtonSeparator flex">   <ReCAPTCHA sitekey={RECAPTCHA_KEY} onChange={handleCaptchaChange} />

//                 <button className="onSubmitButton" type="submit" disabled={!chaptaToken}>Submit</button> </div>
//             <p style={{ opacity: statusMessage != "-" && asyncStatus == "idle" ? "0" : "1" }} className={`statusMessageText`}>{statusMessage}</p>
//         </form>


//     );
// }

// export function ContactMe()
// {
//     return (


//         <main className="mainContact">

//             <section className="contactSection flex fadeInAnim" style={{ animationDelay: "0.5s" }}>
//                 <div className="contactInfoText flex">
//                     <div className="iconHeadingWrapper flex">
//                         <span className="emojiHeader">🧐</span>
//                         <h2 className="contactMeHeading">Send in your comment about this page</h2>
//                         <span className="emojiHeader">🤓</span>
//                     </div>

//                     {/* <h2 className="contactMeHeading">🧐 Send in your comment about this page 🤓</h2> */}
//                     <p className="contactText">This is my pratice page for a course in React/Typescript/Vite, a project I started at the beginning of a React course, and has been a hobby project since.</p>
//                     <p className="contactText">If you should stumble upon this page by accident, please tell me HOW that happened🫢, and leave a comment. If you are a friend that has access to test it, please send in a comment about the page. </p>
//                 </div>
//                 <ContactInfoForm />
//             </section>
//             {/* <img className="imageContact" src="/images/huge_avatar.jpg" alt="image for contact"/> */}
//         </main>




//     );
// }