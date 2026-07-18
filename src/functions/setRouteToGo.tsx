import { Author, Series, Book } from "@/types/booktypes";

const seriesPageDef = "/DynamicSeriePage";
const authorPageDef = "/DynamicAuthorPage";
const bookPageDef = "/DynamicBookPage";

type RouteType = Author | Series | Book;

export const setRouteToGo = (routeToMake: RouteType) =>
{
    const params = new URLSearchParams();
    params.set("message", routeToMake._id);
    const def = 'seriesName' in routeToMake ? seriesPageDef : 'bookTitle' in routeToMake ? bookPageDef : authorPageDef;

    return (`${def}/?${params.toString()}`);
};


