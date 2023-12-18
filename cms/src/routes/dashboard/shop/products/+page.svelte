<script>
import Button from "$lib/Button.svelte";
import Dialog from "$lib/Dialog.svelte";
import Grid from '$lib/Grid.svelte';
import GridCol from '$lib/GridCol.svelte';
import Field from "$lib/Field.svelte";
import Select from '$lib/Select.svelte';
import '@jaspero/web-components/dist/chips.wc';
import { CURRENCIES } from '$lib/consts/currencies.const';

let productDialog = false;
let trackQuantity = false;
let currencies = CURRENCIES;

function handleSubmit(e) {
  const formData = new FormData(e.target);

  const data = {};
  for (let field of formData) {
    const [key, value] = field;
    console.log(11111, field);
    if (value) {
      data[key] = value;
    }
  }

  console.log('data', data);
}

</script>

<Button variant="filled" color="secondary" on:click={() => (productDialog = true)}>Add product</Button>

<Dialog bind:open={productDialog}>
    <svelte:fragment slot="title">Product</svelte:fragment>

    <form name="filters" id="filters" on:submit|preventDefault={handleSubmit}>
        <Grid>
            <GridCol span="12">
                <Field
                        label="Name"
                        name="name"
                        value={''}
                />
            </GridCol>
            <GridCol span="12">
                <Field
                        label="Description"
                        name="description"
                        value={''}
                />
            </GridCol>
            <GridCol span="12">
                <Field
                        label="Short Description"
                        name="shortDescription"
                        value={''}
                />
            </GridCol>
            <GridCol span="9">
                <Field
                        label="Price"
                        name="price"
                        type="number"
                        value={''}
                />
            </GridCol>
            <GridCol span="3">
                <Select
                        label="Currency"
                        name="currency"
                        value={''}
                >
                    {#each currencies as currency}
                        <option value={'EUR'}>{currency}</option>
                    {/each}

                </Select>
            </GridCol>
            <GridCol span="12">
                <Field
                        label="Tag"
                        type="chip"
                        name="tag"
                        value={''}
                />
            </GridCol>
            <label>
                <input type="checkbox" bind:checked={trackQuantity}/>
                Track Quantity
            </label>

            <GridCol span="12">
                Attributes
                <Field
                        label="Key"
                        name="key"
                        value={''}
                />
                <Field
                        label="Type"
                        name="type"
                        value={''}
                />
                <Field
                        label="Values"
                        name="values"
                        value={''}
                />
            </GridCol>

        </Grid>
    </form>

    <slot slot="actions">
        <Button variant="filled" color="primary" type="submit" form="filters">Submit</Button>
    </slot>
</Dialog>
