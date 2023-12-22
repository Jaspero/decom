<script lang="ts">
  import BlogAuthor from '$lib/blog/BlogAuthor.svelte';
  import BlogSnippet from '$lib/blog/BlogSnippet.svelte';
  import { cleanSlug } from '@jaspero/utils';
  import type { BlogArticle } from '$lib/types/blog/blog-article.interface';

  export let data: { articles: BlogArticle[]; author: BlogAuthor };

  const { articles, author } = data;

  // const title = author.meta?.title || author.name;
  // const structured = ldJson(author);
  // const { pathname } = $page.url;
</script>

{#if author}
  <div class="banner-light">
    <div class="grid">
      <div class="col-8 col-s-10-col-xs-12">
        <BlogAuthor
          type="about"
          name={author.name}
          link="/blog/authors/{cleanSlug(author.name)}"
          image={author.image}
          about={author.about}
        />
      </div>
    </div>
  </div>
{/if}

{#if articles}
  {#each articles as article}
    <div class="grid">
      <div class="col-8 col-s-10 col-xs-12">
        <BlogSnippet
          category={article.category}
          description={article.description}
          image={article.image}
          imageAlt={article.imageAlt}
          link="/self-care{article.categoryId ? '/' + article.categoryId : ''}/{article.id}"
          title={article.title}
        />
      </div>
    </div>
  {/each}
{/if}
