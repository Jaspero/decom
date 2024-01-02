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
  import { db } from '$lib/utils/firebase';
  import { generateSlug } from '$lib/utils/generate-slug';
  import { unflatten } from '$lib/utils/unflatten';
  import { urlSegments } from '$lib/utils/url-segments';
  import { doc, setDoc } from 'firebase/firestore';

  export let data: {
    col: string;
    items: any[];
    value: any;
  };

  let saveLoading = false;
  let formModule: FormModule;

  $: segments = urlSegments($page.url.pathname);
  $: back =
    '/' +
    segments
      .slice(0, segments.length - 1)
      .map((it) => it.value)
      .join('/');

  async function submit() {
    saveLoading = true;

    data.value = unflatten(data.value);
    data.value.lastUpdatedOn = new Date().toISOString();
    data.value.id = generateSlug(data.value.title);
    data.value.publicationDate = data.value.publicationDate || new Date().toISOString();

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

<form class="relative" on:submit|preventDefault={submit}>
  <Grid>
    <GridCol span="12">
      <Card>
        <slot slot="title">New Blog Article</slot>

        <slot slot="subtitle">
          <Breadcrumbs {segments} title={data.value.title} />
        </slot>

        <div class="flex flex-col gap-6">
          <FormModule bind:this={formModule} items={data.items} bind:value={data.value} />
        </div>

        <slot slot="footerAction">
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
  <title>New Article - Blog - Jaspero</title>
</svelte:head>
