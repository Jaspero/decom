<svelte:options customElement={{ tag: 'pb-submit', shadow: 'none' }} />

<script lang="ts">
  import Button from '$lib/Button.svelte';
  import { addDoc, collection } from 'firebase/firestore';
  import { db } from '$lib/firebase';
  import { notificationWrapper } from '$lib/notification/notification';
  import { goto } from '$app/navigation';

  export let label: string;
  export let form: string;
  export let redirect: string | undefined;
  export let success: string;
  export let error: string;

  let button: Button;
  let connected = false;
  let loading = false;

  $: if (!connected && button?.$$.root) {
    bindForm();
  }

  function bindForm() {
    connected = true;

    const formEl = button?.$$.root.closest('form');

    formEl.addEventListener('submit', async (event) => {
      event.preventDefault();

      if (loading) {
        return;
      }

      loading = true;

      const formData = new FormData(formEl);
      const data = Object.fromEntries(formData);

      await notificationWrapper(
        addDoc(collection(db, 'landing-page-forms', form, 'landing-page-form-responses'), {
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

      loading = false;
    });
  }
</script>

<Button type="submit" bind:this={button} {loading}>{label}</Button>
