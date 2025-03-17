import NextAuth from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";


const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Login With Email",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "spl.sp@gmail.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "******",
        },
      },
      async authorize(credentials, req) {
        const username = credentials?.username;
        const password = credentials?.password;
        console.log(username,password)

        // check username and password in the database is correct or not
        const user = {
          username: "shubham",
          email: "spl.sp999@gmail.com",
        };
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!
      })
  ],
});

export { handler as GET, handler as POST };
