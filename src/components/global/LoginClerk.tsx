"use client";
import { Show, SignInButton, useClerk, UserButton } from "@clerk/nextjs";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { FaUserLarge } from "react-icons/fa6";
import { PiSignOutBold } from "react-icons/pi";

export function LoginClerk()
{
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();
    const path = `${pathname}${searchParams ? `?${searchParams.toString()}` : ""}`;
    const { signOut } = useClerk();

    const handleProfileClick = () =>
    {
        router.push("/Register");

    };

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

                                userButtonPopoverActionButton__signOut: {
                                    display: "none",
                                },
                                userButtonAvatarBox: {
                                    width: "2.6rem", height: "2.6rem",
                                    // border: "1px solid var(--bokhusRootsColor)",
                                    padding: "0rem",
                                    backgroundColor: "transparent", /* Optional background color inside the border */
                                    borderRadius: "50%"
                                }
                            }
                        }} ><UserButton.MenuItems>
                            <UserButton.Action label={"Your profile at BokHus"} labelIcon={<FaUserLarge size="16" />} onClick={handleProfileClick} />
                            <UserButton.Action label="Sign Out" onClick={() => signOut({ redirectUrl: path || "/" })} labelIcon={<PiSignOutBold size="17"/>} />
                        </UserButton.MenuItems>
                    </UserButton>
                </div>
            </Show>
        </div>);

};