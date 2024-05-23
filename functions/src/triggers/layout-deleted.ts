import {onDocumentDeleted} from 'firebase-functions/v2/firestore';

export const layoutDeleted = onDocumentDeleted('layouts/{layoutId}', async event => {

	if (!event.data) {
		return;
	}

	const {docs} = await event.data.ref.collection('content').get();

	await Promise.all(
		docs.map(doc => doc.ref.delete())
	);
});