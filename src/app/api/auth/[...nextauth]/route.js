import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth/next";


const authOptions = {
  // Configure one or more authentication providers
 
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  pages: {
    signIn: '/signin',
    newUser: '/signup' // New users will be directed here on first sign in (leave the property out if not of interest)
  }
}

export {authOptions}

export const handler = NextAuth(authOptions)

export { handler as GET, handler as POST}