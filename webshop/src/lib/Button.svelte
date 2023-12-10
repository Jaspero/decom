<script lang="ts">
  import { fly } from 'svelte/transition';
  import Loader from './Loader.svelte';
  import { clickOutside } from './utils/click-outside';

  /* Link-specific */
  export let href: string = '';
  export let hreflang: string = '';
  export let target: '_blank' | '_self' | '_parent' | '_top' | '' = '';
  export let id = '';
  export let rel:
    | 'alternate' /* Link to an alternative page (ex. translated page) */
    | 'author' /* Link to the author of the document */
    | 'bookmark' /* Useless */
    | 'external' /* Indicates that the referenced document is not part of the same site as the current document */
    | 'help' /* Provides a link to a help document */
    | 'license' /* Provides a link to licensing information for the document */
    | 'next' /* Provides a link to the next document in the series */
    | 'prev' /* The previous document in a selection */
    | 'nofollow' /* Use the nofollow value when other values don't apply, and you'd rather Google not associate your site with, or crawl the linked page from, your site. */
    | 'noopener noreferrer' /* When linking to an external website, using noopener and noreferrer improves user privacy and security */
    | 'search' /* Links to a search tool for the document */
    | 'tag' /* Specifies that the linked page contains the tag, keyword, or subject of the current page. */
    | '' = '';
  export let download: boolean | null = null;

  /* Button-specific */
  export let type: 'button' | 'submit' | 'reset' = 'button';
  export let name: string | null = null;
  export let form: string | null = null;
  export let disabled: boolean | null = null;
  export let loading: boolean | null = null;
  export let dropdown: boolean | null = null;

  /* General */
  export let variant: 'outlined' | 'filled' | 'icon' | 'default' = 'default';
  export let color: 'primary' | 'secondary' | 'success' | 'warning' | 'error' = 'primary';
  export let size: 'small' | 'regular' | 'large' = 'regular';

  let x = 0;
  let y = 0;
  let clickedOnRight = false;

  function handleClick(event: any) {
    const elementRect = event.currentTarget.getBoundingClientRect();
    clickedOnRight = elementRect.left >= window.innerWidth / 2;
    x = clickedOnRight ? window.innerWidth - elementRect.left : elementRect.right;
    y = elementRect.top;
    dropdown = true;
  }
</script>

{#if href}
  <a
    class:loading
    {href}
    {target}
    {rel}
    {download}
    {hreflang}
    {id}
    class="variant-{variant} color-{color} size-{size}"
    on:click
  >
    {#if loading}
      <Loader />
    {:else}
      {#if $$slots.prefix && variant !== 'icon'}
        <span class="prefix">
          <slot name="prefix" />
        </span>
      {/if}
      <slot />
      {#if $$slots.suffix && variant !== 'icon'}
        <span class="suffix">
          <slot name="suffix" />
        </span>
      {/if}
    {/if}
  </a>
{:else if $$slots.dropdown}
  <button
    class="variant-{variant} color-{color} size-{size} dropdown-button"
    class:loading
    class:disabled
    {type}
    {name}
    {form}
    {disabled}
    {id}
    on:click={handleClick}
  >
    {#if loading}
      <Loader />
    {:else}
      {#if $$slots.prefix && variant !== 'icon'}
        <span class="prefix">
          <slot name="prefix" />
        </span>
      {/if}
      <slot />
      {#if $$slots.suffix && variant !== 'icon'}
        <span class="suffix">
          <slot name="suffix" />
        </span>
      {/if}
    {/if}
  </button>

  {#if dropdown}
    <div class="z-10 fixed top-0 left-0 w-screen h-screen bg-transparent" />
    <div
      class="z-20 fixed flex flex-col bg-white shadow"
      style="top: {y}px; {clickedOnRight ? 'right' : 'left'}: {Math.abs(x)}px;"
      transition:fly={{ y: -20, duration: 300 }}
      use:clickOutside
      on:click_outside={() => (dropdown = false)}
    >
      <slot name="dropdown" />
      <!--TODO: add closing after clicking on a button inside-->
    </div>
  {/if}
{:else}
  <button
    class="variant-{variant} color-{color} size-{size}"
    class:loading
    class:disabled
    {type}
    {name}
    {form}
    {disabled}
    on:click
  >
    {#if loading}
      <Loader />
    {:else}
      {#if $$slots.prefix && variant !== 'icon'}
        <span class="prefix">
          <slot name="prefix" />
        </span>
      {/if}
      <slot />
      {#if $$slots.suffix && variant !== 'icon'}
        <span class="suffix">
          <slot name="suffix" />
        </span>
      {/if}
    {/if}
  </button>
{/if}
