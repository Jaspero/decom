<script lang="ts">
  import { collection, getCountFromServer, query, where } from 'firebase/firestore';
  import { db } from '$lib/utils/firebase';
  import { DateTime } from 'luxon';
  import { base64UrlEncode } from '@jaspero/utils';
  import Grid from '$lib/Grid.svelte';
  import GridCol from '$lib/GridCol.svelte';
  import Card from '$lib/Card.svelte';

  export let data: any;

  async function allTags() {
    const doc = await getCountFromServer(
      query(collection(db, 'products'), where('tags', 'array-contains-any', [data.id]))
    );

    return doc.data().count;
  }

  async function recentTags() {
    const doc = await getCountFromServer(
      query(
        collection(db, 'products'),
        where('tags', 'array-contains-any', [data.id]),
        where('createdOn', '>=', DateTime.now().minus({ days: 30 }).toISODate())
      )
    );

    return doc.data().count;
  }
</script>

<Grid>
  <GridCol span="12">
    Tag Name:
    <Card>
      <slot slot="title">{data.name}</slot>
    </Card>
  </GridCol>
  <div class="counter">
    <span class="counter-number">
      {#await allTags()}
        -
      {:then count}
        {count}
      {/await}
    </span>
    <span class="counter-text">All Tags</span>
    <a
      href="/dashboard/shop/products?filters={base64UrlEncode({
        tags: [data.id]
      })}">View Products</a
    >
  </div>
  <div class="counter">
    <span class="counter-number">
      {#await recentTags()}
        -
      {:then count}
        {count}
      {/await}
    </span>
    <span class="counter-text">Recent</span>
    <a
      href="/dashboard/shop/products?filters={base64UrlEncode({
        tags: [data.id],
        createdOn: DateTime.now().minus({ days: 30 }).toISODate()
      })}">View Products</a
    >
  </div>
</Grid>

<svelte:head>
  <title>Tags - Shop - Jaspero</title>
</svelte:head>

<style lang="postcss">
  .counter {
    @apply flex flex-col items-center col-span-3;
  }
  .counter-number {
    @apply text-6xl text-secondary font-bold;
  }
</style>
