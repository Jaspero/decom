import { capitalize } from '@jaspero/utils';
import { datePipe } from '../../column-pipes/date.pipe';
import { indexPipe } from '../../column-pipes/index.pipe';
import { collections } from '../collections';
import { actionsPipe } from '../../column-pipes/actions.pipe';

collections.addCollection('admins', {
  name: 'Admins',
  singularName: 'admin',
  module: 'management',
  tableHeaders: [
    {
      key: '/id',
      label: '#',
      pipes: [indexPipe]
    },
    {
      key: '/createdOn',
      label: 'Created On',
      pipes: [datePipe],
      sortable: true
    },
    {
      key: '/name',
      label: 'Name',
      sortable: true
    },
    {
      key: '/email',
      label: 'Email',
      sortable: true
    },
    {
      key: '/role',
      label: 'Role',
      pipes: [capitalize]
    },
    {
      key: 'id',
      label: '',
      pipes: [
        actionsPipe(() => ({
          actions: ['edit', 'delete'],
          links: []
        }))
      ]
    }
  ],
  initialSort: { key: 'createdOn', direction: 'desc' }
});
