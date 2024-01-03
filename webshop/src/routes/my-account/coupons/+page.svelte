<script lang="ts">
  import {onMount} from 'svelte';
  import {collection, getDocs, query, where} from 'firebase/firestore';
  import { db } from '$lib/utils/firebase.ts';


  let items = [];
  let usedFilter = null;
  let activeFilter = null;



  onMount(async () => {
    try {
      const filterConditions = [];

      if (usedFilter !== null) {
        filterConditions.push(where('used', '==', usedFilter));
      }

      if (activeFilter !== null) {
        filterConditions.push(where('active', '==', activeFilter));
      }

      const querySnapshot = await getDocs(query(collection(db, 'coupons'), ...filterConditions));

      items = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      console.log('Fetched Collection:', items);
    } catch (error) {
      console.error('Error fetching collection:', error);
    }
  });

  $: filteredItems = items.filter((item) => {
    const usedPass = usedFilter === null || item.used === usedFilter;
    const activePass = activeFilter === null || item.active === activeFilter;

    return usedPass && activePass;
  });

  const copyToClipboard = (text) => {
    // Create a temporary textarea element
    const textarea = document.createElement('textarea');
    textarea.value = text;

    // Append the textarea to the document
    document.body.appendChild(textarea);

    // Select and copy the text
    textarea.select();
    document.execCommand('copy');

    // Remove the textarea from the document
    document.body.removeChild(textarea);
  };

</script>


<main>
  <div class="w-full flex items-center">
    <label for="usedFilter">
      <select id="usedFilter" bind:value={usedFilter}>
        <option value={null}>Show All</option>
        <option value={true}>Used</option>
        <option value={false}>Unused</option>
      </select>
    </label>
    <label for="activeFilter">
      <select id="activeFilter" bind:value={activeFilter}>
        <option value={null}>Show All</option>
        <option value={true}>Active</option>
        <option value={false}>Inactive</option>
      </select>
    </label>
  </div>
  <div class="flex flex-wrap justify-start align-start gap-4">
    {#each filteredItems as item (item.id)}
      <div
        class="{item.used
          ? 'used-card'
          : 'normal-card'} block rounded-lg bg-white coupon-card p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 mr-[10px]">
        <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 text-center">
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
