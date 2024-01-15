<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import FormModule from '$lib/FormModule.svelte';
  import { db } from '$lib/utils/firebase';
  import { doc, setDoc } from 'firebase/firestore';

  import Breadcrumbs from '$lib/Breadcrumbs.svelte';
  import Button from '$lib/Button.svelte';
  import Card from '$lib/Card.svelte';
  import Grid from '$lib/Grid.svelte';
  import GridCol from '$lib/GridCol.svelte';
  import { alertWrapper } from '$lib/utils/alert-wrapper';
  import { unflatten } from '$lib/utils/unflatten';
  import { urlSegments } from '$lib/utils/url-segments';
  import { generateSlug } from '$lib/utils/generate-slug';
  import {onMount} from "svelte";

  export let data: {
    col: string;
    items: any[];
    value: any;
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
    data.value.url = generateSlug(data.value.name);

    const { id, ...dt } = data.value;

    await formModule.render.save(id);

    await alertWrapper(
      setDoc(doc(db, data.col, id), dt),
      'Document created successfully',
      undefined,
      () => (saveLoading = false)
    );

    saveLoading = false;

    goto(back);
  }
</script>

<div class="sticky-menu">
  <Button variant="ghost" href={back}>
    Cancel
  </Button>

  <Button type="submit" form="form" loading={saveLoading}>
    Save
  </Button>
</div>

<form name="form" class="relative m-16" on:submit|preventDefault={submit}>
  <Grid>
    <GridCol span="12">
      <Card>
        <slot slot="title">New Product</slot>

        <slot slot="subtitle">
          <Breadcrumbs {segments} title={data.value.name} />
        </slot>

          <FormModule bind:this={formModule} items={data.items} bind:value={data.value} />

        <slot slot="footerAction">
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
  <title>New Product - Shop - Jaspero</title>
</svelte:head>
