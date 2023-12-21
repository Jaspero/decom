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
    Category Name:
    <Card>
      <slot slot="title">{data.value.name}</slot>
    </Card>
  </GridCol>
  <div class="counter">
    <span class="counter-number"> 72 </span>
    <span class="counter-text">All articles</span>
  </div>
  <div class="counter">
    <span class="counter-number"> 24 </span>
    <span class="counter-text">Recent</span>
  </div>
</Grid>

<svelte:head>
  <title>Category Information - Blog - Jaspero</title>
</svelte:head>

<style lang="postcss">
  .counter {
    @apply flex flex-col items-center col-span-3;
  }
  .counter-number {
    @apply text-6xl text-secondary font-bold;
  }
</style>
