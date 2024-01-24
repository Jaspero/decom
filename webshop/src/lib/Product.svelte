<script lang="ts">
  import {db, user} from "$lib/utils/firebase";
  import { doc, updateDoc, arrayRemove, arrayUnion, getDoc } from 'firebase/firestore';
  import {writable} from "svelte/store";
  import {notification} from "$lib/notification/notification";
  import { cartState } from './cart/cart-state';


  export let product;
  export let userId;
  export let showAdd = true;


  const isFavoriteStore = writable(false);

  $: {
    userId = $user ? $user.id : null;

    if ($user?.favorites && $user?.favorites.includes(product.id)) {
      isFavoriteStore.set(true)
    } else {
      isFavoriteStore.set(false)
    }
  }
  async function toggleFavorite  () {
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
      const index = $user.favorites.findIndex(item => item === product.id);
      $user.favorites.splice(index, 1)
    } else {
      console.log('Adding product to user favorites in the database:', userId, product.id);
      await updateDoc(userRef, {
        favorites: arrayUnion(product.id)
      });
      $user.favorites = [...$user.favorites, product.id];
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
    const findProduct = currentCart.find(x => x.id === product.id);
    if (findProduct) {
      return;
    }
    const updatedValue = [...currentCart, product]
    cartState.set(updatedValue);
    notification.set({
      type: 'success',
      content: `${product.name} has been added to cart.`
    });
    updateDoc(userRef, {
      cart: {cartItems: currentCart, created: Date.now()}
    }).then();
    localStorage.setItem('cart', JSON.stringify({cartItems: updatedValue, created: Date.now()}));

  }

  function removeFromCart() {
    const userRef = doc(db, 'customers', userId);
    const currentCart: any[] = $cartState;
    const findProduct = currentCart.findIndex(x => x.id === product.id);
    if (findProduct === -1) {
      return;
    }
    currentCart.splice(findProduct, 1);
    cartState.set(currentCart);
    updateDoc(userRef, {
      cart: {cartItems: currentCart, created: Date.now()}
    }).then();
    localStorage.setItem('cart', JSON.stringify({cartItems: currentCart, created: Date.now()}));
  }

</script>

<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    {#if product.gallery && product.gallery.length > 0}
        <img class="w-full h-[200px] rounded-t-lg" src={product.gallery[0]} alt="product image" />
    {:else}
        <img class="w-full h-[200px] rounded-t-lg" src="/images/dummy-img.jpg" alt="default image" />
    {/if}
    <div class="px-5 pb-5">
        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name || ''}</h5>
        <div class="flex items-center justify-start flex-wrap">
            <span class="text-3xl w-full font-bold text-gray-900 dark:text-white">${product.price || ''}</span>
            <span class="text-1xl w-full text-gray-900 dark:text-white">{product.shortDescription || ''}</span>

            <div class="w-full flex justify-between items-center">
                {#if showAdd}
                    <button on:click={addToCart} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Add to cart
                    </button>
                {:else}
                    <button on:click={removeFromCart} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Remove
                    </button>
                {/if}
                <img class="cursor-pointer transition-opacity duration-300 hover:opacity-80"
                     src={$isFavoriteStore ? '/images/favorites.svg' : '/images/favorites-unselected.svg'}
                     alt="Favorite"
                     width="35px"
                     height="35px"
                     on:click={toggleFavorite} />
            </div>

        </div>
    </div>
</div>


<style>


</style>
