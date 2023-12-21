<script lang="ts">
  import { page } from '$app/stores';

  export let links: Array<{
    label: string;
    link: string;
  }>;

  $: active = $page.url.pathname.split('/').pop();
</script>

<nav>
  {#each links as link}
    <a href={link.link} class:active={active === link.link}>{link.label}</a>
  {/each}
</nav>
