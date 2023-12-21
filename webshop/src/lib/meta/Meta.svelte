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
  {@html structured}
</svelte:head>
