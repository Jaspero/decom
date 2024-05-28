<svelte:options
  customElement={{
    tag: 'landing-page-form-properties',
    shadow: 'none'
  }}
/>

<script lang="ts">
  import Field from '$lib/Field.svelte';
  import Button from '$lib/Button.svelte';

  export let value: Array<{ key: string; label: string }> = [
    {
      key: '',
      label: ''
    }
  ];
  let internalValue = [...value];

  export function getValue() {
    return value;
  }

  function remove(index: number) {
    internalValue = internalValue.filter((_, i) => i !== index);
    value.splice(index, 1);
  }

  function addProperty() {

    const item = { key: '', label: '' };

    internalValue = [...internalValue, item];
    value.push(item);
  }
</script>

<div class="properties-title">
  <span>Properties</span>
  <Button on:click={addProperty}>Add New Property</Button>
</div>
{#each internalValue as property, index}
  <div class="properties">
    <Field required label="Key" bind:value={property.key} />
    <Field required label="Label" bind:value={property.label} />
    <div>
      <Button color="warn" on:click={() => remove(index)}>
        <span class="material-symbols-outlined"> cancel </span>
      </Button>
    </div>
  </div>
{/each}

<style>
  .properties-title {
    display: flex;
    justify-content: space-between;
  }

  .properties-title > span {
    font-weight: bold;
  }

  .properties {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    align-items: flex-end;
  }
</style>
