<script lang="ts">
  export let components: any[] = [];
</script>

{#if components}
  {#if components.length}
    <svelte:component this={components[0]}>
      <svelte:self components={components.slice(1)}>
        <slot />
      </svelte:self>
    </svelte:component>
  {:else}
    <slot />
  {/if}
{/if}
