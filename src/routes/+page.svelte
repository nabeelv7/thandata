<script>
  let { data } = $props();
</script>

<div class="flex flex-col items-center justify-center">
  <div
    class="w-full max-w-6xl bg-base-200 xl:px-24 lg:px-16 md:px-12 sm:px-8 px-5 min-h-[calc(100vh-80px)]"
  >
    <section class="text-center py-16 md:py-20">
      <h1 class="text-4xl md:text-5xl font-bold mb-4 max-w-4xl mx-auto">
        Personalized <span class="text-primary underline decoration-wavy"
          >Analytics</span
        > for Your Website
      </h1>
      <p class="text-lg text-gray-500 max-w-3xl mx-auto">
        Understand your visitors with privacy-first, easy-to-use website
        analytics. No cookies, no tracking — just insights.
      </p>
    </section>

    {#if data?.session}
      <h1 class="text-center text-lg font-medium mb-10 max-w-3xl mx-auto">
        Signed in as {data.session?.user?.name}
      </h1>
    {/if}

    <section
      class="flex flex-col md:flex-row gap-6 justify-center items-stretch mb-16"
    >
      <div
        class="bg-base-100 p-6 rounded-lg shadow-lg w-full md:w-80 flex flex-col justify-between"
      >
        <h2 class="text-2xl font-semibold mb-2">🌍 Real-time Stats</h2>
        <p class="text-gray-500">
          Get real-time data on your visitors: where they come from, what device
          they use, and how they found you.
        </p>
      </div>
      <div
        class="bg-base-100 p-6 rounded-lg shadow-lg w-full md:w-80 flex flex-col justify-between"
      >
        <h2 class="text-2xl font-semibold mb-2">🤩 Simple Integration</h2>
        <p class="text-gray-500">
          Just drop a simple script tag in your website's head and start
          collecting insights instantly.
        </p>
      </div>
    </section>

    <section class="text-center py-12">
      <a href="/auth/signin" class="btn btn-primary btn-lg"> Get Started </a>
    </section>

    <footer
      class="w-full bg-base-200 flex flex-col md:flex-row items-center justify-center gap-3 text-gray-600 text-sm py-10"
    >
      <img src="/icon.svg" alt="Logo" class="md:w-10 md:h-10 aspect-square w-8 h-8 rounded-full" />
      <p>
        Made with 💙 and ☕ by
        <a
          href="https://github.com/nabeelv7"
          target="_blank"
          rel="noopener noreferrer"
          class="underline hover:text-primary"
        >
          Nabeel
        </a>
      </p>
    </footer>
  </div>
</div>
