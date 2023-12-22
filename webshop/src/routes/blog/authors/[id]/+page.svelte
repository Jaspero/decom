<script lang="ts">
  import BlogAuthor from '$lib/blog/BlogAuthor.svelte';
  import BlogSnippet from '$lib/blog/BlogSnippet.svelte';
  import { cleanSlug } from '@jaspero/utils';
  import type { BlogArticle } from '$lib/types/blog/blog-article.interface';
  import type { BlogAuthor as BlogAuthorType } from '$lib/types/blog/blog-author.interface';
  import {meta} from '$lib/meta/meta.store';

  export let data: { articles: BlogArticle[]; author: BlogAuthorType };

  const { articles, author } = data;

  meta.set(data.author.meta);
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
