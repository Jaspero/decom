<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import FormModule from '$lib/FormModule.svelte';
  import { db, functions } from '$lib/utils/firebase';
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
  import { httpsCallable } from 'firebase/functions';

  export let data: {
    col: string;
    items: any[];
    value: any;
    snap?: DocumentSnapshot;
  };

  $: segments = urlSegments($page.url.pathname);
  $: back =
    '/' +
    segments
      .slice(0, segments.length - 1)
      .map((it) => it.value)
      .join('/');

  let saveLoading = false;
  let formModule: FormModule;

  async function submit() {
    saveLoading = true;

    data.value = unflatten(data.value);

    const id = data.snap?.id || data.value.id;

    await formModule.render.save(id);

    if (data.snap) {
      await alertWrapper(
        updateDoc(data.snap.ref, data.value),
        'Document updated successfully',
        undefined,
        () => (saveLoading = false)
      );
    } else {
      await alertWrapper(
        httpsCallable(functions, 'createadmin')(data.value),
        'Document created successfully',
        undefined,
        () => (saveLoading = false)
      );
    }

    saveLoading = false;

    goto(back);
  }

  function deleteItem() {
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
        <slot slot="title">{data.snap ? `Editing ${data.value.name}` : `New Admin`}</slot>

        <slot slot="subtitle">
          <Breadcrumbs {segments} title={data.value.name} />
        </slot>

        <div class="flex flex-col gap-6">
          <FormModule bind:this={formModule} items={data.items} bind:value={data.value} />
        </div>

        <slot slot="footerAction">
          {#if data.snap}
            <Button type="button" color="warn" on:click={deleteItem}>Delete</Button>
          {/if}
          <div class="flex-1" />

          <Button href={back}>Cancel</Button>
          <Button type="submit" variant="filled" loading={saveLoading}
            >Save</Button
          >
        </slot>
      </Card>
    </GridCol>
  </Grid>
</form>

<svelte:head>
  <title>Admins - Shop CMS</title>
</svelte:head>
