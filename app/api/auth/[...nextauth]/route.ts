import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/login`
        console.log(url)
        const res = await fetch(
          url,
          {
            method : 'POST',
            body : JSON.stringify({
              username : credentials?.username,
              password : credentials?.password
            }),
            headers : {
              "Content-Type" : "application/json"
            }
          }
        )

        const user = await res.json();

        if (user.error) throw user;

        return user;
      }
    })
  ],
  callbacks : {
    async jwt({token, user}){
      return {...token, ...user}
    },
    async session({session , token}){
      session.user = token as any;
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    }
  },
  pages : {
    signIn : '/login'
  },
});
// export {authOptions as GET, authOptions as POST};
export { handler as GET, handler as POST }