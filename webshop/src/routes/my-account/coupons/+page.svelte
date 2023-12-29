<script lang="ts">
  import { onMount } from 'svelte';
  import { collection, getDocs } from 'firebase/firestore';
  import { db } from '$lib/utils/firebase.ts';
  import {writable} from "svelte/store";

  let items = [];

  const filter = writable({
      used: false,
      unused: false,
      active: false,
      inactive: false,
  });


  onMount(async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'coupons'));
        filter.set({
            used: false,
            unused: false,
            active: false,
            inactive: false,
        });
      items = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      console.log('Fetched Collection:', items);
    } catch (error) {
      console.error('Error fetching collection:', error);
    }
  });

  $: filteredItems = items.filter(item => {
      // Apply filters based on the filter store state
      const usedFilter = $filter.used ? item.used : true;
      const unusedFilter = $filter.unused ? !item.used : true;
      const activeFilter = $filter.active ? isCouponActive(item.endDate) : true;
      const inactiveFilter = $filter.inactive ? !isCouponActive(item.endDate) : true;

      // Return true if the item passes all filters
      return usedFilter && unusedFilter && activeFilter && inactiveFilter;
  });


  function copyToClipboard(text) {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
  }

  function isCouponActive(endDate) {
      // Convert the endDate string to a Date object
      const endDateTime = new Date(endDate);

      // Get the current date
      const currentDate = new Date();

      // Compare the endDate with the current date
      return endDateTime > currentDate;
  }

</script>

<main>
    <div class="w-full flex items-center">
        <label>
            <input type="checkbox" bind:checked={$filter.used} /> Used
        </label>
        <label>
            <input type="checkbox" bind:checked={$filter.unused} /> Unused
        </label>
        <label>
            <input type="checkbox" bind:checked={$filter.active} /> Active
        </label>
        <label>
            <input type="checkbox" bind:checked={$filter.inactive} /> Inactive
        </label>
    </div>
    <div class="flex flex-wrap justify-start align-start gap-4">
  {#each filteredItems as item (item.id)}
  <div class="{item.used ? 'used-card' : 'normal-card'} block rounded-lg bg-white coupon-card p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 mr-[10px]">
      <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 text-center">
        {item.name}
      </h5>
      <div class="flex items-center mb-4 w-full justify-between">
      <p class="text-base text-neutral-600 dark:text-neutral-200">
        <b>Coupon code:</b> {item.code}
      </p>
      <button on:click={() => copyToClipboard(item.code)} disabled="{item.used}">
          <img src="/images/copy.svg" alt="" class="w-[25px]">
      </button>
      </div>
      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
         <b>Coupon discount:</b> {item.percent}%
      </p>
      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          <b>coupon type</b>: {item.type}
      </p>
      {#if item.description}
      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        {item.description}
      </p>
      {/if}
      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        <b>Coupon ends:</b> {item.endDate} at {item.endTime}
      </p>
      {#if item.used === true}
        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200"><b>This coupon is: </b>Used</p>
      {/if}
      {#if item.active === true}
        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          Status: Your coupon is active
        </p>
      {/if}
  </div>
  {/each}
  </div>
  {#if !items}
    <p>No items found.</p>
  {/if}
</main>

<svelte:head>
  <title>Coupons - Jaspero</title>
</svelte:head>


<style lang="postcss">
.coupon-card {
    max-width: 300px;
    width: 100%;
}

.used-card {
    opacity: .7;
    text-decoration: line-through;
}

.used-card     button {
    cursor: not-allowed;
}


</style>
