<script lang="ts">
  import Product from '$lib/Product.svelte';
  import { db, user } from '$lib/utils/firebase';
  import { collection, getDocs, limit, query, where } from 'firebase/firestore';
  import { onMount } from 'svelte';
  import { CONFIG } from '$lib/consts/config.const';

  const sizeLimit = 5;

  let orders = [];

  onMount(async () => {
    if ($user) {
      const querySnapshot = await getDocs(
        query(collection(db, 'orders'), where('customer', '==', $user.id), limit(sizeLimit))
      );
      orders = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    }
  });
</script>

{#each orders as order}
  <p>Date: {order.created}</p>
  <p>Order Number{order.orderNumber}</p>
  {#each order.products as product (product.id)}
    <Product {product} />
  {/each}
{/each}

<svelte:head>
  <title>Orders - {CONFIG.title}</title>
</svelte:head>
