<script lang="ts">
  import { page } from '$app/stores';
  import BlogAuthor from '$lib/blog/BlogAuthor.svelte';
  import { cleanSlug } from '$lib/utils/clean-slug';
  import { ldJson } from '$lib/utils/ld-json';
  import Button from '$lib/Button.svelte';

  export let data: any;

  const { author, content, image, imageAlt } = data;
</script>

<div class="grid">
  <div class="col-8 col-s-10 col-xs-12">
    <div class="bar">
      <img src="/images/glycanage-g.svg" alt="" />
      GlycanAge is a biological age test paired with expert advice to help guide your wellness.
    </div>
  </div>
</div>

<div class="grid">
  <div class="col-8 col-s-10 col-xs-12">
    <p>{data.title}</p>
    {data.description}

    <div class="flex fw-wrap">
      {#if author}
        <BlogAuthor
          type="read-more"
          name={author.name}
          image={author.image}
          link="/self-care-author/{cleanSlug(author.name)}"
        />
      {/if}
    </div>
  </div>
</div>

<div class="grid">
  <div class="col-8 col-s-10 col-xs-12">
    {#if image}
      <img src={image} alt={imageAlt} />
    {/if}

    <hr />

    <div class="article-global-selector">
      {@html content}
    </div>

    <div class="flex fw-wrap">
      {#if author}
        <BlogAuthor
          type="read-more"
          name={author.name}
          link="/self-care-author/{cleanSlug(author.name)}"
          image={author.image}
          about={author.about}
        />
      {/if}
    </div>
  </div>
</div>

<!-- <style lang="scss">
  .bar {
    position: relative;
    padding: 1rem 0 1rem 4.5rem;
    background-color: var(--fg);
    border-radius: 1rem;

    img {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(-50%, -50%);
    }
  }

  img:not(.bar img) {
    width: calc(100% + 4rem);
    max-width: calc(100% + 4rem);
    border-radius: 1.5rem;
    margin: 2rem -2rem;
    color: transparent;
    height: auto;
  }

  hr {
    margin: 4rem 0;
    border-top: 2px dashed #cdd7d2;
    border-bottom: none;
  }

  .article-global-selector {
    :global(img) {
      width: 100%;
      border-radius: 1.5rem;
      margin: 2rem 0;
      color: transparent;
      height: auto;
    }
    :global(p) {
      margin: 1em 0;
      font-size: 1.25rem;
    }
    :global(h2) {
      margin: 2em 0 0.75em;
      font-size: 2rem;
      font-weight: 400;
    }
    :global(h3) {
      margin: 2em 0 0.75em;
      font-size: 1.75rem;
      font-weight: 400;
    }
    :global(h4) {
      margin: 1em 0;
      font-size: 1.375rem;
    }
    :global(a) {
      color: var(--accent);
      font-weight: bold;
      text-decoration: underline;
    }
    :global(ol), :global(ul) {
      word-break: break-all;
    }
  }
</style> -->
