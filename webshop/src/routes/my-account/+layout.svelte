<script lang="ts">
  import { signOut } from 'firebase/auth';
  import { goto } from '$app/navigation';
  import { auth } from '$lib/utils/firebase';
  import { page } from '$app/stores';

  $: pathname = $page.url.pathname;

  async function logOut() {
    await signOut(auth);

    goto('/');
  }
</script>

<div class="flex flex-wrap p-20">
  <div class="w-full text-center">
    <h1 class="text-[40px]">Account</h1>
  </div>
  <div class="flex justify-start w-full">
    <aside class="w-[400px] text-center shadow-lg p-[20px] mr-[20px] rounded-[16px]">
      <nav class="flex flex-col text-[20px]">
        <div
          class="border-b-[1px] border-t-[1px] py-[10px] border-black border-solid"
          class:active={pathname === '/my-account/orders'}
        >
          <a href="/my-account/orders">Orders</a>
        </div>
        <div
          class="border-b-[1px] py-[10px] border-black border-solid"
          class:active={pathname === '/my-account/favorites'}
        >
          <a href="/my-account/favorites">Favorites</a>
        </div>
        <div
          class="border-b-[1px] py-[10px] border-black border-solid"
          class:active={pathname === '/my-account/coupons'}
        >
          <a href="/my-account/coupons">Coupons</a>
        </div>
        <div
          class="border-b-[1px] py-[10px] border-black border-solid"
          class:active={pathname === '/my-account/settings'}
        >
          <a href="/my-account/settings">Settings</a>
        </div>
        <div>
          <button on:click={logOut}>Sign Out</button>
        </div>
      </nav>
    </aside>
    <slot />
  </div>
</div>

<svelte:head>
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<style>
  .active {
    color: red;
  }
</style>
