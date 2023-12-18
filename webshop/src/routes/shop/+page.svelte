<script>
  import { onMount } from 'svelte';
  import {
    collection,
    getDocs,
    query,
    orderBy,
    limit,
    startAfter
  } from 'firebase/firestore';
  import { db } from '$lib/utils/firebase';

  let lastProductDoc;
  let loading = false;
  let btnLoading = false;
  let showBtn = true;
  let products = [];
  const pageSize = 15;

  async function loadProducts() {
    if (!lastProductDoc) {
      loading = true;
    } else {
      btnLoading = true;
    }

    const discountsRef = collection(db, 'products');
    let filters = [];

    // if (currentFilters) {
    //   for (const [key, value] of Object.entries(currentFilters)) {
    //     filters.push(where(key, '==', value));
    //   }
    // }

    let queryRef = query(discountsRef, ...(filters.length ? filters : []), orderBy('created', 'desc'), limit(pageSize + 1));

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
        snap.docs.pop()
      } else {
        showBtn = false;
      }
      lastProductDoc = snap.docs[snap.docs.length - 1];
      const moreProducts = await Promise.all(
        snap.docs.map(async (it) => {
          const docData = it.data();
          return {
            id: it.id,
            name: docData.name
          };
        })
      );
      products = products ? [...products, ...moreProducts] : moreProducts;

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



{#each products as product}
    <div>{product.name}</div>
{/each}
