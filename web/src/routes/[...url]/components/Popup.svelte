<svelte:options customElement={{ tag: 'pb-popup', shadow: 'none' }} />

<script lang="ts">
  import { getDoc, doc } from 'firebase/firestore';
  import Button from '$lib/Button.svelte';
  import Dialog from '$lib/Dialog.svelte';
  import { browser } from '$app/environment';
  import { db } from '$lib/utils/firebase';

  export let popup: string | undefined;
  export let label = 'Open';

  let showing = false;
  let content: string;

  $: if (browser && showing && popup) {
    Promise.all([
      getDoc(doc(db, 'landing-page-popups', popup, 'content', 'html')),
      getDoc(doc(db, 'landing-page-popups', popup, 'content', 'css'))
    ])
      .then((res) => {
        /**
         * Stupid bug
         * https://github.com/sveltejs/svelte/issues/5292#issuecomment-787743573
         */
        content = `${res[0].data()!.content}<${''}style>${res[1].data()!.content}</${''}style>`;
      })
      .catch(console.error);
  }
</script>

<Button on:click={() => (showing = true)}>{label}</Button>

<Dialog bind:showing>
  {#if content}
    {@html content}
  {:else}
    <p>Select a popup to see content.</p>
  {/if}
</Dialog>
