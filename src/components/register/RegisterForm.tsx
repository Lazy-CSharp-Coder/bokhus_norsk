"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, UserData } from "./registerSchema";
import { useForm, FormProvider } from "react-hook-form";
import { BokHusCom } from "../global/BokHusCom";
import { RegisterARC } from "./RegisterARC";
import { ResolverOptions, ResolverResult } from 'react-hook-form';
import { submitUserData } from "./submitToSanity";

interface RegisterFormProps 
{
    data?: UserData,
    onSuccess: () => void;

}

export function RegisterForm({ data, onSuccess }: RegisterFormProps)
{
    // const [isPending, startTransition] = useTransition();

    const defaultData: UserData = {
        email: "",
        country: "",
        preferredLanguage: ["English"],
        genresInterestedIn: ["Historical novels"],
        linkProfilePage: "",
        newsLetter: true,
        arcInterest: false,
        arc: {
            languageArcCopy: "English",
            format: "pdf",
            why: "",
            howLong: "Within a week",
            comfortable: "Yes",
            reviewSites: [],
            notice: [],
            rules: {
                notShare: false,
                honestReview: false,
                above18: false,
                reminder: false,
                contactFutureARC: false,
            },
        },
    };

    const normalize = (values: UserData) => (
        {
            ...values,
            arc: values.arc ? {
                ...values.arc,
                reviewSites: Array.isArray(values.arc.reviewSites) ? values.arc.reviewSites : [],
                notice: Array.isArray(values.arc.notice) ? values.arc.notice : [],
            }
                :
                values.arc
        }

    );

  // options: ResolverOptions<TFieldValues>
    const resolver = async (values : UserData, context : Record<string, UserData>, options : ResolverOptions<UserData>) =>
    {
        return zodResolver(registerSchema)(normalize(values), context, options);
    }
    const methods = useForm<UserData>(
        {
            resolver: resolver,
            defaultValues: data ? data : defaultData
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
        <main className="registerPage">
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
                            <div className="languagesDiv">
                                <label className="languagesText">What languages do you prefer ?</label>
                                <ul className="languagesList flex">
                                    {languageOptions.map((item) => (
                                        <li key={item} className="languagePreferredDiv">
                                            <input type="checkbox" id={item} value={item} {...register("preferredLanguage")} />
                                            <label htmlFor={item}>{item}</label>
                                        </li>
                                    ))}
                                    {errors.preferredLanguage && <p className="errorRegisterForm">{errors.preferredLanguage.message}</p>}
                                </ul>
                            </div>
                            <div className="languagesDiv">
                                <label className="languagesText">What genres are you interested in ?</label>
                                <ul className="languagesList flex">
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


        </main>
    );
}