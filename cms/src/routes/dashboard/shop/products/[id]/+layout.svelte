<script lang="ts">
  import { page } from '$app/stores';
  import ItemNav from '$lib/ItemNav.svelte';

  const baseLink = `/dashboard/shop/products/${$page.params.id}/`;

  const links = [
    { label: 'Info', link: baseLink + 'info' },
    { label: 'Reporting', link: baseLink + 'reporting' },
    { label: 'Edit', link: baseLink + 'edit' },
    { label: 'Reviews', link: baseLink + 'reviews' }
  ];
</script>

<ItemNav {links} />

<slot />
