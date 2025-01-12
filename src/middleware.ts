import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(["/sign-up", "/sign-in", "/", "/home"]);

const isPublicApiRoute = createRouteMatcher([]);

export default clerkMiddleware((auth, req) => {
  const { userId }: any = auth();
  const currentUrl = new URL(req.url);
  const isAccessingHomePage = currentUrl.pathname === "/home";
  const isPublicApi = currentUrl.pathname.startsWith("/api");

  if (userId && isPublicApiRoute(req) && !isAccessingHomePage) {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  // If not logged in

  if (!userId) {

    // if user is not logged in and trying to access a protected route
    if (!isPublicApiRoute(req) && !isPublicRoute(req)) {
      return NextResponse.redirect(new URL("/sign-in", req.url));
    }

    // if the request is for a protected api and the user is not logged in 
    if(isPublicApi && !isPublicApiRoute(req)){
      return NextResponse.redirect(new URL("/sign-in", req.url));
    }
  }

  return NextResponse.next()
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
