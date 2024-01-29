<script lang="ts">
  import { page } from '$app/stores';
  import CartTrigger from '$lib/cart/CartTrigger.svelte';
  import { authenticated } from './utils/firebase';

  $: pathname = $page.url.pathname;

</script>

<header>
  <nav>
    <a href="/" class="mr-8">
      <img src="/brand/logo.svg" alt="logo" class="h-8" />
      <!--TODO(branding & accessibility): add logo & change alt-->
    </a>

    <a href="/" class:active={pathname === '/'}>Home</a>
    <a href="/shop" class:active={pathname === '/shop'}>Shop</a>
    <a href="/blog" class:active={pathname === '/blog'}>Blog</a>
    <div class="flex gap-4 items-center ml-auto">
      {#if $authenticated}
        <a href="/my-account" class:active={pathname.startsWith('/my-account')}>My Account</a>
      {:else if $authenticated === false}
        <a href="/sign-in" class:active={pathname === '/sign-in'}>Sign In</a>
        <a href="/sign-up" class:active={pathname === '/sign-up'}>Sign Up</a>
      {:else if $authenticated === null}
        <div></div>
      {/if}

      <CartTrigger />
    </div>
  </nav>
</header>

<style lang="postcss">
  header {
    @apply z-50 fixed top-0 left-0 w-full h-20 px-12 bg-white shadow-lg font-medium;
  }

  nav {
    @apply max-w-7xl mx-auto flex items-center gap-4 h-full;
  }
  :is(a):not(:has(img)) {
    @apply opacity-60 hover:opacity-100 transition-all;
  }

  a.active {
    @apply opacity-100;
  }
</style>
