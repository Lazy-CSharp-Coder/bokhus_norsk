"use server";

import { sanityWriteClient } from "@/sanity/client";
import { registerSchema, type UserData } from "./registerSchema";


export async function submitUserData(rawData: UserData)
{
    const validateFields = registerSchema.safeParse(rawData);

    if (!validateFields.success)
    {
        return { success: false, error: "Invaild fields submitted" };
    }

    const {userId,  email, country, preferredLanguage, genresInterestedIn, linkProfilePage, newsLetter, arcInterest, arc } = rawData;
    try
    {
        await sanityWriteClient.create(
            {
                _type: "User",
                userId, 
                email,
                country,
                preferredLanguage,
                genresInterestedIn,
                linkProfilePage,
                newsLetter,
                arcInterest,
                ...(arc && {
                    arc: {
                        _type: 'object',
                        languageArcCopy: arc.languageArcCopy,
                        format: arc.format,
                        why: arc.why,
                        howLong: arc.howLong,
                        comfortable: arc.comfortable,
                        reviewSites: arc.reviewSites,
                        notice: arc.notice,
                        rules: {
                            _type: "object",
                            notShare: arc.rules.notShare,
                            honestReview: arc.rules.honestReview,
                            above18: arc.rules.above18,
                            reminder: arc.rules.reminder,
                            contactFutureARC: arc.rules.contactFutureARC
                        }
                    }
                }),
                submittedAt: new Date().toISOString()

            });
        return { success: true };
    }
    catch (error)
    {
        console.error("Sanity error : ", error);
        return { success: false, error: "Could not store data in Sanity database" };
    }
}
