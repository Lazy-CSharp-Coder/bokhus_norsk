"use client";
import { Author } from "@/types/booktypes";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { urlFor } from "@/lib/urlFor";

export interface SmallAuthorCardProps
{
    author: Author,
    animationClass?: string,
    animationDelay?: string;
}

export function SmallAuthorCard({ author, animationClass, animationDelay }: SmallAuthorCardProps)
{
    const navigator = useRouter();
    const { name, profileImage, subTitle } = author;
    const profileUrl = urlFor(profileImage, 800);
    const imageSrc = profileUrl ? profileUrl : "/images/placeholderAuthor.png";

    const setRouteToGo = (author: Author) =>
    {
        const params = new URLSearchParams();
        console.log("uid from sanity is  " + author._id);
        params.set("message", author._id);
        return (`/GeneralAuthorPage?${params.toString()}`);

    };

    return (

        <div onClick={() => navigator.push(setRouteToGo(author))} className={`smallAuthorCard flex ${animationClass}`} style={{ animationDelay: animationDelay }}>

            <div className="smallCardImageWrap">
                <Image className="smallImage" src={imageSrc} alt="profile image author" fill={true} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>

            <div className="smallAuthorNameSubWrapper flex">
                <h5 className="smallAuthorName">{name}</h5>
                <p className="smallSubTitle">{subTitle}</p>
            </div>

        </div>
    );
}