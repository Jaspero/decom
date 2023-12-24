<script lang="ts">
  import { collection, getCountFromServer, query, where } from 'firebase/firestore';
  import { db } from '$lib/utils/firebase';
  import { DateTime } from 'luxon';
  import { base64UrlEncode } from '@jaspero/utils';
  import Grid from '$lib/Grid.svelte';
  import GridCol from '$lib/GridCol.svelte';
  import Card from '$lib/Card.svelte';

  export let data: any;

  async function allComments() {
    const doc = await getCountFromServer(
      query(collection(db, 'blog-articles', data.id, 'blog-comments'))
    );

    return doc.data().count;
  }

  async function recentComments() {
    const doc = await getCountFromServer(
      query(
        query(collection(db, 'blog-articles', data.id, 'blog-comments')),
        where('createdOn', '>=', DateTime.now().minus({ days: 30 }).toISODate())
      )
    );

    return doc.data().count;
  }
</script>

<Grid>
  <GridCol span="12">
    Article Title:
    <Card>
      <slot slot="title">{data.title}</slot>
    </Card>
  </GridCol>
  <div class="counter">
    <span class="counter-number">
      {#await allComments()}
        -
      {:then count}
        {count}
      {/await}
    </span>
    <span class="counter-text">All comments</span>
    <a
      href="comments">View Comments</a
    >
  </div>
  <div class="counter">
    <span class="counter-number">
      {#await recentComments()}
        -
      {:then count}
        {count}
      {/await}
    </span>
    <span class="counter-text">Recent comments</span>
    <a
      href="comments?filters={base64UrlEncode({
        createdOnStart: DateTime.now().minus({ days: 30 }).toISODate()
      })}">View Comments</a
    >
  </div>
</Grid>

<svelte:head>
  <title>Article Information - Blog - Jaspero</title>
</svelte:head>
