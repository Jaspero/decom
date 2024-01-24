<script lang="ts">
  import DataTable from '$lib/DataTable.svelte';
  import { imagePipe } from '$lib/column-pipes/image.pipe';
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
      key: '/image',
      label: 'Image',
      pipes: [imagePipe()]
    },
    {
      key: '/name',
      label: 'Name'
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
    <Button variant="filled" color="secondary" href="/dashboard/blog/authors/new">
      Add new author
    </Button>
  </GridCol>

  <GridCol span="12">
    <DataTable col="blog-authors" {headers} baseLink="/dashboard/blog/authors/" />
  </GridCol>
</Grid>

<svelte:head>
  <title>Authors - Blog - Jaspero</title>
</svelte:head>
