<script lang="ts">
  import { page } from '$app/stores';
  import DataTable from '$lib/DataTable.svelte';
  import { datePipe } from '$lib/column-pipes/date.pipe';
  import { indexPipe } from '$lib/column-pipes/index.pipe';
  import type { FilterOperators } from '$lib/interfaces/filter-operators.interface';
  import type { Sort } from '$lib/interfaces/sort.interface';
  import Grid from '$lib/Grid.svelte';
  import GridCol from '$lib/GridCol.svelte';

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
    {
      key: '/comment',
      label: 'Comment'
    },
    {
      key: '/authorName',
      label: 'Author'
    }
  ];
  const initialSort: Sort = { key: 'createdOn', direction: 'desc' };
  const filterOperators: FilterOperators = {
    createdOnStart: {
      operator: '>=',
      key: 'createdOn'
    },
    createdOnEnd: {
      operator: '<=',
      key: 'createdOn'
    }
  };

  async function filterOptions() {
    const items = [
      {
        component: 'jp-datepicker',
        field: '/createdOnStart',
        options: {
          label: 'Created Date Start',
          returnFormat: 'iso'
        }
      },
      {
        component: 'jp-datepicker',
        field: '/createdOnEnd',
        options: {
          label: 'Created Date End',
          returnFormat: 'iso'
        }
      }
    ];

    return items;
  }
</script>

<Grid>
  <GridCol span="12">
    <DataTable
      col="blog-articles/{$page.params.id}/blog-comments"
      {headers}
      {initialSort}
      {filterOptions}
      {filterOperators}
      baseLink="/dashboard/blog/articles/{$page.params.id}/comments/"
    />
  </GridCol>
</Grid>
