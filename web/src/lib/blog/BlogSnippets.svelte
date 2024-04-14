<script lang="ts">
  import { cleanSlug } from '@jaspero/utils';
  import BlogSnippet from './BlogSnippet.svelte';

  export let articles: any[] = [];
  export let baseLink: string;
  export let baseAuthorLink = '';
</script>

<div class="snippets">
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
    />
  {/each}
</div>

<style lang="postcss">
  .snippets {
    @apply flex flex-col gap-8 max-w-2xl mx-auto;
  }
</style>