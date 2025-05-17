import { db } from "$lib/server/db";
import { users, websites, visits } from "$lib/server/db/schema";
import { eq } from "drizzle-orm";
import { error, redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
  const session = await event.locals.auth();
  const user = session?.user;

  if (!user) {
    throw redirect(302, "/auth/signin");
  }

  const [dbUser] = await db
    .select()
    .from(users)
    .where(eq(users.email, user.email));

  if (!dbUser) {
    throw redirect(302, "/auth/signin");
  }

  const { id } = event.params;
  console.log("ID", id);

  const [website] = await db.select().from(websites).where(eq(websites.id, id));

  if (!website) {
    throw error(404, "Website not found");
  }

  if (website.ownerId !== dbUser.id) {
    throw error(
      403,
      "You do not have permission to view this website's analytics"
    );
  }

  const websiteVisits = await db
    .select()
    .from(visits)
    .where(eq(visits.websiteId, id));
  console.log(websiteVisits);

  return {
    website,
    visits: websiteVisits,
  };
}
