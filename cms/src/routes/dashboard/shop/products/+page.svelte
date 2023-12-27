<script>
  import Button from '$lib/Button.svelte';
  import Dialog from '$lib/Dialog.svelte';
  import Grid from '$lib/Grid.svelte';
  import GridCol from '$lib/GridCol.svelte';
  import Field from '$lib/Field.svelte';
  import Select from '$lib/Select.svelte';
  import '@jaspero/web-components/dist/chips.wc';
  import { CURRENCIES } from '$lib/consts/currencies.const';

  let productDialog = false;
  let trackQuantity = false;
  let attributes = [];
let currencies = CURRENCIES;
  let multipleAttributes = [];

  function addRow() {
    multipleAttributes = [...multipleAttributes, multipleAttributes.length + 1];
    console.log('multipleAttributes', multipleAttributes);
  }

  function handleSubmit(e) {
    console.log(11);
    const formData = new FormData(e.target);

    const data = {};
    for (let field of formData) {
      const [key, value] = field;

      if (value) {
        data[key] = value;
      }
    }

    }

function addAttribute() {
  attributes = [...attributes, attributes.length];
  }
</script>

<Button variant="filled" color="secondary" on:click={() => (productDialog = true)}
  >Add product</Button
>


  <form name="filters" id="filters" on:submit|preventDefault={handleSubmit}>
    <Grid>
      <GridCol span="12">
        <Field label="Name" name="productName" value={''} />
      </GridCol>
      <GridCol span="12">
        <Field label="Description" name="description" value={''} />
      </GridCol>
      <GridCol span="12">
        <Field label="Short Description" name="shortDescription" value={''} />
      </GridCol>
      <GridCol span="9">
        <Field label="Price" name="price" type="number" value={''} />
      </GridCol>
      <GridCol span="3">
        <Select label="Currency" name="currency" value={'EUR'}>
          {#each currencies as currency}
            <option value={currency}>{currency}</option>
          {/each}
        </Select>
      </GridCol>
      <GridCol span="12">
        <Field label="Tag" type="chip" name="tag" value={''} />
      </GridCol>

      <label>
        <input type="checkbox" name="trackQuantity" bind:checked={trackQuantity} />
        Track Quantity
      </label>
      {#if trackQuantity}
        <GridCol span="12">
          <Field label="Quantity" name="quantity" value={''} />
        </GridCol>
      {/if}

        <GridCol span="12">
            Attributes  <Button variant="filled" color="primary" on:click={addAttribute}>Add</Button>
            {#each attributes as attribute}
                <Field
                        label="Key"
                        name="key"
                        value={''}
                />
                <Field
                        label="Values"
                        name="values"
                        value={''}
                />
            {/each}
        </GridCol>

    </Grid>
</form>

  <Button variant="filled" color="primary" type="submit" form="filters">Submit</Button>

<Dialog bind:open={productDialog}>
<!--    <svelte:fragment slot="title">Product</svelte:fragment>-->

<!--    <form name="filters" id="filters" on:submit|preventDefault={handleSubmit}>-->
<!--        <Grid>-->
<!--            <GridCol span="12">-->
<!--                <Field-->
<!--                        label="Name"-->
<!--                        name="name"-->
<!--                        value={''}-->
<!--                />-->
<!--            </GridCol>-->
<!--            <GridCol span="12">-->
<!--                <Field-->
<!--                        label="Description"-->
<!--                        name="description"-->
<!--                        value={''}-->
<!--                />-->
<!--            </GridCol>-->
<!--            <GridCol span="12">-->
<!--                <Field-->
<!--                        label="Short Description"-->
<!--                        name="shortDescription"-->
<!--                        value={''}-->
<!--                />-->
<!--            </GridCol>-->
<!--            <GridCol span="9">-->
<!--                <Field-->
<!--                        label="Price"-->
<!--                        name="price"-->
<!--                        type="number"-->
<!--                        value={''}-->
<!--                />-->
<!--            </GridCol>-->
<!--            <GridCol span="3">-->
<!--                <Select-->
<!--                        label="Currency"-->
<!--                        name="currency"-->
<!--                        value={''}-->
<!--                >-->
<!--                    {#each currencies as currency}-->
<!--                        <option value={'EUR'}>{currency}</option>-->
<!--                    {/each}-->

<!--                </Select>-->
<!--            </GridCol>-->
<!--            <GridCol span="12">-->
<!--                <Field-->
<!--                        label="Tag"-->
<!--                        type="chip"-->
<!--                        name="tag"-->
<!--                        value={''}-->
<!--                />-->
<!--            </GridCol>-->
<!--            <label>-->
<!--                <input type="checkbox" bind:checked={trackQuantity}/>-->
<!--                Track Quantity-->
<!--            </label>-->

<!--            <GridCol span="12">-->
<!--                Attributes-->
<!--                <Field-->
<!--                        label="Key"-->
<!--                        name="key"-->
<!--                        value={''}-->
<!--                />-->
<!--                <Field-->
<!--                        label="Type"-->
<!--                        name="type"-->
<!--                        value={''}-->
<!--                />-->
<!--                <Field-->
<!--                        label="Values"-->
<!--                        name="values"-->
<!--                        value={''}-->
<!--                />-->
<!--            </GridCol>-->

<!--        </Grid>-->
<!--    </form>-->

<!--    <slot slot="actions">-->
    <!--        <Button variant="filled" color="primary" type="submit" form="filters">Submit</Button>-->
  <!--    </slot>-->
</Dialog>
