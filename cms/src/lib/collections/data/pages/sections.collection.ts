import { actionsPipe } from '../../../column-pipes/actions.pipe';
import { indexPipe } from '../../../column-pipes/index.pipe';
import { collections } from '../../collections';

collections.addCollection('sections', {
  name: 'Sections',
  singularName: 'section',
  module: 'pages',
  tableHeaders: [
    {
      key: '/id',
      label: 'Number',
      pipes: [indexPipe]
    },
    {
      key: '/title',
      label: 'Title',
      sortable: true
    },
    {
      key: '/category',
      label: 'Category'
    },
    {
      key: '/id',
      label: '',
      pipes: [actionsPipe()]
    }
  ],
  initialSort: { key: 'title', direction: 'asc' }
});
