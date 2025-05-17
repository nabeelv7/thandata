<script>
  let { data } = $props();
  let codeContainer = $state();

  const scriptTag =
    '&lt;script data-domain="' +
    data.website.url +
    '" src="https://thandata.vercel.app/script.min.js" defer&gt;&lt;/script&gt;';

  function copyToClipboard() {
    navigator.clipboard
      .writeText(codeContainer.textContent)
      .then(() => console.log("Copied to clipboard!"))
      .catch(() => console.log("Failed to copy!"));
  }

  const deviceEmojis = {
    desktop: "🖥️",
    mobile: "📱",
    tablet: "📲",
  };

  const capitalize = (str) => str?.charAt(0).toUpperCase() + str?.slice(1);
</script>

<div
  class="w-full xl:px-100 lg:px-50 sm:px-20 px-5 min-h-[calc(100vh-80px)] flex flex-col pb-10"
>
  <div class="mt-5">
    <a href="/dashboard" class="btn btn-primary">&larr; Back to Dashboard</a>
  </div>
  <h1 class="md:text-4xl text-3xl font-bold mb-2 mt-10">
    Visits for {data.website.name}
  </h1>
  <h2 class="text-lg mb-10 text-gray-500">{data.website.url}</h2>

  <h1 class="text-2xl font-bold text-shadow-lg">
    Total Views: {data.visits.length}
  </h1>

  {#if data.visits.length === 0}
    <div class="flex flex-col gap-3 py-10">
      <h1 class="text-xl">
        Paste this in the &lt;head&gt; tag of your website:
      </h1>

      <div class="relative w-full">
        <button
          class="absolute top-2 right-2 btn btn-accent z-10 uppercase"
          onclick={copyToClipboard}
        >
          Copy
        </button>

        <div
          class="mockup-code w-full rounded-md text-xl font-mono bg-accent text-accent-content"
        >
          <pre><code bind:this={codeContainer}>{@html scriptTag}</code></pre>
        </div>
      </div>
    </div>
  {/if}

  <div class="flex py-5 flex-wrap gap-5">
    {#each data.visits as visit}
      <div
        class="flex flex-col gap-3 p-4 md:w-[48%] w-full rounded-lg shadow-lg bg-base-100 border border-secondary"
      >
        <div class="flex gap-3 items-center">
          <span class="text-2xl">{visit.flag}</span>
          <p class="text-lg font-semibold capitalize">{visit.country}</p>
        </div>

        <p class="text-sm">
          <span class="font-semibold">Browser:</span>
          {capitalize(visit.browser)}
        </p>
        <p class="text-sm">
          <span class="font-semibold">OS:</span>
          {capitalize(visit.os)}
        </p>
        <p class="text-sm flex items-center gap-1">
          <span class="font-semibold">Device:</span>
          <span>{deviceEmojis[visit.device?.toLowerCase()] || "💻"}</span>
          <span>{capitalize(visit.device)}</span>
        </p>
        <p class="text-sm truncate">
          <span class="font-semibold">Referrer:</span>
          {visit.referrer || "Direct"}
        </p>
        <p class="text-sm font-bold text-shadow-lg">
          {new Date(visit.time * 1000).toLocaleString("en-PK", {
            timeZone: "Asia/Karachi",
          })}
        </p>
      </div>
    {/each}
  </div>
</div>
