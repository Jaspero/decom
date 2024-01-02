<script lang="ts">
  import { page } from '$app/stores';
  import ItemNav from '$lib/ItemNav.svelte';

  const baseLink = `/dashboard/blog/articles/${$page.params.id}/`;

  const links = [
    { label: 'Info', link: baseLink + 'info' },
    { label: 'Reporting', link: baseLink + 'reporting' },
    { label: 'Comments', link: baseLink + 'comments' },
    { label: 'Edit', link: baseLink + 'edit' }
  ];
</script>

<ItemNav {links} />

<slot />
