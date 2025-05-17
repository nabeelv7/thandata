/** @type {import('./$types').PageLoad} */
export const load = async (event) => {
  try {
    const session = await event.locals.auth();

    return {
      session,
    };
  } catch (error) {
    console.log(error);
  }
};
