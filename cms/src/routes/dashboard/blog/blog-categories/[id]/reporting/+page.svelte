<script lang="ts">
  import Card from '$lib/Card.svelte';
  import Grid from '$lib/Grid.svelte';
  import GridCol from '$lib/GridCol.svelte';
  import { CONFIG } from '$lib/consts/config.const';
  import { db } from '$lib/utils/firebase';
  import { base64UrlEncode } from '@jaspero/utils';
  import { collection, getCountFromServer, query, where } from 'firebase/firestore';
  import { DateTime } from 'luxon';

  export let data: any;

  async function allArticles() {
    const doc = await getCountFromServer(
      query(collection(db, 'blog-articles'), where('category', '==', data.id))
    );

    return doc.data().count;
  }

  async function recentArticles() {
    const doc = await getCountFromServer(
      query(
        collection(db, 'blog-articles'),
        where('category', '==', data.id),
        where('publicationDate', '>=', DateTime.now().minus({ days: 30 }).toISODate())
      )
    );

    return doc.data().count;
  }
</script>

<Grid>
  <GridCol span="12">
    Category Name:
    <Card>
      <slot slot="title">{data.name}</slot>
    </Card>
  </GridCol>
  <div class="counter">
    <span class="counter-number">
      {#await allArticles()}
        -
      {:then count}
        {count}
      {/await}
    </span>
    <span class="counter-text">All articles</span>
    <a
      href="/dashboard/blog/blog-articles?filters={base64UrlEncode({
        category: data.id
      })}">View Articles</a
    >
  </div>
  <div class="counter">
    <span class="counter-number">
      {#await recentArticles()}
        -
      {:then count}
        {count}
      {/await}
    </span>
    <span class="counter-text">Recent</span>
    <a
      href="/dashboard/blog/blog-articles?filters={base64UrlEncode({
        category: data.id,
        publicationDateStart: DateTime.now().minus({ days: 30 }).toISODate()
      })}">View Articles</a
    >
  </div>
</Grid>

<svelte:head>
  <title>Category Information - Blog - {CONFIG.title}</title>
</svelte:head>

<style lang="postcss">
  .counter {
    @apply flex flex-col items-center col-span-3;
  }
  .counter-number {
    @apply text-6xl text-secondary font-bold;
  }
</style>
