import { db } from '$lib/utils/firebase';
import { error, redirect } from '@sveltejs/kit';
import { DocumentSnapshot, doc, getDoc } from 'firebase/firestore';
import { collections } from '../collections/collections';
import { random } from '@jaspero/utils';

export class CommonNewFormPageData {
  value: any = {};

  get id() {
    return this.createId
      ? this.createId()
      : this.idPrefix
      ? `${this.idPrefix}-${random.string(24)}`
      : random.string(24);
  }

  constructor(
    public collection: string,
    public module: string,
    public name: string,
    public singularName: string,
    public form: any,
    public idPrefix?: string,
    public createId?: () => string,
    public preSubmit?: (id: string, value: any) => Promise<void>,
    public preCreate?: (id: string, value: any) => Promise<void>
  ) {}
}

export class CommonEditFormPageData {
  get id() {
    return this.snap.id;
  }

  constructor(
    public collection: string,
    public module: string,
    public name: string,
    public singularName: string,
    public form: any,
    public value: any,
    public snap: DocumentSnapshot,
    public editKey: string,
    public preSubmit?: (id: string, value: any) => Promise<void>,
    public preEdit?: (id: string, value: any) => Promise<void>
  ) {}
}

export async function commonFormPage({ params, parent }: any) {
  await parent();

  const { collection, module, id } = params;

  const data = collections.getCollection(collection);

  if (!data) {
    error(404, 'Collection not found');
  }

  if (module && data.module !== module) {
    error(404, 'Module not found');
  }

  if (id === 'new') {
    return {
      data: new CommonNewFormPageData(
        collection,
        module,
        data.name,
        data.singularName || data.name,
        data.form ? await data.form(id) : {},
        data.idPrefix,
        data.createId,
        data.preSubmit,
        data.preCreate
      )
    };
  }

  const snap = await getDoc(doc(db, collection, id));

  if (!snap.exists) {
    throw redirect(303, '/404');
  }

  const value = { id: snap.id, ...(snap.data() as any) };

  return {
    data: new CommonEditFormPageData(
      collection,
      module,
      data.name,
      data.singularName || data.name,
      data.form ? await data.form(id) : {},
      value,
      snap,
      data.editKey || 'id',
      data.preSubmit,
      data.preEdit
    )
  };
}
