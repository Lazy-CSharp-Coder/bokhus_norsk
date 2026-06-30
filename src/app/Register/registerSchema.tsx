import { z } from "zod";

export const BrandedClerkUserId = z.string() 
  .regex(/^user_[a-zA-Z0-9]{24}$/)
  .brand<'ClerkUserId'>();
const emailSchema = z
    .email({ message: "Please enter a valid e-mail adress" })
    .toLowerCase()
    .trim();



export type UserData = z.infer<typeof registerSchema>;
export type ARCData = z.infer<typeof arcSchema>;

export const rulesSchema = z.object({
    notShare: z.boolean().refine((value) => value === true, { message: "You have to accept this term to continue" }),
    honestReview: z.boolean().refine((value) => value === true, { message: "You have to accept this term to continue" }),
    above18: z.boolean(),
    reminder: z.boolean(),
    contactFutureARC: z.boolean(),

});

const preferredLanguageDef = z.enum(["English", "Norwegian", "German"]);
const preferredArc = z.enum(["English", "Norwegian", "German"], { error: "You have to select one language" });

export const reviewSitesDef = [
    "Amazon", "Goodreads", "Instagram", "Facebook", "Blogg", "Other", "Don't post reviews yet"
] as const;

export const noticeDef = [
    "Language", "Flow", "Characters", "Plot", "historical accuracy", "Mood", "Pace", "Storyline"
] as const;

const reviewSitesEnum = z.enum(reviewSitesDef);
const noticeEnum = z.enum(noticeDef);

const reviewSitesSchema = z.array(reviewSitesEnum).min(1, { message: "You have to chooce at least one of the options" });
const noticeSchema = z.array(noticeEnum).min(1, { message: "You have to chooce at least one of the options" });

export const arcSchema = z.object(
    {
        languageArcCopy: preferredArc,
        format: z.enum(["pdf", "ePub"], { error: () => "You have to choose one of the alternatives" }),
        why: z.string(),
        howLong: z.enum(["Within a week", "Less than a month", "2-3 months", "4-5 months", "More than 6 months"], { error: () => "You have to choose one of the alternatives" }),
        comfortable: z.enum(["Yes", "No", "Not sure"], { error: () => "You have to choose one of the alternatives" }),
        reviewSites:
        // z.preprocess(
        //     (value) => (value === false || value == null ? [] : value),
            reviewSitesSchema
        ,
        notice: 
        // z.preprocess(
        //     (value) => (value === false || value == null ? [] : value),
            noticeSchema
        ,
        rules: rulesSchema,

    }
);

export const registerSchema = z.object(
    {
        userId : BrandedClerkUserId, 
        email: emailSchema,
        country: z.string().optional(),
        preferredLanguage: z.array(preferredLanguageDef)
            .min(1, { message: "You have to chooce at least one of the options" }),
        genresInterestedIn: z.array(z.enum(["Historical novels", "Childrens books", "Young adult books", "Self-help books"]))
            .min(1, { error: () => "You have to choose atleast one of the alternatives" }),
        linkProfilePage: z.url({ message: "Invalid URL" }).or(z.literal("")).optional(),
        newsLetter: z.boolean(),
        arcInterest: z.boolean(),
        arc: arcSchema.optional(),

    }
).superRefine((data, ctx) =>
{
    if (data.arcInterest && !data.arc)
    {
        ctx.addIssue({
            code: "custom",
            path: ["arc"],
            message: "ARC details are required when joining the Advanced Readers Team.",
        });
    }
});
