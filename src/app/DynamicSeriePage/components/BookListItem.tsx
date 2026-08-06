"use client";  // handle in client, has a click and an Intersection obserfer

import type { BookListItemProps } from "@/types/booktypes";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { urlFor } from "@/functions/urlFor";

export function BookListItem({ imageUrl, itemNumber,  handleClick }: BookListItemProps)
{
  const listItemRef = useRef<HTMLLIElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() =>
  {
    const element = listItemRef.current;
    if (!element) return;

    const observer = new IntersectionObserver((entries) =>
    {
      setIsVisible(entries[0].isIntersecting);
    }, { threshold: 0.2 });

    observer.observe(element);
    return () => observer.unobserve(element);

  }, []);


  return (
    <li className={`bookListItem bookThumbnail ${isVisible ? "fadeInAnim" : "fadeOutAnim"}`} ref={listItemRef}
      onClick={() => handleClick(itemNumber)} style={{ animationDuration: "0.5s" }}>

      <Image className="bookThumbnail" src={imageUrl} alt="book list image" fill={true} sizes="(max-width: 150px) 100vw, 50vw" loading="eager" />;


    </li>);

}