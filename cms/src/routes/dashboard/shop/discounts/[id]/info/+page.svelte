<script lang="ts">
  import { collection, getCountFromServer, query, where } from 'firebase/firestore';
  import { db } from '$lib/utils/firebase';
  import { DateTime } from 'luxon';
  import { base64UrlEncode } from '@jaspero/utils';
  import Grid from '$lib/Grid.svelte';
  import GridCol from '$lib/GridCol.svelte';
  import Card from '$lib/Card.svelte';

  export let data: any;

  async function allOrders() {
    const doc = await getCountFromServer(
      query(collection(db, 'orders'), where('discounts', 'array-contains', data.id))
    );

    return doc.data().count;
  }

  async function recentOrders() {
    const doc = await getCountFromServer(
      query(
        collection(db, 'orders'),
        where('discounts', 'array-contains', data.id),
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
      {#await allOrders()}
        -
      {:then count}
        {count}
      {/await}
    </span>
    <span class="counter-text">All Orders</span>
    <a
      href="/dashboard/shop/orders?filters={base64UrlEncode({
        discounts: data.id
      })}">View Orders</a
    >
  </div>
  <div class="counter">
    <span class="counter-number">
      {#await recentOrders()}
        -
      {:then count}
        {count}
      {/await}
    </span>
    <span class="counter-text">Recent</span>
    <a
      href="/dashboard/shop/orders?filters={base64UrlEncode({
        discounts: data.id,
        createdOn: DateTime.now().minus({ days: 30 }).toISODate()
      })}">View Orders</a
    >
  </div>
</Grid>

<svelte:head>
  <title>Discounts - Shop - Jaspero</title>
</svelte:head>

<style lang="postcss">
  .counter {
    @apply flex flex-col items-center col-span-3;
  }
  .counter-number {
    @apply text-6xl text-secondary font-bold;
  }
</style>
