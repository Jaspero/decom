<script lang="ts">
  import Button from '$lib/Button.svelte';
  import DataTable from '$lib/DataTable.svelte';
  import { checkboxPipe } from '$lib/column-pipes/checkbox.pipe';
  import { datePipe } from '$lib/column-pipes/date.pipe';
  import { indexPipe } from '$lib/column-pipes/index.pipe';
  import { releaseStatusPipe } from '$lib/column-pipes/release-status.pipe';
  import type { Sort } from '$lib/interfaces/sort.interface';

  const headers = [
    {
      key: '/id',
      label: 'Number',
      pipes: [indexPipe]
    },
    {
      key: '/publicationDate',
      label: 'Publication Date',
      pipes: [datePipe]
    },
    {
      key: '/title',
      label: 'Title',
      pipes: [(v: string, row: any) => 
        `<a target="_blank" title="Open landing page" style="text-decoration:underline;" href="https://glycanage.com/l/${row.url}">${v}</a>`
      ]
    },
    {
      key: '/id',
      label: 'Active',
      pipes: [checkboxPipe('landing-pages', 'active')]
    },
    {
      key: '/lastUpdatedOn',
      label: 'Status',
      pipes: [releaseStatusPipe()]
    },
    {
      key: 'id',
      label: '',
      pipes: [
        (id: string) => `<column-actions id="${id}" collection="landing-pages" prefix="pages"></column-actions>`
      ]
    }
  ];
  const initialSort: Sort = { key: 'publicationDate', direction: 'desc' };
</script>

<div class="pb-4">
  <Button variant="filled" color="secondary" href="/dashboard/landing-pages/pages/new"
    >Add new landing page</Button
  >
</div>

<DataTable
  col="landing-pages"
  {headers}
  {initialSort}
  rowClick={false}
  baseLink="/dashboard/landing-pages/pages/"
/>

<svelte:head>
  <title>Landing Pages - GlycanAge</title>
</svelte:head>
