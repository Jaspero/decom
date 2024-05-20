<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import FormModule from '$lib/FormModule.svelte';
  import { db } from '$lib/utils/firebase';
  import { deleteDoc, doc, setDoc } from 'firebase/firestore';

  import Breadcrumbs from '$lib/Breadcrumbs.svelte';
  import Button from '$lib/Button.svelte';
  import Card from '$lib/Card.svelte';
  import Grid from '$lib/Grid.svelte';
  import GridCol from '$lib/GridCol.svelte';
  import { alertWrapper } from '$lib/utils/alert-wrapper';
  import { confirmation } from '$lib/utils/confirmation';
  import { urlSegments } from '$lib/utils/url-segments';
  import { random } from '@jaspero/utils';

  export let data: {
    col: string;
    items: any[];
    value: any;
  };
  let formModule: FormModule;
  let saveLoading = false;

  $: segments = urlSegments($page.url.pathname);
  $: back =
    '/' +
    segments
      .slice(0, segments.length - 1)
      .map((it) => it.value)
      .join('/');

  async function submit() {
    saveLoading = true;

    data.value.id = 'lpf-' + random.string(24);

    await formModule!.render.save(data.value.id);

    const { id: dId, ...dt } = data.value;

    await alertWrapper(
      setDoc(doc(db, data.col, dId), dt),
      'Document created successfully',
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
        <slot slot="title">
          New Form
        </slot>

        <slot slot="subtitle">
          <Breadcrumbs {segments} title={data.value.name} />
        </slot>

        <div class="flex flex-col gap-6">
          <FormModule items={data.items} bind:this={formModule} bind:value={data.value} />
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
  <title>New Landing Page Form - GlycanAge</title>
</svelte:head>
