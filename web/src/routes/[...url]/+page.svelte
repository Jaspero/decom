<script lang="ts">
  import { ldJson } from '$lib/utils/ld-json';
  import { classList } from '$lib/actions/class-list';
  import { CONFIG } from '$lib/consts/config.const';
  import Popup from './components/Popup.svelte';
  import Submit from './components/Submit.svelte';

  export let data: {
    content: string;
    title: string;
    image?: string;
    meta: {
      description: string;
      keywords: string;
      structured: string;
      title: string;
    };
    renderLayout?: boolean;
  };

  const title = data.meta?.title || data.title;
  const structured = ldJson(data.meta?.structured);
  const classes: string[] = [];

  if (!data.renderLayout) {
    classes.push('standalone');
  }
</script>

{@html data.content}

<svelte:head>
  <title>{title} - {CONFIG.title}</title>
  {#if data.meta?.description}<meta name="description" content={data.meta.description} />{/if}
  {#if data.meta?.keywords}<meta name="keywords" content={data.meta.keywords} />{/if}

  <meta property="og:title" content="{title} - {CONFIG.title}" />
  {#if data.meta?.description}<meta
      property="og:description"
      content={data.meta.description}
    />{/if}
  {#if data.image}<meta property="og:image" content={data.image} />{/if}

  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:title" content="{title} - {CONFIG.title}" />
  {#if data.meta?.description}<meta
      property="twitter:description"
      content={data.meta.description}
    />{/if}
  {#if data.image}<meta property="twitter:image" content={data.image} />{/if}
  {@html structured}
</svelte:head>
<svelte:body use:classList={classes} />
