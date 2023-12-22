<script lang="ts">
  export let image: string;
  export let imageAlt: string;
  export let category: string;
  export let title: string;
  export let description = '';
  export let link: string;
  export let author: any = null;
  export let authorLink = '';
  export let position = '50% 50%';
</script>

<article>
  <header>
    <div class="image">
      <img src={image} alt={imageAlt} style="object-position: {position}" />
      {#if category}
        <span>{category}</span>
      {/if}
    </div>
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
