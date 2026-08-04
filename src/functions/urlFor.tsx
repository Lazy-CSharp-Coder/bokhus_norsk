import { createImageUrlBuilder, SanityImageSource } from '@sanity/image-url';
import { client } from "@/sanity/client";

const builder = createImageUrlBuilder(client);

export function urlFor(source: SanityImageSource | undefined, width: number) 
{
  if(source == undefined) return "";
  return builder.image(source).width(width).auto("format").quality(85).url();
  
}