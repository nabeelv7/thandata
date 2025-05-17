import { SvelteKitAuth } from "@auth/sveltekit";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "$lib/server/db";
import GitHub from "@auth/sveltekit/providers/github";

export const { handle, signIn, signOut } = SvelteKitAuth({
  adapter: DrizzleAdapter(db),
  providers: [GitHub],
});
