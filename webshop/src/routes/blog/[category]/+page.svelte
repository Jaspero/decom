<script lang="ts">
  import { page } from '$app/stores';
  import BlogSnippets from '$lib/blog/BlogSnippets.svelte';
  import Pagination from '$lib/Pagination.svelte';
  import Tabs from '$lib/tabs/Tabs.svelte';
  import TabsItem from '$lib/tabs/TabsItem.svelte';
  import type { BlogAuthor } from '$lib/types/blog/blog-author.interface';
  import type { BlogCategory } from '$lib/types/blog/blog-category.interface';
  import { meta } from '$lib/meta/meta.store';

  export let data: { categories: BlogCategory[]; page: BlogAuthor[]; pageSize: number };

  $: activeCat = data.categories.find((it) => it.id === $page.params.category);
  $: if (activeCat) {
    meta.set(activeCat.meta);
  }
</script>

<div class="banner">
  <div class="grid">
    <div class="col-8 col-s-10 col-xs-12">
      <h2>Blog</h2>
    </div>
  </div>
</div>

<div class="grid">
  <div class="col-8 col-s-10 col-xs-12">
    <Tabs>
      <TabsItem href="/blog">All posts</TabsItem>
      {#each data.categories as category}
        <TabsItem href="/blog/{category.id}" active={activeCat?.id === category.id}>
          {category.name}
        </TabsItem>
      {/each}
    </Tabs>

    <BlogSnippets articles={data.page} baseLink="/blog" baseAuthorLink="/blog/authors" />

    <Pagination
      pages={data.pageSize}
      prefix={'/blog/' + $page.params.category + '/page/'}
      current={1}
    />
  </div>
</div>
