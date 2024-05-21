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
      key: '/description',
      label: 'Description'
    }
  ];
</script>

<Grid>
  <GridCol span="12">
    <Button variant="filled" color="secondary" href="/dashboard/shop/categories/new">
      Add new category
    </Button>
  </GridCol>

  <GridCol span="12">
    <DataTable col="categories" {headers} baseLink="/dashboard/shop/categories/" />
  </GridCol>
</Grid>

<svelte:head>
  <title>Categories - Shop - Jaspero</title>
</svelte:head>
