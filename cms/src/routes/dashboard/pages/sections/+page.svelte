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
      key: '/category',
      label: 'Category'
    },
    {
      key: 'id',
      label: '',
      pipes: [
        (id: string) => `<column-actions id="${id}" collection="landing-page-sections" prefix="sections"></column-actions>`
      ]
    }
  ];
  const initialSort: Sort = { key: 'title', direction: 'asc' };
</script>

<div class="pb-4">
  <Button variant="filled" color="secondary" href="/dashboard/landing-pages/sections/new"
    >Add new section</Button
  >
</div>

<DataTable
  col="landing-page-sections"
  {headers}
  {initialSort}
  rowClick={false}
  baseLink="/dashboard/landing-pages/sections/"
/>

<svelte:head>
  <title>Landing Page Sections - GlycanAge</title>
</svelte:head>
