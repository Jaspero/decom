<svelte:options customElement={{ tag: 'column-actions', shadow: 'none' }} />

<script lang="ts">
  import { random } from '@jaspero/utils';
  import { collection as col, deleteDoc, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
  import DropdownButton from '../DropdownButton.svelte';
  import DropdownMenuButton from '../DropdownMenuButton.svelte';
  import { alertWrapper } from '../utils/alert-wrapper';
  import { confirmation } from '../utils/confirmation';
  import { db } from '../utils/firebase';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  export let id: string;
  export let collection: string = $page.params.collection;
  export let prefix: string = $page.params.collection;
  export let actions = 'edit,duplicate,delete';
  export let duplicateSubCollections: string;
  
  let links: ColumnActionsConfigLink[];

  $: shownActions = actions.split(',');
  $: link = prefix ? [prefix, id].join('/') : id;

  async function deleteItem() {
    confirmation(async ({ confirmed }) => {
      if (!confirmed) {
        return;
      }

      await alertWrapper(
        deleteDoc(doc(db, collection, id)).then(() => {
          const asyncTableEl = document.querySelector('jp-async-table') as any;

          asyncTableEl.removeRow(id);
        }),
        `Item deleted successfully`
      );
    });
  }

  async function duplicate() {
    const subCollections = (duplicateSubCollections && duplicateSubCollections.split(',')) || [];

    const [ref, ...contentRefs] = await Promise.all([
      getDoc(doc(db, collection, id)),
      ...subCollections.map((sub) => getDocs(col(db, collection, id, sub)))
    ]);

    const newId = id.split('-')[0] + '-' + random.string(24);
    const toExec = [setDoc(doc(db, collection, newId), ref.data())];

    if (contentRefs.length) {
      contentRefs.forEach((ref, index) =>
        ref.docs.forEach(d =>
          toExec.push(setDoc(doc(db, collection, newId, subCollections[index], d.id), d.data()))
        )
      );
    }

    await alertWrapper(
      Promise.all(toExec).then(() => {
        const asyncTableEl = document.querySelector('jp-async-table') as any;

        asyncTableEl.addRow({
          id: newId,
          ...ref.data()
        });
      }),
      `Item duplicated successfully`
    );
  }

  onMount(() => {

    if (window.columnActions?.[id]) {
      links = window.columnActions[id].links || [];
    }
  })
</script>

<DropdownButton variant="icon">
  {#each links as link}
    <DropdownMenuButton href={link.href}>
      <slot slot="icon">
        <span class="material-symbols-outlined">{link.icon || 'link'}</span>
      </slot>
      {link.label}
    </DropdownMenuButton>
  {/each}
  {#each shownActions as action}
    {#if action === 'edit'}
      <DropdownMenuButton href={link}>
        <slot slot="icon">
          <span class="material-symbols-outlined">edit</span>
        </slot>
        Edit
      </DropdownMenuButton>
    {:else if action === 'duplicate'}
      <DropdownMenuButton on:click={duplicate}>
        <slot slot="icon">
          <span class="material-symbols-outlined">content_copy</span>
        </slot>
        Duplicate
      </DropdownMenuButton>
    {:else if action === 'delete'}
      <DropdownMenuButton on:click={deleteItem}>
        <slot slot="icon">
          <span class="material-symbols-outlined">delete</span>
        </slot>
        Delete
      </DropdownMenuButton>
    {/if}
  {/each}
</DropdownButton>
