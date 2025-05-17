/** @type {import('./$types').RequestHandler} */
export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // or restrict to your frontend domain
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

/** @type {import('./$types').RequestHandler} */
export async function POST(event) {
  try {
    const data = await event.request.json();

    const website = await db
      .select()
      .from(websites)
      .where(eq(websites.url, data.domain));

    if (website[0]) {
      await db.insert(visits).values({
        websiteId: website[0].id,
        domain: data.domain,
        country: data.location.country,
        city: data.location.city,
        flag: data.location.flag,
        referrer: data.referrer,
        device: data.device,
        browser: data.browser,
        os: data.os,
        time: data.time,
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // or your domain
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: {
        "Access-Control-Allow-Origin": "*", // still needed
      },
    });
  }
}
