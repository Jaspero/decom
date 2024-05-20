<script lang="ts">
  import Button from '$lib/Button.svelte';
  import DataTable from '$lib/DataTable.svelte';
  import { indexPipe } from '$lib/column-pipes/index.pipe';
  import type { Sort } from '$lib/interfaces/sort.interface';

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
  const initialSort: Sort = { key: 'name', direction: 'asc' };
</script>

<div class="pb-4">
  <Button variant="filled" color="secondary" href="/dashboard/landing-pages/forms/new"
    >Add new form</Button
  >
</div>

<DataTable
  col="landing-page-forms"
  {headers}
  {initialSort}
  baseLink="/dashboard/landing-pages/forms/"
/>

<svelte:head>
  <title>Landing Page Forms - GlycanAge</title>
</svelte:head>
