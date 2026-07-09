"use client";
import { Show, SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";
import { ProfileButton } from "./ProfileButton";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

import { FaUserLarge } from "react-icons/fa6";

export function LoginClerk()
{
    const path = usePathname();
    const router = useRouter();

    const handleProfileClick = () =>
    {
        router.push("/Register");

    };
   const hasProfile = true;
    return (

        <div className="clerkButtons">

            <Show when="signed-out">
                <SignInButton fallbackRedirectUrl={path}>
                    <button className="signInButton">Sign In</button>
                </SignInButton>
                {/* <SignUpButton mode="modal" fallbackRedirectUrl="/Register">
                    <button className="signUpButton">
                        Sign Up</button>
                </SignUpButton> */}
            </Show>
            <Show when="signed-in">
                <div className="userButtonDiv">

                    <UserButton
                        appearance={{
                            elements: {
                                userButtonAvatarBox: {
                                    width: "2.6rem", height: "2.6rem",
                                    // border: "1px solid var(--bokhusRootsColor)",
                                    padding: "0rem",
                                    backgroundColor: "transparent", /* Optional background color inside the border */
                                    borderRadius: "50%"
                                }
                            }
                        }} ><UserButton.MenuItems>
                           <UserButton.Action label={hasProfile ? "Your profile at BokHus" : "Register profile"} labelIcon={<FaUserLarge size="16"/>} onClick={handleProfileClick} />
                            
                          

                        </UserButton.MenuItems>


                    </UserButton>

                    {/* <SignOutButton redirectUrl={path || "/"}>
                        <button type="button" className="signInButton">Sign Out</button>
                    </SignOutButton> */}
                    {/* <ProfileButton /> */}

                </div>

            </Show>

        </div>

    );
}