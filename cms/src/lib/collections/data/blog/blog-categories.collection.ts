import {actionsPipe} from '../../../column-pipes/actions.pipe';
import {datePipe} from '../../../column-pipes/date.pipe';
import {indexPipe} from '../../../column-pipes/index.pipe';
import {releaseStatusPipe} from '../../../column-pipes/release-status.pipe';
import {collections} from '../../collections';

collections.addCollection('blog-categories', {
	name: 'Categories',
	singularName: 'category',
  module: 'blog',
	tableHeaders: [
    {
      key: '/id',
      label: '#',
      pipes: [indexPipe]
    },
    {
      key: '/id',
      label: 'URL'
    },
    {
      key: '/name',
      label: 'Name'
    },
    {
      key: '/description',
      label: 'Description'
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
        actionsPipe(id => ({
					actions: ['duplicate', 'delete'],
					links: [
						{
							label: 'Edit',
							href: `blog-categories/${id}`,
							icon: 'edit'
						},
						{
							label: 'Reporting',
							href: `blog-categories/${id}/reporting`,
							icon: 'monitoring'
						}
					]
				}))
      ]
    }
  ]
});