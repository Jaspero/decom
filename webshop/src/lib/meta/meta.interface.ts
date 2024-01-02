export interface Meta {
  title: string;
  description?: string;
  keywords?: string;
  author?: string;
  structured?: string;
  noIndex?: boolean;
  og?: {
    title?: string;
    description?: string;
    image?: string;
    type?: string;

    articleAuthor?: string;
    articlePublishedTime?: string;
    articleModifiedTime?: string;
    articleSection?: string;
    articleTag?: string;
    profileFirstName?: string;
    profileLastName?: string;
    profileUsername?: string;
  };
}
