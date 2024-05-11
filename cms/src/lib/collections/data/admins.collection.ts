import {capitalize} from '@jaspero/utils';
import {datePipe} from '../../column-pipes/date.pipe';
import {indexPipe} from '../../column-pipes/index.pipe';
import {collections} from '../collections';

collections.addCollection('admins', {
	name: 'Admins',
	singularName: 'Admin',
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
      pipes: [datePipe]
    },
    {
      key: '/name',
      label: 'Name'
    },
    {
      key: '/email',
      label: 'Email'
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
        (id: string) => `<column-actions id="${id}" collection="admins" prefix="admins" actions="edit,delete"></column-actions>`
      ]
    }
  ]
});