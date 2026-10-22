"use client";

import { formatDef, comfortableDef, ARCData, reviewSitesDef, readTimeDef, readTimeOptions, noticeDef, noticeOptions ,  comfortableOptions, reviewSitesOptions } from "./registerSchema";
import { useFormContext, useWatch } from "react-hook-form";
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
    const { register, control,  formState: { errors } } = useFormContext<{ arc: ARCData; }>();
  const selectedReviewSites = useWatch({
        control, 
        name : "arc.reviewSites.standardSites",
        defaultValue : []
    });
    const isOtherSelected = Array.isArray(selectedReviewSites) &&  selectedReviewSites.includes("Other");
    
   const errorRules: string = "Du må akseptere dette for å fortsette";
    return (
        <article key={"#ARCTeam#"} className={`${styles.arcArticle} flex fadeInFromBelowAnim`}>
            <div className={styles.arcHeadingIconWrapper}>
                <h2 className={styles.registerARC}>ADVANCED READERS COPY SPØRSMÅL</h2>
                <AiOutlineTeam className={styles.teamIcon} size="2.5rem" />
            </div>

            <fieldset className={styles.arcForm}>


                <div className={styles.multipleChoicesARCList}>
                    <FaRegCopy className={styles.inputRegListARCIcon} size="1.7rem" />
                    <label className={styles.languagesText}>Hvilket format foretrekker du å motta ?   {errors.arc?.format && <RegErrorMessage message={errors.arc?.format.message} />}</label>
                    <ul className={styles.multipleChoicesARCList}>
                        {formatDef.map((item) => (

                            <li key={item} className={styles.languagePreferredDiv}>
                                <input type="radio" id={item} value={item} {...register("arc.format")} />
                                <label htmlFor={item}>{item}</label>

                            </li>


                        ))}

                    </ul>

                </div>
                <div className={styles.registerTextArea}>
                    <FaQuestion className={styles.inputRegIcon} size="1.6rem" />
                    <label>Hvorfor vil du motta forhåndskopier ? </label>
                    <textarea className={styles.registerTextAreaInput} rows={4} {...register("arc.why")} placeholder="fortell hvorfor" />

                </div>
                <div className={styles.multipleChoicesARCDiv}>
                    <FaRegClock size="1.8rem" className={styles.inputRegListARCIcon} />
                    <label className={styles.languagesText}>Hvor lenge tar det deg å lese en bok ?   {errors.arc?.howLong && <RegErrorMessage message={errors.arc.howLong.message} />}</label>
                    <ul className={styles.multipleChoicesARCList}>
                        {readTimeDef.map((item, index) => (
                            <li key={item} className={styles.languagePreferredDiv}>
                                <input type="radio" id={item} value={item} {...register("arc.howLong")} />
                                <label htmlFor={item}>{readTimeOptions[index]}</label>
                            </li>
                        ))}

                    </ul>
                </div>
                <div className={styles.multipleChoicesARCDiv}>
                    <TbEyeEdit size="2rem" className={styles.inputRegListARCIcon} />
                    <label className={styles.languagesText}>Hva legger du merke til når du leser bæker ?   {errors.arc?.notice && <RegErrorMessage message={errors.arc.notice.message} />}</label>
                    <ul className={styles.multipleChoicesARCList}>
                        {noticeDef.map((item, index) => (
                            <li key={item} className={styles.languagePreferredDiv}>
                                <input type="checkbox" id={`#notice#${item}`} value={item} {...register("arc.notice")} />
                                <label htmlFor={`#notice#${item}`}>{noticeOptions[index]}</label>
                            </li>
                        ))}

                    </ul>

                </div>
                <div className={styles.multipleChoicesARCDiv}>
                    <TbUserQuestion size="1.9rem" className={styles.inputRegListARCIcon} />
                    <label className={styles.languagesText}>Er du komfortabel med å gi en ærlig omtale ?  {errors.arc?.comfortable && <RegErrorMessage message={errors.arc.comfortable.message} />}</label>
                    <ul className={styles.multipleChoicesARCList}>
                        {comfortableDef.map((item, index) => (
                            <li key={item} className={styles.languagePreferredDiv}>
                                <input type="radio" id={"#pref#" + item} value={item} {...register("arc.comfortable")} />
                                <label htmlFor={"#pref#" + item}>{comfortableOptions[index]} </label>
                            </li>
                        ))}

                    </ul>

                </div>
                <div className={styles.multipleChoicesARCDiv}>
                    <BsFileEarmarkPost size="1.8rem" className={styles.inputRegListARCIcon} />
                    <label className={styles.languagesText}>Hvor mener du det er best å legge ut anmeldelser?   {errors.arc?.reviewSites && <RegErrorMessage message={errors.arc.reviewSites.message} />}</label>
                    <ul className={styles.multipleChoicesARCList}>
                        {reviewSitesDef.map((item, index) => (
                            <li key={item} className={styles.languagePreferredDiv}>
                                <input type="checkbox" id={`#reviewSites#${item}`} value={item} {...register("arc.reviewSites.standardSites")} />
                                <label htmlFor={`#reviewSites#${item}`}>{reviewSitesOptions[index]}</label>
                                    {(isOtherSelected && item == "Other") && <label className={styles.postReviewLabelInput}> <input className={styles.postReviewOtherInput} type="text" id={`#reviewSites# othertext}`} {...register("arc.reviewSites.userDefinedSite")} placeholder="spesifiser" />  {errors.arc?.reviewSites?.userDefinedSite && <RegErrorMessage message={errors.arc.reviewSites.userDefinedSite.message}/>} </label>}
                            </li>
                        ))}

                    </ul>

                </div>

            </fieldset>
            <fieldset className={styles.arcRulesForm}>
                <div className={styles.arcHeadingIconWrapper}>
                    <h2 className={styles.arcRulesHeading}>ARC REGLER OG VALG</h2>

                    <LuScrollText className={`${styles.teamIcon} ${styles.reverseHorizontally}`} size="2.1rem" />
                </div>

                <div className={styles.rulesWrapper}>
                    <MdOutlineChecklist size="2rem" className={styles.inputRegRulesIcon} />
                    <div className={styles.rulesDiv}>

                        <div className={styles.labelInputRulesDiv}>
                            <input id={"ruleNotShare"} type="checkbox" {...register("arc.rules.notShare")} />
                            <label className={styles.rulesLabel} htmlFor="ruleNotShare">Forstår du at du aldri skal dele en ARC kopi ?      {errors.arc?.rules?.notShare && <p className={styles.errorRules}>{errors.arc.rules.notShare.message}</p>}</label>

                        </div>


                    </div>
                    <div className={styles.rulesDiv}>
                        <div className={styles.labelInputRulesDiv}>
                            <input id={"ruleHonest"} type="checkbox" {...register("arc.rules.honestReview")} />
                            <label className={styles.rulesLabel} htmlFor="ruleHonest"> Er du innebefattet med at en omtale skal være ærlig, ikke kjøpt eller presset ?    {errors.arc?.rules?.honestReview && <p className="errorRules">{errors.arc.rules.honestReview.message}</p>}</label>

                        </div>
                    </div>
                    <div className={styles.rulesDiv}>

                        <div className={styles.labelInputRulesDiv}>
                            <input id={"rule18"} type="checkbox" {...register("arc.rules.above18")} />
                            <label className={styles.rulesLabel} htmlFor="rule18"> Er du over 18 år, i tilfelle boken inneholder voksent innhold ? </label>
                        </div>
                    </div>
                    <div className={styles.rulesDiv}>
                        <div className={styles.labelInputRulesDiv}>
                            <input id={"ruleReminder"} type="checkbox" {...register("arc.rules.reminder")} />
                            <label className={styles.rulesLabel} htmlFor="ruleReminder">    Er det greit for deg å få en påminnelse om omtale når lanseringsdatoen nærmer seg ?</label>
                        </div>
                    </div>
                    <div className={styles.rulesDiv}>

                        <div className={styles.labelInputRulesDiv}>
                            <input id={"ruleContactFutureARC"} type="checkbox" {...register("arc.rules.contactFutureARC")} />
                            <label className={styles.rulesLabel} htmlFor="ruleContactFutureARC">  Vil du bli kontaktet for fremtidige ARC utgivelser ?</label>
                        </div>
                    </div>
                    {(errors.arc?.rules?.honestReview || errors.arc?.rules?.notShare) &&
                        <div className={styles.errorRulesDiv}>  * <RegErrorMessage message={errorRules} iconSize="1.1rem" /> </div>}
                </div>
            </fieldset>

        </article>

    );
}