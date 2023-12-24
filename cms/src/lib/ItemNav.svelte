<script lang="ts">
  import { page } from '$app/stores';

  export let links: Array<{
    label: string;
    link: string;
  }>;

  $: active = $page.url.pathname;
</script>

<nav>
  <div class="inner-nav">
    {#each links as link}
      <a href={link.link} class:active={active.startsWith(link.link)}>{link.label}</a>
    {/each}
  </div>
</nav>

<style lang="postcss">
  nav {
    @apply bg-secondary;
  }

  .inner-nav {
    @apply max-w-7xl px-6 m-auto flex items-center gap-4 h-12;
  }

  a {
    @apply text-sm px-4 font-bold;
  }

  a.active,
  a:hover {
    @apply font-bold hover:underline;
  }
</style>
