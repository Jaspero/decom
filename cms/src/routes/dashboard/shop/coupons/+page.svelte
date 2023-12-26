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
      key: '/code',
      label: 'Code'
    },
    {
      key: '/type',
      label: 'Type'
    }
  ];
</script>

<div class="pb-4">
  <Button variant="filled" color="secondary" href="/dashboard/shop/coupons/new"
    >Add new coupon</Button
  >
</div>

<DataTable col="coupons" {headers} baseLink="/dashboard/shop/coupons/" />

<svelte:head>
  <title>Coupons - Shop - Jaspero</title>
</svelte:head>
