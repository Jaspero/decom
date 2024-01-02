<script lang="ts">
  import { collection, getCountFromServer, query, where } from 'firebase/firestore';
  import { db } from '$lib/utils/firebase';
  import { DateTime } from 'luxon';
  import { base64UrlEncode } from '@jaspero/utils';
  import Grid from '$lib/Grid.svelte';
  import GridCol from '$lib/GridCol.svelte';
  import Card from '$lib/Card.svelte';

  export let data: any;

  async function allCoupons() {
    const doc = await getCountFromServer(
      query(collection(db, 'orders'), where('coupons', 'array-contains', data.id))
    );

    return doc.data().count;
  }

  async function recentCoupons() {
    const doc = await getCountFromServer(
      query(
        collection(db, 'orders'),
        where('coupons', 'array-contains', data.id),
        where('createdOn', '>=', DateTime.now().minus({ days: 30 }).toISODate())
      )
    );

    return doc.data().count;
  }
</script>

<Grid>
  <GridCol span="12">
    Coupon Name:
    <Card>
      <slot slot="title">{data.name}</slot>
    </Card>
  </GridCol>
  <div class="counter">
    <span class="counter-number">
      {#await allCoupons()}
        -
      {:then count}
        {count}
      {/await}
    </span>
    <span class="counter-text">All Coupons</span>
    <a
      href="/dashboard/shop/products?filters={base64UrlEncode({
        coupons: data.id
      })}">View Orders</a
    >
  </div>
  <div class="counter">
    <span class="counter-number">
      {#await recentCoupons()}
        -
      {:then count}
        {count}
      {/await}
    </span>
    <span class="counter-text">Recent</span>
    <a
      href="/dashboard/shop/products?filters={base64UrlEncode({
        coupons: data.id,
        createdOn: DateTime.now().minus({ days: 30 }).toISODate()
      })}">View Orders</a
    >
  </div>
</Grid>

<svelte:head>
  <title>Coupon Information - Shop - Jaspero</title>
</svelte:head>

<style lang="postcss">
  .counter {
    @apply flex flex-col items-center col-span-3;
  }
  .counter-number {
    @apply text-6xl text-secondary font-bold;
  }
</style>
