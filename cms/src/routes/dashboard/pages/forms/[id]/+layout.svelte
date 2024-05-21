<script lang="ts">
  import { page } from '$app/stores';
  import ItemNav from '$lib/ItemNav.svelte';

  const baseLink = `/dashboard/pages/forms/${$page.params.id}/`;

  const links = [
    { label: 'Results', link: baseLink + 'results' },
    { label: 'Reporting', link: baseLink + 'reporting' },
    { label: 'Edit', link: baseLink + 'edit' }
  ];
</script>

<ItemNav {links} />

<div class="pt-4">
  <slot />
</div>
