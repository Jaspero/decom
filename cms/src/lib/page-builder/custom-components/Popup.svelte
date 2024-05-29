<svelte:options customElement={{ tag: 'pb-popup', shadow: 'none' }} />

<script lang="ts">
  import { getDoc, doc } from 'firebase/firestore';
  import Button from '../../Button.svelte';
  import Dialog from '../../Dialog.svelte';
  import { db } from '../../utils/firebase';

  export let popup: string | undefined;
  export let label = 'Open';

  let open = false;
  let content: string;

  $: if (open && popup) {
    Promise.all([
      getDoc(doc(db, 'landing-page-popups', popup, 'content', 'html')),
      getDoc(doc(db, 'landing-page-popups', popup, 'content', 'css'))
    ])
      .then((res) => {
        // content = `${res[0].data()!.content}<style>${res[1].data()!.content}</style>`;
        content = `${res[0].data()!.content}`;
      })
      .catch(console.error);
  }
</script>

<Button on:click={() => (open = true)}>{label}</Button>

<Dialog bind:open>
  {#if content}
    {@html content}
  {:else}
    <p>Select a popup to see content.</p>
  {/if}
</Dialog>
