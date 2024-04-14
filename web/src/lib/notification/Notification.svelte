<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { notification } from './notification.ts';

  function clear() {
    notification.set(null);
  }

  onMount(() => {
    const unSub = notification.subscribe((value) => {
      if (value) {
        setTimeout(clear, value.duration || 5000);
      }
    });

    return () => {
      unSub();
    };
  });
</script>

{#if $notification}
  <aside transition:fade={{ duration: 200 }}>
    <main>
      {#if $notification.type === 'success'}
        <img src="/images/success.svg" alt="Success" width="32" height="32" />
      {:else if $notification.type === 'error'}
        <img src="/images/error.svg" alt="Error" width="32" height="32" />
      {:else}
        <img src="/images/info.svg" alt="Info" width="32" height="32" />
      {/if}
      <section>
        <h1>{$notification.title || 'Notification'}</h1>
        <p>{$notification.content}</p>
      </section>
    </main>
    <hr />
    <footer>
      {#if $notification.click}
        <button on:click={$notification.click}>{$notification.action}</button>
      {/if}
      <button on:click={clear}>Dismiss</button>
    </footer>
  </aside>
{/if}

<style>
  aside {
    position: fixed;
    z-index: 10005;
    top: 5rem;
    right: 1rem;
    margin: 1rem;
    display: flex;
    background: var(--bg);
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border-radius: 1rem;
  }

  main {
    display: flex;
    align-items: center;
    padding: 1rem 1rem 1rem 1.5rem;
  }

  img {
    width: 32px;
    height: 32px;
    margin-right: 1rem;
    flex-shrink: 0;
  }

  section {
    font-size: 0.875rem;
    max-width: 40ch;
  }

  h1 {
    margin: 0 0 0.15rem;
    font-size: inherit;
    font-weight: bold;
  }

  p {
    margin: 0;
    font-size: inherit;
  }

  hr {
    margin: 0;
    border: none;
    border-right: 1px solid #cdd7d2;
  }

  footer {
    display: flex;
    flex-direction: column;
  }

  button {
    font-family: inherit;
    font-size: 0.75rem;
    padding: 0.5rem 1rem;
    background: none;
    font-weight: bold;
    color: var(--primary);
    border: none;
    flex: 1;
    cursor: pointer;
  }

  button:hover,
  button:focus {
    background: var(--primary);
    color: var(--primary-c);
  }

  button + button {
    border-top: 0.1rem solid var(--fg-3);
  }
</style>
