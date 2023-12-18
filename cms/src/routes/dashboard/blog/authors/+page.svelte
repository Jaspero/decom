<script lang="ts">
  import DataTable from '$lib/DataTable.svelte';
  import { imagePipe } from '$lib/column-pipes/image.pipe';
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

<div class="pb-4">
  <Button variant="filled" color="secondary" href="/dashboard/blog/authors/new"
    >Add new author</Button
  >
</div>

<DataTable
  col="blog-authors"
  {headers}
  baseLink="/dashboard/blog/authors/"
/>

<svelte:head>
  <title>Authors - Blog - Jaspero</title>
</svelte:head>
