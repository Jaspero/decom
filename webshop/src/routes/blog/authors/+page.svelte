<script lang="ts">
  export let data: { authors: any[] };
</script>

<h1>Authors</h1>

{#each data.authors as author}
  <a href="/blog/authors/{author.id}">
    <p>{author.name}</p>
    {#if author.image}
      <img src={author.image} alt={author.name} />
    {/if}
    {#if author.about}
      {@html author.about}
    {/if}
  </a>
{/each}
