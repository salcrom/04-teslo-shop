import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export default NextAuth(authConfig).auth;

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|.*\\.png$).*)",
        "/((?!api|_next/static|_next/image|.*\\.jpg$).*)",
        // "/((?!api|_next/static|_next/image|products|.*\\.png$).*)",
        // "/((?!api|_next/static|_next/image|imgs|.*\\.jpg$).*)"
    ]
};
