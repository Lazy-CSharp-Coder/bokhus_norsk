import { RecommendedForProps } from "@/types/booktypes";

import "./SerieRecommendedFor.module.css";

const recommendedText: string = "Recommende for readers :";
export function SerieRecommendedFor({ ageGroup }: RecommendedForProps)
{

    return (
        <div className="suitedForDiv scaleInAnim" style={{ animationDelay: "2s", animationDuration: "1.5s" }}>
            {recommendedText} <span className="ageGroup">{ageGroup}</span>

        </div>);

}