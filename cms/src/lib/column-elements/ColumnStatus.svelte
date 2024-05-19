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
  let title: string;

  $: date = d && d !== 'undefined' ? new Date(d).toLocaleDateString() : '';
  $: {
    if (!$lastPublishedOn || !date) {
      background = '#bcaaa4';
      title = 'Not published';
      // @ts-ignore
    } else if ($lastPublishedOn > (date as Date).getTime()) {
      background = '#4caf50';
      title = 'Published';
    } else {
      background = '#f44336';
      title = 'Out of date';
    }
  }
</script>

<div>
  <span class="status" style:background {title} />
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
