<script lang="ts">
  import DataTable from '$lib/DataTable.svelte';
  import { indexPipe } from '$lib/column-pipes/index.pipe';
  import Button from '$lib/Button.svelte';
  import { releaseStatusPipe } from '$lib/column-pipes/release-status.pipe';
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
    }
  ];
</script>

<Grid>
  <GridCol span="12">
    <Button variant="filled" color="secondary" href="/dashboard/shop/discounts/new">
      Add discount
    </Button>
  </GridCol>

  <GridCol span="12">
    <DataTable col="discounts" {headers} baseLink="/dashboard/shop/discounts/" />
  </GridCol>
</Grid>

<svelte:head>
  <title>Discounts - Shop - Jaspero</title>
</svelte:head>
