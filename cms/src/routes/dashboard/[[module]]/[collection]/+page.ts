import {collections} from '$lib/collections/collections.js';
import {error} from '@sveltejs/kit';

export async function load({ params, parent }) {
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
	}
}