<script lang="ts">
  export let image: string;
  export let imageAlt: string;
  export let category: string;
  export let title: string;
  export let description = '';
  export let link: string;
  export let author: any = null;
  export let authorLink = '';
</script>

<a href={link} class="article">
  <header>
    {#if image}
      <img class="article-image" src={image} alt={imageAlt} />
    {:else}
      <img class="article-image" src="/images/dummy-img.jpg" alt="Couldn't load or is missing" />
    {/if}
    {#if category}
      <span class="article-category">{category}</span>
    {/if}
  </header>

  <main>
    <p class="article-title">{title}</p>
    {#if description}
      <p>{description}</p>
    {/if}
    <div class="flex-1 flex items-end justify-between gap-x-4 gap-x-2">
      <span class="link-to-article">Read full article</span>
      {#if author}
        <span class="opacity-75">
          By <a class="article-author" href={authorLink}>{author.name}</a>
        </span>
      {/if}
    </div>
  </main>
</a>

<style lang="postcss">
  .article {
    @apply flex shadow rounded;
  }

  .article:hover .link-to-article {
    color: var(--primary-color);
  }

  .article header {
    @apply relative flex-[3];
  }

  .article-category {
    @apply absolute top-4 left-4 bg-white text-black rounded-full px-2 py-1 text-sm font-bold shadow;
  }

  .article main {
    @apply flex-[2] p-4 flex flex-col;
  }

  .article-title {
    @apply font-bold text-lg;
  }

  .article-author {
    @apply underline font-bold;
  }

  .article-author:hover {
    color: var(--primary-color);
  }

  .link-to-article {
    @apply underline transition-colors;
  }
</style>
