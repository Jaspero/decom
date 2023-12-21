<svelte:options
  customElement={{
    tag: 'column-status',
    shadow: 'none'
  }}
/>

<script lang="ts">
  import { lastPublishedOn } from '../stores/last-published-on.store';

  export let d: string;

  let background: string;

  $: date = d ? new Date(parseInt(d, 10)).toLocaleDateString() : '';
  $: {
    if (!$lastPublishedOn || !date) {
      background = '#bcaaa4';
      // @ts-ignore
    } else if ($lastPublishedOn > (date as Date).getTime()) {
      background = '#4caf50';
    } else {
      background = '#f44336';
    }
  }
</script>

<div>
  <span class="status" style:background />
  {date}
</div>

<style>
  div {
    display: flex;
    align-items: center;
  }

  .status {
    width: 15px;
    height: 15px;
    display: inline-block;
    border-radius: 50%;
    margin-right: 0.5rem;
  }
</style>
