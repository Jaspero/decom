<script lang="ts">
  import { clickOutside } from '$lib/utils/click-outside';
  import { fade } from 'svelte/transition';
  import { createEventDispatcher } from 'svelte';

  export let showing = false;
  export let showClose = true;
  export let fullScreen = false;
  export let contentfull = false;
  export let removeMinW = false;
  export let buttonOutside = false;

  const dispatch = createEventDispatcher();

  function close() {
    showing = false;
    dispatch('closed');
  }

  function closeOnEscape(event: KeyboardEvent) {
    if (event.key === 'Escape' && showClose) {
      close();
    }
  }

  $: if (showing) {
    try {
      document.documentElement.classList.add('scroll-disabled');
    } catch (e) {}
  } else {
    try {
      document.documentElement.classList.remove('scroll-disabled');
    } catch (e) {}
  }
</script>

<svelte:window on:keydown={closeOnEscape} />

{#if showing}
  {#if !fullScreen}
    <div class="blurred-bg" transition:fade={{ duration: 200 }} />
  {/if}
  <div
    class="dialog"
    class:fullscreen={fullScreen}
    class:min-w-0={removeMinW}
    class:button-outside={buttonOutside}
    transition:fade={{ duration: 200 }}
    use:clickOutside
    on:click_outside={close}
  >
    <div class="dialog-content" class:contentfull>
      <slot />
    </div>
    <button type="button" class="dialog-close" on:click={close}>
      Close
    </button>
  </div>
{/if}
