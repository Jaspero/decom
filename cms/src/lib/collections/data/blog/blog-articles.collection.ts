import {checkboxPipe} from '../../../column-pipes/checkbox.pipe';
import {datePipe} from '../../../column-pipes/date.pipe';
import {indexPipe} from '../../../column-pipes/index.pipe';
import {populatePipe} from '../../../column-pipes/populate.pipe';
import {releaseStatusPipe} from '../../../column-pipes/release-status.pipe';
import {yesNoPipe} from '../../../column-pipes/yes-no.pipe';
import {getOptions} from '../../../utils/get-options';
import {collections} from '../../collections';

collections.addCollection('blog-articles', {
	name: 'Articles',
	singularName: 'article',
	module: 'blog',
	tableHeaders: [
		{
			key: '/id',
			label: '#',
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
			pipes: [checkboxPipe('blog-articles', 'active')],
			exportPipes: [yesNoPipe]
		},
		{
			key: '/lastUpdatedOn',
			label: 'Status',
			pipes: [releaseStatusPipe()],
			exportPipes: [datePipe]
		},
		{
      key: 'id',
      label: '',
      pipes: [
        (id: string) => `<column-actions id="${id}" actions="edit,duplicate,delete"></column-actions>`
      ]
    }
	],
	initialSort: {key: 'publicationDate', direction: 'desc'},
	filterOperators: {
		publicationDateStart: {
			operator: '>=',
			key: 'publicationDate'
		},
		publicationDateEnd: {
			operator: '<=',
			key: 'publicationDate'
		}
	},
	filterOptions: async () => {
		const authors: Array<{label: string; value: string}> = [{label: 'Any', value: ''}];
		const categories: Array<{label: string; value: string}> = [{label: 'Any', value: ''}];

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
})