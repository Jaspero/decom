import { actionsPipe } from '../../../column-pipes/actions.pipe';
import { indexPipe } from '../../../column-pipes/index.pipe';
import { collections } from '../../collections';

collections.addCollection('layouts', {
  name: 'Tlocrti',
  singularName: 'tlocrt',
  module: 'pages',
  tableHeaders: [
    {
      key: '/id',
      label: 'Number',
      pipes: [indexPipe]
    },
    {
      key: '/name',
      label: 'Name',
      sortable: true
    },
    {
      key: '/id',
      label: '',
      pipes: [actionsPipe()]
    }
  ],
  initialSort: { key: 'name', direction: 'asc' }
});
