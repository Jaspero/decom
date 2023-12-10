<script lang="ts">
  import Menu from 'svelte-material-icons/Menu.svelte';
  import Close from 'svelte-material-icons/Close.svelte';
  import AccountCircle from 'svelte-material-icons/AccountCircle.svelte';
  import Button from './Button.svelte';
  import { clickOutside } from './utils/clickOutside';
  import { fly } from 'svelte/transition';
  import { goto } from '$app/navigation';
  import { auth } from '$lib/utils/firebase';

  export let label: string;
  export let links: Array<{
    href: string;
    label: string;
  }>;

  let dropdown = false;
  let menu = false;
</script>

<nav>
  <a href="/dashboard" class="flex items-center gap-2">
    <img src="/brand/logo.svg" alt="GlycanAge Logo" />

    {#if label}
      <p>{label}</p>
    {/if}
  </a>

  <div class="flex-1" />

  <div class="hidden sm:flex">
    {#if links}
      {#each links as link}
        <Button href={link.href}>
          {link.label}
        </Button>
      {/each}
    {/if}

    <div class="relative">
      <Button variant="icon" on:click={() => (dropdown = true)}>
        <AccountCircle size="30" />
      </Button>
      {#if dropdown}
        <div
          class="absolute top-full right-0 bg-white shadow flex flex-col whitespace-nowrap"
          use:clickOutside
          on:click_outside={() => (dropdown = false)}
        >
          <Button href="/dashboard/account" on:click={() => (dropdown = false)}>Account</Button>
          <Button
            on:click={() => {
              auth.signOut();
              goto('/');
            }}
          >
            Sign out
          </Button>
        </div>
      {/if}
    </div>
  </div>

  <div class="sm:hidden">
    <Button variant="icon" on:click={() => (menu = !menu)}>
      {#if menu}
        <Close size="24" />
      {:else}
        <Menu size="24" />
      {/if}
    </Button>
  </div>
</nav>

{#if menu}
  <div class="menu" transition:fly={{ y: -200, duration: 300 }}>
    {#if links}
      {#each links as link}
        <Button size="large" href={link.href} on:click={() => (menu = false)}>
          {link.label}
        </Button>
      {/each}
    {/if}
  </div>
{/if}

<style lang="postcss">
  nav {
    @apply z-20 relative flex items-center px-6 min-h-[4rem] h-16 border-b bg-white;
  }

  .menu {
    @apply z-10 absolute top-16 w-full h-[calc(100vh-4rem)] bg-white flex flex-col;
  }

  img {
    @apply h-6;
  }
</style>
