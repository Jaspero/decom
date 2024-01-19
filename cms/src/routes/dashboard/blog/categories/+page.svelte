<script lang="ts">
  import DataTable from '$lib/DataTable.svelte';
  import { indexPipe } from '$lib/column-pipes/index.pipe';
  import Button from '$lib/Button.svelte';
  import { releaseStatusPipe } from '$lib/column-pipes/release-status.pipe';
  import Grid from "$lib/Grid.svelte";
  import GridCol from "$lib/GridCol.svelte";

  const headers = [
    {
      key: '/id',
      label: 'Number',
      pipes: [indexPipe]
    },
    {
      key: '/id',
      label: 'URL'
    },
    {
      key: '/name',
      label: 'Name'
    },
    {
      key: '/description',
      label: 'Description'
    },
    {
      key: '/lastUpdatedOn',
      label: 'Status',
      pipes: [releaseStatusPipe()]
    }
  ];
</script>

<Grid>
  <GridCol span="12">
    <Button variant="filled" color="secondary" href="/dashboard/blog/categories/new">
      Add new category
    </Button>
  </GridCol>

  <GridCol span="12">
    <DataTable col="blog-categories" {headers} baseLink="/dashboard/blog/categories/" />
  </GridCol>
</Grid>

<svelte:head>
  <title>Categories - Blog - Jaspero</title>
</svelte:head>
