<script lang="ts">
  import { db, auth } from '$lib/utils/firebase';
  import { doc, onSnapshot, setDoc } from 'firebase/firestore';
  import { onMount } from 'svelte';
  import Button from './Button.svelte';
  import { lastPublishedOn } from './stores/last-published-on.store';
  import { alertWrapper } from './utils/alert-wrapper';
  import { sidebarStore } from './stores/sidebar.store';
  import { clickOutside } from './utils/click-outside';
  import { goto } from '$app/navigation';
  import { slide } from 'svelte/transition';

  export let label: string;

  let publishLoading = false;
  let publishStart: number;
  let publishDisabled: boolean;
  let dropdown = false;

  $: publishDisabled = !!(publishStart && (!$lastPublishedOn || $lastPublishedOn < publishStart));

  async function publish() {
    publishLoading = true;
    publishStart = Date.now();

    await alertWrapper(
      setDoc(doc(db, 'settings', 'status'), { publishStart }, { merge: true }),
      'Deployment Started!'
    );

    publishLoading = false;
  }

  function toggleSidebar() {
    $sidebarStore = !$sidebarStore;
  }

  onMount(() => {
    onSnapshot(doc(db, 'settings', 'status'), (doc) => {
      const { lastPublished } = doc.data() || {};

      if (lastPublished) {
        lastPublishedOn.set(lastPublished);
      }
    });
  });
</script>

<nav class="z-20 relative flex items-center px-6 min-h-[4rem] h-16 border-b bg-white">
  <div class="md:hidden mr-4">
    <Button variant="icon" on:click={toggleSidebar}>
      {#if $sidebarStore}
        <span class="material-symbols-outlined">close</span>
      {:else}
        <span class="material-symbols-outlined">menu</span>
      {/if}
    </Button>
  </div>
  <a href="/dashboard" class="flex items-center gap-2">
    <img src="/brand/logo.svg" alt="GlycanAge Logo" class="h-10" />

    {#if label}
      <p>{label}</p>
    {/if}
  </a>

  <div class="flex-1" />

  <div class="relative">
    <button
      class="flex gap-2 w-full px-4 py-3 font-bold hover:bg-black/5 transition-all"
      on:click={() => {
        dropdown = true;
      }}
    >
      <span class="material-symbols-outlined">account_circle</span>
      <span class="flex-1 text-left">Postavke</span>
    </button>

    {#if dropdown}
      <div
        class="absolute top-full right-0 bg-white shadow flex flex-col whitespace-nowrap divide-y"
        use:clickOutside
        on:click_outside={() => (dropdown = false)}
        transition:slide
      >
        <button
          class="text-left px-4 py-3 text-sm hover:bg-black/5 transition-colors cursor-pointer"
          on:click={publish}>Pokrenu objavu</button
        >
        <a
          class="text-left px-4 py-3 text-sm hover:bg-black/5 transition-colors cursor-pointer"
          href="/dashboard/account"
          on:click={() => {
            dropdown = false;
          }}>Postavke</a
        >
        <button
          class="text-left px-4 py-3 text-sm hover:bg-black/5 transition-colors cursor-pointer"
          on:click={() => {
            auth.signOut();
            goto('/');
          }}>Odjava</button
        >
      </div>
    {/if}
  </div>
</nav>
