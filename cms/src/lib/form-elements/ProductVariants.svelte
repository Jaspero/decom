<svelte:options
  customElement={{
    tag: 'product-variants',
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
  import { ModularInstance } from '@jaspero/modular';
  import { onMount } from 'svelte';
  import { generateSlug } from '../utils/generate-slug';
  import FormModule from '../FormModule.svelte';
  import Dialog from '../Dialog.svelte';
  import Button from '../Button.svelte';
  import { BucketImageService } from '../services/image.service';
  import { quillFiled } from '../form-fields/quill.field';

  interface Variant {
    key: string;
    label: string;
    price: number | null;
    quantity: number | null;
    sku: string;
    barcode: string;
    content: string;
    gallery: string[];
  }

  export let instance: ModularInstance;

  const imageService = new BucketImageService();

  imageService.prefix = 'products/';
  imageService.metadata = [
    {
      height: 1000,
      width: 1000,
      filePrefix: 'thumb_m_',
      folder: '/products/generated'
    },
    {
      filePrefix: 'thumb_s_',
      width: 500,
      height: 500,
      folder: '/products/generated'
    }
  ];

  const variantItems = [
    {
      component: 'jp-input',
      field: '/price',
      options: {
        label: 'Price',
        type: 'number'
      }
    },
    {
      component: 'jp-input',
      field: '/quantity',
      options: {
        label: 'Quantity',
        type: 'number'
      }
    },
    {
      component: 'jp-input',
      field: '/sku',
      options: {
        label: 'SKU'
      }
    },
    {
      component: 'jp-input',
      field: '/barcode',
      options: {
        label: 'Barcode'
      }
    },
    quillFiled('products', 'content', 'Content'),
    {
      component: 'jp-file-list',
      field: '/gallery',
      options: {
        label: 'Gallery',
        service: imageService
      }
    }
  ];

  let formModule: FormModule;
  let variants: Array<Variant> = [];
  let optionSets: Array<{
    label: string;
    options: string[];
  }> = [];
  let variantDialog = false;
  let selectedVariant: Variant;

  function addOptionSet() {
    optionSets = [
      ...optionSets,
      {
        label: '',
        options: []
      }
    ];
  }

  $: {
    const sets = [...optionSets];
    const segments: Array<string[]> = [];

    for (const set of sets) {
      const options = set.options;
      const setKey = generateSlug(set.label);

      segments.push(
        options.map((option) =>
          [
            setKey,

            /**
             * Since we use "_" as a separator in the id we need to replace it
             * if found within the option it self
             */
            option.replace(/_/g, '-')
          ].join(':')
        )
      );
    }

    const newVariations = cartesian(segments).map((keys) => keys.join('_'));

    let hasChanges = false;

    for (const variant of newVariations) {
      const item = variants.find((it) => it.key === variant);

      if (!item) {
        variants.push({
          key: variant,
          label: variant
            .split('_')
            .map((it) => it.split(':')[1])
            .join(' / '),
          price: null,
          quantity: null,
          sku: '',
          barcode: '',
          content: '',
          gallery: []
        });

        hasChanges = true;
      }
    }

    for (let i = 0; i < variants.length; i++) {
      const variant = variants[i];

      if (!newVariations.includes(variant.key)) {
        variants.splice(i, 1);
      }
    }

    let i = variants.length;

    while (i--) {
      const variant = variants[i];

      if (!newVariations.includes(variant.key)) {
        variants.splice(i, 1);
      }
    }

    if (hasChanges) {
      variants = [...variants];
    }
  }

  function cartesian(items: Array<string[]>) {
    if (!items.length) {
      return [];
    }

    const r: string[][] = [];
    const max = items.length - 1;

    function helper(arr: string[], i: number) {
      for (let j = 0, l = items[i].length; j < l; j++) {
        const a = arr.slice(0);

        a.push(items[i][j]);

        if (i === max) {
          r.push(a);
        } else {
          helper(a, i + 1);
        }
      }
    }

    helper([], 0);

    return r;
  }

  async function removeOptionSet(index: number) {
    optionSets.splice(index, 1);
    optionSets = [...optionSets];
  }

  function openVariantDialog(variant: Variant) {
    selectedVariant = { ...variant };
    variantDialog = true;
  }

  async function updateVariant() {
    const index = variants.findIndex((it) => it.key === selectedVariant.key);

    await formModule.render.save(instance.value.id);

    variants[index] = selectedVariant;
    variants = [...variants];
    variantDialog = false;
  }

  onMount(() => {});
</script>

<div class="card">
  <h2>Options</h2>

  {#each optionSets as os, index}
    <div class="grid grid-cols-6 gap-4">
      <jp-input
        label="Name"
        value={os.label}
        on:value={(event) => (os.label = event.detail.value)}
      />
      <jp-chips
        class="col-span-4"
        label="Options"
        value={os.options.join(',')}
        on:value={(event) => (os.options = event.detail)}
      />
      <button type="button" on:click={() => removeOptionSet(index)}>Remove</button>
    </div>
  {/each}

  <button type="button" on:click={addOptionSet}>+ Add options like size or color</button>
</div>

<div class="card mt-[16px]">
  <h2>Variants</h2>

  <div class="grid grid-cols-6 gap-4">
    <div>Variant</div>
    <div>Price</div>
    <div>Available Quantity</div>
    <div>SKU</div>
    <div>Barcode</div>
    <div />
    {#each variants as variant}
      <div>{variant.label}</div>
      <jp-input
        placeholder="Price"
        value={variant.price}
        type="number"
        on:value={(event) => (variant.price = event.detail.value)}
      />
      <jp-input
        placehold="Quantity"
        value={variant.quantity}
        type="number"
        on:value={(event) => (variant.quantity = event.detail.value)}
      />
      <jp-input
        placehold="SKU"
        value={variant.sku}
        on:value={(event) => (variant.sku = event.detail.value)}
      />
      <jp-input
        placehold="Barcode"
        value={variant.barcode}
        on:value={(event) => (variant.sku = event.detail.value)}
      />
      <div>
        <button type="button" on:click={() => openVariantDialog(variant)}>Edit</button>
      </div>
    {/each}
  </div>
</div>

<Dialog bind:open={variantDialog}>
  <form on:submit|preventDefault={updateVariant}>
    <FormModule bind:this={formModule} items={variantItems} bind:value={selectedVariant} />
    <Button type="submit">Save</Button>
  </form>
</Dialog>

<style lang="postcss">
  .card {
    @apply p-2 rounded border;
    border-color: var(--border-primary);
  }
</style>
