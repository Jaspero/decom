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

<style lang="scss">
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: none;
    border: none;
    color: var(--text-lighter);
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      color: var(--text);
    }
    &:first-of-type {
      margin-right: 1rem;
    }
    &:last-of-type {
      margin-left: 1rem;
    }
  }

  a {
    display: block;
    font-size: 1.5rem;
    font-weight: normal;
    margin: 0 0.25rem;
    color: var(--text-lighter);
    transition: 0.2s;

    &:hover {
      color: var(--text);
    }
    &.active {
      color: var(--accent);
    }
  }
</style>
