<script>
  import CartSidebar from '$lib/cart/CartSidebar.svelte';

  let sidebar_show = false;
</script>

<button
  on:click={() => {
    sidebar_show = !sidebar_show;
  }}>Cart</button
>

<CartSidebar bind:show={sidebar_show} />
