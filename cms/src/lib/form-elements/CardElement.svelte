<svelte:options
  customElement={{
    tag: 'card-element',
    shadow: 'none',
    extend: (customElementConstructor) => {
      return class extends customElementConstructor {
        constructor() {
          super();
        }

        setInstance(instance) {
          this.instance = instance;
        }
      };
    }
  }}
/>

<script lang="ts">
  import { ModularSchema, type ModularInstance, ModularView } from '@jaspero/modular';
  import { onMount } from 'svelte';

  export let title: string | null = null;
  export let description: string | null = null;
  export let classes: string | null = null;
  export let instance: ModularInstance;
  export let items: any[];

  let containerElement: HTMLDivElement;

  onMount(() => {
    const schema = new ModularSchema({});
    const view = new ModularView({
      componentPrefix: '',
      schema,
      views: [
        {
          items
        }
      ]
    });

    view.render({
      parentElement: containerElement,
      instance
    });
  });
</script>

<div class="card {classes}">
  {#if title}
    <h2 class="px-2 pt-2">{title}</h2>
  {/if}

  {#if description}
    <p>{description}</p>
  {/if}

  <div bind:this={containerElement} />
</div>

<style lang="postcss">
  .card {
    @apply p-2 rounded border;
    border-color: var(--border-primary);
  }
</style>
