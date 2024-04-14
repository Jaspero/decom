<script lang="ts">
  import { goto } from '$app/navigation';
  import ArrowLeft from 'svelte-material-icons/ArrowLeft.svelte';
  import ArrowRight from 'svelte-material-icons/ArrowRight.svelte';

  export let pages: number;
  export let prefix: string;
  export let current: number;

  $: pageItems = Array.from(Array(pages).keys());

  function next() {
    goto(prefix + (current + 1));
  }

  function previous() {
    goto(prefix + (current - 1));
  }
</script>

{#if pages > 1}
  <div class="pagination">
    <button on:click={previous} disabled={current === 1} aria-label="Previous page">
      <ArrowLeft size="24" />
    </button>
    {#each pageItems as item, index}
      <a href={prefix + (index + 1)} class="page" class:active={index === current - 1}>{item + 1}</a
      >
    {/each}
    <button on:click={next} disabled={current === pages} aria-label="Next page">
      <ArrowRight size="24" />
    </button>
  </div>
{/if}
