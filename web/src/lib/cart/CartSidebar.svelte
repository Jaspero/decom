<script>
  import { fly } from 'svelte/transition';
  import { clickOutside } from '$lib/utils/click-outside';
  import { cartState } from './cart-state.ts';
  import Product from '$lib/Product.svelte';

  export let show = false;
</script>

{#if show}
  <nav
    transition:fly={{ x: 450, opacity: 1 }}
    use:clickOutside
    on:click_outside={() => (show = false)}
  >
    {#each $cartState as product (product.id)}
      <Product {product} showAdd={false} />
    {/each}
    <a href="/checkout" on:click={() => (show = false)}>Checkout</a>
  </nav>
{/if}

<style>
  nav {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    padding: 2rem 1rem 0.6rem;
    border-left: 1px solid #aaa;
    background: #fff;
    overflow-y: auto;
    width: 25rem;
  }
</style>
