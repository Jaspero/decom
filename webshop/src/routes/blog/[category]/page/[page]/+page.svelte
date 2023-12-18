<script lang="ts">
  import Tabs from '$lib/tabs/Tabs.svelte';
  import TabsItem from '$lib/tabs/TabsItem.svelte';
  import Pagination from '$lib/Pagination.svelte';
  import BlogSnippets from '$lib/blog/BlogSnippets.svelte';
  import { page } from '$app/stores';

  export let data: { categories: any[]; page: any[]; pageSize: number };

  $: activeCat = data.categories.find((it) => it.id === $page.params.category);
</script>

<div class="grid">
  <div class="col-8 col-s-10 col-xs-12">
    <Tabs>
      <TabsItem href="/self-care">All posts</TabsItem>
      {#each data.categories as category}
        <TabsItem href="/self-care/{category.id}" active={activeCat.id === category.id}
          >{category.name}</TabsItem
        >
      {/each}
    </Tabs>

    <BlogSnippets articles={data.page} baseLink="/self-care" baseAuthorLink="/self-care-author" />

    <Pagination
      pages={data.pageSize}
      prefix={'/self-care/' + $page.params.category + '/page/'}
      current={parseInt($page.params.page, 10)}
    />

  </div>
</div>
