// import { NextRequest, NextResponse } from "next/server";
// import { getSessionCookie } from "better-auth";

import { NextRequest, NextResponse } from "next/server";

// export async function middleware(request: NextRequest) {
// 	const cookies = getSessionCookie(request);
// 	if (!cookies) {
// 		return NextResponse.redirect(new URL("/", request.url));
// 	}
// 	return NextResponse.next();
// }

// export const config = {
// 	matcher: ["/dashboard"],
// };


export async function middleware(request: NextRequest) {
	// pass all requests to the next handler
	return NextResponse.next();
}