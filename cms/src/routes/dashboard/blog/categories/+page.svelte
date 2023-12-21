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

<div class="pb-4">
  <Button variant="filled" color="secondary" href="/dashboard/blog/categories/new"
    >Add new category</Button
  >
</div>

<DataTable col="blog-categories" {headers} baseLink="/dashboard/blog/categories/" />

<svelte:head>
  <title>Categories - Science Magazine - GlycanAge</title>
</svelte:head>
