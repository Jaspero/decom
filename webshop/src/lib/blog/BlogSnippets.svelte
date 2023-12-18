<script lang="ts">
  import { cleanSlug } from '@jaspero/utils';
  import BlogSnippet from './BlogSnippet.svelte';

  export let articles: any[] = [];
  export let baseLink: string;
  export let baseAuthorLink = '';
</script>

{#each articles as article}
  <BlogSnippet
    author={article.author}
    authorLink="{baseAuthorLink}/{cleanSlug(article.author?.name)}"
    category={article.category}
    description={article.description}
    image={article.image}
    imageAlt={article.imageAlt || 'Blog image'}
    link="{baseLink}{article.categoryId ? '/' + article.categoryId : ''}/{article.id}"
    title={article.title}
    position={article.position}
  />
{/each}
