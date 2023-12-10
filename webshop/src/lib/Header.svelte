<script lang="ts">
  import {page} from '$app/stores';
	import CartTrigger from '$lib/cart/CartTrigger.svelte';
  import {authenticated} from './utils/firebase';

	$: pathname = $page.url.pathname;
</script>

<nav>
	<div><a href="/" class:active={pathname === '/'}>Home</a></div>
	<div><a href="/shop" class:active={pathname === '/shop'}>Shop</a></div>
	
	{#if $authenticated}
		<div><a href="/my-account" class:active={pathname.startsWith('/my-account')}>My Account</a></div>
	{:else}
		<div><a href="/sign-in" class:active={pathname === '/sign-in'}>Sign In</a></div>
		<div><a href="/sign-up" class:active={pathname === '/sign-up'}>Sign Up</a></div>
	{/if}

	<CartTrigger />

</nav>