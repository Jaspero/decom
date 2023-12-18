<script lang="ts">
  import { page } from '$app/stores';
  import BlogAuthor from '$lib/blog/BlogAuthor.svelte';
  import BlogSnippet from '$lib/blog/BlogSnippet.svelte';
  import { cleanSlug } from '$lib/utils/clean-slug';
  import { ldJson } from '$lib/utils/ld-json';
  import ArrowRight from 'svelte-material-icons/ArrowRight.svelte';
  import Button from '$lib/Button.svelte';

  export let data: { articles: any[]; author: any };

  const { articles, author } = data;

  const title = author.meta?.title || author.name;
  const structured = ldJson(author);
  const { pathname } = $page.url;
</script>

{#if author}
  <div class="banner-light">
    <div class="grid">
      <div class="col-8 col-s-10-col-xs-12">
        <BlogAuthor
          type="about"
          name={author.name}
          link="/self-care-author/{cleanSlug(author.name)}"
          image={author.image}
          about={author.about}
        />
      </div>
    </div>
  </div>
{/if}

{#if articles}
  <Margin size="4" />
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
  <Margin size="4" />
{/if}

<Margin size="6" />

<div class="banner-light ta-center p-y-xl">
  <Text align="center" size="huge" weight="bold">More articles?</Text>

  <Margin size="2" />

  <Button href="/self-care" appearance="ghost" color="accent" size="large">
    Back to Self Care
    <slot slot="suffix">
      <ArrowRight />
    </slot>
  </Button>
</div>

<svelte:head>
  <title>{title} - GlycanAge</title>
  {#if author.meta?.description}<meta name="description" content={author.meta.description} />{/if}
  {#if author.meta?.keywords}<meta name="keywords" content={author.meta.keywords} />{/if}
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://glycanage.com{pathname}" />
  <meta property="og:title" content="{title} - GlycanAge" />
  {#if author.meta?.description}<meta
      property="og:description"
      content={author.meta.description}
    />{/if}
  <meta property="og:image" content={author?.image || '/images/ga-author-default.png'} />

  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://glycanage.com{pathname}" />
  <meta property="twitter:title" content="{title} - GlycanAge" />
  {#if author.meta?.description}<meta
      property="twitter:description"
      content={author.meta.description}
    />{/if}
  <meta property="twitter:image" content={author?.image || '/images/ga-author-default.png'} />
  {@html structured}
</svelte:head>
