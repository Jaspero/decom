<script lang="ts">
  import DataTable from '$lib/DataTable.svelte';
  import { indexPipe } from '$lib/column-pipes/index.pipe';
  import Button from '$lib/Button.svelte';
  import { releaseStatusPipe } from '$lib/column-pipes/release-status.pipe';
  import Grid from '$lib/Grid.svelte';
  import GridCol from '$lib/GridCol.svelte';
  import { datePipe } from '$lib/column-pipes/date.pipe';

  const headers = [
    {
      key: '/id',
      label: '#',
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
      pipes: [releaseStatusPipe()],
      exportPipes: [datePipe]
    }
  ];
</script>

<Grid>
  <GridCol span="12">
    <DataTable col="blog-categories" {headers} baseLink="/dashboard/blog/categories/">
      <Button slot="header" href="/dashboard/blog/categories/new">Add new category</Button>
    </DataTable>
  </GridCol>
</Grid>

<svelte:head>
  <title>Categories - Blog - Shop CMS</title>
</svelte:head>
