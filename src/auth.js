import { SvelteKitAuth } from "@auth/sveltekit";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "$lib/server/db";
import GitHub from "@auth/sveltekit/providers/github";

export const { handle, signIn, signOut } = SvelteKitAuth({
  adapter: DrizzleAdapter(db),
  providers: [GitHub],
  trustedHosts: [
    "thandata.vercel.app", // your production domain, no https://
    "localhost:4173", // your dev server, optional
    "localhost:5173", // your dev server, optional
  ],

  trustHost: true,
});
