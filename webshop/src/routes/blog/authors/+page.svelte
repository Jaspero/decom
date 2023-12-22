<script lang="ts">
  import {META_SUFFIX, meta} from '$lib/meta/meta.store';

  export let data: { authors: any[] };

  meta.set({
    title: 'Authors - Blog ' + META_SUFFIX
  });
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
