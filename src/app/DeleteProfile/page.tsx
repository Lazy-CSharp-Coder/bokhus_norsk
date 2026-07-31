"use server";
import { BokHusCom } from "@/components/common/BokHusCom";
import Image from "next/image";
import "./DeleteProfile.module.css";
import { DeleteOptions } from "./components/deletetypes";
import { DeleteForm } from "./components/DeleteForm";
import { BokHus } from "@/components/common/BokHus";


export  default async function DeleteProfile()
{

    return (
        <main className="deleteProfilePage">
            <div className="backgroundDeletePage">
                <BokHusCom fontSize="14rem" />
            </div>

            <div className="deleteDialogDiv fadeInFromBelowAnim">

            <div className="deleteLogoHeadingWrapper flex">
                <h2 className="deleteHeading">
                    Deletion of you data at <BokHus/>
                </h2>
                <div className="logoDeleteWrapper">
                    <Image className="logoDeleteImage rotateInYAnim" style={{ animationDelay: "1.3s" }} src="/icons/logosvart.png" alt="bokhus logo" fill={true} sizes="(max-width: 128px) 100vw, 50vw" loading="eager" />
                </div>

            </div>
                <div className="deleteDescription">
                    <p>This will delete your profile at Bokhus.</p>
                    <p>You can also choose to be removed as a user.</p>
                    <p>When deleting your profile, your profile information in our database will be erased.</p>
                    <p>By removing yourself as a user, your profile information and you login information, stored in our authorization provider, Clerk, will be deleted. .</p>
                  


                </div>

            <DeleteForm/>

 <div className="bokhusComWrapperDelete flex">
                {/* {serverMessage != "nomessage" ?
                    <div className="serverMessageDiv scaleInAnim">{serverMessage}</div> : */}
                    <span className="scaleInAnim" style={{animationDelay: "2s"}}><BokHusCom fontSize="1.2rem" />  </span>
            </div>

            </div>

        </main>
    );
}