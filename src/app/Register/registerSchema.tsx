import { z } from "zod";

// export type BrandedClerkUserId = string & { readonly __brand: 'BrandedClerkUserId'; };

// export const clerkUserId = z.string()
//     .regex(/^user_[a-zA-Z0-9_]+$/)
//     .min(1, "User Id cannot be empty")
//     .brand<BrandedClerkUserId>();

const emailSchema = z
    .email({ message: "Vennligst legg inn en gyldig e-mail adresse" })
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

// definitions for values in schema

export const languageDef: string[] = ["English", "Norwegian", "German"];
export const reviewSitesDef = [ "Amazon", "Goodreads", "Instagram", "Facebook", "Blogg", "Other"] as const;
export const noticeDef = ["Language", "Flow", "Characters", "Plot", "Historical accuracy", "Mood", "Pace", "Storyline"];
export const genresDef = ["Historical novels", "Childrens books", "Young adult books", "Self-help books"];
export const readTimeDef = ["Within a week", "Less than a month", "2-3 months", "4-5 months", "More than 6 months"];


// Options in schema - language dependent

export const languageOptions: string[] = ["Engelsk", "Norsk", "Tysk"];

export const noticeOptions = [
    "Språk", "Flyt", "Karakterer", "Handling", "Historisk nøyaktighet", "Stemning", "Tempo", "Handlingstråd"
] as const;

export const genresOptions = [
    "Historiske romaner", "Barnebøker", "Ungdomsbøker", "Selvhjelpsbøker"
] as const;

export const readTimeOptions = [
    "Innen en uke", "Mindre enn en måned", "2-3 måneder", "4-5 måneder", "Mer enn 6 måneder"
] as const;

export const comfortableOptions = ["Ja", "Nei", "Usikker"];

export const reviewSitesOptions = [
    "Amazon", "Goodreads", "Instagram", "Facebook", "Blogg", "Annet"
] as const;


const preferredLanguageDef = z.enum(languageDef, { error: "Du må velge ett språk" }).refine((val) => val !== "", { message: "Du må velge ett språk" });
const reviewSitesEnum = z.enum(reviewSitesDef);
const noticeEnum = z.enum(noticeDef);

const reviewSitesSchema = z.preprocess(
    (val) => (val == null || val == false) ? [] : val,
    z.array(reviewSitesEnum).min(1, { message: "Du må krysse av for minst ett av valgene" }


    ));

const noticeSchema = z.preprocess(
    (val) => (val == null || val == false ? [] : val),
    z.array(noticeEnum).min(1, { message: "Du må krysse av for minst ett av valgene" }


    ));

export const arcSchema = z.object(
    {
        // languageArcCopy: preferredArc,
        format: z.enum(["pdf", "ePub"], { error: () => "Du må krysse av for minst ett av valgene" }),
        why: z.string(),
        howLong: z.enum(readTimeDef, { error: () => "Du må krysse av for minst ett av valgene" }),
        comfortable: z.enum(["Yes", "No", "Not sure"], { error: () => "Du må krysse av for minst ett av valgene" }),
        reviewSites: reviewSitesSchema,
        notice: noticeSchema,
        rules: rulesSchema
    }
);

export const registerSchema = z.object(
    {
        // userId: clerkUserId,
        email: emailSchema,
        userName: z.string().min(1, { message: "Vennligst legg inn et brukernavn" }),
        country: z.string().optional(),
        preferredLanguage: preferredLanguageDef,
        genresInterestedIn: z.array(z.enum(genresDef)).min(1, { error: () => "Du må krysse av for minst ett av valgene" }),
        linkProfilePage: z.url({ message: "Ugyldig URL" }).or(z.literal("")).optional(),
        newsLetter: z.boolean(),
        arcInterest: z.boolean(),
        arc: arcSchema.optional(),
        // recievedBooks: z.array(z.string()).default([]),
        shouldNotReciveARCAnymore: z.boolean().default(false)

    }
);


export const formatDef = arcSchema.shape.format.options;
export const comfortableDef = arcSchema.shape.comfortable.options;