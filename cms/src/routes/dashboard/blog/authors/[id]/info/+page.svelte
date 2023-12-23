<script lang="ts">
  import { collection, getCountFromServer, query, where } from 'firebase/firestore';
  import { db } from '$lib/utils/firebase';
  import { DateTime } from 'luxon';
  import { base64UrlEncode } from '@jaspero/utils';

  export let data: any;

  async function allArticles() {
    const doc = await getCountFromServer(
      query(collection(db, 'blog-articles'), where('author', '==', data.id))
    );

    return doc.data().count;
  }

  async function recentArticles() {
    const doc = await getCountFromServer(
      query(
        collection(db, 'blog-articles'),
        where('author', '==', data.id),
        where('publicationDate', '>=', DateTime.now().minus({ days: 30 }).toISODate())
      )
    );

    return doc.data().count;
  }
</script>

<div>
  <span>All Articles</span>
  <span>
    {#await allArticles()}
      -
    {:then count}
      {count}
    {/await}
  </span>
  <a href="/dashboard/blog/articles?filters={base64UrlEncode({ author: data.id })}">View Articles</a
  >
</div>

<div>
  <span>Recent Articles</span>
  <span>
    {#await recentArticles()}
      -
    {:then count}
      {count}
    {/await}
  </span>
  <a
    href="/dashboard/blog/articles?filters={base64UrlEncode({
      author: data.id,
      publicationDateStart: DateTime.now().minus({ days: 30 }).toISODate()
    })}">View Articles</a
  >
</div>

<h2>{data.name}</h2>

<img src={data.image || '/images/placeholder.png'} alt={data.name} />

<p>About</p>
<div>
  {#if data.about}
    {@html data.about}
  {:else}
    -
  {/if}
</div>

<svelte:head>
  <title>Author Information - Blog - Jaspero</title>
</svelte:head>
