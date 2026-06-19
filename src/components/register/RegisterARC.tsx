"use client";
import { arcSchema, registerSchema, ARCData, reviewSitesDef, noticeDef } from "./registerSchema";
import { useFormContext } from "react-hook-form";

interface ARCFormProps
{
    arcData: ARCData,
    onFinished: (data: ARCData) => void;
}

export function RegisterARC()
{
    const { register, formState: { errors } } = useFormContext<{ arc: ARCData; }>();


    const languageOptions = registerSchema.shape.preferredLanguage.element.options;

    const formatOptions = arcSchema.shape.format.options;
    const howLongOptions = arcSchema.shape.howLong.options;
    const comfortableOptions = arcSchema.shape.comfortable.options;

    return (
        <article key={"#ARCTeam#"} className="arcArticle flex fadeInFromBelowAnim">
            <h2 className="registerARC">ADVANCED READERS TEAM QUESTIONS</h2>
            <fieldset className="arcForm flex">
              <div className="multipleChoicesARCDiv flex">
                    <label className="languagesText">What languages do you prefer for your ARC copy  ?</label>
                    <ul className="multipleChoicesARCList flex">
                        {languageOptions.map((item) => (
                            <li key={item} className="languagePreferredDiv">
                                <input type="radio" id={item} value={item} {...register("arc.languageArcCopy")} />
                                <label htmlFor={item}>{item}</label>

                            </li>


                        ))}
                        {errors.arc?.languageArcCopy && <p className="errorRegisterForm">{errors.arc.languageArcCopy.message}</p>}
                    </ul>
                </div>

             <div className="multipleChoicesARCDiv flex">
                    <label className="languagesText">What format do you prefer for ARC copy ?</label>
                    <ul className="multipleChoicesARCList flex">
                        {formatOptions.map((item) => (

                            <li key={item} className="languagePreferredDiv">
                                <input type="radio" id={item} value={item} {...register("arc.format")} />
                                <label htmlFor={item}>{item}</label>

                            </li>


                        ))}
                        {errors.arc?.format && <p className="errorRegisterForm">{errors.arc.format.message}</p>}
                    </ul>
                </div>
                <div className="registerTextArea">

                    <label>Why do you wanna join the Advanced Readers Team ? </label>
                    <textarea className="registerTextArea" rows={4} {...register("arc.why")} placeholder="tell us why" />

                </div>
                <div className="multipleChoicesARCDiv flex">
                    <label className="languagesText">How long does it usually take you to read a book ?</label>
                    <ul className="multipleChoicesARCList flex">
                        {howLongOptions.map((item) => (
                            <li key={item} className="languagePreferredDiv">
                                <input type="radio" id={item} value={item} {...register("arc.howLong")} />
                                <label htmlFor={item}>{item}</label>
                            </li>
                        ))}
                        {errors.arc?.howLong && <p className="errorRegisterForm">{errors.arc.howLong.message}</p>}
                    </ul>
                </div>
             <div className="multipleChoicesARCDiv flex">
                    <label className="languagesText">Are you comfortable with giving an honest review ?</label>
                    <ul className="multipleChoicesARCList flex">
                        {comfortableOptions.map((item) => (
                            <li key={item} className="languagePreferredDiv">
                                <input type="radio" id={"#pref#" + item} value={item} {...register("arc.comfortable")} />
                                <label htmlFor={"#pref#" + item}>{item}</label>
                            </li>
                        ))}
                        {errors.arc?.comfortable && <p className="errorRegisterForm">{errors.arc.comfortable.message}</p>}
                    </ul>
                </div>
    <div className="multipleChoicesARCDiv flex">
                    <label className="languagesText">Where do you post reviews  ? </label>
 <ul className="multipleChoicesARCList flex">
                        {reviewSitesDef.map((item) => (
                            <li key={item} className="languagePreferredDiv">
                                <input type="checkbox" id={`#reviewSites#${item}`} value={item} {...register("arc.reviewSites")} />
                                <label htmlFor={`#reviewSites#${item}`}>{item}</label>
                            </li>
                        ))}
                        {errors.arc?.reviewSites && <p className="errorRegisterForm">{errors.arc.reviewSites.message}</p>}
                    </ul>
                </div>
                <div className="multipleChoicesARCDiv flex">
                    <label className="languagesText">What do you notice when you read books  ?</label>
                 <ul className="multipleChoicesARCList flex">
                        {noticeDef.map((item) => (
                            <li key={item} className="languagePreferredDiv">
                                <input type="checkbox" id={`#notice#${item}`} value={item} {...register("arc.notice")} />
                                <label htmlFor={`#notice#${item}`}>{item}</label>
                            </li>
                        ))}
                        {errors.arc?.notice && <p className="errorRegisterForm">{errors.arc.notice.message}</p>}
                    </ul>
                </div>
            </fieldset>
            <fieldset className="arcRulesForm flex">
                <h2 className="arcRulesHeading">ARC RULES AND OPTIONS</h2>
                <div className="rulesWrapper">
                    <div className="rulesDiv">
                        <span className="rulesText">       Do you understand that you should not distribute your ARC copy ?</span>

                        <div className="labelInputRulesDiv flex">
                            <input id={"ruleNotShae"} type="checkbox" {...register("arc.rules.notShare")} />
                            <label htmlFor="ruleNotShare"></label>

                        </div>
                        {errors.arc?.rules?.notShare && <p className="errorRegisterForm">{errors.arc.rules.notShare.message}</p>}

                    </div>
                    <div className="rulesDiv">
                        <span className="rulesText">
                            Do you understand that the review should be honest, not bought or pressured ?</span>
                        <div className="labelInputRulesDiv flex">
                            <input id={"ruleNotShae"} type="checkbox" {...register("arc.rules.honestReview")} />
                            <label htmlFor="ruleNotShare"></label>


                        </div>
                        {errors.arc?.rules?.honestReview && <p className="errorRegisterForm">{errors.arc.rules.honestReview.message}</p>}


                    </div>
                    <div className="rulesDiv">
                        <span className="rulesText">
                            Are you above 18 years old, in case book contains adult content ?</span>
                        <div className="labelInputRulesDiv flex">
                            <input id={"ruleNotShae"} type="checkbox" {...register("arc.rules.above18")} />
                            <label htmlFor="ruleNotShare"></label>


                        </div>


                    </div>
                    <div className="rulesDiv">
                        <span className="rulesText">
                            Is it ok be reminded about posting a review when release date approaches ?</span>
                        <div className="labelInputRulesDiv flex">
                            <input id={"ruleReminder"} type="checkbox" {...register("arc.rules.reminder")} />
                            <label htmlFor="ruleReminder"></label>
                        </div>
                    </div>
                    <div className="rulesDiv">
                        <span className="rulesText">
                            Do you want to be contacted about future ARC copies ?</span>
                        <div className="labelInputRulesDiv flex">
                            <input id={"ruleContactFutureARC"} type="checkbox" {...register("arc.rules.contactFutureARC")} />
                            <label htmlFor="ruleContactFutureARC"></label>
                        </div>
                    </div>
                </div>
            
            </fieldset>

        </article>

    );
}