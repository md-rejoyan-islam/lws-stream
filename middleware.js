import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";

const locales = process.env.LOCALES.split(",");

let defaultLocale = "en";

function getLocale(request) {
  const acceptLanguage = request.headers.get("accept-Language") ?? undefined;

  const headers = { "accept-language": acceptLanguage };

  const lenguages = new Negotiator({ headers }).languages();

  if (!locales) return defaultLocale;

  return match(lenguages, locales, defaultLocale);
}

export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales?.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};
