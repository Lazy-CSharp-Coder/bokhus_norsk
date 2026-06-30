import { ComponentProps, ComponentType, Ref } from "react";
import dynamic from "next/dynamic";
import "./GoogleReCAPTCHA.module.css";

import type ReCAPTCHA from "react-google-recaptcha";

const DynamicReCaptcha = dynamic(
    () => import("react-google-recaptcha"),
    { ssr: false }
) as ComponentType<ComponentProps<typeof ReCAPTCHA>>

interface RecaptchaWrapperProps extends ComponentProps<typeof ReCAPTCHA> 
{   
     ref?: Ref<ReCAPTCHA>
}

export function GoogleReCAPTCHA({...props }: RecaptchaWrapperProps)
{
    return(
    <div className="recaptchaDiv">
        <DynamicReCaptcha {...props} />
    </div>
    );
}