import { doc, getDoc } from 'firebase/firestore';
import { db } from '../utils/firebase';

export function populateArrayPipe(collection: string, key: string, fallback = '-') {
  return async (values: string[]) => {
    if (!values || !values?.length) {
      return fallback;
    }

    return Promise.all(
      values.map(async (value) => {
        const ref = await getDoc(doc(db, collection, value));

        return ref.exists() && ref.data().hasOwnProperty(key) ? ref.data()[key] : fallback;
      })
    );
  };
}
