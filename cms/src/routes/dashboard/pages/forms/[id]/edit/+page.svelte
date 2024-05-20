<script lang="ts">
  import { page } from '$app/stores';
  import FormModule from '$lib/FormModule.svelte';
  import { DocumentSnapshot, deleteDoc, doc, updateDoc } from 'firebase/firestore';
  import { db } from '$lib/utils/firebase';
  import { goto } from '$app/navigation';
  import Button from '$lib/Button.svelte';
  import Grid from '$lib/Grid.svelte';
  import GridCol from '$lib/GridCol.svelte';
  import Card from '$lib/Card.svelte';
  import Breadcrumbs from '$lib/Breadcrumbs.svelte';
  import { alertWrapper } from '$lib/utils/alert-wrapper';
  import { urlSegments } from '$lib/utils/url-segments';
  import { confirmation } from '$lib/utils/confirmation';

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

    data.value.lastUpdatedOn = Date.now();

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
  <Button type="button" color="warning" on:click={deleteItem}>Delete</Button>
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
  <title>Form Edit - GlycanAge</title>
</svelte:head>
