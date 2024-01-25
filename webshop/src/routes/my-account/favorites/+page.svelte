<script lang="ts">
  import { db, user } from "$lib/utils/firebase";
  import { doc, getDoc } from "firebase/firestore";
  import { onMount } from "svelte";
  import Product from "$lib/Product.svelte";


  let favoriteProducts = [];

  onMount(async () => {
    if ($user && $user.favorites) {
        favoriteProducts = await Promise.all($user.favorites.map(async (productId) => {
          const productRef = doc(db, 'products', productId);
          const productSnapshot = await getDoc(productRef);
          if (productSnapshot.exists()) {
            const productData = productSnapshot.data();
            return {
              ...productData,
              id: productId,
            };
          }
          return null;
        }));

        favoriteProducts = favoriteProducts.filter(product => product !== null);
      }
  });
</script>

{#if $user && $user.favorites && $user.favorites.length > 0}
  <div class="grid grid-cols-3 gap-4">
    {#each favoriteProducts as product (product.id)}
      <Product {product} />
    {/each}
  </div>
{:else}
  <p>There are no products added to favorites</p>
{/if}
