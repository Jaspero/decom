<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import FormModule from '$lib/FormModule.svelte';
  import { db } from '$lib/utils/firebase';
  import {
    DocumentSnapshot,
    addDoc,
    collection,
    deleteDoc,
    doc,
    setDoc,
    updateDoc
  } from 'firebase/firestore';
  import { onMount } from 'svelte';

  import Breadcrumbs from '$lib/Breadcrumbs.svelte';
  import Button from '$lib/Button.svelte';
  import Card from '$lib/Card.svelte';
  import Grid from '$lib/Grid.svelte';
  import GridCol from '$lib/GridCol.svelte';
  import BucketImageService from '$lib/services/image.service';
  import { alertWrapper } from '$lib/utils/alert-wrapper';
  import { confirmation } from '$lib/utils/confirmation';
  import { urlSegments } from '$lib/utils/url-segments';

  export let data: {
    snap?: DocumentSnapshot;
    col: string;
  };

  let value: any = {};
  let saveLoading = false;
  let title: string;
  let render: any;

  const items = [
    {
      component: 'jp-input',
      field: '/title',
      options: {
        label: 'Title',
        name: 'title'
      }
    },
    {
      component: 'jp-image-upload',
      field: '/imageupload',
      options: {
        name: 'imageupload',
        service: new BucketImageService()
      }
    }
  ];

  $: segments = urlSegments($page.url.pathname);
  $: back =
    '/' +
    segments
      .slice(0, segments.length - 1)
      .map((it) => it.value)
      .join('/');

  onMount(async () => {
    if (!data.snap) {
      return;
    }

    const docData = data.snap.data() as any;

    /**
     * Page Title
     */
    title = docData.title;

    items.forEach((item) => {
      /**
       * TODO:
       * Can't access nested objects at the moment.
       */
      const key = item.field.slice(1);

      if (docData.hasOwnProperty(key)) {
        value[key] = docData[key];
      }
    });
  });

  async function submit() {
    saveLoading = true;

    await render.save();

    if (data.snap) {
      await alertWrapper(
        updateDoc(data.snap.ref, value),
        'Document updated successfully',
        undefined,
        () => (saveLoading = false)
      );
    } else {
      if (value.id) {
        const { id, ...dt } = value;

        await alertWrapper(
          setDoc(doc(db, data.col, id), dt),
          'Document created successfully',
          undefined,
          () => (saveLoading = false)
        );
      } else {
        await alertWrapper(
          addDoc(collection(db, data.col), value),
          'Document created successfully',
          undefined,
          () => (saveLoading = false)
        );
      }
    }

    saveLoading = false;

    goto(back);
  }

  function deleteItem() {
    confirmation(async ({ confirmed }) => {
      if (!confirmed) {
        return;
      }

      await alertWrapper(deleteDoc(doc(db, data.col, value.id)), `Item deleted successfully`);

      goto(back);
    });
  }
</script>

<form class="relative" on:submit|preventDefault={submit}>
  <img src="/images/intro-bg.png" alt="" class="-z-10 absolute top-0 w-full h-80" />

  <Grid>
    <GridCol span="12">
      <Card>
        <slot slot="title">Editing {title}</slot>

        <slot slot="subtitle">
          <Breadcrumbs {segments} {title} />
        </slot>

        <div class="flex flex-col gap-6">
          <FormModule {items} bind:value bind:render />
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
  <title>{title || 'New'} - Order - GlycanAge</title>
</svelte:head>
