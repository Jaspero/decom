<script lang="ts">
  import Button from '$lib/Button.svelte';
  import { CONFIG } from '$lib/consts/config.const';
</script>

<div class="w-screen h-screen flex flex-col justify-center items-center">
  <div class="flex flex-col gap-4 justify-center items-center">
    <h1 class="text-4xl font-bold">Error</h1>
    <p class="text-xl">Something went wrong. Try again later.</p>
    <div class="flex justify-center">
      <Button variant="filled" color="secondary" href="/dashboard">Back to dashboard</Button>
    </div>
  </div>
</div>

<svelte:head>
  <title>Error - {CONFIG.title}</title>
  <meta name="description" content="This page doesn't exist or something went wrong" />
</svelte:head>
