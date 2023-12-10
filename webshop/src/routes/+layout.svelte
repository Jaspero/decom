<script lang="ts">
  import Footer from '$lib/Footer.svelte';
  import Header from '$lib/Header.svelte';
  import CartSidebar from '$lib/cart/CartSidebar.svelte';
  import '../app.css';
</script>

<Header />

<slot />

<CartSidebar />
<Footer />
