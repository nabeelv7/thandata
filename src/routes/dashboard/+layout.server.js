import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').LayoutServerLoad} */
export async function load(event) {
  const session = await event.locals.auth();

  if (!session) {
    throw redirect(302, "/auth/signin");
  }

  const user = session.user;

  if (!user || !user.email) {
    throw redirect(302, "/auth/signin");
  }
  return {};
}
