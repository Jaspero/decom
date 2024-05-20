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
        (id: string) => `<column-actions id="${id}" collection="landing-page-templates" prefix="templates"></column-actions>`
      ]
    }
  ];
  const initialSort: Sort = { key: 'title', direction: 'asc' };
</script>

<div class="pb-4">
  <Button variant="filled" color="secondary" href="/dashboard/landing-pages/templates/new"
    >Add new template</Button
  >
</div>

<DataTable
  col="landing-page-templates"
  {headers}
  {initialSort}
  rowClick={false}
  baseLink="/dashboard/landing-pages/templates/"
/>

<svelte:head>
  <title>Landing Page Templates - GlycanAge</title>
</svelte:head>
