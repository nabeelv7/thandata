<script>
  let { data } = $props();
  let modal;

  function getFavicon(url) {
    const hostname = new URL(url).hostname;
    return `https://icons.duckduckgo.com/ip3/${hostname}.ico`;
  }
</script>

<div
  class="flex flex-col md:py-18 py-10 min-h-[calc(100vh-80px)] w-full xl:px-100 lg:px-50 sm:px-20 px-5"
>
  <div class="flex md:flex-row flex-col gap-3 justify-between items-baseline">
    <h1 class="md:text-3xl text-2xl font-bold">
      {data?.session?.user?.name}'s Websites:
    </h1>
    <!-- You can open the modal using ID.showModal() method -->
    <button onclick={() => modal.showModal()} class="btn btn-primary"
      >+ Add Website</button
    >
    <dialog bind:this={modal} class="modal">
      <div class="modal-box">
        <form method="dialog">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >✕</button
          >
        </form>
        <!-- form for adding a new website -->
        <form method="POST" class="flex flex-col justify-center gap-1">
          <label class="font-bold" for="name">Name</label>
          <input
            class="input w-full"
            type="text"
            name="name"
            placeholder="Enter name here.."
          />
          <label class="mt-4 font-bold" for="name">Link</label>
          <input
            class="input w-full"
            type="url"
            name="url"
            placeholder="Enter website url here.."
          />
          <button class="btn btn-primary mt-4">Add Website</button>
        </form>
      </div>
    </dialog>
  </div>

  <!-- websites -->
  <div class="flex py-10 flex-wrap gap-5">
    {#each data.websites as website}
      <div
        class="flex flex-col gap-4 md:w-[48%] w-full p-4 bg-base-100 rounded-lg shadow"
      >
        <div class="flex gap-2 items-center">
          <img
            src={getFavicon(website.url)}
            alt="favicon"
            class="md:w-10 md:h-10 w-7 h-7 aspect-square rounded-full"
          />
          <h2 class="text-2xl font-bold">{website.name}</h2>
        </div>
        <p class="text-md">{website.url}</p>
        <a href={`/dashboard/analytics/${website.id}`} class="btn btn-info"
          >View Analytics</a
        >
      </div>
    {/each}
  </div>
</div>
