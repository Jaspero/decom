<script lang="ts">
  export let alignment: 'left' | 'center' | 'right' = 'left';
  export let colspan: string | null = null;
  export let stickyRight = false;

  $: properties = {
    class: [
      alignment == 'left' && 'text-left',
      alignment == 'center' && 'text-center',
      alignment == 'right' && 'text-right',
      stickyRight == true && 'sticky right-0 w-10 h-10 !p-0 bg-[inherit]'
    ]
      .filter(Boolean)
      .join(' ')
  };
</script>

<th {...properties} {colspan}>
  {#if stickyRight}
    <div class="flex justify-center items-center w-full h-full border-l">
      <slot />
    </div>
  {:else}
    <slot />
  {/if}
</th>

<style lang="postcss">
  th {
    @apply px-6 py-3 whitespace-nowrap;
  }
</style>
