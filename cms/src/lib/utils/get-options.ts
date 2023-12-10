import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebase';
import type { Filter } from '../interfaces/filter.interface';

export async function getOptions(col: string, key = 'name', filters: Filter[] = []) {
  const { docs } = await getDocs(
    query(
      collection(db, col),
      ...filters.map((filter) => where(filter.key, filter.operation, filter.value))
    )
  );

  return docs
    .map((doc) => ({
      label: doc.data()[key],
      value: doc.id
    }))
    .sort((a, b) => a.label?.localeCompare(b.label));
}
