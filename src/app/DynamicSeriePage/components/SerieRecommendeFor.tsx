import { RecommendedForProps } from "@/types/booktypes";

import "./SerieRecommendedFor.module.css";
import { ExpandingLine } from "@/components/common/ExpandingLine";

const recommendedText: string = "Recommende for readers :";
export function SerieRecommendedFor({ ageGroup }: RecommendedForProps)
{

  return (
    <div className="recommendedForContainter">
      <ExpandingLine lineSize={1} animationDuration="2s" animationDelay="1.5s" />

      <div className="suitedForDiv rotateInXAnim" style={{ animationDelay: "2.5s", animationDuration: "1.5s" }}>

        {recommendedText} <span className="ageGroup">{ageGroup}</span>


      </div>
      <ExpandingLine lineSize={1} animationDuration="2s" animationDelay="1s" />

    </div>
  );

}