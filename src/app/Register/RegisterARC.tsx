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
import { RegErrorMessage } from "./RegErrorMessage";
import styles from "./RegisterForm.module.css";


export function RegisterARC()
{
    const { register, formState: { errors } } = useFormContext<{ arc: ARCData; }>();

    const formatOptions = arcSchema.shape.format.options;
    const howLongOptions = arcSchema.shape.howLong.options;
    const comfortableOptions = arcSchema.shape.comfortable.options;
    const errorRules: string = "You have to accept this term to continues";
    return (
        <article key={"#ARCTeam#"} className={`${styles.arcArticle} flex fadeInFromBelowAnim`}>
            <div className={styles.arcHeadingIconWrapper}>
                <h2 className={styles.registerARC}>ADVANCED READERS TEAM QUESTIONS</h2>
                <AiOutlineTeam className={styles.teamIcon} size="2.5rem" />
            </div>

            <fieldset className={styles.arcForm}>


                <div className={styles.multipleChoicesARCList}>
                    <FaRegCopy className={styles.inputRegListARCIcon} size="1.7rem" />
                    <label className={styles.languagesText}>What format do you prefer for ARC copy ?   {errors.arc?.format && <RegErrorMessage message={errors.arc?.format.message} />}</label>
                    <ul className={styles.multipleChoicesARCList}>
                        {formatOptions.map((item) => (

                            <li key={item} className={styles.languagePreferredDiv}>
                                <input type="radio" id={item} value={item} {...register("arc.format")} />
                                <label htmlFor={item}>{item}</label>

                            </li>


                        ))}

                    </ul>

                </div>
                <div className={styles.registerTextArea}>
                    <FaQuestion className={styles.inputRegIcon} size="1.6rem" />
                    <label>Why do you wanna join the Advanced Readers Team ? </label>
                    <textarea className={styles.registerTextAreaInput} rows={4} {...register("arc.why")} placeholder="tell us why" />

                </div>
                <div className={styles.multipleChoicesARCDiv}>
                    <FaRegClock size="1.8rem" className={styles.inputRegListARCIcon} />
                    <label className={styles.languagesText}>How long does it usually take you to read a book ?   {errors.arc?.howLong && <RegErrorMessage message={errors.arc.howLong.message} />}</label>
                    <ul className={styles.multipleChoicesARCList}>
                        {howLongOptions.map((item) => (
                            <li key={item} className={styles.languagePreferredDiv}>
                                <input type="radio" id={item} value={item} {...register("arc.howLong")} />
                                <label htmlFor={item}>{item}</label>
                            </li>
                        ))}

                    </ul>
                </div>
                <div className={styles.multipleChoicesARCDiv}>
                    <TbEyeEdit size="2rem" className={styles.inputRegListARCIcon} />
                    <label className={styles.languagesText}>What do you notice when you read books  ?   {errors.arc?.notice && <RegErrorMessage message={errors.arc.notice.message} />}</label>
                    <ul className={styles.multipleChoicesARCList}>
                        {noticeDef.map((item) => (
                            <li key={item} className={styles.languagePreferredDiv}>
                                <input type="checkbox" id={`#notice#${item}`} value={item} {...register("arc.notice")} />
                                <label htmlFor={`#notice#${item}`}>{item}</label>
                            </li>
                        ))}

                    </ul>

                </div>
                <div className={styles.multipleChoicesARCDiv}>
                    <TbUserQuestion size="1.9rem" className={styles.inputRegListARCIcon} />
                    <label className={styles.languagesText}>Are you comfortable with giving an honest review ?  {errors.arc?.comfortable && <RegErrorMessage message={errors.arc.comfortable.message} />}</label>
                    <ul className={styles.multipleChoicesARCList}>
                        {comfortableOptions.map((item) => (
                            <li key={item} className={styles.languagePreferredDiv}>
                                <input type="radio" id={"#pref#" + item} value={item} {...register("arc.comfortable")} />
                                <label htmlFor={"#pref#" + item}>{item}</label>
                            </li>
                        ))}

                    </ul>

                </div>
                <div className={styles.multipleChoicesARCDiv}>
                    <BsFileEarmarkPost size="1.8rem" className={styles.inputRegListARCIcon} />
                    <label className={styles.languagesText}>Where do you post or plan to post reviews  ?   {errors.arc?.reviewSites && <RegErrorMessage message={errors.arc.reviewSites.message} />}</label>
                    <ul className={styles.multipleChoicesARCList}>
                        {reviewSitesDef.map((item) => (
                            <li key={item} className={styles.languagePreferredDiv}>
                                <input type="checkbox" id={`#reviewSites#${item}`} value={item} {...register("arc.reviewSites")} />
                                <label htmlFor={`#reviewSites#${item}`}>{item}</label>
                            </li>
                        ))}

                    </ul>

                </div>

            </fieldset>
            <fieldset className={styles.arcRulesForm}>
                <div className={styles.arcHeadingIconWrapper}>
                    <h2 className={styles.arcRulesHeading}>ARC RULES AND OPTIONS</h2>

                    <LuScrollText className={`${styles.teamIcon} ${styles.reverseHorizontally}`} size="2.1rem" />
                </div>

                <div className={styles.rulesWrapper}>
                    <MdOutlineChecklist size="2rem" className={styles.inputRegRulesIcon} />
                    <div className={styles.rulesDiv}>

                        <div className={styles.labelInputRulesDiv}>
                            <input id={"ruleNotShare"} type="checkbox" {...register("arc.rules.notShare")} />
                            <label className={styles.rulesLabel} htmlFor="ruleNotShare">Do you understand that you should not distribute your ARC copy ?      {errors.arc?.rules?.notShare && <p className={styles.errorRules}>{errors.arc.rules.notShare.message}</p>}</label>

                        </div>


                    </div>
                    <div className={styles.rulesDiv}>
                        <div className={styles.labelInputRulesDiv}>
                            <input id={"ruleHonest"} type="checkbox" {...register("arc.rules.honestReview")} />
                            <label className={styles.rulesLabel} htmlFor="ruleHonest"> Do you understand that the review should be honest, not bought or pressured ?    {errors.arc?.rules?.honestReview && <p className="errorRules">{errors.arc.rules.honestReview.message}</p>}</label>

                        </div>
                    </div>
                    <div className={styles.rulesDiv}>

                        <div className={styles.labelInputRulesDiv}>
                            <input id={"rule18"} type="checkbox" {...register("arc.rules.above18")} />
                            <label className={styles.rulesLabel} htmlFor="rule18"> Are you above 18 years old, in case book contains adult content ?</label>
                        </div>
                    </div>
                    <div className={styles.rulesDiv}>
                        <div className={styles.labelInputRulesDiv}>
                            <input id={"ruleReminder"} type="checkbox" {...register("arc.rules.reminder")} />
                            <label className={styles.rulesLabel} htmlFor="ruleReminder">    Is it ok be reminded about posting a review when release date approaches ?</label>
                        </div>
                    </div>
                    <div className={styles.rulesDiv}>

                        <div className={styles.labelInputRulesDiv}>
                            <input id={"ruleContactFutureARC"} type="checkbox" {...register("arc.rules.contactFutureARC")} />
                            <label className={styles.rulesLabel} htmlFor="ruleContactFutureARC">  Do you want to be contacted about future ARC copies ?</label>
                        </div>
                    </div>
                    {(errors.arc?.rules?.honestReview || errors.arc?.rules?.notShare) &&
                        <div className={styles.errorRulesDiv}>  * <RegErrorMessage message={errorRules} iconSize="1.1rem" /> </div>}
                </div>
            </fieldset>

        </article>

    );
}