<script>
  import "../app.css";

  import { SignIn } from "@auth/sveltekit/components";
  let { children, data } = $props();
</script>

<div id="container" class="flex flex-col relative bg-base-200">
  {#if !data?.session}
    <nav
      class="fixed top-0 z-50 py-5 flex justify-between items-center w-full xl:px-100 lg:px-50 sm:px-20 px-5 border-b-1 border-base-100 bg-base-200"
      style="height: 80px;"
    >
      <div class="flex justify-center items-center gap-2">
        <a href="/" class="text-3xl font-bold text-shadow-lg">ThanData</a>
      </div>
      <div class="space-x-4">
        <SignIn>
          <span class="btn btn-primary" slot="submitButton">
            Sign in &rarr;
          </span>
        </SignIn>
      </div>
    </nav>
  {:else}
    <nav
      class="fixed top-0 z-50 py-5 flex justify-between items-center w-full xl:px-100 lg:px-50 sm:px-20 px-5 border-b-1 border-base-100 bg-base-200"
      style="height: 80px;"
    >
      <div class="flex justify-center items-center gap-2">
        <a href="/" class="text-3xl font-bold text-shadow-lg">ThanData</a>
      </div>
      <div class="space-x-4">
        <form action="/signout" method="POST">
          <button class="btn btn-error">Logout</button>
        </form>
      </div>
    </nav>
  {/if}
  <!-- Main Content, offset by navbar height -->
  <div class="pt-[80px]">
    {@render children()}
  </div>
</div>
