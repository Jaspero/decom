<script lang="ts">
  import {page} from '$app/stores';
  import Button from '$lib/Button.svelte';
  import DataTable from '$lib/DataTable.svelte';
  import Grid from '$lib/Grid.svelte';
  import GridCol from '$lib/GridCol.svelte';
  import type TableHeader from '$lib/TableHeader.svelte';
  import {CONFIG} from '$lib/consts/config.const';

  export let data: {
    name: string;
    singularName: string;
    headers: TableHeader;
    add: boolean;
  };

	$: baseLink = ['/dashboard', $page.params.module, $page.params.collection].filter(Boolean).join('/');
</script>

<Grid>
  <GridCol span="12">
    <DataTable col={$page.params.collection} headers={data.headers} {baseLink}>
			<slot slot="header">
				{#if data.add}
					<Button  href="{baseLink}/new">Add new {data.singularName}</Button>
				{/if}
			</slot>
    </DataTable>
  </GridCol>
</Grid>

<svelte:head>
  <title>{data.name} - {CONFIG.title}</title>
</svelte:head>
