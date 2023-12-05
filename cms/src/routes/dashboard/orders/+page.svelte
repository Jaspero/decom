<script lang="ts">
  import Card from '$lib/Card.svelte';
  import Grid from '$lib/Grid.svelte';
  import GridCol from '$lib/GridCol.svelte';
  import DataTable from '$lib/DataTable.svelte';
  import Button from '$lib/Button.svelte';
  import Dialog from '$lib/Dialog.svelte';
  import Field from '$lib/Field.svelte';

  let filterDialog = false;

  const headers = [
    {
      key: '/title',
      label: 'Title'
    }
  ];
</script>

<Grid>
  <GridCol span="12">
    <Card table>
      <svelte:fragment slot="title">Orders</svelte:fragment>

      <DataTable col="science-magazine-articles" {headers} baseLink="/dashboard/orders/" />
    </Card>
  </GridCol>
</Grid>

<Dialog bind:open={filterDialog} removePadding>
  <svelte:fragment slot="title">Filter</svelte:fragment>

  <form name="filters">
    <Grid>
      <GridCol span="12">
        <Field label="Discount code" />
      </GridCol>

      <GridCol span="12">
        <Field label="Amount" />
      </GridCol>

      <!--      <GridCol span="12">-->
      <!--        <Select label="Gender">-->
      <!--          <option disabled selected value="">Choose a gender</option>-->
      <!--          <option value="male">Male</option>-->
      <!--          <option value="female">Female</option>-->
      <!--        </Select>-->
      <!--      </GridCol>-->
    </Grid>
  </form>

  <slot slot="actions">
    <Button variant="filled" color="secondary" type="submit" form="filters">Apply filters</Button>
  </slot>
</Dialog>

<svelte:head>
  <title>Orders - GlycanAge</title>
</svelte:head>
