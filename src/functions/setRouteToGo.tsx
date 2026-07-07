import { Author, Series } from "@/types/booktypes";

const seriesPageDef = "/DynamicSeriePage";
const autohrPageDef = "/DynamicAuthorPage";

type RouteType = Author | Series;

export const setRouteToGo = (routeToMake: RouteType) =>
{
    const params = new URLSearchParams();
    params.set("message", routeToMake._id);
    const def = "seriesName" in routeToMake ? seriesPageDef : autohrPageDef;

    return (`def/?${params.toString()}`);
};


