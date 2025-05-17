<script>
  export let data;

  const browserGradients = {
    chrome: "from-yellow-400 via-red-400 to-pink-400",
    firefox: "from-orange-500 via-red-500 to-yellow-500",
    safari: "from-blue-400 via-cyan-400 to-blue-600",
    edge: "from-blue-500 via-green-500 to-indigo-500",
    opera: "from-red-400 via-pink-500 to-purple-500",
    brave: "from-amber-500 via-orange-500 to-yellow-500",
    default: "from-gray-300 via-gray-400 to-gray-500",
  };

  const deviceEmojis = {
    desktop: "🖥️",
    mobile: "📱",
    tablet: "📲",
  };

  const capitalize = (str) => str?.charAt(0).toUpperCase() + str?.slice(1);
</script>

<div
  class="w-full xl:px-100 lg:px-50 sm:px-20 px-5 min-h-[calc(100vh-80px)] flex flex-col"
>
  <h1 class="md:text-4xl text-3xl font-bold mb-2 mt-10">
    Visits for {data.website.name}
  </h1>
  <h2 class="text-lg mb-10 text-gray-500">{data.website.url}</h2>

  <h1 class="text-2xl font-bold text-shadow-lg">
    Total Views: {data.visits.length}
  </h1>
  <div class="flex py-5 flex-wrap gap-5">
    {#each data.visits as visit}
      <div
        class={`flex flex-col gap-3 p-4 md:w-[48%] w-full text-white rounded-lg shadow-lg bg-gradient-to-br ${ 
          browserGradients[visit.browser?.toLowerCase()] ||
          browserGradients.default
        }`}
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
      </div>
    {/each}
  </div>
</div>
