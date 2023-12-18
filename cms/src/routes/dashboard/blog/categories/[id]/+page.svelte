<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import FormModule from '$lib/FormModule.svelte';
  import { db } from '$lib/utils/firebase';
  import { DocumentSnapshot, deleteDoc, doc, setDoc, updateDoc } from 'firebase/firestore';

  import Breadcrumbs from '$lib/Breadcrumbs.svelte';
  import Button from '$lib/Button.svelte';
  import Card from '$lib/Card.svelte';
  import Grid from '$lib/Grid.svelte';
  import GridCol from '$lib/GridCol.svelte';
  import { alertWrapper } from '$lib/utils/alert-wrapper';
  import { confirmation } from '$lib/utils/confirmation';
  import { unflatten } from '$lib/utils/unflatten';
  import { urlSegments } from '$lib/utils/url-segments';
  import { generateSlug } from '$lib/utils/generate-slug';

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
    data.value.lastUpdatedOn = Date.now();

    if (!data.value.id) {
      data.value.id = generateSlug(data.value.name);
    }

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
      const { id: dId, ...dt } = data.value;

      await alertWrapper(
        setDoc(doc(db, data.col, id), dt),
        'Document created successfully',
        undefined,
        () => (saveLoading = false)
      );
    }

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
        <slot slot="title"
          >{data.snap ? `Editing ${data.value.name}` : `New Science Magazine Category`}</slot
        >

        <slot slot="subtitle">
          <Breadcrumbs {segments} title={data.value.title} />
        </slot>

        <div class="flex flex-col gap-6">
          <FormModule bind:this={formModule} items={data.items} bind:value={data.value} />
        </div>

        <slot slot="footerAction">
          {#if data.snap}
            <Button type="button" color="warning" on:click={deleteItem}>Delete</Button>
          {/if}

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
  <title>Category - Science Magazine - GlycanAge</title>
</svelte:head>
