<script lang="ts">
  import Loader from './Loader.svelte';

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
  export let label = 'Add label attribute';

  /* General */
  export let variant: 'outlined' | 'filled' | 'icon' | 'default' = 'default';
  export let color: 'primary' | 'secondary' | 'success' | 'warning' | 'error' = 'primary';
  export let size: 'small' | 'regular' | 'large' = 'regular';
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
      {@html label}
      {#if $$slots.suffix && variant !== 'icon'}
        <span class="suffix">
          <slot name="suffix" />
        </span>
      {/if}
    {/if}
  </a>
{:else}
  <button
          class=""
          class:loading
          class:disabled
          {type}
          name={label}
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
      {@html label}
      {#if $$slots.suffix && variant !== 'icon'}
        <span class="suffix">
          <slot name="suffix" />
        </span>
      {/if}
    {/if}
  </button>
{/if}

