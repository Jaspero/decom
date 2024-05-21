<script lang="ts">
  import Dialog from '$lib/Dialog.svelte';
  import { db, user } from '$lib/utils/firebase';
  import { doc, updateDoc, arrayRemove, arrayUnion } from 'firebase/firestore';
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { notification } from '$lib/notification/notification';
  import { cartState } from './cart/cart-state';
  import '@jaspero/web-components/dist/review-stars.wc.js';

  export let product;
  export let userId;
  export let price = product.price;
  export let showAdd = true;

  let removeItem = false;

  let selectedVariant = {};

  const isFavoriteStore = writable(false);
  let starsInput = true;
  $: {
    userId = $user ? $user.id : null;

    if ($user?.favorites && $user?.favorites.includes(product.id)) {
      isFavoriteStore.set(true);
    } else {
      isFavoriteStore.set(false);
    }
  }

  $: {
    const found = product.variantCombinations
      ? product.variantCombinations.find(
          (x) => x.variant === Object.values(selectedVariant).join('-')
        )
      : null;
    price = found ? found.price : product.price;
  }

  onMount(() => {
    if (product.variants) {
      selectedVariant = product.variants.reduce((acc, cur) => {
        if (product.selectedVariant && product.selectedVariant[cur.name]) {
          acc[cur.name] = product.selectedVariant[cur.name];
        } else {
          acc[cur.name] = cur.options[0];
        }
        return acc;
      }, {});
    }
  });

  async function toggleFavorite() {
    const userRef = doc(db, 'customers', userId);
    let isFavorite = $isFavoriteStore;
    if (isFavorite) {
      console.log('Removing product from user favorites in the database:', userId, product.id);
      await updateDoc(userRef, {
        favorites: arrayRemove(product.id)
      });
      notification.set({
        type: 'error',
        content: `${product.name} has been removed from favorites.`
      });
      const index = ($user.favorites || []).findIndex((item) => item === product.id);
      if (index !== -1) {
        $user.favorites.splice(index, 1);
      }
    } else {
      console.log('Adding product to user favorites in the database:', userId, product.id);
      await updateDoc(userRef, {
        favorites: arrayUnion(product.id)
      });
      $user.favorites = [...($user.favorites || []), product.id];
      notification.set({
        type: 'success',
        content: `${product.name} has been added to favorites.`
      });
    }
    isFavoriteStore.set(!isFavorite);
  }

  function addToCart() {
    const userRef = doc(db, 'customers', userId);
    // @ts-ignore
    const currentCart: any[] = $cartState;
    const findProduct = currentCart.find((x) => x.id === product.id);
    if (findProduct) {
      return;
    }
    const updatedValue = [...currentCart, { ...product, selectedVariant }];
    cartState.set(updatedValue);
    notification.set({
      type: 'success',
      content: `${product.name} has been added to cart.`
    });
    updateDoc(userRef, {
      cartItems: arrayUnion(product.id),
      cartUpdate: Date.now()
    }).then();
    localStorage.setItem(
      'cart',
      JSON.stringify({
        cartItems: updatedValue.map((x) => ({
          id: x.id,
          selectedVariant: x.selectedVariant
        })),
        cartUpdate: Date.now()
      })
    );
  }

  function removeFromCart() {
    const userRef = doc(db, 'customers', userId);
    // @ts-ignore
    const currentCart: any[] = $cartState;
    const findProduct = currentCart.findIndex((x) => x.id === product.id);
    if (findProduct === -1) {
      return;
    }
    currentCart.splice(findProduct, 1);
    cartState.set(currentCart);
    updateDoc(userRef, {
      cartItems: arrayRemove(product.id),
      cartUpdate: Date.now()
    }).then();

    localStorage.setItem(
      'cart',
      JSON.stringify({
        cartItems: currentCart.map((x) => x.id),
        cartUpdate: Date.now()
      })
    );
  }
</script>

<div
  class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
>
  <a href="/shop/{product.id}">
    {#if product.gallery && product.gallery.length > 0}
      <img class="w-full h-[200px] rounded-t-lg" src={product.gallery[0]} alt="product image" />
    {:else}
      <img class="w-full h-[200px] rounded-t-lg" src="/images/dummy-img.jpg" alt="default image" />
    {/if}
    <div class="w-full z-10 relative">
      <jp-review-stars value={product.averageRating} />
    </div>
  </a>
  <div class="px-5 pb-5">
    <a href="/shop/{product.id}">
      <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {product.name || ''}
      </h5>
    </a>
    <div class="flex items-center justify-start flex-wrap">
      <span class="text-3xl w-full font-bold text-gray-900 dark:text-white">${price || ''}</span>
      <span class="text-1xl w-full text-gray-900 dark:text-white"
        >{product.shortDescription || ''}</span
      >
      {#if product.variants}
        <div class="w-full flex justify-between items-center text-gray-900 dark:text-white">
          <div class="w-full flex justify-between items-center" style="flex-direction: column">
            {#each product.variants as variant}
              <div class="w-full flex justify-around items-center">
                <p>{variant.name}</p>
                {#if variant.options}
                  <select
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    bind:value={selectedVariant[variant.name]}
                  >
                    {#each variant.options as opt}
                      <option value={opt}>{opt}</option>
                    {/each}
                  </select>
                {/if}
              </div>
            {/each}
          </div>
        </div>
      {/if}
      <div class="w-full flex justify-between items-center text-gray-900 dark:text-white">
        {#if showAdd}
          <button
            on:click={addToCart}
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </button>
        {:else}
          <button
            on:click={() => {
              removeItem = true;
            }}
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Remove
          </button>
        {/if}
      </div>
      <img
        class="cursor-pointer transition-opacity duration-300 hover:opacity-80"
        src={$isFavoriteStore ? '/images/favorites.svg' : '/images/favorites-unselected.svg'}
        alt="Favorite"
        width="35px"
        height="35px"
        on:click={toggleFavorite}
      />
    </div>
  </div>
</div>

<Dialog bind:showing={removeItem}>
  <div class="w-full text-center">
    <h1>Remove {product.name}</h1>
  </div>
  <div class="flex w-full justify-center">
    <button class="bg-red-700 p-4 text-white rounded-lg mr-[10px]" on:click={removeFromCart}
      >Yes</button
    >
    <button
      class="bg-black text-white rounded-lg p-4"
      on:click={() => {
        removeItem = false;
      }}>Cancel</button
    >
  </div>
</Dialog>
