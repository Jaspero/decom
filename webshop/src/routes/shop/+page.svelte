<script lang="ts">
  import { onMount } from 'svelte';
  import { collection, getDocs, query, limit, startAfter, where } from 'firebase/firestore';
  import { db } from '$lib/utils/firebase';
  import Product from "$lib/Product.svelte";



  let currentFilters = {};
  let products =[];
  let lastProductDoc;
  let loading = false;
  let btnLoading = false;
  const pageSize = 15;
  let showBtn = true;



  async function loadProducts() {
    if (!lastProductDoc) {
      loading = true;
    } else {
      btnLoading = true;
    }

    const discountsRef = collection(db, 'products');
    let filters = [];

    if (currentFilters) {
      for (const [key, value] of Object.entries(currentFilters)) {
        filters.push(where(key, '==', value));
      }
    }

    let queryRef = query(discountsRef, ...(filters.length ? filters : []), limit(pageSize + 1));

    if (lastProductDoc) {
      queryRef = query(
        discountsRef,
        ...(filters.length ? filters : []),
        startAfter(lastProductDoc),
        limit(pageSize + 1)
      );
    }

    const snap = await getDocs(queryRef);

    if (!snap.empty) {
      if (snap.docs.length === 16) {
        snap.docs.pop();
      } else {
        showBtn = false;
      }
      lastProductDoc = snap.docs[snap.docs.length - 1];
      const moreProducts = await Promise.all(
        snap.docs.map(async (it) => {
          const docData = it.data();
          return {
            id: it.id,
              ...docData,
          };
        })
      );


        products = products
            ? [...products, ...moreProducts]
            : moreProducts;
      console.log('products', products);
      if (moreProducts.length < pageSize) {
        showBtn = false;
      }
    }
    loading = false;
    btnLoading = false;
  }

  onMount(() => {
    loadProducts();
  });
</script>

<div class="w-full grid">
    <div class="w-full text-center text-4xl py-12">
        <h1>Products</h1>
    </div>
    <div class="container grid grid-cols-4 gap-4">
        {#each products as product (product.id)}
            <Product {product}  />
        {/each}
    </div>
</div>


<style>
    .container {
        max-width: 1200px;
        margin: 0 auto;
    }
</style>
