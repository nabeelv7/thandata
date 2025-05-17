<script>
  let { data } = $props();
  console.log(data.visits);
</script>

<h1>{data.website.name}</h1>
<h1>{data.website.url}</h1>
{#each data.visits as visit}
  <div class="flex flex-col gap-4 p-4 bg-base-100 rounded-lg shadow">
    <p class="text-md">{visit.country}</p>
    <p class="text-md">{visit.browser}</p>
    <p class="text-md">{visit.os}</p>
    <p class="text-md">{visit.device}</p>
    <p class="text-md">{visit.referrer}</p>
  </div>
{/each}
