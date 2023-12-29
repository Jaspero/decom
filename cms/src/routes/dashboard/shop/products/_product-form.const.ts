import {quillFiled} from '$lib/form-fields/quill.field';
import {getOptions} from '$lib/utils/get-options';
import {META_FORM_FIELDS} from '$lib/consts/meta.form-fields';

export const PRODUCT_FORM = async (isNew: boolean) => {

	const categories: Array<{label: string; value: string}> = [];
	const tags: Array<{label: string; value: string}> = [];

	const items = [
		{
			component: 'card-element',
			columns: {
				desktop: 8,
				mobile: 12
			},
			options: {
				items: [
					{
						component: 'jp-input',
						field: '/name',
						options: {
							label: 'Name',
							name: 'name'
						}
					},
					{
						component: 'jp-input',
						field: '/id',
						options: {
							label: 'Url',
							name: 'url',
							hint: 'Generated from title if left empty.',
							readonly: isNew
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
						component: 'jp-multiselect',
						field: '/tags',
						options: {
							label: 'Tags',
							name: 'tags',
							options: categories
						}
					},
					{
						component: 'jp-textarea',
						field: '/description'
					},
					quillFiled('products', 'content', 'Content')
				]
			}
		},
		{
			component: 'card-element',
			columns: {
				desktop: 4,
				mobile: 12
			},
			options: {
				title: 'SEO',
				items: META_FORM_FIELDS
			}
		}
	];

	const datasets = await Promise.all([
		getOptions('categories', 'name'),
		getOptions('tags', 'name')
	]);

	categories.push(...datasets[0]);
	tags.push(...datasets[1]);

	return items;
};