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
  import { urlSegments } from '$lib/utils/url-segments';
  import { generateSlug } from '$lib/utils/generate-slug';

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

    data.value.id = generateSlug(data.value.name);

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

<div class="save-menu">
  <Button variant="ghost" href={back}>Cancel</Button>
  <Button type="submit" form="form" variant="filled" loading={saveLoading}>Save</Button>
</div>

<form id="form" class="relative pb-16" on:submit|preventDefault={submit}>
  <Grid>
    <GridCol span="12">
      <Card>
        <slot slot="title">New Tag</slot>

        <slot slot="subtitle">
          <Breadcrumbs {segments} title={data.value.name} />
        </slot>

        <div class="flex flex-col gap-6">
          <FormModule bind:this={formModule} items={data.items} bind:value={data.value} />
        </div>
      </Card>
    </GridCol>
  </Grid>
</form>

<svelte:head>
  <title>New Tag - Shop - Jaspero</title>
</svelte:head>
