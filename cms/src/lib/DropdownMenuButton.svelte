<script lang="ts">
  export let href: string = '';
  export let target: '_blank' | '_self' | '_parent' | '_top' | '' = '';
  export let rel:
    | 'alternate'
    | 'author'
    | 'bookmark'
    | 'external'
    | 'help'
    | 'license'
    | 'next'
    | 'nofollow'
    | 'noopener'
    | 'noreferrer'
    | 'prev'
    | 'search'
    | 'tag'
    | '' = '';
  export let disabled = false;
</script>

{#if href}
  <a {href} {target} {rel}>
    {#if $$slots.icon}
      <span class="icon">
        <slot name="icon" />
      </span>
    {/if}

    <span class="content">
      <span class="content-label">
        <slot />
      </span>
    </span>
  </a>
{:else}
  <button {disabled} on:click>
    {#if $$slots.icon}
      <span class="icon">
        <slot name="icon" />
      </span>
    {/if}

    <span class="content">
      <span class="content-label">
        <slot />
      </span>
    </span>
  </button>
{/if}

<style lang="postcss">
  a,
  button {
    display: flex;
    text-align: left;
    cursor: pointer;
    padding: 1rem;
    margin: 0;
    font-weight: normal;
    background: none;
    border: none;
  }

  a:not(last-child),
  button:not(last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.16);
  }

  a:hover,
  button:hover {
    background: rgba(0, 0, 0, 0.04);
  }

  .icon {
    margin-right: 8px;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 1rem;
  }

  .content-label {
    height: 24px;
    line-height: 24px;
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
</style>
