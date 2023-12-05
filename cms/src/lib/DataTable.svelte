<script lang="ts">
  import type { QueryDocumentSnapshot } from 'firebase/firestore';
  import { collection, getDocs, query, orderBy, limit, startAfter } from 'firebase/firestore';
  import { onMount } from 'svelte';
  import { db } from './utils/firebase';
  import '@jaspero/web-components/dist/async-table.wc';
  import { goto } from '$app/navigation';

  export let col: string;
  export let headers: any[];
  export let pageSize = 10;
  export let baseLink: string;
  export let initialSort: {
    key: string;
    direction: 'asc' | 'desc';
  } | null = null;

  let el: HTMLDivElement;
  let ref: QueryDocumentSnapshot<any> | null = null;

  async function get(sort?: any) {
    const queries: any[] = [collection(db, col)];

    if (sort) {
      queries.push(orderBy(sort.key.replace('/', ''), sort.direction));
    }

    const snap = await getDocs(
      // @ts-ignore
      query(...queries, limit(pageSize + 1))
    );

    ref = snap.docs[snap.docs.length - 1];

    return {
      hasMore: snap.docs.length > pageSize,
      rows: snap.docs.slice(0, pageSize).map((doc) => ({
        id: doc.id,
        ...(doc.data() as any)
      }))
    };
  }

  async function loadMore(sort?: any) {
    const queries: any[] = [collection(db, col)];

    if (sort) {
      queries.push(orderBy(sort.key.replace('/', ''), sort.direction));
    }

    if (ref) {
      queries.push(startAfter(ref));
    }

    const snap = await getDocs(
      // @ts-ignore
      query(...queries, limit(pageSize + 1))
    );

    ref = snap.docs[snap.docs.length - 1];

    return {
      hasMore: snap.docs.length > pageSize,
      rows: snap.docs.slice(0, pageSize).map((doc) => ({
        id: doc.id,
        ...(doc.data() as any)
      }))
    };
  }

  onMount(() => {
    const instanceEl = document.createElement('jp-async-table') as any;

    instanceEl.service = { get, loadMore };
    instanceEl.headers = headers;

    if (initialSort) {
      instanceEl.sort = initialSort;
    }

    instanceEl.addEventListener('rowClick', (e: any) => {
      const { row } = e.detail;
      goto(baseLink + row.id);
    });

    el.appendChild(instanceEl);
  });
</script>

<div bind:this={el} />
