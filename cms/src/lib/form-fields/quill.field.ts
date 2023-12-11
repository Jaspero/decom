import {BucketImageService} from '../services/image.service';

export const quillFiled = (collection: string, id: string, label: string) => {
	const quillService = new BucketImageService();
	quillService.prefix = collection + '/';
	quillService.metadata = [
		{
			folder: collection + '/',
			width: 1080
		}
	];

	return {
		component: 'jp-quill',
		field: '/' + id,
		options: {
			label: label,
			name: id,
			service: quillService,
			options: {
				theme: 'snow',
				modules: {
					toolbar: [
						['bold', 'italic', 'underline', 'strike'],
						['blockquote'],
						[{ header: [1, 2, 3, 4, 5, 6, false] }],
						[{'list': 'ordered'}, {'list': 'bullet'}],
						[{'script': 'sub'}, {'script': 'super'}],
						[{'indent': '-1'}, {'indent': '+1'}],
						['image'],
						[{'color': []}, {'background': []}],
						[{'align': []}],
						['link'],
					]
				}
			}
		}
	}
}