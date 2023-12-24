<script lang="ts">
  export let segments: Array<{ label: string; value: string }> = [];
  export let title = '';
</script>

<nav class="flex gap-1">
  {#each segments as segment, index (segment)}
    {#if index !== segments.length - 1}
      <a
        class="capitalize underline text-orange font-bold whitespace-nowrap"
        href="/{segments
          .slice(0, index + 1)
          .map((it) => it.value)
          .join('/')}">{segment.label}</a
      > /
    {:else}
      <span class="font-bold truncate">{title || segment.label}</span>
    {/if}
  {/each}
</nav>
