<script>
  import { signOut } from "@auth/sveltekit/client";
  import "../app.css";

  let { children } = $props();
</script>

<div
  class="fixed top-10 right-10 flex justify-between items-center w-full px-100"
>
  <div class="flex justify-center items-center gap-2">
    <a href="/" class="text-3xl font-bold text-shadow-lg">ThanData</a>
  </div>
  <div class="space-x-4">
    <a class="link" href="/login">Login</a>
    <button onclick={() => signOut()} class="btn btn-error">Logout</button>
  </div>
</div>
{@render children()}
