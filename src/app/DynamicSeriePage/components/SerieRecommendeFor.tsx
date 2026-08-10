import { RecommendedForProps } from "@/types/booktypes";

import styles from "./SerieRecommendedFor.module.css";
import { ExpandingLine } from "@/components/common/ExpandingLine";

const recommendedText: string = "Recommende for readers :";
export function SerieRecommendedFor({ ageGroup }: RecommendedForProps)
{

  const { recommendedForContainer, suitedForDiv, ageGroupSpan} = styles;
  return (
    <div className={recommendedForContainer}>
      <ExpandingLine lineSize={1} animationDuration="2s" animationDelay="1.5s" />

      <div className={`${suitedForDiv} rotateInXAnim`} style={{ animationDelay: "2.5s", animationDuration: "1.5s" }}>

        {recommendedText} <span className={ageGroupSpan}>{ageGroup}</span>


      </div>
      <ExpandingLine lineSize={1} animationDuration="2s" animationDelay="1s" />

    </div>
  );

}