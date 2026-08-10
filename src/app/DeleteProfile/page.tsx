"use server";
import { BokHusCom } from "@/components/common/BokHusCom";
import Image from "next/image";
import { DeleteForm } from "./components/DeleteForm";
import { BokHus } from "@/components/common/BokHus";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import styles from "./DeleteProfile.module.css";


export default async function DeleteProfile()
{
    const user = await currentUser();
    if (!user) redirect("/");

    return (
        <main className={styles.deleteProfilePage}>
            <div className={styles.backgroundDeletePage}>
                <BokHusCom fontSize="14rem" />
            </div>

            <div className={`${styles.deleteDialogDiv} fadeInFromBelowAnim`}>

                <div className={styles.deleteLogoHeadingWrapper}>
                    <h2 className={styles.deleteHeading}>
                        Deletion of you data at <BokHus />
                    </h2>
                    <div className={styles.logoDeleteWrapper}>
                        <Image className={`${styles.logoDeleteImage} rotateInYAnim`} style={{ animationDelay: "1.3s" }} src="/icons/logohvit.png" alt="bokhus logo" fill={true} sizes="(max-width: 128px) 100vw, 50vw" loading="eager" />
                    </div>

                </div>
                <div className={styles.deleteDescription}>
                    <p>This will delete your profile at Bokhus.</p>
                    <p>You can also choose to be removed as a user.</p>
                    <p>When deleting your profile, your profile information in our database will be erased.</p>
                    <p>By removing yourself as a user, your profile information and you login information, stored in our authorization provider, Clerk, will be deleted. .</p>



                </div>

                <DeleteForm />

                <div className={styles.bokhusComWrapperDelete}>
                    {/* {serverMessage != "nomessage" ?
                    <div className="serverMessageDiv scaleInAnim">{serverMessage}</div> : */}
                    <span className="scaleInAnim" style={{ animationDelay: "2s" }}><BokHusCom fontSize="1.2rem" />  </span>
                </div>

            </div>

        </main>
    );
}