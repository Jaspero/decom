<script lang="ts">
  import Button from '$lib/Button.svelte';
  import DataTable from '$lib/DataTable.svelte';
  import { checkboxPipe } from '$lib/column-pipes/checkbox.pipe';
  import { datePipe } from '$lib/column-pipes/date.pipe';
  import { indexPipe } from '$lib/column-pipes/index.pipe';
  import { populatePipe } from '$lib/column-pipes/populate.pipe';
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
      pipes: [populatePipe('blog-authors', 'fullName')]
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
</script>

<div class="pb-4">
  <Button variant="filled" color="secondary" href="/dashboard/blog/articles/new"
    >Add new article</Button
  >
</div>

<DataTable col="blog-articles" {headers} {initialSort} baseLink="/dashboard/blog/articles/" />

<svelte:head>
  <title>Articles - Blog - Jaspero</title>
</svelte:head>
