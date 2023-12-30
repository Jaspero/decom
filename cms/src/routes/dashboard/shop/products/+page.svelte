<script lang="ts">
  import DataTable from '$lib/DataTable.svelte';
  import { indexPipe } from '$lib/column-pipes/index.pipe';
  import Button from '$lib/Button.svelte';
  import { populatePipe } from '$lib/column-pipes/populate.pipe';
  import { checkboxPipe } from '$lib/column-pipes/checkbox.pipe';
  import { releaseStatusPipe } from '$lib/column-pipes/release-status.pipe';
  import { populateArrayPipe } from '$lib/column-pipes/populate-array.pipe';

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
      key: '/category',
      label: 'Category',
      pipes: [populatePipe('categories', 'name')]
    },
    {
      key: '/tags',
      label: 'Tag',
      pipes: [populateArrayPipe('tags', 'name')]
    },
    {
      key: '/active',
      label: 'Active',
      pipes: [checkboxPipe('products', 'active')]
    },
    {
      key: '/lastUpdatedOn',
      label: 'Status',
      pipes: [releaseStatusPipe()]
    }
  ];
</script>

<div class="pb-4">
  <Button variant="filled" color="secondary" href="/dashboard/shop/products/new"
    >Add new product</Button
  >
</div>

<DataTable col="products" {headers} baseLink="/dashboard/shop/products/" />

<svelte:head>
  <title>Products - Shop - Jaspero</title>
</svelte:head>
