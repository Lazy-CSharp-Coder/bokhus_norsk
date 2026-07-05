"use client";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { ProfileButton } from "./ProfileButton";
import { usePathname } from "next/navigation";

export function LoginClerk()
{
    const path = usePathname();
    return (

        <div className="clerkButtons">

            <Show when="signed-out">
                <SignInButton mode="modal" fallbackRedirectUrl={path}>
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
                        }}
                    />
                    <ProfileButton />

                </div>

            </Show>

        </div>

    );
}