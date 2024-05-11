<svelte:options customElement={{ tag: 'column-actions', shadow: 'none' }} />

<script lang="ts">
  import { random } from '@jaspero/utils';
  import { collection as col, deleteDoc, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
  import DropdownButton from '../DropdownButton.svelte';
  import DropdownMenuButton from '../DropdownMenuButton.svelte';
  import { alertWrapper } from '../utils/alert-wrapper';
  import { confirmation } from '../utils/confirmation';
  import { db } from '../utils/firebase';

  export let id: string;
  export let collection: string;
  export let prefix: string;
	export let actions = 'edit,duplicate,delete';
	
	
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
    const [ref, contentRefs] = await Promise.all([
      getDoc(doc(db, collection, id)),
      getDocs(col(db, collection, id, 'content'))
    ]);

    const newId = id.split('-')[0] + '-' + random.string(24);

    console.log('newId', newId);

    await alertWrapper(
      Promise.all([
        setDoc(doc(db, collection, newId), ref.data()),
        ...contentRefs.docs.map((d) =>
          setDoc(doc(db, collection, newId, 'content', d.id), d.data())
        )
      ]).then(() => {
        const asyncTableEl = document.querySelector('jp-async-table') as any;

        asyncTableEl.addRow({
          id: newId,
          ...ref.data()
        });
      }),
      `Item duplicated successfully`
    );
  }
</script>

<DropdownButton variant="icon">
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
