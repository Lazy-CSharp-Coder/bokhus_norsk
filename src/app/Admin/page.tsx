import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import type { UserData } from "../Register/registerSchema";
import styles from "./admin.module.css";
import { CopyButton } from "./CopyButton";
import { BokHusCom } from "@/components/common/BokHusCom";

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

    return (
        <main className={`${styles.adminPage}`}>
            <div className={styles.backgroundAdminPage}>
                <BokHusCom fontSize="14rem" />
            </div>
            <section className={`${styles.adminSection} fadeInAnim`}>
                <h1 className={styles.adminPageHeading}>Email adresses to send newsletters to :</h1>
                <div className={styles.emailDiv}>
                    {emailAdressesToSendTo.map((item, index, array) =>
                        <p key={"adresses" + index}>{item} {index < array.length - 1 ? "," : ""} </p>)}
                </div>
                <CopyButton copyString={copyString} />
            </section>
        </main>

    );

}