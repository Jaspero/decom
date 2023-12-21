<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import FormModule from '$lib/FormModule.svelte';
  import { db } from '$lib/utils/firebase';
  import { DocumentSnapshot, deleteDoc, doc, updateDoc } from 'firebase/firestore';

  import Breadcrumbs from '$lib/Breadcrumbs.svelte';
  import Button from '$lib/Button.svelte';
  import Card from '$lib/Card.svelte';
  import Grid from '$lib/Grid.svelte';
  import GridCol from '$lib/GridCol.svelte';
  import { alertWrapper } from '$lib/utils/alert-wrapper';
  import { confirmation } from '$lib/utils/confirmation';
  import { unflatten } from '$lib/utils/unflatten';
  import { urlSegments } from '$lib/utils/url-segments';

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
      .join('/') +
    '/info';

  let saveLoading = false;
  let formModule: FormModule;

  async function submit() {
    saveLoading = true;

    data.value = unflatten(data.value);
    data.value.lastUpdatedOn = Date.now();

    const id = data.snap.id;

    await formModule.render.save(id);

    delete data.value.id;

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

      goto(back);
    });
  }
</script>

<form class="relative" on:submit|preventDefault={submit}>
  <Grid>
    <GridCol span="12">
      <Card>
        <slot slot="title">Editing {data.value.name}</slot>

        <slot slot="subtitle">
          <Breadcrumbs {segments} title={data.value.name} />
        </slot>

        <div class="flex flex-col gap-6">
          <FormModule bind:this={formModule} items={data.items} bind:value={data.value} />
        </div>

        <slot slot="footerAction">
          <Button type="button" color="warning" on:click={deleteItem}>Delete</Button>

          <div class="flex-1" />

          <Button href={back} variant="outlined" color="secondary">Cancel</Button>
          <Button type="submit" variant="filled" color="secondary" loading={saveLoading}
            >Save</Button
          >
        </slot>
      </Card>
    </GridCol>
  </Grid>
</form>

<svelte:head>
  <title>Edit Category - Blog - Jaspero</title>
</svelte:head>
