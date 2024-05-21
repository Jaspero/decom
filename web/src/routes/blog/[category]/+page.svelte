<script lang="ts">
  import { page } from '$app/stores';
  import BlogSnippets from '$lib/blog/BlogSnippets.svelte';
  import Pagination from '$lib/Pagination.svelte';
  import Tabs from '$lib/tabs/Tabs.svelte';
  import TabsItem from '$lib/tabs/TabsItem.svelte';
  import type { BlogAuthor } from '$lib/types/blog/blog-author.interface';
  import type { BlogCategory } from '$lib/types/blog/blog-category.interface';
  import { meta } from '$lib/meta/meta.store';
  import Button from '$lib/Button.svelte';

  export let data: { categories: BlogCategory[]; page: BlogAuthor[]; pageSize: number };

  $: activeCat = data.categories.find((it) => it.id === $page.params.category);
  $: if (activeCat) {
    meta.set(activeCat.meta);
  }
</script>

<Tabs>
  <TabsItem href="/blog">All posts</TabsItem>
  {#each data.categories as category}
    <TabsItem href="/blog/{category.id}" active={activeCat?.id === category.id}>
      {category.name}
    </TabsItem>
  {/each}
</Tabs>

{#if data.page.length}
  <BlogSnippets articles={data.page} baseLink="/blog" baseAuthorLink="/blog/authors" />
{:else}
  <div class="max-w-2xl mx-auto">
    There are no articles currently.
    <div class="mt-2">
      <Button href="/">Return to home page</Button>
    </div>
  </div>
{/if}

<Pagination
  pages={data.pageSize}
  prefix={'/blog/' + $page.params.category + '/page/'}
  current={1}
/>
