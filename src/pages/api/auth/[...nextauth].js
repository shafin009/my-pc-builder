import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.Google_ID,
      clientSecret: process.env.Google_SECRET,
    }),
  ],
  pages: {
    signIn: "https://my-pc-builder-store.netlify.app/login",
  },
};

export default NextAuth(authOptions);
