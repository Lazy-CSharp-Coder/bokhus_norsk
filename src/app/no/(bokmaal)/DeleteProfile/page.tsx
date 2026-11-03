"use server";
import { BokHusNo } from "@/components/common/BokHusCom";
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
                <BokHusNo fontSize="14rem" />
            </div>

            <div className={`${styles.deleteDialogDiv} fadeInFromBelowAnim`}>

                <div className={styles.deleteLogoHeadingWrapper}>
                    <h2 className={styles.deleteHeading}>
                        Sletting av dine data hos <BokHus />
                    </h2>
                    <div className={styles.logoDeleteWrapper}>
                        <Image className={`${styles.logoDeleteImage} rotateInYAnim`} style={{ animationDelay: "1.3s" }} src="/icons/logohvit.png" alt="bokhus logo" fill={true} sizes="(max-width: 128px) 100vw, 50vw" loading="eager" />
                    </div>

                </div>
                <div className={styles.deleteDescription}>
                    <p>Dette vil slette profilen din hos Bokhus.</p>
                    <p>Du kan også velge å bli fjernet som bruker.</p>
                    <p>Når du sletter profilen din, vil profilinformasjonen din i databasen vår bli slettet.</p>
                    <p>Ved å fjerne deg selv som bruker, vil profilinformasjonen din og innloggingsinformasjonen din, som er lagret hos vår autoriseringsleverandør, Clerk, bli slettet.</p>
                </div>

                <DeleteForm />

                <div className={styles.bokhusComWrapperDelete}>
                    {/* {serverMessage != "nomessage" ?
                    <div className="serverMessageDiv scaleInAnim">{serverMessage}</div> : */}
                    <span className="scaleInAnim" style={{ animationDelay: "2s" }}><BokHusNo fontSize="1.2rem" />  </span>
                </div>

            </div>

        </main>
    );
}