<script lang="ts">
  import { signOut } from 'firebase/auth';
  import { goto } from '$app/navigation';
  import { auth } from '$lib/utils/firebase';

  async function logOut() {
    await signOut(auth);

    goto('/');
  }
</script>

<aside>
  <nav>
    <div>
      <a href="/my-account">Orders</a>
    </div>
    <div>
      <a href="/my-account/favorites">Favorites</a>
    </div>
    <div>
      <a href="/my-account/coupons">Coupons</a>
    </div>
    <div>
      <a href="/my-account/settings">Settings</a>
    </div>
  </nav>
</aside>

<button on:click={logOut}>Sign Out</button>

<svelte:head>
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>
