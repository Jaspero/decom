<script lang="ts">
  import Card from '$lib/Card.svelte';
  import Grid from '$lib/Grid.svelte';
  import GridCol from '$lib/GridCol.svelte';

  export let data: {
    value: any;
  };
</script>

<Grid>
  <GridCol span="12">
    <Card>
      <slot slot="title">{data.value.name}</slot>
    </Card>
  </GridCol>
</Grid>
