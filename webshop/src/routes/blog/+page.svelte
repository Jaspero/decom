<script lang="ts">
  import Tabs from '$lib/tabs/Tabs.svelte';
  import TabsItem from '$lib/tabs/TabsItem.svelte';
  import Pagination from '$lib/Pagination.svelte';
  import BlogSnippets from '$lib/blog/BlogSnippets.svelte';
  import { meta } from '$lib/meta/meta.store';

  export let data: { categories: any[]; page: any[]; pageSize: number };

  meta.set({ title: 'Blog' });
</script>

<div class="banner">
  <div class="grid">
    <div class="col-8 col-s-10 col-xs-12">
      <h1>Blog</h1>
    </div>
  </div>
</div>

<div class="grid">
  <div class="col-8 col-s-10 col-xs-12">
    <Tabs>
      <TabsItem href="/blog" active={true}>All articles</TabsItem>
      {#each data.categories as category}
        <TabsItem href="/blog/{category.id}">{category.name}</TabsItem>
      {/each}
    </Tabs>

    <BlogSnippets articles={data.page} baseLink="/blog" baseAuthorLink="/blog/authors" />

    <Pagination pages={data.pageSize} prefix="/blog/page/" current={1} />
  </div>
</div>
