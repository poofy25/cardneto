import { NextRequest, NextResponse } from "next/server";
import { decode } from 'next-auth/jwt';

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  const url = request.nextUrl.clone();

  const cookie = request.cookies.get("next-auth.session-token") || request.cookies.get("__Secure-next-auth.session-token")
  const sessionToken = cookie?.value;
  console.log("Cookies")
  console.log("1", cookie , sessionToken)
  console.log("2",request.cookies.get("next-auth.session-token"))
  console.log("3",request.cookies.get("__Secure-next-auth.session-token"))

  const decoded = await decode({
    token: sessionToken,
    secret: process.env.NEXTAUTH_SECRET,
  });
  const userRoutes = [
    "/",
  ];
  const authRoutes = [
    "/signup",
    "/signin"
  ];


  if (sessionToken) {

    const user = decoded;

    // if token is expired then redirect to login page
    if (user.exp < Date.now() / 1000) {
      url.pathname = "/signin";
      console.log("HERE DEBUG")
      return NextResponse.redirect(url);
    }
    
    if(authRoutes.includes(pathname)){
        console.log("HERE DEBUG 2")
        url.pathname = "/";
        return NextResponse.redirect(url);
    }
    
  }else{
    if(userRoutes.includes(pathname)){
        url.pathname = "/signup";
        return NextResponse.redirect(url);
    }
  }
  
}