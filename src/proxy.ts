import { clerkMiddleware  } from "@clerk/nextjs/server";

export default clerkMiddleware((_auth, request) => 
{
    const comingSoon = process.env.COMING_SOON !== "false";
    const pathname = request.nextUrl.pathname;
    const isApiRoute = pathname === "/api" || pathname.startsWith("/api/");
    if(comingSoon && isApiRoute) {
        return new Response("Servic unavailable",{ status : 503});
    }
}


);

export const config = {
    matcher : [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
    // Always run for Clerk-specific frontend API routes
    '/__clerk/(.*)',

    ]
}