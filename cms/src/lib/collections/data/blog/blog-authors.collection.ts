import {datePipe} from '../../../column-pipes/date.pipe';
import {imagePipe} from '../../../column-pipes/image.pipe';
import {indexPipe} from '../../../column-pipes/index.pipe';
import {releaseStatusPipe} from '../../../column-pipes/release-status.pipe';
import {collections} from '../../collections';

collections.addCollection('blog-authors', {
	name: 'Authors',
	singularName: 'authors',
	tableHeaders: [
    {
      key: '/id',
      label: '#',
      pipes: [indexPipe]
    },
    {
      key: '/image',
      label: 'Image',
      pipes: [imagePipe()],
      exportPipes: []
    },
    {
      key: '/name',
      label: 'Name'
    },
    {
      key: '/lastUpdatedOn',
      label: 'Status',
      pipes: [releaseStatusPipe()],
      exportPipes: [datePipe]
    }
  ]
});