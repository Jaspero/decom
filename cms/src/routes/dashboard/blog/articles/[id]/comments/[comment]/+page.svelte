<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import Breadcrumbs from '$lib/Breadcrumbs.svelte';
  import Button from '$lib/Button.svelte';
  import Card from '$lib/Card.svelte';
  import FormModule from '$lib/FormModule.svelte';
  import Grid from '$lib/Grid.svelte';
  import GridCol from '$lib/GridCol.svelte';
  import { alertWrapper } from '$lib/utils/alert-wrapper';
  import { confirmation } from '$lib/utils/confirmation';
  import { db } from '$lib/utils/firebase';
  import { urlSegments } from '$lib/utils/url-segments';
  import { DocumentSnapshot, deleteDoc, doc, updateDoc } from 'firebase/firestore';

  export let data: {
    items: any[];
    value: any;
    snap: DocumentSnapshot;
  };

  let saveLoading = false;
  let formModule: FormModule;

  $: segments = urlSegments($page.url.pathname);
  $: back =
    '/' +
    segments
      .slice(0, segments.length - 2)
      .map((it) => it.value)
      .join('/');

  async function submit() {
    saveLoading = true;

    const { id } = data.snap;

    await formModule.render.save(id);

    await alertWrapper(
      updateDoc(data.snap.ref, data.value),
      'Document updated successfully',
      undefined,
      () => (saveLoading = false)
    );

    saveLoading = false;

    goto(back);
  }

  function deleteItem() {
    confirmation(async ({ confirmed }) => {
      if (!confirmed) {
        return;
      }

      await alertWrapper(
        deleteDoc(doc(db, 'blog-articles', $page.params.id, 'blog-comments', data.value.id)),
        `Item deleted successfully`
      );

      goto(back);
    });
  }
</script>

<div class="save-menu">
  <Button type="button" color="warn" on:click={deleteItem}>Delete</Button>
  <div class="flex-1" />
  <Button variant="ghost" href={back}>Cancel</Button>
  <Button type="submit" form="form" variant="filled" loading={saveLoading}>Save</Button>
</div>

<form id="form" class="relative pb-16" on:submit|preventDefault={submit}>
  <Grid>
    <GridCol span="12">
      <Card>
        <slot slot="title">Editing Comment</slot>

        <slot slot="subtitle">
          <Breadcrumbs title="Comment" {segments} />
        </slot>

        <div class="flex flex-col gap-6">
          <FormModule bind:this={formModule} items={data.items} bind:value={data.value} />
        </div>
      </Card>
    </GridCol>
  </Grid>
</form>

<svelte:head>
  <title>Edit Comment - Blog - hati</title>
</svelte:head>
