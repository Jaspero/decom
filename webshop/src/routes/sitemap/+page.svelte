<script lang="ts">
  import { meta } from '$lib/meta/meta.store';
  import BlogAuthor from '$lib/blog/BlogAuthor.svelte';
  import type { BlogArticle } from '$lib/types/blog/blog-article.interface';
  import type { BlogCategory } from '$lib/types/blog/blog-category.interface';

  export let data: {
    blog: {
      articles: BlogArticle[];
      categories: BlogCategory[];
      authors: BlogAuthor[];
      pages: Array<{
        category: BlogCategory;
        pages: number[];
      }>;
    };
  };

  meta.set({ title: 'Sitemap' });
</script>

<h1>Sitemap</h1>

<h3>Blog</h3>

<a href="/blog">Blog</a>

<h4>Articles</h4>

<ul>
  {#each data.blog.articles as article}
    <li><a href="/blog/{article.categoryId}/{article.id}">{article.title}</a></li>
  {/each}
</ul>

<h4>Categories</h4>

<ul>
  {#each data.blog.categories as category}
    <li><a href="/blog/{category.id}">{category.name}</a></li>
  {/each}
</ul>

<h4>Authors</h4>

<ul>
  {#each data.blog.authors as author}
    <li><a href="/blog/authors/{author.id}">{author.name}</a></li>
  {/each}
</ul>

<h4>Pages</h4>

{#each data.blog.pages as category}
  <h5>{category.category.name}</h5>

  <ul>
    {#each category.pages as page}
      <li><a href="/blog/categories/{category.category.id}/page/{page}">{page}</a></li>
    {/each}
  </ul>
{/each}
