import { z } from "zod";

// export type BrandedClerkUserId = string & { readonly __brand: 'BrandedClerkUserId'; };

// export const clerkUserId = z.string()
//     .regex(/^user_[a-zA-Z0-9_]+$/)
//     .min(1, "User Id cannot be empty")
//     .brand<BrandedClerkUserId>();

const emailSchema = z
    .email({ message: "Please enter a valid e-mail adress" })
    .toLowerCase()
    .trim();


export type UserData = z.infer<typeof registerSchema>;
export type ARCData = z.infer<typeof arcSchema>;

export const rulesSchema = z.object({
    notShare: z.boolean().refine((value) => value === true, { message: "*" }),
    honestReview: z.boolean().refine((value) => value === true, { message: "*" }),
    above18: z.boolean(),
    reminder: z.boolean(),
    contactFutureARC: z.boolean(),

});


export const languageOptions: string[] = ["English", "Norwegian", "German"];
const preferredLanguageDef =  z.enum(["English", "Norwegian", "German", ""], { error: "You have to select one language" }).refine((val) => val !== "", { message: "You have to select one language"});
const preferredArc = z.enum(["English", "Norwegian", "German"], { error: "You have to select one language" });

export const reviewSitesDef = [
    "Amazon", "Goodreads", "Instagram", "Facebook", "Blogg", "Other"
] as const;

export const noticeDef = [
    "Language", "Flow", "Characters", "Plot", "Historical accuracy", "Mood", "Pace", "Storyline"
] as const;

export const genresDef = [
    "Historical novels", "Childrens books", "Young adult books", "Self-help books"
] as const;

const reviewSitesEnum = z.enum(reviewSitesDef);
const noticeEnum = z.enum(noticeDef);

const reviewSitesSchema = z.preprocess(
    (val) => (val == null || val == false) ? [] : val,
    z.array(reviewSitesEnum).min(1, { message: "You have to chooce at least one of the options" }


    ));

const noticeSchema = z.preprocess(
    (val) => (val == null || val == false ? [] : val),
    z.array(noticeEnum).min(1, { message: "You have to chooce at least one of the options" }

    ));

export const arcSchema = z.object(
    {
        // languageArcCopy: preferredArc,
        format: z.enum(["pdf", "ePub"], { error: () => "You have to choose one of the alternatives" }),
        why: z.string(),
        howLong: z.enum(["Within a week", "Less than a month", "2-3 months", "4-5 months", "More than 6 months"], { error: () => "You have to choose one of the alternatives" }),
        comfortable: z.enum(["Yes", "No", "Not sure"], { error: () => "You have to choose one of the alternatives" }),
        reviewSites: reviewSitesSchema,
        notice: noticeSchema,
        rules: rulesSchema

    }
);

export const registerSchema = z.object(
    {
        // userId: clerkUserId,
        email: emailSchema,
        userName : z.string().min(1, { message : "Please supply a user name"}),
        country: z.string().optional(),
        preferredLanguage: preferredLanguageDef,
              
        genresInterestedIn: z.array(z.enum(genresDef))
            .min(1, { error: () => "You have to choose one of the alternatives" }),
        linkProfilePage: z.url({ message: "Invalid URL" }).or(z.literal("")).optional(),
        newsLetter: z.boolean(),
        arcInterest: z.boolean(),
        arc: arcSchema.optional(),
        recievedBooks: z.array(z.string()).default([])
        
    }
);