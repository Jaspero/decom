<script lang="ts">
  import { db } from '$lib/utils/firebase';
  import { doc, onSnapshot, setDoc } from 'firebase/firestore';
  import { onMount } from 'svelte';
  import Button from './Button.svelte';
  import { lastPublishedOn } from './stores/last-published-on.store';
  import { alertWrapper } from './utils/alert-wrapper';
  import { sidebarStore } from './stores/sidebar.store';

  export let label: string;

  let publishLoading = false;
  let publishStart: number;
  let publishDisabled: boolean;

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

  <div class="ml-12">
    <Button loading={publishLoading} disabled={publishDisabled} on:click={publish}>Publish</Button>
  </div>
</nav>
