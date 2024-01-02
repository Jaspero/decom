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

<article>
  <header>
    {#if image}
      <img src={image} alt={imageAlt} />
    {/if}
    {#if category}
      <span>{category}</span>
    {/if}
  </header>

  <main>
    <p>{title}</p>
    {#if description}
      <p>{description}</p>
    {/if}
    {#if author}
      <address>
        By <a href={authorLink}>{author.name}</a>
      </address>
    {/if}
  </main>

  <a href={link} class="cta">Read full article</a>
</article>
