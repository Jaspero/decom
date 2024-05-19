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
    Article Info:
    <Card>
      <slot slot="title">
        <div class="">
          <p class="title celine">{data.title}</p>
          <p class="description dm-sans">{data.description}</p>
          <img src={data.image} alt={data.name} />
        </div>
      </slot>
      <slot>{@html data.content}</slot>
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
    <a href="comments">View Comments</a>
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
  <title>Article Information - Blog - {CONFIG.title}</title>
</svelte:head>

<style lang="postcss">
  .title {
    @apply text-[#5F765A] text-[78px] leading-[78px] lg:text-[68px] lg:leading-[65px] md:text-[48px] md:leading-[normal] sm:text-[38px] font-[400] lg:w-full;
  }

  .description {
    @apply font-[400] text-[20px] my-[20px] leading-[28px] sm:text-[16px] sm:my-[10px] sm:leading-[26px] text-[#3C3C3C];
  }
</style>
