<script lang="ts">
  import Menu from 'svelte-material-icons/Menu.svelte';
  import Close from 'svelte-material-icons/Close.svelte';
  import AccountCircle from 'svelte-material-icons/AccountCircle.svelte';
  import Button from './Button.svelte';
  import { clickOutside } from './utils/click-outside';
  import { fly } from 'svelte/transition';
  import { goto } from '$app/navigation';
  import { auth, db } from '$lib/utils/firebase';
  import { alertWrapper } from './utils/alert-wrapper';
  import { doc, onSnapshot, setDoc } from 'firebase/firestore';
  import { onMount } from 'svelte';
  import { lastPublishedOn } from './stores/last-published-on.store';
  import { page } from '$app/stores';

  export let label: string;

  let publishLoading = false;
  let publishStart: number;
  let publishDisabled: boolean;

  $: pathname = $page.url.pathname;
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

  onMount(() => {
    onSnapshot(doc(db, 'settings', 'status'), (doc) => {
      const { lastPublished } = doc.data() || {};

      if (lastPublished) {
        lastPublishedOn.set(lastPublished);
      }
    });
  });
</script>

<nav>
  <a href="/dashboard" class="flex items-center gap-2">
    <img src="/brand/logo.svg" alt="GlycanAge Logo" class="logo-img" />

    {#if label}
      <p class="text-white text-2xl font-bold">{label}</p>
    {/if}
  </a>

  <div class="ml-4">
    <Button loading={publishLoading} disabled={publishDisabled} on:click={publish}>Publish</Button>
  </div>
</nav>

<style lang="postcss">
  nav {
    @apply flex items-center bg-black h-16 px-4;
  }

  .logo-img {
    @apply h-12;
  }
</style>