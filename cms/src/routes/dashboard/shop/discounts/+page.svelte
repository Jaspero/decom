<script lang="ts">
  import DataTable from '$lib/DataTable.svelte';
  import { indexPipe } from '$lib/column-pipes/index.pipe';
  import Button from '$lib/Button.svelte';
  import { releaseStatusPipe } from '$lib/column-pipes/release-status.pipe';

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
  <Button variant="filled" color="secondary" href="/dashboard/shop/discounts/new">Add discount</Button>
</div>

<DataTable col="discounts" {headers} baseLink="/dashboard/shop/discounts/" />

<svelte:head>
  <title>Discounts - Shop - Jaspero</title>
</svelte:head>
