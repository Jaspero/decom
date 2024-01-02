<script lang="ts">
  import { onMount } from 'svelte';
  import { collection, getDocs } from 'firebase/firestore';
  import { db } from '$lib/utils/firebase.ts';
  import { writable } from 'svelte/store';

  let items = [];

  const filter = writable({
    showAll: true,
    statusFilter: 'showAll', // Added status filter
    validityFilter: 'showAll', // Added validity filter
  });

  onMount(async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'coupons'));
      items = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      console.log('Fetched Collection:', items);
    } catch (error) {
      console.error('Error fetching collection:', error);
    }
  });

  function updateFilter(filterType, value) {
    filter.update((currentFilter) => {
      return { ...currentFilter, [filterType]: value, showAll: false };
    });
  }

  $: filteredItems = items.filter(item => {
    const statusFilter = $filter.statusFilter === 'showAll' || ($filter.statusFilter === 'used' ? item.used : !item.used);
    const validityFilter = $filter.validityFilter === 'showAll' || ($filter.validityFilter === 'active' ? isCouponActive(item.endDate) : !isCouponActive(item.endDate));

    return statusFilter && validityFilter;
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
    const endDateTime = new Date(endDate);
    const currentDate = new Date();
    return endDateTime > currentDate;
  }

</script>


<main>
  <div class="w-full flex items-center">
    <label for="statusFilter">
      Coupon Status:
      <select id="statusFilter" bind:value={$filter.statusFilter} on:change={() => updateFilter('statusFilter', $event.target.value)}>
        <option value="showAll">Show All</option>
        <option value="used">Used</option>
        <option value="unused">Unused</option>
      </select>
    </label>
    <label for="validityFilter">
      Coupon Validity:
      <select id="validityFilter" bind:value={$filter.validityFilter} on:change={() => updateFilter('validityFilter', $event.target.value)}>
        <option value="showAll">Show All</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
    </label>
  </div>
  <div class="flex flex-wrap justify-start align-start gap-4">
    {#each filteredItems as item (item.id)}
      <div
        class="{item.used
          ? 'used-card'
          : 'normal-card'} block rounded-lg bg-white coupon-card p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 mr-[10px]">
        <h5
          class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 text-center"
        >
          {item.name}
        </h5>
        <div class="flex items-center mb-4 w-full justify-between">
          <p class="text-base text-neutral-600 dark:text-neutral-200">
            <b>Coupon code:</b>
            {item.code}
          </p>
          <button on:click={() => copyToClipboard(item.code)} disabled={item.used}>
            <img src="/images/copy.svg" alt="" class="w-[25px]" />
          </button>
        </div>
        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          <b>Coupon discount:</b>
          {item.percent}%
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
          <b>Coupon ends:</b>
          {item.endDate} at {item.endTime}
        </p>
        {#if item.used === true}
          <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            <b>This coupon is: </b>Used
          </p>
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
    opacity: 0.7;
    text-decoration: line-through;
  }

  .used-card button {
    cursor: not-allowed;
}

button[aria-pressed="true"] {
  background-color: #4caf50;
  color: white;
}
</style>
