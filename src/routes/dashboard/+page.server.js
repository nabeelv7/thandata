import { db } from "$lib/server/db";
import { users, websites } from "$lib/server/db/schema";
import { eq } from "drizzle-orm";
import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
  try {
    const session = await event.locals.auth();

    const user = session.user;

    // Get user from DB using email
    const [dbUser] = await db
      .select()
      .from(users)
      .where(eq(users.email, user.email));

    if (!dbUser) {
      throw redirect(302, "/auth/signin");
    }

    const userWebsites = await db
      .select()
      .from(websites)
      .where(eq(websites.ownerId, dbUser.id));

    return {
      websites: userWebsites,
    };
  } catch (error) {
    console.log(error);
  }
}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async (event) => {
    const data = await event.request.formData();
    const name = data.get("name");
    const url = data.get("url");

    const session = await event.locals.auth();
    if (!session) {
      throw new Error("Not authenticated");
    }

    const user = session.user;

    if (!user) {
      // Handle not logged-in user (optional)
      throw new Error("Not authenticated");
    }

    const [dbUser] = await db
      .select()
      .from(users)
      .where(eq(users.email, user.email));

    await db.insert(websites).values({
      name,
      url,
      ownerId: dbUser.id,
    });

    return { success: true };
  },
};
