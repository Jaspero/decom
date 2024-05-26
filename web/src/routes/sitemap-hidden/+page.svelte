<script lang="ts">
  import { meta } from '$lib/meta/meta.store';
  import BlogAuthor from '$lib/blog/BlogAuthor.svelte';
  import type { BlogArticle } from '$lib/types/blog/blog-article.interface';
  import type { BlogCategory } from '$lib/types/blog/blog-category.interface';

  export let data: {
    pages: Array<{url: string; title: string}>;
    blog: {
      articles: BlogArticle[];
      categories: BlogCategory[];
      authors: BlogAuthor[];
      pages: Array<{
        category: BlogCategory;
        pages: number[];
      }>;
      allPages: number[];
    };
  };

  meta.set({ title: 'Sitemap', noIndex: true });
</script>

<h1>Sitemap</h1>

<h3>Pages</h3>

<ul>
  {#each data.pages as page}
    <li><a href={page.url}>{page.title}</a></li>
  {/each}
</ul>

<h3>Blog</h3>

<ul>
  <li><a href="/blog">Blog</a></li>

  <!-- Can be removed if we have content -->
  <li><a href="/blog/authors">Blog Authors</a></li>
  <li><a href="/blog/authors/id">Blog Authors</a></li>
  <li><a href="/blog/page/1">Blog Page</a></li>
  <li><a href="/blog/category">Blog Category</a></li>
  <li><a href="/blog/category/page">Blog Category Page</a></li>
  <li><a href="/blog/category/page/1">Blog Category Page</a></li>
  <li><a href="/blog/category/category">Blog Category Page</a></li>
</ul>

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

<h5>All Posts</h5>

{#each data.blog.allPages as page}
  <li><a href="/blog/page/{page}">{page}</a></li>
{/each}

{#each data.blog.pages as category}
  <h5>{category.category.name}</h5>

  <ul>
    {#each category.pages as page}
      <li><a href="/blog/categories/{category.category.id}/page/{page}">{page}</a></li>
    {/each}
  </ul>
{/each}
