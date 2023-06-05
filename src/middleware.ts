import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  let cookieToken = request.cookies.get("client.token");
  let url = request.url;

  if (!cookieToken && url.includes("/dashboard")) {
    return NextResponse.redirect(new URL("/", url));
  }

  if (cookieToken && !url.includes("/dashboard")) {
    return NextResponse.redirect(new URL("/dashboard", url));
  }
}

export const config = {
  matcher: ["/", "/dashboard"],
};
