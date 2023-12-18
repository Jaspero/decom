<script lang="ts">
  export let image: string;
  export let imageAlt: string;
  export let category: string;
  export let title: string;
  export let description: string;
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
    <p>{description}</p>
    {#if author}
      <address>
        By <a href={authorLink}>{author.name}</a>
      </address>
    {/if}
  </main>

  <a href={link} class="cta">Read full article</a>
</article>

<!-- <style>
  article {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    border: 1px solid transparent;
    border-radius: 1rem;
    transition: 0.35s;

    &:hover {
      box-shadow: 0 0.5rem 1rem #09371f1a;
      border-color: #cdd7d2;
    }
  }

  header {
    flex: 1 1 320px;
  }

  .image {
    position: relative;
    height: 0;
    padding-bottom: 75%;

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 1rem;
    }

    span {
      position: absolute;
      top: 0;
      left: 0;
      margin: 1rem;
      padding: 0 0.5rem;
      font-weight: bold;
      background-color: var(--bg);
      border-radius: 999px;
    }
  }

  main {
    flex: 1 1 32ch;
    padding-left: 1.5rem;
  }

  address {
    font-size: 0.875rem;
    font-style: normal;
    color: var(--text-lighter);

    a {
      z-index: 1;
      position: relative;
      font-weight: normal;

      &:hover {
        text-decoration: underline;
        color: var(--accent);
      }
    }
  }

  .cta {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: transparent;
  }
</style> -->
