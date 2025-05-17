import { db } from "$lib/server/db";
import { users, websites } from "$lib/server/db/schema";

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
  const session = await event.locals.auth();
  const user = session.user;
  const { id } = event.params;

  await db.fetch

  return {};
}
