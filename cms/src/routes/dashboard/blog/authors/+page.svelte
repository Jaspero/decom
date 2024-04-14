<script lang="ts">
  import DataTable from '$lib/DataTable.svelte';
  import { imagePipe } from '$lib/column-pipes/image.pipe';
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
      key: '/image',
      label: 'Image',
      pipes: [imagePipe()],
      exportPipes: []
    },
    {
      key: '/name',
      label: 'Name'
    },
    {
      key: '/lastUpdatedOn',
      label: 'Status',
      pipes: [releaseStatusPipe()],
      exportPipes: [datePipe]
    }
  ];

  let pageTitle = 'Authors';
</script>

<p class="page-title sen">{pageTitle}</p>
<Grid>
  <GridCol span="12">
    <DataTable col="blog-authors" {headers} baseLink="/dashboard/blog/authors/">
      <Button slot="header" href="/dashboard/blog/authors/new">Add new author</Button>
    </DataTable>
  </GridCol>
</Grid>

<svelte:head>
  <title>Authors - Blog - hati</title>
</svelte:head>

<style lang="postcss">
  .page-title {
    @apply text-[48px] text-[#5F765A] ml-[1.5rem] lg:text-[38px];
  }
</style>
