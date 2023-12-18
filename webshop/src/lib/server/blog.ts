import {firestore} from '../utils/firebase-admin';
import {getThumb} from '../utils/get-thumb';

let _data: any;

/**
 * Pulls in categories, authors and the featured article
 */
async function blog() {
  const fs = firestore;

  let [
    categories,
    authors,
    articles
  ] = (await Promise.all([
    fs.collection('blog-categories').orderBy('name', 'asc').get(),
    fs.collection('blog-authors').orderBy('name', 'asc').get(),
    fs.collection('blog-articles').orderBy('publicationDate', 'desc').get()
  ])) as any;

  articles = articles.docs
    .map((doc: any) => ({id: doc.id.trim(), ...doc.data()}))
    .filter((doc: any) => doc.active || !doc.hasOwnProperty('active'));

  authors = authors.docs.map((it: any) => {
    const data = it.data();

    return {
      id: it.id.trim(),
      name: data.name,
      image: data.image ? getThumb(data.image, 'thumb_') : undefined,
      about: data.about,
      meta: data.meta
    };
  });
  categories = categories.docs.map((it: any) => {
    const data = it.data();
    const name = data.name;
    return {id: it.id.trim(), name};
  });
  articles = articles.map((it: any) => {
    const {id, ...data} = it;

    let category;
    let author;

    if (data.category) {
      category = categories.find((it: any) => it.id === data.category);
    }

    if (data.author) {
      author = authors.find((it: any) => it.id === data.author);
    }

    if (data.image) {
      data.thumb = getThumb(data.image, 'thumb_s_');
      data.image = getThumb(data.image, 'thumb_m_');
    }

    return {
      id,
      ...data,
      category: category && category.name,
      author: author && {
        image: author.image,
        name: author.name,
        id: author.id,
        about: author.about
      },
      categoryId: data.category
    };
  });

  return {
    featured: articles[0],
    articles,
    categories,
    authors,
  };
}

export async function blogData() {
  if (_data) {
    return _data;
  }

  _data = await blog();

  return _data;
}
