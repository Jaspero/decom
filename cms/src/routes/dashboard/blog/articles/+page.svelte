<script lang="ts">
  import Button from '$lib/Button.svelte';
  import DataTable from '$lib/DataTable.svelte';
  import { checkboxPipe } from '$lib/column-pipes/checkbox.pipe';
  import { datePipe } from '$lib/column-pipes/date.pipe';
  import { indexPipe } from '$lib/column-pipes/index.pipe';
  import { populatePipe } from '$lib/column-pipes/populate.pipe';
  import { releaseStatusPipe } from '$lib/column-pipes/release-status.pipe';
  import type { Sort } from '$lib/interfaces/sort.interface';
  import { getOptions } from '$lib/utils/get-options';
  import type { FilterOperators } from '$lib/interfaces/filter-operators.interface';

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
      label: 'Title'
    },
    {
      key: '/category',
      label: 'Category',
      pipes: [populatePipe('blog-categories', 'name')]
    },
    {
      key: '/author',
      label: 'Author',
      pipes: [populatePipe('blog-authors', 'name')]
    },
    {
      key: '/id',
      label: 'Active',
      pipes: [checkboxPipe('blog-articles', 'active')]
    },
    {
      key: '/lastUpdatedOn',
      label: 'Status',
      pipes: [releaseStatusPipe()]
    }
  ];
  const initialSort: Sort = { key: 'publicationDate', direction: 'desc' };
  const filterOperators: FilterOperators = {
    publicationDateStart: {
      operator: '>=',
      key: 'publicationDate'
    },
    publicationDateEnd: {
      operator: '<=',
      key: 'publicationDate'
    }
  };

  async function filterOptions() {
    const authors: Array<{ label: string; value: string }> = [{ label: 'Any', value: '' }];
    const categories: Array<{ label: string; value: string }> = [{ label: 'Any', value: '' }];

    const items = [
      {
        component: 'jp-select',
        field: '/author',
        options: {
          label: 'Author',
          name: 'author',
          options: authors
        }
      },
      {
        component: 'jp-select',
        field: '/category',
        options: {
          label: 'Category',
          name: 'category',
          options: categories
        }
      },
      {
        component: 'jp-datepicker',
        field: '/publicationDateStart',
        options: {
          label: 'Publication Date Start',
          returnFormat: 'iso'
        }
      },
      {
        component: 'jp-datepicker',
        field: '/publicationDateEnd',
        options: {
          label: 'Publication Date End',
          returnFormat: 'iso'
        }
      }
    ];

    const datasets = await Promise.all([
      getOptions('blog-authors', 'name'),
      getOptions('blog-categories', 'name')
    ]);

    authors.push(...datasets[0]);
    categories.push(...datasets[1]);

    return items;
  }
</script>

<div class="pb-4">
  <Button variant="filled" color="secondary" href="/dashboard/blog/articles/new"
    >Add new article</Button
  >
</div>

<DataTable
  col="blog-articles"
  {headers}
  {initialSort}
  {filterOptions}
  {filterOperators}
  baseLink="/dashboard/blog/articles/"
/>

<svelte:head>
  <title>Articles - Blog - Jaspero</title>
</svelte:head>
