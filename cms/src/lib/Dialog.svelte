<script lang="ts">
  import Button from './Button.svelte';
  import { clickOutside } from './utils/clickOutside';

  export let open: boolean;
  export let removePadding = false;
  export let fixed;

  function closeOnEscape(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      close();
    }
  }

  function close() {
    if (fixed) {
      return;
    }
    open = false;
  }

  $: if (open) {
    try {
      document.documentElement.classList.add('overflow-hidden');
    } catch (e) {}
  } else {
    try {
      document.documentElement.classList.remove('overflow-hidden');
    } catch (e) {}
  }
</script>

<svelte:window on:keydown={closeOnEscape} />

{#if open}
  <div class="overlay">
    <div class="dialog" use:clickOutside on:click_outside={close}>
      {#if $$slots.title}
        <div class="dialog-header">
          <h1 class="text-2xl font-bold">
            <slot name="title" />
          </h1>
        </div>
      {/if}

      {#if $$slots.default}
        <div class="dialog-content {removePadding ? '' : 'p-6'}">
          <slot />
        </div>
      {/if}

      <div class="dialog-actions">
        {#if $$slots.actions}
          <div class="flex gap-4">
            <slot name="actions" />
            <Button variant="outlined" color="warning" on:click={close}>Close</Button>
          </div>
        {/if}
      </div>
    </div>
  </div>
{/if}

<style lang="postcss">
  .overlay {
    @apply z-50 fixed top-0 right-0 bottom-0 left-0 bg-black/25 flex justify-center items-center;
  }

  .dialog {
    min-width: 340px;
    @apply bg-white border rounded-xl overflow-hidden divide-y shadow-2xl;
  }

  .dialog-header {
    @apply p-6;
  }

  .dialog-content {
  }

  .dialog-actions {
    @apply p-6 flex justify-between flex-wrap gap-4;
  }
</style>
