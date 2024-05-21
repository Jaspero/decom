import { actionsPipe } from '../../../column-pipes/actions.pipe';
import { checkboxPipe } from '../../../column-pipes/checkbox.pipe';
import { datePipe } from '../../../column-pipes/date.pipe';
import { indexPipe } from '../../../column-pipes/index.pipe';
import { releaseStatusPipe } from '../../../column-pipes/release-status.pipe';
import { CONFIG } from '../../../consts/config.const';
import { collections } from '../../collections';

collections.addCollection('pages', {
  name: 'Pages',
  singularName: 'page',
  module: 'pages',
  tableHeaders: [
    {
      key: '/id',
      label: 'Number',
      pipes: [indexPipe]
    },
    {
      key: '/publicationDate',
      label: 'Publication Date',
      pipes: [datePipe],
      sortable: true
    },
    {
      key: '/title',
      label: 'Title',
      pipes: [
        (v: string, row: any) =>
          `<a target="_blank" title="Open page" style="text-decoration:underline;" href="${CONFIG.webUrl}/${row.url}">${v}</a>`
      ],
      exportPipes: [],
      sortable: true
    },
    {
      key: '/id',
      label: 'Active',
      pipes: [checkboxPipe('pages', 'active')]
    },
    {
      key: '/lastUpdatedOn',
      label: 'Status',
      exportPipes: [],
      pipes: [releaseStatusPipe()]
    },
    {
      key: 'id',
      label: '',
      pipes: [actionsPipe()]
    }
  ],
  initialSort: { key: 'publicationDate', direction: 'desc' }
});
