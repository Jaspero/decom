<script lang="ts">
  import ItemNav from '$lib/ItemNav.svelte';

  const links = [
    { label: 'Info', link: 'info' },
    { label: 'Reporting', link: 'reporting' },
    { label: 'Comments', link: 'comments' },
    { label: 'Edit', link: 'edit' }
  ];
</script>

<ItemNav {links} />

<slot />
