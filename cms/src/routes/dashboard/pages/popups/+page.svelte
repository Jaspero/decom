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
      key: '/title',
      label: 'Title'
    },
    {
      key: '/description',
      label: 'Description'
    },
    {
      key: 'id',
      label: '',
      pipes: [
        (id: string) => `<column-actions id="${id}" collection="landing-page-popups" prefix="popups"></column-actions>`
      ]
    }
  ];
  const initialSort: Sort = { key: 'title', direction: 'asc' };
</script>

<div class="pb-4">
  <Button variant="filled" color="secondary" href="/dashboard/landing-pages/popups/new"
    >Add new popup</Button
  >
</div>

<DataTable
  col="landing-page-popups"
  {headers}
  {initialSort}
  rowClick={false}
  baseLink="/dashboard/landing-pages/popups/"
/>

<svelte:head>
  <title>Landing Page Popups - GlycanAge</title>
</svelte:head>
