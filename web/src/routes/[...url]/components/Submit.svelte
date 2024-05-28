<svelte:options customElement={{ tag: 'pb-submit', shadow: 'none' }} />

<script lang="ts">
  import { addDoc, collection } from 'firebase/firestore';
  import { db } from '$lib/utils/firebase';
  import { goto } from '$app/navigation';
  import { alertWrapper } from '$lib/utils/alert-wrapper';

  export let id: string;
  export let label: string;
  export let form: string;
  export let redirect = '';
  export let success: string;
  export let error: string;

  let button: HTMLButtonElement;
  let connected = false;
  let loading = false;

  $: if (!connected && button) {
    bindForm();
  }

  function bindForm() {
    connected = true;

    const formEl = button?.closest('form') as HTMLFormElement;

    formEl.addEventListener('submit', async (event) => {
      event.preventDefault();

      if (loading) {
        return;
      }

      loading = true;

      const formData = new FormData(formEl);
      const data = Object.fromEntries(formData);

      await alertWrapper(
        addDoc(collection(db, 'forms', form, 'form-responses'), {
          createdOn: new Date().toISOString(),
          ...data
        }),
        success,
        error
      );

      if (redirect) {
        if (redirect.startsWith('http')) {
          window.open(redirect, '_self');
        } else {
          goto(redirect);
        }
      }

      formEl.reset();

      loading = false;
    });
  }
</script>

<button type="submit" bind:this={button} class:loading={loading}>{label}</button>

<style>
  button {
    background-color: var(--primary);
    color: var(--primary-contrast);
    border-radius: var(--border-radius);
    padding: .5rem 1rem;
    font-size: 1.2rem;
  }

  .loading {
    pointer-events: none;
  }
</style>