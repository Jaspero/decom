<script lang="ts">
  import '@jaspero/web-components/dist/input.wc';
  import '@jaspero/web-components/dist/image-upload.wc';

  import { ModularInstance, ModularSchema, ModularView, type View } from '@jaspero/modular';
  import { onMount } from 'svelte';

  export let items: any[] = [];
  export let value: any = {};

  export let render: any;

  let containerElement: HTMLDivElement;

  onMount(() => {
    const schema = new ModularSchema({});
    const instance = schema.createInstance(value);

    const view = new ModularView({
      componentPrefix: '',
      schema,
      views: [
        {
          items
        }
      ]
    });

    render = view.render({
      parentElement: containerElement,
      instance
    });

    render.addEventListener('change', (change) => {
      value = change;
    });
  });
</script>

<div bind:this={containerElement} />
