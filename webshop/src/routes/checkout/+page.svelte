<script>
  import Field from "$lib/Field.svelte";
  import Product from "$lib/Product.svelte";
  import {cartState} from "$lib/cart/cart-state.ts";
  import { httpsCallable } from 'firebase/functions';
  import {functions, user} from "$lib/utils/firebase.ts";
  import Button from "$lib/Button.svelte";

  const processCheckout = httpsCallable(functions, 'cms-processCheckout');
  let email = '';
  let btnLoading = false;

  function validateEmail(email) {
    const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegEx.test(String(email).toLowerCase());
  }

  async function completeCheckout() {
    btnLoading = true;
    if (!validateEmail(email)) {
      btnLoading = false;
      return
    }

    const reqBody = {
      customerId: $user.id,
      email,
      products: $cartState.map(x => ({id: x.id, selectedVariant: x.selectedVariant}))
    }
    console.log('reqBody', reqBody);
    // await processCheckout(reqBody);
  }

</script>

<p>Products: </p>

{#each $cartState as product (product.id)}
  <Product {product} showAdd={false}/>
{/each}

<Field label="Email" placeholder="" bind:value={email} />

<Button loading={btnLoading} on:click={completeCheckout}>Complete Checkout  </Button>

<svelte:head>
  <title>Checkout - Jaspero</title>
</svelte:head>
