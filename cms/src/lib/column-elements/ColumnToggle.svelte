<svelte:options
  customElement={{
    tag: 'column-toggle',
    shadow: 'none'
  }}
/>

<script lang="ts">
  import { doc, updateDoc } from 'firebase/firestore';
  import { db } from '../utils/firebase';

  export let value: string;
  export let collection: string;
  export let id: string;
  export let key: string;

  let checked = value === 'true';

  async function change() {
    await updateDoc(doc(db, collection, id), { [key]: checked });
  }
</script>

<input type="checkbox" bind:checked on:change={change} on:click|stopPropagation />
