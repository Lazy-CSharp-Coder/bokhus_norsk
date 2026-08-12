
import { sanityWriteClient } from "@/sanity/client";
import { BrandedClerkUserId, registerSchema, type UserData, clerkUserId } from "./registerSchema";
import { sendNewUserAlert } from "../Contact/actions";
import { NewUserAlert } from "@/types/types";
import { auth, } from "@clerk/nextjs/server";


export async function submitToClerk(rawData : UserData)
{
    const validateFields = registerSchema.safeParse(rawData);
      if (!rawData) return ({ success: false, message: "No user data recieved." });
    if (!validateFields.success)
    {
        return { success: false, error: "Invaild fields submitted" };
    }

}