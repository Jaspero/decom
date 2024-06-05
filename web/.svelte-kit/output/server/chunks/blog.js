import { M as META_SUFFIX } from "./meta.store.js";
import { f as firestore } from "./firebase-admin.js";
import { E as ENV_CONFIG } from "./env-config.js";
function getThumb(url, thumb) {
  const temp = url.split("%2F");
  const baseUrl = `https://firebasestorage.googleapis.com/v0/b/${ENV_CONFIG.firebase.storageBucket}/o/`;
  return baseUrl + "generated%2F" + thumb + (temp.length > 1 ? temp[temp.length - 1] : url.split(baseUrl)[1]);
}
let _data;
async function blog() {
  const fs = firestore;
  let [categories, authors, articles] = await Promise.all([
    fs.collection("blog-categories").orderBy("name", "asc").get(),
    fs.collection("blog-authors").orderBy("name", "asc").get(),
    fs.collection("blog-articles").orderBy("publicationDate", "desc").get()
  ]);
  articles = articles.docs.map((doc) => ({ id: doc.id.trim(), ...doc.data() })).filter((doc) => doc.active);
  authors = authors.docs.map((it) => {
    const data = it.data();
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
      data.meta.og.image = getThumb(data.image, "thumb_");
    }
    data.meta.og.type = "profile";
    const [firstName, ...lastName] = data.name.split(" ");
    data.meta.og.profileFirstName = firstName;
    data.meta.og.profileLastName = lastName.join(" ");
    return {
      id: it.id.trim(),
      name: data.name,
      image: data.image ? getThumb(data.image, "thumb_") : void 0,
      about: data.about,
      meta: data.meta
    };
  });
  categories = categories.docs.map((it) => {
    const data = it.data();
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
  articles = articles.map((it) => {
    const { id, ...data } = it;
    let category;
    let author;
    if (data.category) {
      category = categories.find((it2) => it2.id === data.category);
    }
    if (data.author) {
      author = authors.find((it2) => it2.id === data.author);
    }
    if (data.image) {
      data.thumb = getThumb(data.image, "thumb_s_");
      data.image = getThumb(data.image, "thumb_m_");
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
      data.meta.og.image = getThumb(data.image, "thumb_");
    }
    data.meta.og.type = "article";
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
async function blogData() {
  if (_data) {
    return _data;
  }
  _data = await blog();
  return _data;
}
export {
  blogData as b
};
