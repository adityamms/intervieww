import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: "012b6a36a00970527f12",
      clientSecret: "194c6328860f10312a133d236f20d7e1ae09ff17",
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
