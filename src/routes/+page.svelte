<script>
  import { SignIn, SignOut } from "@auth/sveltekit/components";
  import ButtonGithub from "$lib/components/ButtonGithub.svelte";

  let { data } = $props();
  console.log(data.session);
</script>

<SignIn>Continue with Github</SignIn>

<SignOut>Logout</SignOut>
