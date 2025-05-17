<script>
  let { data } = $props();
  console.log(data.session);
</script>

<div class="flex flex-col items-center justify-center">
  <div
    class="w-full bg-base-200 xl:px-100 lg:px-50 sm:px-20 px-5 min-h-[calc(100vh-80px)]"
  >
    {#if data?.session}
      <h1>Signed in as {data.session?.user?.name}</h1>
    {/if}
  </div>
</div>
