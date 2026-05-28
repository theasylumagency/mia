import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;

  // Additional safety check: only redirect on the root route '/'
  if (url.pathname === "/") {
    // If the request contains bypass parameters, let the fallback page render.
    if (url.searchParams.has("direct") || url.searchParams.has("fallback")) {
      return NextResponse.next();
    }

    const userAgent = request.headers.get("user-agent") || "";
    const ua = userAgent.toLowerCase();

    // Check for Apple/iOS devices
    const isIOS = /iphone|ipad|ipod/.test(ua);
    
    // Check for Android devices
    const isAndroid = /android/.test(ua);

    if (isIOS) {
      return NextResponse.redirect(
        "https://apps.apple.com/ge/app/service-agency/id1574456853",
        307 // Temporary redirect to avoid caching
      );
    }

    if (isAndroid) {
      return NextResponse.redirect(
        "https://play.google.com/store/apps/details?id=ge.gov.sa.serviceagency",
        307 // Temporary redirect to avoid caching
      );
    }
  }

  return NextResponse.next();
}

// Limit the middleware execution exclusively to the root endpoint
export const config = {
  matcher: ["/"],
};
