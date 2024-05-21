<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import Button from '$lib/Button.svelte';
  import Card from '$lib/Card.svelte';
  import FormModule from '$lib/FormModule.svelte';
  import { alertWrapper } from '$lib/utils/alert-wrapper';
  import { confirmation } from '$lib/utils/confirmation';
  import { db } from '$lib/utils/firebase';
  import { urlSegments } from '$lib/utils/url-segments';
  import { DocumentSnapshot, deleteDoc, doc, updateDoc } from 'firebase/firestore';
  import { CONFIG } from '$lib/consts/config.const';

  export let data: {
    col: string;
    items: any[];
    value: any;
    snap: DocumentSnapshot;
  };

  $: segments = urlSegments($page.url.pathname);
  $: back =
    '/' +
    segments
      .slice(0, segments.length - 1)
      .map((it) => it.value)
      .join('/');

  let saveLoading = false;

  async function submit() {
    saveLoading = true;

    data.value.lastUpdatedOn = new Date().toISOString();

    await alertWrapper(
      updateDoc(data.snap.ref, data.value),
      'Document updated successfully',
      undefined,
      () => (saveLoading = false)
    );

    saveLoading = false;

    goto(back);
  }

  async function deleteItem() {
    confirmation(async ({ confirmed }) => {
      if (!confirmed) {
        return;
      }

      await alertWrapper(deleteDoc(doc(db, data.col, data.value.id)), `Item deleted successfully`);

      goto('/dashboard/pages/forms');
    });
  }
</script>

<div class="save-menu">
  <Button type="button" color="warn" on:click={deleteItem}>Delete</Button>
  <div class="flex-1" />
  <Button href={back} variant="outlined" color="secondary">Cancel</Button>
  <Button type="submit" form="form" variant="filled" color="secondary" loading={saveLoading}
    >Save</Button
  >
</div>

<form id="form" class="relative" on:submit|preventDefault={submit}>
  <Card>
    <FormModule items={data.items} bind:value={data.value} />
  </Card>
</form>

<svelte:head>
  <title>Form Edit - {CONFIG.title}</title>
</svelte:head>
