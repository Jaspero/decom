<script lang="ts">
  import { page } from '$app/stores';
  import { ldJson } from '$lib/utils/ld-json';
  import { META_SUFFIX, meta } from './meta.store';

  $: title = $meta.title + META_SUFFIX;
  $: url = $page.url.origin + $page.url.pathname;
  $: ogTitle = ($meta.og?.title || $meta.title) + META_SUFFIX;
  $: ogDescription = $meta.og?.description || $meta.description;
  $: structured = ldJson($meta.structured);
</script>

<svelte:head>
  <title>{title}</title>
  <meta property="og:url" content={url} />
  <meta property="twitter:url" content={url} />
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="og:title" content={ogTitle} />
  <meta property="twitter:title" content={ogTitle} />
  {#if $meta.author}
    <meta name="author" content={$meta.author} />
  {/if}
  {#if $meta.description}
    <meta name="description" content={$meta.description} />
  {/if}
  {#if $meta.keywords}
    <meta name="keywords" content={$meta.keywords} />
  {/if}
  {#if $meta.og?.type}
    <meta property="og:type" content={$meta.og?.type} />
  {/if}
  {#if ogDescription}
    <meta property="og:description" content={ogDescription} />
    <meta property="twitter:description" content={ogDescription} />
  {/if}
  {#if $meta.og?.image}
    <meta property="og:image" content={$meta.og.image} />
    <meta property="twitter:image" content={$meta.og.image} />
  {/if}
  {#if $meta.noIndex}
    <meta name="robots" content="noindex, nofollow" />
  {/if}
  {#if $meta.og?.articleAuthor}
    <meta property="article:author" content={$meta.og.articleAuthor} />
  {/if}
  {#if $meta.og?.articlePublishedTime}
    <meta property="article:published_time" content={$meta.og.articlePublishedTime} />
  {/if}
  {#if $meta.og?.articleModifiedTime}
    <meta property="article:modified_time" content={$meta.og.articleModifiedTime} />
  {/if}
  {#if $meta.og?.articleSection}
    <meta property="article:section" content={$meta.og.articleSection} />
  {/if}
  {#if $meta.og?.articleTag}
    <meta property="article:tag" content={$meta.og.articleTag} />
  {/if}
  {#if $meta.og?.profileFirstName}
    <meta property="profile:first_name" content={$meta.og.profileFirstName} />
  {/if}
  {#if $meta.og?.profileLastName}
    <meta property="profile:last_name" content={$meta.og.profileLastName} />
  {/if}
  {#if $meta.og?.profileUsername}
    <meta property="profile:username" content={$meta.og.profileUsername} />
  {/if}
  {@html structured}
</svelte:head>
