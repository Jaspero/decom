<script lang="ts">
  import Nav from '$lib/Nav.svelte';

  // Needs to be imported so the component is registered
  import ColumnToggle from '$lib/column-elements/ColumnToggle.svelte';
  import ColumnStatus from '$lib/column-elements/ColumnStatus.svelte';
  import ColumnActions from '$lib/column-elements/ColumnActions.svelte';
  import Sidebar from "$lib/Sidebar.svelte";
  import {CONFIG} from '$lib/consts/config.const';

  const links = CONFIG.links;
</script>

<Nav label={CONFIG.label} />

<Sidebar {links} />

<main>
  <slot />
</main>

<style lang="postcss">
  main {
    @apply pl-[256px] pt-16;
  }
</style>
