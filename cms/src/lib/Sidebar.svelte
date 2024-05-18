<script lang="ts">
  import { db, auth } from '$lib/utils/firebase';
  import { slide } from 'svelte/transition';
  import { doc, onSnapshot } from 'firebase/firestore';
  import { onMount } from 'svelte';
  import { lastPublishedOn } from './stores/last-published-on.store';
  import { clickOutside } from './utils/click-outside';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { sidebarStore } from './stores/sidebar.store';

  export let links: Array<{
    label: string;
    icon: string;
    href: string;
    exactMatch?: boolean;
    links?: Array<{
      label: string;
      href: string;
    }>;
    checked?: boolean;
  }>;

  let dropdown = false;

  $: pathname = $page.url.pathname;

  function closeSidebar() {
    if (typeof window !== undefined && window.innerWidth < 768) {
      $sidebarStore = false;
    }
  }

  onMount(() => {
    onSnapshot(doc(db, 'settings', 'status'), (doc) => {
      const { lastPublished } = doc.data() || {};

      if (lastPublished) {
        lastPublishedOn.set(lastPublished);
      }
    });

    links = links.map((link) => {
      if (link.links) {
        return {
          ...link,
          checked: pathname.startsWith(link.href)
        };
      }
      return link;
    });
  });
</script>

{#if $sidebarStore}
  <aside>
    {#if links}
      <nav>
        {#each links as link}
          <div
            class="border-t border-t-black/10 first:border-t-0 last:border-b last:border-b-black/10"
          >
            {#if link.links}
              <button
                class="sidebar-dropdown flex gap-2 w-full px-4 py-3 font-bold hover:bg-black/5 transition-all"
                class:active={pathname.startsWith(link.href)}
                on:click={() => {
                  link.checked = !link.checked;
                }}
              >
                {#if link.icon}
                  <span class="material-symbols-outlined">{link.icon}</span>
                {/if}
                <span class="flex-1 text-left">{link.label}</span>
                <img
                  class="w-6 h-6 transition-transform duration-500"
                  class:-scale-y-100={link.checked}
                  src="/images/expand_more.svg"
                  alt={link.checked ? 'Expand less' : 'Expand more'}
                />
              </button>

              {#if link.checked}
                <div class="flex flex-col px-4" transition:slide>
                  {#each link.links as inner}
                    <a
                      class="dropdown-link flex gap-2 hover:underline py-2 hover:translate-x-2 transition-all"
                      href={inner.href}
                      class:active={pathname.startsWith(inner.href)}
                      on:click={closeSidebar}
                    >
                      <span class="w-6 h-6" />
                      {inner.label}
                    </a>
                  {/each}
                </div>
              {/if}
            {:else if link.href}
              <a
                class="sidebar-link flex gap-2 w-full px-4 py-3 font-bold hover:bg-black/5 transition-all"
                href={link.href}
                class:active={link.exactMatch
                  ? pathname === link.href
                  : pathname.startsWith(link.href)}
                on:click={closeSidebar}
              >
                {#if link.icon}
                  <span class="material-symbols-outlined">{link.icon}</span>
                {/if}
                {link.label}
              </a>
            {/if}
          </div>
        {/each}
      </nav>
    {/if}

    <footer class="border-t border-t-black/10">
      <button
        class="flex gap-2 w-full px-4 py-3 font-bold hover:bg-black/5 transition-all"
        on:click={() => {
          dropdown = true;
        }}
      >
        <span class="material-symbols-outlined">account_circle</span>
        <span class="flex-1 text-left">Account</span>
        <span class="material-symbols-outlined">chevron_right</span>
      </button>

      {#if dropdown}
        <div
          class="absolute bottom-full right-4 bg-white shadow flex flex-col whitespace-nowrap divide-y"
          use:clickOutside
          on:click_outside={() => (dropdown = false)}
          transition:slide
        >
          <a
            class="px-4 py-3 text-sm hover:bg-black/5 transition-colors cursor-pointer"
            href="/dashboard/account"
            on:click={() => {
              dropdown = false;
            }}>Account</a
          >
          <button
            class="px-4 py-3 text-sm hover:bg-black/5 transition-colors cursor-pointer"
            on:click={() => {
              auth.signOut();
              goto('/');
            }}>Sign out</button
          >
        </div>
      {/if}
    </footer>
  </aside>
{/if}

<style lang="postcss">
  aside {
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
    gap: 0.5rem;
    width: 256px;
    height: 100%;
    background-color: white;
    overflow-y: auto;
    border-right: 1px solid rgba(0, 0, 0, 0.16);
  }

  @media (max-width: 767px) {
    aside {
      z-index: 100;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  nav {
    @apply flex-1 overflow-y-auto;
  }
  footer {
    @apply sticky bottom-0;
  }

  .sidebar-link.active,
  .sidebar-dropdown.active {
    background-color: var(--tertiary-color);
    color: var(--tertiary-contrast-color);
  }

  .dropdown-link.active {
    @apply underline translate-x-2 transition-all;
  }
</style>
