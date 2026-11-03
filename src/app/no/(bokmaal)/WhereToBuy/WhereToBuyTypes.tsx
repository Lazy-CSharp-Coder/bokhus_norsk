import { Series, Book } from "@/types/booktypes";

export interface WhereToBuySeriesProps 
{
  serieSelected: Series,
  authorsStrArray: string[];
  bookList : Book[]
  animationDelay? : number,
  setWaitForMainAnim? : (value: number) => void
}
