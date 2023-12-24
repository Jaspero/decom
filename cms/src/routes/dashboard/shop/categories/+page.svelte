<script lang="ts">
  import DataTable from '$lib/DataTable.svelte';
  import { indexPipe } from '$lib/column-pipes/index.pipe';
  import Button from '$lib/Button.svelte';

  const headers = [
    {
      key: '/id',
      label: 'Number',
      pipes: [indexPipe]
    },
    {
      key: '/name',
      label: 'Name'
    },
    {
      key: '/description',
      label: 'Description'
    }
  ];
</script>

<div class="pb-4">
  <Button variant="filled" color="secondary" href="/dashboard/shop/categories/new"
    >Add new category</Button
  >
</div>

<DataTable col="categories" {headers} baseLink="/dashboard/shop/categories/" />

<svelte:head>
  <title>Categories - Shop - Jaspero</title>
</svelte:head>
