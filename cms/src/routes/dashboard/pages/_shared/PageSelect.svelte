<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { clickOutside } from '$lib/utils/click-outside';
  import Button from '$lib/Button.svelte';

  export let pages: Array<{ title: string; id: string }> = [];
  export let selected: string;

  let open = false;
  let bindingElement: HTMLButtonElement;
  let menuStyle: string;
  let searchTerm = '';
  let shownPages = [...pages];

  $: if (searchTerm) {
    shownPages = pages.filter((page) => {
      return page.title.toLowerCase().includes(searchTerm.toLowerCase().trim());
    });
  } else {
    shownPages = [...pages];
  }

  const dispatch = createEventDispatcher();

  function toggleMenu() {
    const rect = bindingElement.getBoundingClientRect();
    const availableSpaceBelow = window.innerHeight - rect.bottom;
    const dropdownHeight = 300;

    let style: string = '';

    if (availableSpaceBelow < dropdownHeight) {
      style = `
        min-width: ${rect.width}px;
        bottom: ${window.innerHeight - rect.top}px;
        left: ${rect.left}px;
      `;
    } else {
      style = `
        min-width: ${rect.width}px;
        top: ${rect.bottom}px;
        left: ${rect.left}px;
      `;
    }

    menuStyle = style;
    open = !open;

    if (!open) {
      // If the menu is being closed
      setTimeout(() => {
        bindingElement.focus();
      }, 10);
    }
  }

  $: if (open) {
    document.documentElement.style.overflowY = 'hidden';
  } else {
    document.documentElement.style.overflowY = '';
  }
</script>

<div class="wrapper">
  <button
    type="button"
    class="select"
    class:toggled={open}
    bind:this={bindingElement}
    on:click|preventDefault={toggleMenu}
  >
    <span class="select-label">
      {selected}
    </span>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      class="select-arrow"
      class:rotate={open}
    >
      <path
        d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
      />
    </svg>
  </button>
</div>

{#if open}
  <div class="overlay" tabindex="-1" role="dialog">
    <div class="menu" style={menuStyle} use:clickOutside on:click_outside={toggleMenu}>
      {#if pages.length}
        <header class="menu-header">
          <label class="page-search">
            <span>Search:</span>
            <input bind:value={searchTerm} />
          </label>
        </header>

        {#if shownPages.length}
          {#each shownPages as option}
            <button
              type="button"
              class="menu-button"
              on:click|preventDefault={() => dispatch('select', option.id)}
            >
              <span>{option.title}</span>
            </button>
          {/each}
        {:else}
          <p class="no-results">No results</p>
        {/if}
      {/if}

      <Button color="secondary" variant="filled" on:click={() => dispatch('new')}
        >Create New Page</Button
      >
    </div>
  </div>
{/if}

<style>
  .wrapper {
    position: relative;
    width: 100%;
    max-width: 250px;
  }

  /* Overlay */
  .overlay {
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  /* Select */
  .select {
    font-family: inherit;
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -moz-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: left;
    width: 100%;
    height: 40px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: 0 0.75rem;
    gap: 0.75rem;
    background-color: transparent;
    border: 1px solid var(--border-primary);
    -webkit-border-radius: 0.25rem;
    -moz-border-radius: 0.25rem;
    border-radius: 0.25rem;
  }

  .select:focus {
    outline: none;
    border-color: var(--primary-color);
    -webkit-box-shadow: inset 0 0 0 1px var(--primary-color);
    -moz-box-shadow: inset 0 0 0 1px var(--primary-color);
    box-shadow: inset 0 0 0 1px var(--primary-color);
  }

  .select.toggled {
    -webkit-border-bottom-left-radius: 0;
    -moz-border-radius-bottomleft: 0;
    border-bottom-left-radius: 0;
    -webkit-border-bottom-right-radius: 0;
    -moz-border-radius-bottomright: 0;
    border-bottom-right-radius: 0;
    border-bottom-color: var(--primary-color);
    -webkit-box-shadow: inset 0 -2px 1px -1px var(--primary-color);
    -moz-box-shadow: inset 0 -2px 1px -1px var(--primary-color);
    box-shadow: inset 0 -2px 1px -1px var(--primary-color);
  }

  .select:disabled {
    opacity: 0.5;
  }

  .select-label {
  }

  input:required + .select .select-label::after {
    content: ' *';
  }

  .select-arrow {
    width: 1rem;
    height: 1rem;
    min-width: 1rem;
    min-height: 1rem;
    -webkit-transition: transform 0.3s;
    -o-transition: transform 0.3s;
    -moz-transition: transform 0.3s;
    -webkit-transition: -webkit-transform 0.3s;
    transition: -webkit-transform 0.3s;
    -o-transition: -o-transform 0.3s;
    -moz-transition: transform 0.3s, -moz-transform 0.3s;
    transition: transform 0.3s;
    transition: transform 0.3s, -webkit-transform 0.3s, -moz-transform 0.3s, -o-transform 0.3s;
  }

  .select-arrow.rotate {
    -webkit-transform: rotate(-180deg);
    -moz-transform: rotate(-180deg);
    -ms-transform: rotate(-180deg);
    -o-transform: rotate(-180deg);
    transform: rotate(-180deg);
  }

  /* Menu */
  .menu {
    position: absolute;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    max-height: 300px;
    overflow-y: auto;
    -webkit-border-bottom-left-radius: 0.25rem;
    -moz-border-radius-bottomleft: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    -webkit-border-bottom-right-radius: 0.25rem;
    -moz-border-radius-bottomright: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    -webkit-box-shadow: 0 6px 9px rgba(0, 0, 0, 0.16);
    -moz-box-shadow: 0 6px 9px rgba(0, 0, 0, 0.16);
    box-shadow: 0 6px 9px rgba(0, 0, 0, 0.16);
    background-color: var(--background-primary);
  }

  .menu-button {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -moz-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem;
    text-align: left;
    outline: none;
    -webkit-transition: background-color 0.3s, color 0.3s, fill 0.3s;
    -o-transition: background-color 0.3s, color 0.3s, fill 0.3s;
    -moz-transition: background-color 0.3s, color 0.3s, fill 0.3s;
    transition: background-color 0.3s, color 0.3s, fill 0.3s;
  }

  .menu-button:disabled {
    opacity: 0.33;
  }

  .menu-button:not(:disabled):hover,
  .menu-button:focus {
    background-color: var(--background-secondary);
  }

  .menu-header {
    position: sticky;
    top: 0;
    padding: 0.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    background-color: white;
  }

  .page-search {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .page-search span {
  }

  .page-search input {
    flex: 1 1 0;
    padding: 0.25rem 0.5rem;
    border: 1px solid var(--border-secondary);
  }

  .no-results {
    padding: 0.5rem;
  }
</style>
