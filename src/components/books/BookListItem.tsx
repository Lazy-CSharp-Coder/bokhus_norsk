"use client";  // handle in client, has a click and an Intersection obserfer

import type { BookListItemProps } from "@/types/booktypes";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { urlFor } from "@/lib/urlFor";

export function BookListItem({ item, handleClick }: BookListItemProps)
{
  const listItemRef = useRef<HTMLLIElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const imageSrc = urlFor(item.imageBook, 500);
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
    <li className={`bookThumbnail ${isVisible ? "fadeInAnim" : "fadeOutAnim"}`} ref={listItemRef}
      onClick={() => handleClick(item)} style={{ animationDuration: "0.5s" }}>

      <Image className="bookThumbnail" src={imageSrc} alt="book list image" fill={true} sizes="(max-width: 768px) 100vw, 50vw" />;


    </li>);

}