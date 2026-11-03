"use server";


import { revalidatePath } from "next/cache";
import { registerSchema, type UserData } from "./registerSchema";
import { auth, clerkClient } from "@clerk/nextjs/server";



export async function submitToClerk(rawData: UserData)
{
    const validateFields = registerSchema.safeParse(rawData);
    if (!rawData) return ({ success: false, message: "No user data recieved." });
    if (!validateFields.success)
    {
        return { success: false, error: "Invaild fields submitted" };
    }

    const result = await auth();
    if (!result.userId) return { success: false, message: "Not signed in." };

    const userId = result.userId;
    const client = await clerkClient();
    const payload: UserData = { ...rawData };

    try
    {
        await client.users.updateUserMetadata(userId, {
            publicMetadata: {
                userData: payload
            }
        });
        revalidatePath("/Register");
    }
    catch (error)
    {
        console.log("Server action error", error);
        return { success: false, error: "Something went wrong writing your profile information." };
    }
    finally
    {
        return { success: true };
    }



}