import { clerkClient } from "@clerk/nextjs/server";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import type { UserData } from "../Register/registerSchema";
import styles from "./admin.module.css"
import { CopyButton } from "./CopyButton";

export default async function Admin()
{
    const { userId } = await auth();

    if (!userId) 
    {
        return { success: false, error: "Not authorized" };
    }

    if (userId != process.env.MYID) { redirect("/"); }

    const client = await clerkClient();

    const usersFromClerk = await client.users.getUserList({ limit: 500 });
    const emailAdressesToSendTo: string[] = usersFromClerk.data.filter((user) =>
    {
        const metadata = user.publicMetadata as { userData?: UserData; };
        return metadata.userData?.newsLetter == true;
    }).map((item) => item.emailAddresses[0].emailAddress);

    const copyString = emailAdressesToSendTo.join(" ;");

    const handleCopy = () =>
    {
        console.log("copy pressed");
    }

    return (
        <main className={styles.adminPage}>
            <section className={styles.adminSection}>
                Email adresseses to send newsletters to :
                <div className={styles.emailDiv}>
                    {emailAdressesToSendTo.map((item, index) =>
                        <p key={"adresses" + index}>{item}</p>)}
                </div>
                <CopyButton copyToClipboard={handleCopy}/>
            </section>
        </main>

    );


}