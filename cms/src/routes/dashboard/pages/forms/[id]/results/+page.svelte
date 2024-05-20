<script lang="ts">
  import { page } from '$app/stores';
  import DataTable from '$lib/DataTable.svelte';
  import { datePipe } from '$lib/column-pipes/date.pipe';
  import { indexPipe } from '$lib/column-pipes/index.pipe';
  import type { Sort } from '$lib/interfaces/sort.interface';

  export let data: {
    properties: Array<{ key: string; label: string }>;
  };

  const headers = [
    {
      key: '/id',
      label: 'Number',
      pipes: [indexPipe]
    },
    {
      key: '/createdOn',
      label: 'Created On',
      pipes: [datePipe]
    },
    ...data.properties.map((it) => ({
      key: `/${it.key}`,
      label: it.label
    }))
  ];
  const initialSort: Sort = { key: 'createdOn', direction: 'desc' };
</script>

<DataTable
  col={'landing-page-forms/' + $page.params.id + '/landing-page-form-responses'}
  {headers}
  {initialSort}
  baseLink="/"
  rowClick={false}
/>

<svelte:head>
  <title>Form Results - GlycanAge</title>
</svelte:head>
