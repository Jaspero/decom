import { META_SUFFIX } from '../meta/meta.store';
import type { BlogArticle } from '../types/blog/blog-article.interface';
import type { BlogAuthor } from '../types/blog/blog-author.interface';
import type { BlogCategory } from '../types/blog/blog-category.interface';
import { firestore } from '../utils/firebase-admin';
import { getThumb } from '../utils/get-thumb';

let _data: {
  articles: BlogArticle[];
  authors: BlogAuthor[];
  categories: BlogCategory[];
};

/**
 * Pulls in categories, authors and the featured article
 */
async function blog() {
  const fs = firestore;

  let [categories, authors, articles] = (await Promise.all([
    fs.collection('blog-categories').orderBy('name', 'asc').get(),
    fs.collection('blog-authors').orderBy('name', 'asc').get(),
    fs.collection('blog-articles').orderBy('publicationDate', 'desc').get()
  ])) as any;

  articles = articles.docs
    .map((doc: any) => ({ id: doc.id.trim(), ...doc.data() }))
    .filter((doc: any) => doc.active);

  authors = authors.docs.map((it: any) => {
    const data = it.data() as BlogAuthor;

    if (!data.meta) {
      data.meta = {
        title: `${data.name} - Blog Author ${META_SUFFIX}`
      };
    }

    if (!data.meta.title) {
      data.meta.title = `${data.name} - Blog Author ${META_SUFFIX}`;
    }

    if (!data.meta.og) {
      data.meta.og = {};
    }

    if (!data.meta.og.image && data.image) {
      data.meta.og.image = getThumb(data.image, 'thumb_');
    }

    data.meta.og.type = 'profile';

    const [firstName, ...lastName] = data.name.split(' ');

    data.meta.og.profileFirstName = firstName;
    data.meta.og.profileLastName = lastName.join(' ');

    return {
      id: it.id.trim(),
      name: data.name,
      image: data.image ? getThumb(data.image, 'thumb_') : undefined,
      about: data.about,
      meta: data.meta
    };
  });
  categories = categories.docs.map((it: any) => {
    const data = it.data() as BlogCategory;
    const name = data.name;

    if (!data.meta) {
      data.meta = {
        title: `${data.name} - Blog Category ${META_SUFFIX}`
      };
    }

    if (!data.meta.title) {
      data.meta.title = `${data.name} - Blog Category ${META_SUFFIX}`;
    }

    return { id: it.id.trim(), name, meta: data.meta };
  });
  articles = articles.map((it: any) => {
    const { id, ...data } = it as BlogArticle;

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

    if (!data.meta) {
      data.meta = {
        title: `${data.title} - Blog ${META_SUFFIX}`
      };
    }

    if (!data.meta.title) {
      data.meta.title = `${data.title} - Blog ${META_SUFFIX}`;
    }

    if (!data.meta.og) {
      data.meta.og = {};
    }

    if (!data.meta.og.image && data.image) {
      data.meta.og.image = getThumb(data.image, 'thumb_');
    }

    data.meta.og.type = 'article';

    if (author) {
      data.meta.author = author.name;

      if (!data.meta.og.articleAuthor) {
        data.meta.og.articleAuthor = author.name;
      }
    }

    if (!data.meta.og.articlePublishedTime) {
      data.meta.og.articlePublishedTime = data.publicationDate;
    }

    if (!data.meta.og.articleModifiedTime) {
      data.meta.og.articleModifiedTime = data.lastUpdatedOn;
    }

    if (!data.meta.og.articleSection && category) {
      data.meta.og.articleSection = category.name;
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
    articles,
    categories,
    authors
  };
}

export async function blogData() {
  if (_data) {
    return _data;
  }

  _data = await blog();

  return _data;
}
