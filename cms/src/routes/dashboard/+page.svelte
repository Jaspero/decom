<script lang="ts">
  import Card from '$lib/Card.svelte';
  import Grid from '$lib/Grid.svelte';
  import GridCol from '$lib/GridCol.svelte';
  import Link from '$lib/Link.svelte';
  import { CONFIG } from '$lib/consts/config.const';
  import { db } from '$lib/utils/firebase';
  import { collection, getCountFromServer } from 'firebase/firestore';
  import { onMount } from 'svelte';

  let data: {
    pages: number;
    forms: number;
    articles: number;
    authors: number;
    categories: number;
  };

  async function count(col: string) {
    const res = await getCountFromServer(collection(db, col));
    return res.data().count;
  }

  async function getData() {
    const [pages, forms, articles, authors, categories] = await Promise.all([
      count('pages'),
      count('forms'),
      count('blog-articles'),
      count('blog-authors'),
      count('blog-categories')
    ]);

    data = {
      pages,
      forms,
      articles,
      authors,
      categories
    };
  }

  onMount(() => {
    getData();
  });
</script>

{#if data}
  <section>
    <Grid autoRows={true}>
      <GridCol spanlg="6" span="12">
        <Card classes="h-full flex flex-col justify-between">
          <slot slot="emoji">💥</slot>
          <slot slot="title">Stranice</slot>
          <slot slot="footerAction">
            <Link href="/dashboard/pages/pages">Pregledaj sve</Link>
          </slot>

          <ul class="list-disc list-inside">
            <li>{data.pages} Stranica</li>
            <li>{data.forms} Formulara</li>
          </ul>
        </Card>
      </GridCol>

      <GridCol spanlg="6" span="12">
        <Card>
          <slot slot="emoji">🎈</slot>
          <slot slot="title">Blog</slot>
          <slot slot="footerAction">
            <Link href="/dashboard/blog/articles">Pregledaj sve</Link>
          </slot>

          <ul class="list-disc list-inside">
            <li>{data.articles} Članaka</li>
            <li>{data.authors} Autora</li>
            <li>{data.categories} Kategorija</li>
          </ul>
        </Card>
      </GridCol>
    </Grid>
  </section>
{/if}

<svelte:head>
  <title>Dashboard - {CONFIG.title}</title>
</svelte:head>
