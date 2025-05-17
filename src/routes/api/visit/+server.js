import { db } from "$lib/server/db";
import { visits, websites } from "$lib/server/db/schema";
import { eq } from "drizzle-orm";

/** @type {import('./$types').RequestHandler} */
export async function POST(event) {
  const data = await event.request.json();
  // {
  //   domain: 'https://thadabox.com/',
  //   location: { country: 'Pakistan', city: 'Islamabad', flag: '🇵🇰' },
  //   referrer: '',
  //   device: 'desktop',
  //   browser: 'Firefox',
  //   os: 'Linux',
  //   time: 1747488541
  // }

  const website = await db
    .select()
    .from(websites)
    .where(eq(websites.url, data.domain));

  await db.insert(visits).values({
    websiteId: website.id,
    country: data.location.country,
    city: data.location.city,
    flag: data.location.flag,
    referrer: data.referrer,
    device: data.device,
    browser: data.browser,
    os: data.os,
    time: data.time,
  });
  return new Response();
}
