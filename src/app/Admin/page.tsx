"use client"

import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import type { UserData } from "../Register/registerSchema";
import styles from "./admin.module.css";

import { BokHusCom } from "@/components/common/BokHusCom";
import { useState } from "react";
import { AdminTabs } from "./AdminTabs";


export default async function AdminPage()
{ 
    const  user = await currentUser();
    const isAdmin = user?.publicMetadata?.role === "admin";

    if(!isAdmin)
    {
        console.log("Not authorized : User is not admin.")
        redirect("/");
    }

 

    const client = await clerkClient();

    const usersFromClerk = await client.users.getUserList({ limit: 500 });
    const emailAdressesToSendTo: string[] = usersFromClerk.data.filter((user) =>
    {
        const metadata = user.publicMetadata as { userData?: UserData; };
        return metadata.userData?.newsLetter == true;
    }).map((item) => item.emailAddresses[0].emailAddress);

    const copyString = emailAdressesToSendTo.join(" ;");

    const handleUpdateUsers = (book: string, emails: string[])
    {
        // this function updates user public meta data, that they have recieved book
        // is this ok ?
    }

    return (
        <main className={`${styles.adminPage}`}>
            <div className={styles.backgroundAdminPage}>
                <BokHusCom fontSize="14rem" />
            </div>
         
<AdminTabs newsLetterEmails={emailAdressesToSendTo} arcEmails={emailAdressesToSendTo} registerBooksEmail={handleUpdateUsers}/>

       

        </main>

    );

}