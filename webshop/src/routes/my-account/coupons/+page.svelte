<script>
  import { onMount } from 'svelte';
  import { collection, getDocs } from 'firebase/firestore';
  import { db } from '$lib/utils/firebase.ts';

  let items = [];

  onMount(async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'coupons'));
      items = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      console.log('Fetched Collection:', items);
    } catch (error) {
      console.error('Error fetching collection:', error);
    }
  });
</script>

<main>
  <h1>Your Coupons</h1>

  <div
    class="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
  >
    {#each items as item (item.id)}
      <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        {item.name}
      </h5>
      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        your coupon code: {item.code}
      </p>
      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        your coupon description: {item.description}
      </p>
      {#if item.used === true}
        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">Your coupon is: Used</p>
      {:else}
        <p>pero</p>
      {/if}
      {#if item.active === true}
        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          Status: Your coupon is active
        </p>
      {/if}
      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        your coupon code: {items.expiringDAte}
      </p>
    {/each}
  </div>
  {#if !items}
    <p>No items found.</p>
  {/if}
</main>

<svelte:head>
  <title>Coupons - Jaspero</title>
</svelte:head>
