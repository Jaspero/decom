<script lang="ts">
  import BlogAuthor from '$lib/blog/BlogAuthor.svelte';
  import { cleanSlug } from '@jaspero/utils';
  import type { BlogArticle } from '$lib/types/blog/blog-article.interface';
  import {meta} from '$lib/meta/meta.store';

  export let data: BlogArticle;

  const { author, content, image, imageAlt } = data;

  meta.set(data.meta);
</script>

<div class="grid">
  <div class="col-8 col-s-10 col-xs-12">
    <p>{data.title}</p>
    {#if data.description}
      {data.description}
    {/if}

    <div class="flex fw-wrap">
      {#if author}
        <BlogAuthor
          type="read-more"
          name={author.name}
          image={author.image}
          link="/blog/authors/{cleanSlug(author.name)}"
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
          link="/blog/authors/{cleanSlug(author.name)}"
          image={author.image}
          about={author.about}
        />
      {/if}
    </div>
  </div>
</div>
