fetch("https://thandata.vercel.app/api/visit", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    domain: "https://fbise.vercel.app/",
    location: {
      country: "Pakistan",
      city: "Islamabad",
      flag: "🇵🇰",
    },
    referrer: "https://google.com",
    device: "desktop",
    browser: "Firefox",
    os: "Linux",
    time: Math.floor(Date.now() / 1000), // current Unix timestamp
  }),
})
  .then((response) => {
    if (response.ok) {
      console.log("Visit recorded successfully");
    } else {
      console.error("Failed to record visit");
    }
  })
  .catch((error) => {
    console.error("Error posting visit:", error);
  });
