<svelte:options accessors />

<script lang="ts">
  import '@jaspero/web-components/dist/input.wc';
  import '@jaspero/web-components/dist/select.wc';
  import '@jaspero/web-components/dist/multiselect.wc';
  import '@jaspero/web-components/dist/datepicker.wc';
  import '@jaspero/web-components/dist/ckeditor.wc';
  import '@jaspero/web-components/dist/textarea.wc';
  import '@jaspero/web-components/dist/checkbox.wc';
  import '@jaspero/web-components/dist/file-upload.wc';
  import '@jaspero/web-components/dist/file-list.wc';
  import '@jaspero/web-components/dist/toggle.wc';
  import '@jaspero/web-components/dist/chips.wc';
  import '@jaspero/web-components/dist/review-stars.wc';

  import { ModularSchema, ModularView } from '@jaspero/modular';
  import { onMount } from 'svelte';

  // Needs to be imported so the components register
  import './form-elements/form-elements.ts';

  export let items: any[] = [];
  export let value: any = {};
  export let render: any = null;
  export let id = '';
  export let container: string | null = null;

  let containerElement: HTMLDivElement;

  onMount(() => {
    const schema = new ModularSchema({});
    const instance = schema.createInstance(value);

    const view = new ModularView({
      componentPrefix: '',
      schema,
      views: [
        {
          ...(container && { container }),
          ...(id && { id }),
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
