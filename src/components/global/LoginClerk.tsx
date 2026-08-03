import { Suspense } from "react";
import { Show, SignInButton, useClerk, UserButton } from "@clerk/nextjs";
import { usePathname,  useSearchParams } from "next/navigation";
import Link from "next/link";
import { FaUserLarge } from "react-icons/fa6";
import { PiSignOutBold } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";

function LoginClerkContent()
{
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const path = `${pathname}${searchParams ? `?${searchParams.toString()}` : ""}`;
    // const { signOut } = useClerk();

    return (

        <div className="clerkButtons">

            <Show when="signed-out">
                <SignInButton fallbackRedirectUrl={path}>
                    <button className="signInButton">SIGN IN <span className="signInRegisterSpan"> / </span> REGISTER</button>
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

                                // userButtonPopoverActionButton__signOut: {
                                //     display: "none",                           },
                                    
                                userButtonAvatarBox: {
                                    width: "2.6rem", height: "2.6rem",
                                    // border: "1px solid var(--bokhusRootsColor)",
                                    padding: "0rem",
                                    backgroundColor: "transparent", /* Optional background color inside the border */
                                    borderRadius: "50%"
                                }
                            }
                        }} ><UserButton.MenuItems>
                            <UserButton.Link label={"Your profile at BokHus"}
                                labelIcon={<span className="clerkButtonSpan"><FaUserLarge size="1rem" /></span>} href="/Register" />

                            <UserButton.Link label="Delete profile"
                                labelIcon={<span className="clerkButtonSpan"><RiDeleteBin6Line size="1rem" className="deleteProfileIcon" />

                                </span>} href="/DeleteProfile" />

                            {/* <UserButton.Action label="Sign Out" onClick={() => signOut({ redirectUrl: path || "/" })} 
                                labelIcon={<span className="clerkButtonSpan"><PiSignOutBold size="1.2rem" /></span>} /> */}


                        </UserButton.MenuItems>
                    </UserButton>

                    <Link className="signInButton" href="/Register">PROFILE</Link>
                </div>

            </Show>
        </div>);

};

export function LoginClerk()
{
    return (
        <Suspense fallback={<div className="clerkButtons"><button className="signInButton">SIGN IN</button></div>}>
            <LoginClerkContent />
        </Suspense>
    );
}