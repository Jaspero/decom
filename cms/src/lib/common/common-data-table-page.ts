import {collections} from '$lib/collections/collections.js';
import {error} from '@sveltejs/kit';
import type TableHeader from '../TableHeader.svelte';
import type {FilterOperators} from '../interfaces/filter-operators.interface';
import type {Sort} from '../interfaces/sort.interface';

export interface CommonDataTablePageData {
	name: string;
	headers: TableHeader[];
	add: boolean;
	singularName: string;
	filterOperators?: FilterOperators;
	filterOptions?: () => Promise<any[]>;
	initialSort?: Sort;
}

export async function commonDataTablePage({ params, parent }: any) {
  await parent();

	const {collection, module} = params;

	const data = collections.getCollection(collection);

	if (!data) {
		error(404, 'Collection not found');
	}

	if (module && data.module !== module) {
		error(404, 'Module not found');
	}

	return {
		name: data.name,
		headers: data.tableHeaders,
		add: data.add,
		singularName: data.singularName || data.name,
		filterOperators: data.filterOperators,
		filterOptions: data.filterOptions,
		initialSort: data.initialSort
	};
}