"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod/v4-mini";
import { registerSchema, UserData } from "./registerSchema";
import { useForm, FormProvider } from "react-hook-form";
import { BokHusCom } from "../../components/global/BokHusCom";
import { RegisterARC } from "./RegisterARC";
import { ResolverOptions, ResolverResult } from 'react-hook-form';
import { submitUserData } from "./submitToSanity"

type RegisterFormInput = z.input<typeof registerSchema>;

interface RegisterFormProps 
{
    data?: RegisterFormInput

}

export function RegisterForm({ data }: RegisterFormProps)
{
      const methods = useForm<RegisterFormInput, object, UserData>(
        {
            resolver: zodResolver(registerSchema),
            defaultValues: data
                }
    );

    const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = methods;

    const onSubmit = async (data: UserData) =>
    {
        const result = await submitUserData(data);

        if (result.success)
        {
            alert("Your profile have been submitted to bokhus. Thank you.");

        }
        else alert(`Error : ${result.error}`);
    };

    const languageOptions = registerSchema.shape.preferredLanguage.element.options;
    const genreOptions = registerSchema.shape.genresInterestedIn.element.options;

    const isJoiningOurTeam = watch("arcInterest", false);

    return (
        <section className="registerSection">
            <article className="generalInfoArticle flex fadeInFromBelowAnim">
                <h2 className="registerHeading">YOUR PROFILE</h2>
                <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(onSubmit)} className="registerForm flex">

                        <div className="regUpperHalfWrapper flex">

                            <div className="registerDiv">
                                <label>Email to receive mail from Bokhus : </label>
                                <input className="registerInput" type="email" {...register("email")} placeholder="e-mail address" />
                                {errors.email && <p className="errorRegisterForm">{errors.email.message}</p>}


                            </div>


                            <div className="registerDiv">

                                <label>Which country are you from (optional) : </label>
                                <input className="registerInput" type="text" {...register("country")} placeholder="country" />
                                {errors.country && <p className="errorRegisterForm">{errors.country.message}</p>}

                            </div>
                            <div className="multipleChoicesDiv">
                                <label className="languagesText">What languages do you prefer ?</label>
                                <ul className="multipleChoicesList flex">
                                    {languageOptions.map((item) => (
                                        <li key={item} className="languagePreferredDiv">
                                            <input type="checkbox" id={item} value={item} {...register("preferredLanguage")} />
                                            <label htmlFor={item}>{item}</label>
                                        </li>
                                    ))}
                                    {errors.preferredLanguage && <p className="errorRegisterForm">{errors.preferredLanguage.message}</p>}
                                </ul>
                            </div>
                            <div className="multipleChoicesDiv">
                                <label className="languagesText">What genres are you interested in ?</label>
                                <ul className="multipleChoicesList flex">
                                    {genreOptions.map((item) => (
                                        <li key={item} className="languagePreferredDiv">
                                            <input type="checkbox" id={item} value={item} {...register("genresInterestedIn")} />
                                            <label htmlFor={item}>{item}</label>
                                        </li>
                                    ))}
                                    {errors.genresInterestedIn && <p className="errorRegisterForm">{errors.genresInterestedIn.message}</p>}
                                </ul>
                            </div>
                            <div className="registerDiv">

                                <label>Do you have a profile page (optional) : </label>
                                <input className="registerInput" type="text" {...register("linkProfilePage")} placeholder="profileUrl" />
                                {errors.linkProfilePage && <p className="errorRegisterForm">{errors.linkProfilePage.message}</p>}

                            </div>
                        </div>
                        <div className="newsLetterArcOptionsWrapper flex">
                            <div className="registerDiv">

                                <label>Do you wanna receive newsletters from us ? </label>
                                <input className="registerInput" type="checkbox" {...register("newsLetter")} placeholder="country" />
                                {errors.newsLetter && <p className="errorRegisterForm">{errors.newsLetter.message}</p>}

                            </div>

                            <div className="registerDiv">

                                <label>Are you intereted in joining or Advanced Readers Team ? </label>
                                <input className="registerInput" type="checkbox" {...register("arcInterest")} placeholder="country" />
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