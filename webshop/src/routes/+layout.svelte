<script lang="ts">
  import { cartState } from '$lib/cart/cart-state';
  import Footer from '$lib/Footer.svelte';
  import Header from '$lib/Header.svelte';
  import Meta from '$lib/meta/Meta.svelte';
  import Notification from '$lib/notification/Notification.svelte';
  import '../app.pcss';
  import '../helpers.pcss';
  import '../typography.pcss';
  import '@jaspero/web-components/dist/alert.wc';
  import '@jaspero/web-components/dist/confirm.wc';
  import { db, user } from '$lib/utils/firebase';
  import { doc, getDoc } from 'firebase/firestore';
  import { onMount } from 'svelte';

  onMount(async () => {

    const userDoc: any = $user
    let currentCartState;
    const items = localStorage.getItem('cart');

    if (items) {
      currentCartState = JSON.parse(items);
    }

    if (userDoc && userDoc.cartItems) {
      if (currentCartState && currentCartState.cartUpdate) {
        if (currentCartState.cartUpdate < userDoc.cartUpdate) {
          currentCartState = {
            cartItems: userDoc.cartItems
          };
        }
      } else {
        currentCartState = {
          cartItems: userDoc.cartItems
        };
      }
    }

    if (currentCartState && currentCartState.cartItems) {
      console.log('currentCartState', currentCartState);
      const cartItems = await Promise.all(currentCartState.cartItems.map(async (product) => {

        const productSnapshot = await getDoc(doc(db, 'products', product.id));
        if (productSnapshot.exists()) {
          const productData = productSnapshot.data();
          return {
            ...productData,
            id: product.id,
            selectedVariant: product.selectedVariant
          };
        }

        return null;
      }));
      cartState.set(cartItems);
    }
  });
</script>

<Header />

<main class="pt-20">
  <slot />
</main>

<Meta />
<Notification />
<Footer />
