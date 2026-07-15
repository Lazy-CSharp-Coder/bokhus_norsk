"use client";
import { arcSchema, ARCData, reviewSitesDef, noticeDef, languageOptions } from "./registerSchema";
import { useFormContext } from "react-hook-form";
import { FaRegClock } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa6";
import { TbUserQuestion } from "react-icons/tb";
import { BsFileEarmarkPost } from "react-icons/bs";
import { AiOutlineTeam } from "react-icons/ai";
import { MdOutlineChecklist } from "react-icons/md";
import { TbEyeEdit } from "react-icons/tb";
import { FaRegCopy } from "react-icons/fa";

import { LuScrollText } from "react-icons/lu";

interface ARCFormProps
{
    arcData: ARCData,
    onFinished: (data: ARCData) => void;
}

export function RegisterARC()
{
    const { register, formState: { errors } } = useFormContext<{ arc: ARCData; }>();


    const formatOptions = arcSchema.shape.format.options;
    const howLongOptions = arcSchema.shape.howLong.options;
    const comfortableOptions = arcSchema.shape.comfortable.options;
    const errorRules: string = "You have to accept this term to continues";
    return (
        <article key={"#ARCTeam#"} className="arcArticle flex fadeInFromBelowAnim">
            <div className="arcHeadingIconWrapper flex">
                <h2 className="registerARC">ADVANCED READERS TEAM QUESTIONS</h2>
                <AiOutlineTeam className="teamIcon" size="2.5rem" />
            </div>

            <fieldset className="arcForm flex">


                <div className="multipleChoicesARCDiv flex">
                    <FaRegCopy className="inputRegListARCIcon" size="1.7rem" />
                    <label className="languagesText">What format do you prefer for ARC copy ?   {errors.arc?.format && <p className="errorRegisterForm">{errors.arc.format.message}</p>}</label>
                    <ul className="multipleChoicesARCList flex">
                        {formatOptions.map((item) => (

                            <li key={item} className="languagePreferredDiv">
                                <input type="radio" id={item} value={item} {...register("arc.format")} />
                                <label htmlFor={item}>{item}</label>

                            </li>


                        ))}

                    </ul>

                </div>
                <div className="registerTextArea">
                    <FaQuestion className="inputRegIcon" size="1.6rem" />
                    <label>Why do you wanna join the Advanced Readers Team ? </label>
                    <textarea className="registerTextAreaInput" rows={4} {...register("arc.why")} placeholder="tell us why" />

                </div>
                <div className="multipleChoicesARCDiv flex">
                    <FaRegClock size="1.8rem" className="inputRegListARCIcon" />
                    <label className="languagesText">How long does it usually take you to read a book ?   {errors.arc?.howLong && <p className="errorRegisterForm">{errors.arc.howLong.message}</p>}</label>
                    <ul className="multipleChoicesARCList flex">
                        {howLongOptions.map((item) => (
                            <li key={item} className="languagePreferredDiv">
                                <input type="radio" id={item} value={item} {...register("arc.howLong")} />
                                <label htmlFor={item}>{item}</label>
                            </li>
                        ))}

                    </ul>

                </div> <div className="multipleChoicesARCDiv flex">
                    <TbEyeEdit size="2rem" className="inputRegListARCIcon" />
                    <label className="languagesText">What do you notice when you read books  ?   {errors.arc?.notice && <p className="errorRegisterForm">{errors.arc.notice.message}</p>}</label>
                    <ul className="multipleChoicesARCList flex">
                        {noticeDef.map((item) => (
                            <li key={item} className="languagePreferredDiv">
                                <input type="checkbox" id={`#notice#${item}`} value={item} {...register("arc.notice")} />
                                <label htmlFor={`#notice#${item}`}>{item}</label>
                            </li>
                        ))}

                    </ul>

                </div>
                <div className="multipleChoicesARCDiv flex">
                    <TbUserQuestion size="1.9rem" className="inputRegListARCIcon" />
                    <label className="languagesText">Are you comfortable with giving an honest review ?  {errors.arc?.comfortable && <p className="errorRegisterForm">{errors.arc.comfortable.message}</p>}</label>
                    <ul className="multipleChoicesARCList flex">
                        {comfortableOptions.map((item) => (
                            <li key={item} className="languagePreferredDiv">
                                <input type="radio" id={"#pref#" + item} value={item} {...register("arc.comfortable")} />
                                <label htmlFor={"#pref#" + item}>{item}</label>
                            </li>
                        ))}

                    </ul>

                </div>
                <div className="multipleChoicesARCDiv flex">
                    <BsFileEarmarkPost size="1.8rem" className="inputRegListARCIcon" />
                    <label className="languagesText">Where do you post reviews  ?   {errors.arc?.reviewSites && <p className="errorRegisterForm">{errors.arc.reviewSites.message}</p>}</label>
                    <ul className="multipleChoicesARCList flex">
                        {reviewSitesDef.map((item) => (
                            <li key={item} className="languagePreferredDiv">
                                <input type="checkbox" id={`#reviewSites#${item}`} value={item} {...register("arc.reviewSites")} />
                                <label htmlFor={`#reviewSites#${item}`}>{item}</label>
                            </li>
                        ))}

                    </ul>

                </div>

            </fieldset>
            <fieldset className="arcRulesForm flex">
                <div className="arcHeadingIconWrapper flex">
                    <h2 className="arcRulesHeading">ARC RULES AND OPTIONS</h2>

                    <LuScrollText className="teamIcon reverseHorizontally" size="2.1rem" />
                </div>

                <div className="rulesWrapper">
                    <MdOutlineChecklist size="2rem" className="inputRegRulesIcon" />
                    <div className="rulesDiv">

                        <div className="labelInputRulesDiv flex">
                            <input id={"ruleNotShare"} type="checkbox" {...register("arc.rules.notShare")} />
                            <label className="rulesLabel" htmlFor="ruleNotShare">Do you understand that you should not distribute your ARC copy ?</label>
                            {errors.arc?.rules?.notShare && <p className="errorRulesx">{errors.arc.rules.notShare.message}</p>}
                        </div>


                    </div>
                    <div className="rulesDiv">
                        <div className="labelInputRulesDiv flex">
                            <input id={"ruleHonest"} type="checkbox" {...register("arc.rules.honestReview")} />
                            <label className="rulesLabel" htmlFor="ruleHonest"> Do you understand that the review should be honest, not bought or pressured ?</label>
                            {errors.arc?.rules?.honestReview && <p className="errorRulesx">{errors.arc.rules.honestReview.message}</p>}
                        </div>





                    </div>
                    <div className="rulesDiv">

                        <div className="labelInputRulesDiv flex">
                            <input id={"rule18"} type="checkbox" {...register("arc.rules.above18")} />
                            <label className="rulesLabel" htmlFor="rule18"> Are you above 18 years old, in case book contains adult content ?</label>


                        </div>


                    </div>
                    <div className="rulesDiv">

                        <div className="labelInputRulesDiv flex">
                            <input id={"ruleReminder"} type="checkbox" {...register("arc.rules.reminder")} />
                            <label className="rulesLabel" htmlFor="ruleReminder">    Is it ok be reminded about posting a review when release date approaches ?</label>
                        </div>
                    </div>
                    <div className="rulesDiv">

                        <div className="labelInputRulesDiv flex">
                            <input id={"ruleContactFutureARC"} type="checkbox" {...register("arc.rules.contactFutureARC")} />
                            <label className="rulesLabel" htmlFor="ruleContactFutureARC">  Do you want to be contacted about future ARC copies ?</label>
                        </div>
                    </div>

                </div>
                <div className="errorRulesDiv">
                    {(errors.arc?.rules?.honestReview || errors.arc?.rules?.notShare) && <p className="errorRules">{errorRules}</p>}
                </div>-
            </fieldset>

        </article>

    );
}