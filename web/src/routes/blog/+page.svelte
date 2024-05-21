<script lang="ts">
  import Tabs from '$lib/tabs/Tabs.svelte';
  import TabsItem from '$lib/tabs/TabsItem.svelte';
  import Pagination from '$lib/Pagination.svelte';
  import BlogSnippets from '$lib/blog/BlogSnippets.svelte';
  import { meta } from '$lib/meta/meta.store';
  import type { BlogCategory } from '$lib/types/blog/blog-category.interface';
  import type { BlogArticle } from '$lib/types/blog/blog-article.interface';

  export let data: { categories: BlogCategory[]; page: BlogArticle[]; pageSize: number };

  meta.set({ title: 'Blog' });
</script>

<Tabs>
  <TabsItem href="/blog" active={true}>All posts</TabsItem>
  {#each data.categories as category}
    <TabsItem href="/blog/{category.id}">{category.name}</TabsItem>
  {/each}
</Tabs>

<BlogSnippets articles={data.page} baseLink="/blog" baseAuthorLink="/blog/authors" />

<Pagination pages={data.pageSize} prefix="/blog/page/" current={1} />
