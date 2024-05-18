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

<div class="flex flex-col h-screen max-h-screen">
  <Nav label={CONFIG.label} />

  <main class="relative flex-1 flex overflow-hidden">
    <Sidebar {links} />

    <div class="flex-1 h-full p-2 sm:p-4 md:max-w-[calc(100vw-256px)] overflow-y-auto">
      <slot />
    </div>
  </main>
</div>
