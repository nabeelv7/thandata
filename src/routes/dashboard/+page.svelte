<script>
  let { data } = $props();
  let modal;
</script>

<div
  class="flex flex-col py-20 min-h-[calc(100vh-80px)] w-full xl:px-100 lg:px-50 sm:px-20 px-5"
>
  <div class="flex justify-between">
    <h1 class="text-3xl font-bold">{data?.session?.user?.name}'s Websites:</h1>
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
</div>
