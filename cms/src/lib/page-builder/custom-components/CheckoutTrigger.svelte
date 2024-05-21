<svelte:options customElement={{ tag: 'checkout-trigger', shadow: 'none' }} />

<script lang="ts">
  import Button from '$lib/Button.svelte';

  export let variant: 'filled' | 'outlined' = 'filled';
  export let color: 'primary' | 'secondary' = 'secondary';
  export let discount: number = 0;
  export let currency: 'usd' | 'eur' | 'gbp';
</script>

<Button {variant} {color}>Buy for €289</Button>
