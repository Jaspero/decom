<script lang="ts">
  import DataTable from '$lib/DataTable.svelte';
  import { indexPipe } from '$lib/column-pipes/index.pipe';
  import Button from '$lib/Button.svelte';
  import Grid from '$lib/Grid.svelte';
  import GridCol from '$lib/GridCol.svelte';

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

<Grid>
  <GridCol span="12">
    <Button variant="filled" color="secondary" href="/dashboard/shop/coupons/new">
      Add new coupon
    </Button>
  </GridCol>

  <GridCol span="12">
    <DataTable col="coupons" {headers} baseLink="/dashboard/shop/coupons/" />
  </GridCol>
</Grid>

<svelte:head>
  <title>Coupons - Shop - Jaspero</title>
</svelte:head>
